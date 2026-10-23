import {
  EMAIL_COLORS,
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
  ...(data.package
    ? [
        ["Package", data.package.title] as [string, string],
        ["Package destination", data.package.destination] as [string, string],
      ]
    : []),
  ["Destination", data.destination],
  ["Trip length", data.duration],
  ["Travel date", data.travelDate || "Flexible / not specified"],
  ["Travelers", data.travelers],
  ...(data.interest?.details ?? []),
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
      `<p style="margin:0 0 20px;color:${EMAIL_COLORS.muted};line-height:1.7">A visitor submitted a travel planning request. Reply directly to this email to contact the traveler.</p>
       ${data.interest || data.package ? `<p style="margin:0 0 22px;padding:14px 16px;border-left:3px solid ${EMAIL_COLORS.secondary};background:${EMAIL_COLORS.panel};line-height:1.7"><strong style="color:${EMAIL_COLORS.primary}">Selected trip:</strong> <a href="${escapeHtml(data.interest?.url ?? data.package!.url)}" style="color:${EMAIL_COLORS.primary}">${escapeHtml(data.interest?.title ?? data.package!.title)}</a></p>` : ""}
       ${emailDetailsTable(rows)}
       <h2 style="margin:26px 0 10px;font-size:17px;color:${EMAIL_COLORS.primary}">Trip details and message</h2>
       <div style="padding:16px 18px;border-left:3px solid ${EMAIL_COLORS.secondary};background:${EMAIL_COLORS.panel};color:${EMAIL_COLORS.foreground};line-height:1.7">${safeMessage}</div>`,
      `New trip inquiry from ${data.name}`,
    ),
  };
}
