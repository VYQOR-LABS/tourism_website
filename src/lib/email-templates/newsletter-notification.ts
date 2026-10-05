import { emailLayout, escapeHtml } from "@/lib/email-templates/shared";

export function newsletterNotificationEmail(email: string) {
  const safeEmail = escapeHtml(email);

  return {
    subject: "New Safari & Beyond newsletter subscriber",
    text: `A visitor subscribed to the travel inspiration newsletter.\nEmail: ${email}`,
    html: emailLayout(
      "New newsletter subscriber",
      `<p style="margin:0;color:#52635d;line-height:1.7">A visitor subscribed to the travel inspiration newsletter with this email address:</p>
       <p style="margin:16px 0 0;font-weight:bold">${safeEmail}</p>`,
    ),
  };
}