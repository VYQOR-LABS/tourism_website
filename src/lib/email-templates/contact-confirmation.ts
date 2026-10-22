import { emailDetailsTable, emailLayout, escapeHtml, formatEmailDetails, type ContactEmailData } from "@/lib/email-templates/shared";

export function contactConfirmationEmail(data: ContactEmailData) {
  const rows: Array<[string, string]> = [
    ["Subject", data.subject],
    ["Phone", data.phone],
  ];
  const safeMessage = escapeHtml(data.message).replace(/\r?\n/g, "<br>");

  return {
    subject: "We received your message | Safariman Expeditions",
    text: [
      `Hello ${data.name},`,
      "",
      "Thank you for contacting Safariman Expeditions. We have received your message and our team will respond as soon as possible.",
      "",
      formatEmailDetails(rows),
      "",
      "Your message:",
      data.message,
      "",
      "Safariman Expeditions",
    ].join("\n"),
    html: emailLayout(
      "Thank you for getting in touch",
      `<p style="margin:0 0 18px;color:#40524b;line-height:1.7">Hello ${escapeHtml(data.name)},</p>
       <p style="margin:0 0 22px;color:#52635d;line-height:1.7">Thank you for contacting Safariman Expeditions. We have received your message, and our team will respond as soon as possible.</p>
       <h2 style="margin:0 0 12px;font-size:17px;color:#173c36">Your message details</h2>
       ${emailDetailsTable(rows)}
       <h2 style="margin:26px 0 10px;font-size:17px;color:#173c36">Your message</h2>
       <div style="padding:16px 18px;border-left:3px solid #d4a75f;background:#f8f5ef;color:#40524b;line-height:1.7">${safeMessage}</div>
       <p style="margin:22px 0 0;color:#66736f;font-size:13px;line-height:1.7">You can reply to this email if you would like to add information to your message.</p>`,
      "Safariman Expeditions received your message",
    ),
  };
}
