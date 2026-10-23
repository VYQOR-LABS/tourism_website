import "server-only";
import path from "node:path";
import nodemailer, { type SendMailOptions, type SentMessageInfo, type Transporter } from "nodemailer";
import { bookingConfirmationEmail } from "@/lib/email-templates/booking-confirmation";
import { bookingNotificationEmail } from "@/lib/email-templates/booking-notification";
import { contactConfirmationEmail } from "@/lib/email-templates/contact-confirmation";
import { contactNotificationEmail } from "@/lib/email-templates/contact-notification";
import { newsletterNotificationEmail } from "@/lib/email-templates/newsletter-notification";
import { newsletterWelcomeEmail } from "@/lib/email-templates/newsletter-welcome";
import type { BookingEmailData, ContactEmailData } from "@/lib/email-templates/shared";

export type ContactFormData = ContactEmailData;

function getSmtpConfig() {
  const port = Number(process.env.SMTP_PORT || 587);
  const { SMTP_HOST: host, SMTP_USER: user, SMTP_PASS: pass } = process.env;

  if (!host || !user || !pass || !Number.isInteger(port) || port < 1) {
    throw new Error("SMTP configuration is required to send email");
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 30_000,
  };
}

let transporter: Transporter | undefined;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport(getSmtpConfig());
  }
  return transporter;
}

function getContactInbox() {
  const address = process.env.CONTACT_EMAIL || process.env.SMTP_TO || process.env.SMTP_USER;
  if (!address) throw new Error("Contact inbox is not configured.");
  return address;
}

function maskIdentifier(value: string | undefined) {
  if (!value) return undefined;
  const at = value.indexOf("@");
  if (at > 0) {
    return `${value.slice(0, 1)}***@${value.slice(at + 1)}`;
  }
  return `${value.slice(0, 1)}***`;
}

function safeErrorMessage(error: unknown) {
  const rawMessage = error instanceof Error ? error.message : String(error);
  const redacted = [process.env.SMTP_PASS, process.env.SMTP_USER]
    .filter((value): value is string => Boolean(value))
    .reduce((message, secret) => message.split(secret).join("[redacted]"), rawMessage);

  return redacted.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, (address) =>
    maskIdentifier(address) ?? "[redacted]",
  );
}

function logEmailEvent(event: string, details: Record<string, unknown>) {
  console.info("[email-flow]", JSON.stringify({ event, ...details }));
}

async function sendTemplateEmail(
  flow: "booking" | "contact" | "newsletter",
  template: string,
  mail: SendMailOptions,
) {
  const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
  const smtpConfig = getSmtpConfig();
  const recipient = typeof mail.to === "string" ? mail.to : "";

  logEmailEvent("send_started", {
    flow,
    template,
    recipient: maskIdentifier(recipient),
    smtp: {
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      authConfigured: true,
      authUser: maskIdentifier(smtpConfig.auth.user),
      from: maskIdentifier(fromAddress),
    },
  });

  try {
    if (!fromAddress) throw new Error("Email sender is not configured.");

    const result: SentMessageInfo = await getTransporter().sendMail({
      ...mail,
      from: fromAddress,
      attachments: [
        {
          filename: "safariman_logo.png",
          path: path.join(process.cwd(), "public", "safariman_logo.png"),
          cid: "safariman-logo",
        },
      ],
    });

    const accepted = result.accepted ?? [];
    const rejected = result.rejected ?? [];
    const delivery = {
      flow,
      template,
      accepted: accepted.map((address) => maskIdentifier(String(address))),
      rejected: rejected.map((address) => maskIdentifier(String(address))),
      messageId: result.messageId,
      response: safeErrorMessage(result.response),
    };

    if (accepted.length === 0) {
      throw new Error("Email service did not accept the message.");
    }

    logEmailEvent("send_succeeded", delivery);
    return {
      accepted,
      rejected,
      messageId: result.messageId,
    };
  } catch (error) {
    logEmailEvent("send_failed", {
      flow,
      template,
      recipient: maskIdentifier(recipient),
      error: safeErrorMessage(error),
    });
    throw error;
  }
}

export async function sendContactEmails(formData: ContactFormData) {
  const contactInbox = getContactInbox();
  const notification = contactNotificationEmail(formData);
  const confirmation = contactConfirmationEmail(formData);

  logEmailEvent("template_selected", { flow: "contact", template: "contact-notification" });
  const companyResult = await sendTemplateEmail("contact", "contact-notification", {
    to: contactInbox,
    replyTo: formData.email,
    ...notification,
  });

  logEmailEvent("template_selected", { flow: "contact", template: "contact-confirmation" });
  const clientResult = await sendTemplateEmail("contact", "contact-confirmation", {
    to: formData.email,
    ...confirmation,
  });

  return { companyResult, clientResult };
}

export async function sendBookingEmails(formData: BookingEmailData) {
  const contactInbox = getContactInbox();
  const notification = bookingNotificationEmail(formData);
  const confirmation = bookingConfirmationEmail(formData);

  logEmailEvent("template_selected", { flow: "booking", template: "booking-notification" });
  const companyResult = await sendTemplateEmail("booking", "booking-notification", {
    to: contactInbox,
    replyTo: formData.email,
    ...notification,
  });

  logEmailEvent("template_selected", { flow: "booking", template: "booking-confirmation" });
  const clientResult = await sendTemplateEmail("booking", "booking-confirmation", {
    to: formData.email,
    replyTo: contactInbox,
    ...confirmation,
  });

  return { companyResult, clientResult };
}

export async function sendNewsletterEmails(email: string) {
  const contactInbox = getContactInbox();
  const notification = newsletterNotificationEmail(email);
  const welcome = newsletterWelcomeEmail(email);

  logEmailEvent("template_selected", { flow: "newsletter", template: "newsletter-notification" });
  const notificationResult = await sendTemplateEmail("newsletter", "newsletter-notification", {
    to: contactInbox,
    ...notification,
  });

  logEmailEvent("template_selected", { flow: "newsletter", template: "newsletter-welcome" });
  const welcomeResult = await sendTemplateEmail("newsletter", "newsletter-welcome", {
    to: email,
    ...welcome,
  });

  return { notificationResult, welcomeResult };
}
