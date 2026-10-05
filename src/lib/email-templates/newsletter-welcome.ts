import { emailLayout, escapeHtml } from "@/lib/email-templates/shared";

export function newsletterWelcomeEmail(email: string) {
  return {
    subject: "Your East Africa travel inspiration starts here",
    text: "Thank you for subscribing to Safari & Beyond travel inspiration. Look out for destination ideas, practical guides and stories from East Africa.",
    html: emailLayout(
      "A little inspiration for the road ahead",
      `<p style="margin:0 0 14px;color:#52635d;line-height:1.7">Thank you for subscribing to Safari &amp; Beyond travel inspiration.</p>
       <p style="margin:0;color:#52635d;line-height:1.7">Look out for destination ideas, practical guides and stories from East Africa, delivered to ${escapeHtml(email)}.</p>`,
    ),
  };
}