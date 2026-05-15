import { NextRequest, NextResponse } from 'next/server'
import { resend, FROM_EMAIL } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, solution, employees, timeline, message } = await req.json()

    if (!name || !email || !solution) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Notification to Oder
    await resend.emails.send({
      from: FROM_EMAIL,
      to: 'hello@oder.agency',
      replyTo: email,
      subject: `New Application: ${name} — ${solution}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ff521b; margin: 0; font-size: 20px;">New Application</h1>
          </div>
          <div style="background: #f9f9f6; padding: 32px; border: 1px solid #e5e5e0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #888; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ff521b;">${email}</a></td></tr>
              ${company ? `<tr><td style="padding: 8px 0; color: #888;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; color: #888;">Solution</td><td style="padding: 8px 0;">${solution}</td></tr>
              ${employees ? `<tr><td style="padding: 8px 0; color: #888;">Team Size</td><td style="padding: 8px 0;">${employees}</td></tr>` : ''}
              ${timeline ? `<tr><td style="padding: 8px 0; color: #888;">Timeline</td><td style="padding: 8px 0;">${timeline}</td></tr>` : ''}
            </table>
            ${message ? `
            <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e5e0;">
              <p style="margin: 0 0 4px; color: #888; font-size: 13px;">Message</p>
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>` : ''}
          </div>
        </div>
      `,
    })

    // Auto-reply to applicant
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Application received — Oder Agency',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ff521b; margin: 0; font-size: 20px;">Oder Agency</h1>
          </div>
          <div style="background: #f9f9f6; padding: 32px; border: 1px solid #e5e5e0; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; margin: 0 0 16px;">Hi <strong>${name}</strong>,</p>
            <p style="line-height: 1.7; color: #333;">Thanks for reaching out. We've received your application and will review it within 24 hours.</p>
            <p style="line-height: 1.7; color: #333;">In the meantime, feel free to reach us directly:</p>
            <p style="margin: 16px 0;">
              <a href="https://wa.me/905324652031" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">WhatsApp</a>
            </p>
            <hr style="border: none; border-top: 1px solid #e5e5e0; margin: 24px 0;" />
            <p style="font-size: 13px; color: #999; margin: 0;">Oder Agency — AI-Powered Growth Partner<br/>oder.agency</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
