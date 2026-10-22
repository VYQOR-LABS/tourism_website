import {
  emailDetailsTable,
  emailLayout,
  escapeHtml,
  formatEmailDetails,
  type BookingEmailData,
} from "@/lib/email-templates/shared";

const bookingRows = (data: BookingEmailData): Array<[string, string]> => [
  ["Name", data.name],
  ["Email", data.email],
  ["Phone", data.phone],
  ["Country", data.country],
  ["Destination", data.destination],
  ["Travel date", data.travelDate || "Flexible / not specified"],
  ["Travelers", data.travelers],
];

export function bookingNotificationEmail(data: BookingEmailData) {
  const safeMessage = escapeHtml(data.message).replace(/\r?\n/g, "<br>");
  const rows = bookingRows(data);

  return {
    subject: "New trip inquiry | Safariman Expeditions",
    text: [
      "A new trip inquiry was submitted through the Safariman Expeditions website.",
      "",
      formatEmailDetails(rows),
      "",
      "Message:",
      data.message,
    ].join("\n"),
    html: emailLayout(
      "New trip inquiry",
      `<p style="margin:0 0 20px;color:#52635d;line-height:1.7">A visitor submitted a travel planning request. Reply directly to this email to contact the traveler.</p>
       ${emailDetailsTable(rows)}
       <h2 style="margin:26px 0 10px;font-size:17px;color:#173c36">Trip details and message</h2>
       <div style="padding:16px 18px;border-left:3px solid #d4a75f;background:#f8f5ef;color:#40524b;line-height:1.7">${safeMessage}</div>`,
      `New trip inquiry from ${data.name}`,
    ),
  };
}
