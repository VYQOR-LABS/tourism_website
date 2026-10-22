import { emailDetailsTable, emailLayout, escapeHtml, formatEmailDetails } from "@/lib/email-templates/shared";

export function newsletterNotificationEmail(email: string) {
  const rows: Array<[string, string]> = [["Subscriber email", email]];

  return {
    subject: "New newsletter subscriber | Safariman Expeditions",
    text: [
      "A visitor subscribed to the Safariman Expeditions travel inspiration newsletter.",
      "",
      formatEmailDetails(rows),
    ].join("\n"),
    html: emailLayout(
      "New newsletter subscriber",
      `<p style="margin:0 0 18px;color:#52635d;line-height:1.7">A visitor subscribed to Safariman Expeditions travel inspiration.</p>
       ${emailDetailsTable(rows)}
       <p style="margin:18px 0 0;color:#66736f;font-size:13px;line-height:1.7">You can reply to this message if you need to contact the subscriber.</p>`,
      `New newsletter subscriber: ${escapeHtml(email)}`,
    ),
  };
}
