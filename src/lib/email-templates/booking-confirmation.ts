import {
  EMAIL_COLORS,
  emailDetailsTable,
  emailLayout,
  escapeHtml,
  formatEmailDetails,
  type BookingEmailData,
} from "@/lib/email-templates/shared";

export function bookingConfirmationEmail(data: BookingEmailData) {
  const rows: Array<[string, string]> = [
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
    ["Email", data.email],
    ["Phone", data.phone],
    ["Country", data.country],
    ...(data.interest?.details ?? []),
  ];
  const safeMessage = escapeHtml(data.message).replace(/\r?\n/g, "<br>");

  return {
    subject: "We received your trip inquiry | Safariman Expeditions",
    text: [
      `Hello ${data.name},`,
      "",
      "Thank you for contacting Safariman Expeditions. We have received your trip request. Our travel team will review your preferred package, availability, and travel details, then contact you about the next steps.",
      "",
      formatEmailDetails(rows),
      "",
      "Your message:",
      data.message,
      "",
      "This email confirms that we received your request. It is not a confirmed booking or a payment request.",
      "Reply to this email if you would like to add or correct any details.",
      "",
      "Safariman Expeditions",
    ].join("\n"),
    html: emailLayout(
      "We have received your trip inquiry",
      `<p style="margin:0 0 14px;line-height:1.7">Hello ${escapeHtml(data.name)},</p>
       <p style="margin:0 0 22px;color:${EMAIL_COLORS.muted};line-height:1.7">Thank you for contacting Safariman Expeditions. We have received your trip request. Our travel team will review your preferred package, availability, and travel details, then contact you about the next steps.</p>
       ${data.interest || data.package ? `<p style="margin:0 0 22px;padding:14px 16px;border-left:3px solid ${EMAIL_COLORS.secondary};background:${EMAIL_COLORS.panel};line-height:1.7"><strong style="color:${EMAIL_COLORS.primary}">Selected trip:</strong> <a href="${escapeHtml(data.interest?.url ?? data.package!.url)}" style="color:${EMAIL_COLORS.primary}">${escapeHtml(data.interest?.title ?? data.package!.title)}</a></p>` : ""}
       <h2 style="margin:0 0 12px;font-size:17px;color:${EMAIL_COLORS.primary}">Your request summary</h2>
       ${emailDetailsTable(rows)}
       <h2 style="margin:26px 0 10px;font-size:17px;color:${EMAIL_COLORS.primary}">Your message</h2>
       <div style="padding:16px 18px;border-left:3px solid ${EMAIL_COLORS.secondary};background:${EMAIL_COLORS.panel};color:${EMAIL_COLORS.foreground};line-height:1.7">${safeMessage}</div>
       <p style="margin:22px 0 0;color:${EMAIL_COLORS.muted};font-size:13px;line-height:1.7"><strong>Request received:</strong> This email confirms receipt of your request only. Your trip is not booked until our team confirms arrangements with you. Reply to this email if you would like to add or correct any details.</p>`,
      "We received your Safariman Expeditions trip request",
    ),
  };
}
