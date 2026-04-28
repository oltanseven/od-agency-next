'use client'

import { useState } from 'react'
import ServiceHeroBg from '@/components/ServiceHeroBg'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

async function saveLead(data: Record<string, string>) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return false
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
  const [msgLen, setMsgLen] = useState(0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    try {
      const ok = await saveLead({ ...data, created_at: new Date().toISOString() })
      if (ok) {
        // Resend ile e-posta gönder
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        // Google Ads dönüşüm takibi
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', { send_to: 'AW-18122299826/la0qCKjx-qMcELKzscFD' })
        }
        form.reset()
        setMsgLen(0)
      }
      setStatus(ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="pt-28 sm:pt-36 pb-14 sm:pb-20 bg-cream-soft border-b border-black/[0.09] relative">
        <ServiceHeroBg theme="contact" />
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">// İletişim</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Projenizi <span className="gradient-text">birlikte değerlendirelim</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Formu doldurun veya direkt arayın. Projeniz hakkında ücretsiz bir değerlendirme yapalım.
          </p>
        </div>
      </div>

      {/* Contact */}
      <section className="py-16 sm:py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

            {/* Sol: Bilgi (sticky) — mobilde form altına düşer */}
            <div className="lg:sticky lg:top-28 order-2 lg:order-1">
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-black text-ink mb-4 leading-[1.1] tracking-[-0.02em]">
                Nasıl <span className="gradient-text">ulaşabilirsiniz?</span>
              </h2>
              <p className="text-ink/50 leading-[1.75] mb-10">
                Formu doldurun veya direkt iletişim kanallarımızdan ulaşın.
              </p>

              {/* İletişim bilgileri */}
              <div className="flex flex-col gap-5 mb-10">
                {[
                  {
                    href: 'mailto:merhaba@oder.agency',
                    label: 'E-posta',
                    value: 'merhaba@oder.agency',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#ff521b" strokeWidth="1.5" opacity="0.4"/>
                        <path d="M22 6l-10 7L2 6" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ),
                  },
                  {
                    href: 'tel:+905324652031',
                    label: 'Telefon',
                    value: '+90 532 465 20 31',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.1 2.38a2 2 0 011.99-2.18H5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#ff521b" strokeWidth="1.5" opacity="0.4"/>
                        <path d="M15 7a4 4 0 014 4" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ),
                  },
                  {
                    href: undefined,
                    label: 'Konum',
                    value: 'Antalya, Türkiye',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#ff521b" strokeWidth="1.5" opacity="0.4"/>
                        <circle cx="12" cy="10" r="3" stroke="#ff521b" strokeWidth="2"/>
                      </svg>
                    ),
                  },
                  {
                    href: undefined,
                    label: 'Çalışma Saatleri',
                    value: 'Pzt–Cmt, 09:00–18:00',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" stroke="#ff521b" strokeWidth="1.5" opacity="0.4"/>
                        <path d="M12 7v5l3 3" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ),
                  },
                ].map(({ href, label, value, icon }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(255,82,27,0.1)', border: '1.5px solid rgba(255,82,27,0.2)' }}>
                      {icon}
                    </div>
                    <div>
                      <strong className="block text-[0.78rem] font-bold text-ink/40 uppercase tracking-[0.08em] mb-0.5">{label}</strong>
                      {href
                        ? <a href={href} className="text-ink font-semibold text-[0.92rem] no-underline hover:text-accent">{value}</a>
                        : <span className="text-ink font-semibold text-[0.92rem]">{value}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[0.75rem] font-semibold text-ink/50"
                  style={{ background: '#F6F2E8', border: '1.5px solid rgba(0,0,0,0.09)', minHeight: '36px' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  Pzt-Cmt 09:00-18:00
                </div>
                <div className="px-3.5 py-2 rounded-full text-[0.75rem] font-semibold text-ink/50"
                  style={{ background: '#F6F2E8', border: '1.5px solid rgba(0,0,0,0.09)', minHeight: '36px' }}>
                  Ücretsiz web analizi
                </div>
                <div className="px-3.5 py-2 rounded-full text-[0.75rem] font-semibold text-ink/50"
                  style={{ background: '#F6F2E8', border: '1.5px solid rgba(0,0,0,0.09)', minHeight: '36px' }}>
                  14 gün memnuniyet garantisi
                </div>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/905324652031" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold
                  text-[0.9rem] text-white no-underline hover:-translate-y-0.5
                  hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] focus-visible:ring-2
                  focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
                style={{ background: '#25D366', minHeight: '44px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp&apos;tan Yaz →
              </a>
            </div>

            {/* Sağ: Form */}
            <div className="bg-cream-soft border-[1.5px] border-black/[0.09] rounded-[24px] p-6 sm:p-10 md:p-12 order-1 lg:order-2">
              <div className="text-[1.2rem] font-extrabold text-ink mb-1">Projenizi Anlatın</div>
              <p className="text-ink/50 text-[0.88rem] mb-8">Formu doldurun, en kısa sürede size dönelim.</p>

              {status === 'success' ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: '#D1FAE5' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[1.2rem] font-bold text-ink mb-2">Mesajınız alındı!</h3>
                  <p className="text-ink/50 text-[0.9rem]">Mesajınız bize ulaştı. En kısa sürede size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

                  {/* Ad Soyad + Şirket */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field name="name" label="Ad Soyad" required placeholder="Adınız Soyadınız" />
                    <Field name="company" label="Şirket Adı" placeholder="Şirketiniz (opsiyonel)" hint="Opsiyonel" />
                  </div>

                  {/* E-posta + Telefon */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field name="email" label="E-posta" type="email" required placeholder="email@sirket.com" hint="Hiçbir zaman paylaşılmaz." />
                    <Field name="phone" label="Telefon" placeholder="+90 5XX XXX XX XX" hint="Opsiyonel" />
                  </div>

                  {/* Hizmet + Bütçe */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.78rem] font-bold text-ink/60 mb-1.5 tracking-[0.04em]">
                        İlgilendiğiniz Hizmet <span className="text-accent">*</span>
                      </label>
                      <select name="service" required className="od-input">
                        <option value="">Hizmet seçin</option>
                        <option>Web Tasarımı & Geliştirme</option>
                        <option>E-Ticaret Çözümleri</option>
                        <option>AI Otomasyon</option>
                        <option>Marka Kimliği</option>
                        <option>Bakım & Teknik Destek</option>
                        <option>Birden Fazla Hizmet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[0.78rem] font-bold text-ink/60 mb-1.5 tracking-[0.04em]">Bütçe Aralığı</label>
                      <select name="budget" className="od-input">
                        <option value="">Bütçe aralığı</option>
                        <option>₺10.000 – ₺25.000</option>
                        <option>₺25.000 – ₺50.000</option>
                        <option>₺50.000 – ₺100.000</option>
                        <option>₺100.000+</option>
                        <option>Henüz bilmiyorum</option>
                      </select>
                      <p className="od-hint">Tam bilmiyorsanız sorun değil.</p>
                    </div>
                  </div>

                  {/* Mesaj */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-[0.78rem] font-bold text-ink/60 tracking-[0.04em]">
                        Projenizi Anlatın <span className="text-accent">*</span>
                      </label>
                      <span className={`text-[0.7rem] ${msgLen > 450 ? 'text-accent' : 'text-ink/30'}`}>
                        {msgLen}/500
                      </span>
                    </div>
                    <textarea name="message" required rows={5} maxLength={500}
                      onChange={e => setMsgLen(e.target.value.length)}
                      placeholder="Projeniz hakkında kısaca bilgi verin. Ne yapmak istiyorsunuz? Mevcut bir siteniz var mı? Hedef kitleniz kim?"
                      className="od-input resize-y min-h-[120px] leading-[1.65]" />
                    <p className="od-hint">Hedef kitleniz, mevcut siteniz ve beklentinizi paylaşın.</p>
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 rounded-[10px] text-[0.88rem]"
                      style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FECACA' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="9" stroke="#991B1B" strokeWidth="2"/>
                        <path d="M12 8v4M12 16h.01" stroke="#991B1B" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span>Bir sorun oluştu. Lütfen <a href="mailto:merhaba@oder.agency" className="font-bold underline">merhaba@oder.agency</a> adresine doğrudan yazın.</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button type="submit" disabled={status === 'loading'}
                    className="w-full bg-accent text-white rounded-full font-bold text-[0.95rem]
                      hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)]
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                      focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2
                      cursor-pointer mt-2"
                    style={{ minHeight: '52px' }}>
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                          <path d="M12 3a9 9 0 019 9" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        Gönderiliyor...
                      </span>
                    ) : 'Mesaj Gönder →'}
                  </button>

                  <p className="text-center text-[0.72rem] text-ink/35">
                    Bilgileriniz yalnızca projeniz için kullanılır. Spam göndermeyiz.
                  </p>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Neden Oder Agency */}
      <section className="py-16 sm:py-28 bg-cream-soft border-t border-black/[0.07]">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">// Neden Biz?</span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
              Sadece <span className="gradient-text">iyi bir site</span> değil
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                color: '#ff521b',
                icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#ff521b" strokeWidth="1.5" opacity="0.35"/><path d="M9 12l2 2 4-4" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>,
                title: '14 Gün Memnuniyet Garantisi',
                desc: 'Projeniz teslim edildikten sonra memnun kalmazsanız 14 gün içinde ücretinizi iade ediyoruz.',
              },
              {
                color: '#e8881a',
                icon: <><path d="M13 2L3 14h9l-1 8 10-12h-9z" stroke="#e8881a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.35"/><path d="M13 2L7 11h6" stroke="#e8881a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></>,
                title: 'Süre Garantisi',
                desc: 'Gecikme = %10 indirim. Landing page 5 günde, kurumsal site 10 günde. Söz verdiğimiz tarihi tutarız.',
              },
              {
                color: '#16a34a',
                icon: <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.35"/><path d="M8 10h.01M12 10h.01M16 10h.01" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/></>,
                title: 'Şeffaf & Sürekli Destek',
                desc: 'Her adımda ne yapıldığını bilirsiniz. Teslim sonrası da yanınızdayız, yıllık bakım sadece ₺2.500.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-cream border-[1.5px] border-black/[0.09] rounded-[18px] p-8
                transition-all duration-200 hover:border-black/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mb-4">{icon}</svg>
                <h4 className="font-bold text-ink mb-2">{title}</h4>
                <p className="text-[0.85rem] text-ink/50 leading-[1.65]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ name, label, type = 'text', required, placeholder, hint }: {
  name: string
  label: string
  type?: string
  required?: boolean
  placeholder?: string
  hint?: string
}) {
  return (
    <div>
      <label className="block text-[0.78rem] font-bold text-ink/60 mb-1.5 tracking-[0.04em]">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="od-input"
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : undefined}
      />
      {hint && <p className="od-hint">{hint}</p>}
    </div>
  )
}
