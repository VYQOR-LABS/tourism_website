import { EMAIL_COLORS, emailLayout, escapeHtml } from "@/lib/email-templates/shared";

export function newsletterWelcomeEmail(email: string) {
  return {
    subject: "Thank you for subscribing | Safariman Expeditions",
    text: [
      "Thank you for subscribing to Safariman Expeditions travel inspiration.",
      "Look out for destination ideas, practical guides, and stories from East Africa.",
      `Subscription email: ${email}`,
      "",
      "Safariman Expeditions",
    ].join("\n"),
    html: emailLayout(
      "Thank you for subscribing",
      `<p style="margin:0 0 14px;color:${EMAIL_COLORS.foreground};line-height:1.7">You are now subscribed to travel inspiration from Safariman Expeditions.</p>
       <p style="margin:0 0 18px;color:${EMAIL_COLORS.muted};line-height:1.7">Look out for destination ideas, practical guides, and stories from Kenya, Tanzania, Rwanda, and Uganda.</p>
       <p style="margin:0;padding:14px 16px;border:1px solid ${EMAIL_COLORS.border};background:${EMAIL_COLORS.footer};color:${EMAIL_COLORS.muted};font-size:14px;line-height:1.6"><strong style="color:${EMAIL_COLORS.primary}">Subscribed email:</strong> ${escapeHtml(email)}</p>`,
      "Your subscription to Safariman Expeditions travel inspiration is confirmed",
    ),
  };
}
