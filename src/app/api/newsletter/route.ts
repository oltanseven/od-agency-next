import { NextRequest, NextResponse } from 'next/server'
import { resend, FROM_EMAIL } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'E-posta gerekli' }, { status: 400 })
    }

    // Hoşgeldin e-postası
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Bültene hoş geldiniz! — Oder Agency',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ff521b; margin: 0; font-size: 20px;">Oder Agency</h1>
          </div>
          <div style="background: #f9f9f6; padding: 32px; border: 1px solid #e5e5e0; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="margin: 0 0 16px; font-size: 22px; color: #1a1a1a;">Bültene hoş geldiniz!</h2>
            <p style="line-height: 1.7; color: #333;">Artık web tasarım trendleri, AI otomasyon ipuçları ve dijital dünyadan güncellemelerden haberdar olacaksınız.</p>
            <p style="line-height: 1.7; color: #333;">Her ay en iyi içerikleri sizin için derleyeceğiz.</p>
            <p style="margin: 24px 0;">
              <a href="https://oder.agency/blog" style="display: inline-block; background: #ff521b; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Blog Yazılarımızı Keşfedin →</a>
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
