export interface BookingEmailData {
  name: string;
  email: string;
  phone: string;
  country: string;
  destination: string;
  travelDate: string;
  travelers: string;
  budget: string;
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

export const emailLayout = (title: string, content: string) => `
  <!doctype html>
  <html lang="en">
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
    <body style="margin:0;background:#f5f1ea;padding:32px 12px;font-family:Arial,sans-serif;color:#1b2925">
      <table role="presentation" style="width:100%;max-width:640px;margin:0 auto;border-collapse:collapse;background:#fffdf9;border:1px solid #e8dfd2">
        <tr><td style="padding:24px 32px;background:#102521;color:#fff;font-size:13px;letter-spacing:3px;text-transform:uppercase">Safari &amp; Beyond</td></tr>
        <tr><td style="padding:32px">
          <h1 style="margin:0 0 20px;font-family:Georgia,serif;font-size:28px;font-weight:normal;line-height:1.25">${title}</h1>
          ${content}
        </td></tr>
        <tr><td style="padding:18px 32px;border-top:1px solid #e8dfd2;color:#66736f;font-size:12px">Thoughtful journeys across East Africa.</td></tr>
      </table>
    </body>
  </html>
`;