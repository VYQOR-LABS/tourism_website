import { emailLayout, escapeHtml, type BookingEmailData } from "@/lib/email-templates/shared";

const bookingRows = (data: BookingEmailData) =>
  [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Country", data.country || "Not provided"],
    ["Destination", data.destination],
    ["Travel date", data.travelDate || "Flexible"],
    ["Travelers", data.travelers],
    ["Budget", data.budget],
  ]
    .map(
      ([label, value]) =>
        `<tr><th style="padding:10px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #e8dfd2;color:#52635d;font-size:13px">${label}</th><td style="padding:10px 12px;border-bottom:1px solid #e8dfd2;font-size:14px">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

export function bookingNotificationEmail(data: BookingEmailData) {
  const safeMessage = escapeHtml(data.message).replace(/\r?\n/g, "<br>");

  return {
    subject: `New trip inquiry from ${data.name}`,
    text: [
      "A new trip inquiry has been submitted.",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Country: ${data.country || "Not provided"}`,
      `Destination: ${data.destination}`,
      `Travel date: ${data.travelDate || "Flexible"}`,
      `Travelers: ${data.travelers}`,
      `Budget: ${data.budget}`,
      "Message:",
      data.message,
    ].join("\n"),
    html: emailLayout(
      "New trip inquiry",
      `<p style="margin:0 0 20px;color:#52635d;line-height:1.7">A visitor has submitted a travel planning request.</p>
       <table role="presentation" style="width:100%;border-collapse:collapse">${bookingRows(data)}</table>
       <h2 style="margin:24px 0 8px;font-size:16px">Message</h2>
       <p style="margin:0;color:#52635d;line-height:1.7">${safeMessage}</p>`,
    ),
  };
}