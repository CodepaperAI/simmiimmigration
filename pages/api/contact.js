import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message, company_website } = req.body || {};

  // Honeypot — bots fill this hidden field; humans never do.
  if (company_website) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const esc = (s = '') =>
    String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const html = `
  <div style="margin:0;padding:24px;background:#f4f6fa;font-family:Segoe UI,Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;">
      <div style="background:#002365;padding:28px 32px;">
        <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:800;">Simmi Immigration</h1>
        <p style="margin:6px 0 0;color:#cdd7ea;font-size:13px;">New consultation request</p>
      </div>
      <div style="padding:28px 32px;">
        <p style="margin:0 0 20px;color:#334155;font-size:15px;line-height:1.6;">
          A new consultation request was submitted on the website.
        </p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#0f172a;">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #eef1f5;color:#64748b;width:130px;">Name</td>
            <td style="padding:12px 0;border-bottom:1px solid #eef1f5;font-weight:600;">${esc(name)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #eef1f5;color:#64748b;">Email</td>
            <td style="padding:12px 0;border-bottom:1px solid #eef1f5;">
              <a href="mailto:${esc(email)}" style="color:#D22536;text-decoration:none;font-weight:600;">${esc(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #eef1f5;color:#64748b;">Phone</td>
            <td style="padding:12px 0;border-bottom:1px solid #eef1f5;">${esc(phone) || '—'}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #eef1f5;color:#64748b;">Service</td>
            <td style="padding:12px 0;border-bottom:1px solid #eef1f5;">${esc(service) || '—'}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;color:#64748b;vertical-align:top;">Message</td>
            <td style="padding:12px 0;line-height:1.6;">${esc(message).replace(/\n/g, '<br>')}</td>
          </tr>
        </table>
        <div style="margin-top:24px;padding:14px 18px;background:#fef2f3;border-left:3px solid #D22536;border-radius:6px;">
          <p style="margin:0;color:#7a1a25;font-size:13px;">
            Reply directly to this email to respond to ${esc(name)}.
          </p>
        </div>
      </div>
      <div style="background:#f8fafc;padding:16px 32px;border-top:1px solid #eef1f5;">
        <p style="margin:0;color:#94a3b8;font-size:12px;">Sent from the Simmi Immigration website contact form.</p>
      </div>
    </div>
  </div>`;

  try {
    const { error } = await resend.emails.send({
      from: 'Simmi Immigration <noreply@simmiimmigration.ca>',
      to: 'simmiimmigration@gmail.com',
      replyTo: email,
      subject: `New consultation request — ${name}`,
      html,
    });

    if (error) {
      return res.status(500).json({ error: 'Email failed to send' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
}