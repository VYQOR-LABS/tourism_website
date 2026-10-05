import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

interface EmailMessage {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

let transporter: Transporter | undefined;

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass || !Number.isInteger(port) || port < 1) {
    throw new Error("Email service is not configured.");
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }

  return transporter;
}

export function getContactInbox() {
  const address = process.env.CONTACT_EMAIL || process.env.SMTP_TO || process.env.SMTP_USER;
  if (!address) throw new Error("Contact inbox is not configured.");
  return address;
}

export async function sendEmail(message: EmailMessage) {
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  if (!from) throw new Error("Email sender is not configured.");

  await getTransporter().sendMail({
    from,
    to: message.to,
    replyTo: message.replyTo,
    subject: message.subject,
    text: message.text,
    html: message.html,
  });
}