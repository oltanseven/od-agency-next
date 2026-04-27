import { NextRequest, NextResponse } from 'next/server'
import { resend, FROM_EMAIL } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Eksik alan' }, { status: 400 })
    }

    // 1. Sana bildirim e-postası
    await resend.emails.send({
      from: FROM_EMAIL,
      to: 'merhaba@oder.agency',
      replyTo: email,
      subject: `Yeni İletişim: ${name} — ${service || 'Genel'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ff521b; margin: 0; font-size: 20px;">Yeni İletişim Formu</h1>
          </div>
          <div style="background: #f9f9f6; padding: 32px; border: 1px solid #e5e5e0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #888; width: 120px;">Ad Soyad</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #888;">E-posta</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ff521b;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #888;">Telefon</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #ff521b;">${phone}</a></td></tr>` : ''}
              ${service ? `<tr><td style="padding: 8px 0; color: #888;">Hizmet</td><td style="padding: 8px 0;">${service}</td></tr>` : ''}
            </table>
            <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e5e0;">
              <p style="margin: 0 0 4px; color: #888; font-size: 13px;">Mesaj</p>
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>
          </div>
        </div>
      `,
    })

    // 2. Müşteriye otomatik yanıt
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Mesajınız alındı — Oder Agency',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ff521b; margin: 0; font-size: 20px;">Oder Agency</h1>
          </div>
          <div style="background: #f9f9f6; padding: 32px; border: 1px solid #e5e5e0; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; margin: 0 0 16px;">Merhaba <strong>${name}</strong>,</p>
            <p style="line-height: 1.7; color: #333;">Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geceğiz.</p>
            <p style="line-height: 1.7; color: #333;">Acil durumlar için bizi doğrudan arayabilirsiniz:</p>
            <p style="margin: 16px 0;">
              <a href="tel:+905324652031" style="display: inline-block; background: #ff521b; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">0532 465 20 31</a>
            </p>
            <hr style="border: none; border-top: 1px solid #e5e5e0; margin: 24px 0;" />
            <p style="font-size: 13px; color: #999; margin: 0;">Oder Agency — Web Tasarım & AI Otomasyon<br/>oder.agency</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'E-posta gönderilemedi' }, { status: 500 })
  }
}
