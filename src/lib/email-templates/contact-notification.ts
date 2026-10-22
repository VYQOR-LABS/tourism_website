import {
  emailDetailsTable,
  emailLayout,
  escapeHtml,
  formatEmailDetails,
  type ContactEmailData,
} from "@/lib/email-templates/shared";

const contactRows = (data: ContactEmailData): Array<[string, string]> => [
  ["Name", data.name],
  ["Email", data.email],
  ["Phone", data.phone],
  ["Subject", data.subject],
];

export function contactNotificationEmail(data: ContactEmailData) {
  const safeMessage = escapeHtml(data.message).replace(/\r?\n/g, "<br>");
  const rows = contactRows(data);

  return {
    subject: "New contact message | Safariman Expeditions",
    text: [
      "A new contact message was submitted through the Safariman Expeditions website.",
      "",
      formatEmailDetails(rows),
      "",
      "Message:",
      data.message,
    ].join("\n"),
    html: emailLayout(
      "New contact message",
      `<p style="margin:0 0 20px;color:#52635d;line-height:1.7">A visitor submitted a message through the website contact form. Reply to this email to respond directly.</p>
       ${emailDetailsTable(rows)}
       <h2 style="margin:26px 0 10px;font-size:17px;color:#173c36">Message</h2>
       <div style="padding:16px 18px;border-left:3px solid #d4a75f;background:#f8f5ef;color:#40524b;line-height:1.7">${safeMessage}</div>`,
      `New contact message from ${data.name}: ${data.subject}`,
    ),
  };
}
