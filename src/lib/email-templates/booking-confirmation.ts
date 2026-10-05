import { emailLayout, escapeHtml, type BookingEmailData } from "@/lib/email-templates/shared";

export function bookingConfirmationEmail(data: BookingEmailData) {
  return {
    subject: "We received your Safari & Beyond trip inquiry",
    text: `Hello ${data.name},\n\nThank you for sharing your trip plans with us. Our travel team has received your inquiry for ${data.destination} and will be in touch soon.\n\nSafari & Beyond`,
    html: emailLayout(
      "Your journey starts here",
      `<p style="margin:0 0 14px;line-height:1.7">Hello ${escapeHtml(data.name)},</p>
       <p style="margin:0 0 14px;color:#52635d;line-height:1.7">Thank you for sharing your trip plans with us. We have received your inquiry for <strong>${escapeHtml(data.destination)}</strong> and our travel team will be in touch soon.</p>
       <p style="margin:0;color:#52635d;line-height:1.7">You can reply to this email if there is anything else you would like us to know.</p>`,
    ),
  };
}