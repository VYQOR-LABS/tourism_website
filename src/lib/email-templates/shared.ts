import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const EMAIL_COLORS = {
  primary: "#1b4d43",
  secondary: "#d4a75f",
  accent: "#e7d9b5",
  background: "#f5f1ea",
  foreground: "#182520",
  muted: "#586a64",
  card: "#fffdf9",
  border: "#e8dfd2",
  panel: "#f8f5ef",
  footer: "#faf7f1",
} as const;

export interface BookingPackageDetails {
  title: string;
  destination: string;
  duration: string;
  url: string;
}

export interface BookingEmailData {
  name: string;
  email: string;
  phone: string;
  country: string;
  destination: string;
  duration: string;
  travelDate: string;
  travelers: string;
  message: string;
  package?: BookingPackageDetails;
  interest?: {
    title: string;
    url: string;
    details: Array<[string, string]>;
  };
}

export interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

export const emailDetailsTable = (rows: Array<[string, string]>) => `
  <table role="presentation" style="width:100%;border-collapse:collapse;border:1px solid ${EMAIL_COLORS.border};background:${EMAIL_COLORS.card}">
    ${rows
      .map(
        ([label, value], index) => `<tr>
          <th scope="row" style="width:36%;padding:12px 14px;text-align:left;vertical-align:top;border-bottom:${index === rows.length - 1 ? "0" : `1px solid ${EMAIL_COLORS.border}`};color:${EMAIL_COLORS.muted};font-size:13px;font-weight:600">${escapeHtml(label)}</th>
          <td style="padding:12px 14px;vertical-align:top;border-bottom:${index === rows.length - 1 ? "0" : `1px solid ${EMAIL_COLORS.border}`};color:${EMAIL_COLORS.foreground};font-size:14px;line-height:1.6">${escapeHtml(value || "Not provided").replace(/\r?\n/g, "<br>")}</td>
        </tr>`,
      )
      .join("")}
  </table>
`;

export const formatEmailDetails = (rows: Array<[string, string]>) =>
  rows.map(([label, value]) => `${label}: ${value || "Not provided"}`).join("\n");

export const emailLayout = (title: string, content: string, preheader = title) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${escapeHtml(title)}</title>
    </head>
    <body style="margin:0;background:${EMAIL_COLORS.background};padding:28px 12px;font-family:Arial,Helvetica,sans-serif;color:${EMAIL_COLORS.foreground}">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">${escapeHtml(preheader)}</div>
      <table role="presentation" style="width:100%;max-width:640px;margin:0 auto;border-collapse:collapse;background:${EMAIL_COLORS.card};border:1px solid ${EMAIL_COLORS.border}">
        <tr><td style="height:4px;background:${EMAIL_COLORS.primary};font-size:0;line-height:0">&nbsp;</td></tr>
        <tr>
          <td style="padding:22px 30px;background:${EMAIL_COLORS.primary};color:#fff">
            <table role="presentation" style="border-collapse:collapse">
              <tr>
                <td style="padding-right:16px;vertical-align:middle">
                  <img src="cid:safariman-logo" width="64" height="64" alt="${escapeHtml(SITE_NAME)} logo" style="display:block;width:64px;height:64px;border:0;border-radius:50%;background:${EMAIL_COLORS.accent}">
                </td>
                <td style="vertical-align:middle">
                  <p style="margin:0;color:${EMAIL_COLORS.accent};font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase">${escapeHtml(SITE_NAME)}</p>
                  <p style="margin:7px 0 0;color:#fff;font-size:13px;line-height:1.5">Thoughtful journeys across East Africa</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="padding:32px">
          <h1 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:normal;line-height:1.25;color:${EMAIL_COLORS.primary}">${escapeHtml(title)}</h1>
          ${content}
        </td></tr>
        <tr>
          <td style="padding:20px 32px;border-top:1px solid ${EMAIL_COLORS.border};background:${EMAIL_COLORS.footer};color:${EMAIL_COLORS.muted};font-size:12px;line-height:1.7">
            <strong style="color:${EMAIL_COLORS.primary}">${escapeHtml(SITE_NAME)}</strong><br>
            <a href="mailto:info@safariman.co.ke" style="color:${EMAIL_COLORS.muted};text-decoration:underline">info@safariman.co.ke</a>
            &nbsp;|&nbsp; <a href="tel:+254737468278" style="color:${EMAIL_COLORS.muted};text-decoration:underline">+254 737 468 278</a><br>
            <a href="${SITE_URL}" style="color:${EMAIL_COLORS.muted};text-decoration:underline">${SITE_URL}</a>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;