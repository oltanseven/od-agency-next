'use client'

import { useState } from 'react'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

async function saveLead(data: Record<string, string>) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify(data),
  })
  return res.ok
}

export default function IletisimPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    const ok = await saveLead({ ...data, created_at: new Date().toISOString() })
    setStatus(ok ? 'success' : 'error')
    if (ok) form.reset()
  }

  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">İletişim</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Projenizi<br /><span className="gradient-text">konuşalım.</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Ücretsiz keşif görüşmesiyle başlayın. Projenizi anlatalım, birlikte en doğru çözümü belirleyelim.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16">

            {/* Sol: bilgiler */}
            <div>
              <h2 className="text-[1.4rem] font-black text-ink mb-8">İletişim Bilgileri</h2>
              <div className="flex flex-col gap-6 mb-10">
                {[
                  { label: 'E-posta', val: 'merhaba@odagency.com', href: 'mailto:merhaba@odagency.com' },
                  { label: 'Telefon', val: '+90 532 465 20 31', href: 'tel:+905324652031' },
                  { label: 'Konum',   val: 'Antalya, Türkiye',  href: undefined },
                  { label: 'Çalışma Saatleri', val: 'Hft içi 09:00–18:00', href: undefined },
                ].map(({ label, val, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-accent text-xs font-bold">{label[0]}</span>
                    </div>
                    <div>
                      <div className="text-[0.78rem] font-semibold text-ink/40 uppercase tracking-wider mb-0.5">{label}</div>
                      {href
                        ? <a href={href} className="text-ink font-medium text-[0.95rem] no-underline hover:text-accent transition-colors">{val}</a>
                        : <span className="text-ink font-medium text-[0.95rem]">{val}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/905324652031" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3
                  rounded-full font-semibold text-[0.9rem] no-underline hover:-translate-y-0.5
                  transition-all duration-200 hover:shadow-lg">
                WhatsApp&apos;tan Yaz →
              </a>
            </div>

            {/* Sağ: form */}
            <div className="bg-black/[0.03] border border-black/[0.09] rounded-[18px] p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h3 className="text-[1.2rem] font-bold text-ink mb-2">Mesajınız alındı!</h3>
                  <p className="text-ink/50">En kısa sürede size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field name="ad_soyad" label="Ad Soyad" required placeholder="Oltan Seven" />
                    <Field name="sirket" label="Şirket" placeholder="OD Agency" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field name="email" label="E-posta" type="email" required placeholder="merhaba@sirket.com" />
                    <Field name="telefon" label="Telefon" placeholder="+90 532 000 00 00" />
                  </div>
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-ink/60 mb-2">Hizmet</label>
                    <select name="hizmet"
                      className="w-full bg-white border border-black/[0.09] rounded-xl px-4 py-3
                        text-[0.92rem] text-ink focus:outline-none focus:border-accent transition-colors">
                      <option value="">Seçiniz...</option>
                      <option>Web Tasarımı</option>
                      <option>E-Ticaret</option>
                      <option>AI Otomasyon</option>
                      <option>Marka Kimliği</option>
                      <option>SEO Danışmanlığı</option>
                      <option>Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-ink/60 mb-2">Bütçe Aralığı</label>
                    <select name="butce"
                      className="w-full bg-white border border-black/[0.09] rounded-xl px-4 py-3
                        text-[0.92rem] text-ink focus:outline-none focus:border-accent transition-colors">
                      <option value="">Seçiniz...</option>
                      <option>₺10.000 – ₺25.000</option>
                      <option>₺25.000 – ₺50.000</option>
                      <option>₺50.000 – ₺100.000</option>
                      <option>₺100.000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.82rem] font-semibold text-ink/60 mb-2">Mesaj *</label>
                    <textarea name="mesaj" required rows={4} placeholder="Projenizi kısaca anlatın..."
                      className="w-full bg-white border border-black/[0.09] rounded-xl px-4 py-3
                        text-[0.92rem] text-ink focus:outline-none focus:border-accent transition-colors
                        resize-none" />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm">Bir hata oluştu. Lütfen tekrar deneyin.</p>
                  )}

                  <button type="submit" disabled={status === 'loading'}
                    className="bg-accent text-white py-4 rounded-full font-bold text-[0.95rem]
                      transition-all duration-200 hover:bg-coral hover:-translate-y-0.5
                      disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
                    {status === 'loading' ? 'Gönderiliyor...' : 'Mesaj Gönder →'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

function Field({ name, label, type = 'text', required, placeholder }: {
  name: string; label: string; type?: string; required?: boolean; placeholder?: string
}) {
  return (
    <div>
      <label className="block text-[0.82rem] font-semibold text-ink/60 mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        className="w-full bg-white border border-black/[0.09] rounded-xl px-4 py-3
          text-[0.92rem] text-ink placeholder:text-ink/30
          focus:outline-none focus:border-accent transition-colors" />
    </div>
  )
}
