const config = require('../config')

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const ltr = (value) =>
  `<bdi dir="ltr" style="unicode-bidi:isolate;direction:ltr;text-align:left;display:inline-block;">${escapeHtml(value)}</bdi>`

const buildContactEmailHtml = (payload) => {
  const rows = [
    ['שם מלא', escapeHtml(payload.fullName)],
    ['אימייל', ltr(payload.email)],
    ['טלפון', payload.phone ? ltr(payload.phone) : '—'],
    ['התקבל ב־', ltr(payload.receivedAt)],
  ]

  const rowsHtml = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #e8eef5;color:#5a6b7d;font-size:13px;width:120px;vertical-align:top;">${label}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #e8eef5;color:#213e5e;font-size:15px;font-weight:600;vertical-align:top;">${value}</td>
      </tr>`
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>פנייה חדשה מאתר MADAR</title>
</head>
<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">
  <div style="direction:rtl;text-align:right;max-width:640px;margin:24px auto;background:#ffffff;border:1px solid #e5ebf2;border-radius:16px;overflow:hidden;">
    <div style="padding:22px 24px;background:#213e5e;color:#ffffff;">
      <div style="font-size:12px;letter-spacing:0.08em;opacity:0.85;">MADAR · مدار</div>
      <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;">פנייה חדשה מהאתר</h1>
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
      ${rowsHtml}
    </table>
    <div style="padding:18px 24px 24px;">
      <div style="color:#5a6b7d;font-size:13px;margin-bottom:8px;">הודעה</div>
      <div dir="auto" style="unicode-bidi:plaintext;white-space:pre-wrap;line-height:1.7;color:#213e5e;font-size:15px;background:#f8fafc;border:1px solid #e8eef5;border-radius:12px;padding:14px 16px;">${escapeHtml(payload.message)}</div>
    </div>
  </div>
</body>
</html>`
}

const sendContactEmail = async (payload) => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    const error = new Error('RESEND_API_KEY is not configured')
    error.status = 503
    throw error
  }

  const to = process.env.CONTACT_TO_EMAIL || config.contactEmail
  const from = process.env.CONTACT_FROM_EMAIL || 'MADAR <onboarding@resend.dev>'
  const subject = `פנייה חדשה מהאתר — ${payload.fullName}`

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject,
      html: buildContactEmailHtml(payload),
      text: [
        'פנייה חדשה מהאתר',
        `שם: ${payload.fullName}`,
        `אימייל: ${payload.email}`,
        `טלפון: ${payload.phone || '—'}`,
        `התקבל: ${payload.receivedAt}`,
        '',
        payload.message,
      ].join('\n'),
    }),
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    const error = new Error(data?.message || 'Failed to send email via Resend')
    error.status = 502
    error.details = data
    throw error
  }

  return data
}

module.exports = { buildContactEmailHtml, sendContactEmail, escapeHtml }
