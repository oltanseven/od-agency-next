'use client'

import { useState } from 'react'

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    try {
      const ok = await saveLead({ ...data, created_at: new Date().toISOString() })
      setStatus(ok ? 'success' : 'error')
      if (ok) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-20 bg-cream-soft border-b border-black/[0.09]">
        <div className="max-w-[1260px] mx-auto px-8">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-4">// İletişim</span>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-4">
            Projenizi <span className="gradient-text">konuşalım</span>
          </h1>
          <p className="text-ink/50 text-[1.05rem] max-w-[540px] leading-[1.75]">
            Fikir aşamasında olsun veya hemen başlamak isteyin — fark etmez. Anlatalım, birlikte en doğru yolu çizelim.
          </p>
        </div>
      </div>

      {/* Contact */}
      <section className="py-28 bg-cream">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">

            {/* Sol: Bilgi */}
            <div className="lg:sticky lg:top-28">
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-black text-ink mb-4 leading-[1.1] tracking-[-0.02em]">
                Nasıl <span className="gradient-text">ulaşabilirsiniz?</span>
              </h2>
              <p className="text-ink/50 leading-[1.75] mb-10">
                Formu doldurun veya direkt iletişim kanallarımızdan ulaşın. Genellikle 2 saat içinde yanıt veriyoruz.
              </p>

              <div className="flex flex-col gap-5 mb-10">
                {/* E-posta */}
                <div className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,82,27,0.1)', border: '1.5px solid rgba(255,82,27,0.2)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#ff521b" strokeWidth="1.5" opacity="0.4"/>
                      <path d="M22 6l-10 7L2 6" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-[0.78rem] font-bold text-ink/40 uppercase tracking-[0.08em] mb-0.5">E-posta</strong>
                    <a href="mailto:merhaba@odagency.com" className="text-ink font-semibold text-[0.92rem] no-underline hover:text-accent transition-colors">merhaba@odagency.com</a>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,82,27,0.1)', border: '1.5px solid rgba(255,82,27,0.2)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.1 2.38a2 2 0 011.99-2.18H5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#ff521b" strokeWidth="1.5" opacity="0.4"/>
                      <path d="M15 7a4 4 0 014 4" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-[0.78rem] font-bold text-ink/40 uppercase tracking-[0.08em] mb-0.5">Telefon</strong>
                    <a href="tel:+905324652031" className="text-ink font-semibold text-[0.92rem] no-underline hover:text-accent transition-colors">+90 532 465 20 31</a>
                  </div>
                </div>

                {/* Konum */}
                <div className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,82,27,0.1)', border: '1.5px solid rgba(255,82,27,0.2)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#ff521b" strokeWidth="1.5" opacity="0.4"/>
                      <circle cx="12" cy="10" r="3" stroke="#ff521b" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-[0.78rem] font-bold text-ink/40 uppercase tracking-[0.08em] mb-0.5">Konum</strong>
                    <span className="text-ink font-semibold text-[0.92rem]">Antalya, Türkiye</span>
                  </div>
                </div>

                {/* Saatler */}
                <div className="flex items-start gap-4">
                  <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,82,27,0.1)', border: '1.5px solid rgba(255,82,27,0.2)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#ff521b" strokeWidth="1.5" opacity="0.4"/>
                      <path d="M12 7v5l3 3" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-[0.78rem] font-bold text-ink/40 uppercase tracking-[0.08em] mb-0.5">Çalışma Saatleri</strong>
                    <span className="text-ink font-semibold text-[0.92rem]">Pzt–Cum, 09:00–18:00</span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.75rem] font-semibold text-ink/50"
                  style={{ background: '#F6F2E8', border: '1.5px solid rgba(0,0,0,0.09)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0"></span>
                  2 saat içinde yanıt
                </div>
                <div className="px-3.5 py-1.5 rounded-full text-[0.75rem] font-semibold text-ink/50"
                  style={{ background: '#F6F2E8', border: '1.5px solid rgba(0,0,0,0.09)' }}>
                  Ücretsiz keşif görüşmesi
                </div>
                <div className="px-3.5 py-1.5 rounded-full text-[0.75rem] font-semibold text-ink/50"
                  style={{ background: '#F6F2E8', border: '1.5px solid rgba(0,0,0,0.09)' }}>
                  Sürpriz ücret yok
                </div>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/905324652031" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[0.9rem]
                  text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: '#25D366' }}>
                WhatsApp&apos;tan Yaz →
              </a>
            </div>

            {/* Sağ: Form */}
            <div className="bg-cream-soft border-[1.5px] border-black/[0.09] rounded-[24px] p-12">
              <div className="text-[1.2rem] font-extrabold text-ink mb-1">Projenizi Anlatın</div>
              <p className="text-ink/50 text-[0.88rem] mb-8">Formu doldurun, en kısa sürede size dönelim.</p>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: '#D1FAE5' }}>
                    <span className="text-[#166534] text-2xl font-bold">✓</span>
                  </div>
                  <h3 className="text-[1.2rem] font-bold text-ink mb-2">Mesajınız alındı!</h3>
                  <p className="text-ink/50">En kısa sürede size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field name="name" label="Ad Soyad" required placeholder="Adınız Soyadınız" />
                    <Field name="company" label="Şirket Adı" placeholder="Şirketiniz (opsiyonel)" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field name="email" label="E-posta" type="email" required placeholder="email@sirket.com" />
                    <Field name="phone" label="Telefon" placeholder="+90 5XX XXX XX XX" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.78rem] font-bold text-ink/60 mb-1.5 tracking-[0.05em]">İlgilendiğiniz Hizmet *</label>
                      <select name="service" required
                        className="w-full bg-cream border-[1.5px] border-black/[0.09] rounded-[10px] px-4 py-3
                          text-[0.9rem] text-ink focus:outline-none focus:border-accent
                          focus:shadow-[0_0_0_3px_rgba(255,82,27,0.1)] transition-all appearance-none">
                        <option value="" disabled>Hizmet seçin</option>
                        <option>Web Tasarımı & Geliştirme</option>
                        <option>E-Ticaret Çözümleri</option>
                        <option>AI Otomasyon</option>
                        <option>Marka Kimliği</option>
                        <option>Bakım & Teknik Destek</option>
                        <option>Birden Fazla Hizmet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[0.78rem] font-bold text-ink/60 mb-1.5 tracking-[0.05em]">Bütçe Aralığı</label>
                      <select name="budget"
                        className="w-full bg-cream border-[1.5px] border-black/[0.09] rounded-[10px] px-4 py-3
                          text-[0.9rem] text-ink focus:outline-none focus:border-accent
                          focus:shadow-[0_0_0_3px_rgba(255,82,27,0.1)] transition-all appearance-none">
                        <option value="">Bütçe aralığı</option>
                        <option>₺10.000 – ₺25.000</option>
                        <option>₺25.000 – ₺50.000</option>
                        <option>₺50.000 – ₺100.000</option>
                        <option>₺100.000+</option>
                        <option>Henüz bilmiyorum</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[0.78rem] font-bold text-ink/60 mb-1.5 tracking-[0.05em]">Projenizi Anlatın *</label>
                    <textarea name="message" required rows={5}
                      placeholder="Projeniz hakkında kısaca bilgi verin. Ne yapmak istiyorsunuz? Mevcut bir siteniz var mı? Hedef kitleniz kim?"
                      className="w-full bg-cream border-[1.5px] border-black/[0.09] rounded-[10px] px-4 py-3
                        text-[0.9rem] text-ink placeholder:text-ink/30 focus:outline-none focus:border-accent
                        focus:shadow-[0_0_0_3px_rgba(255,82,27,0.1)] transition-all resize-y min-h-[120px]
                        leading-[1.6]" />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-[10px] text-[0.88rem] font-semibold text-center"
                      style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FECACA' }}>
                      Bir sorun oluştu. Lütfen e-posta ile doğrudan ulaşın: merhaba@odagency.com
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'}
                    className="w-full bg-accent text-white py-4 rounded-full font-bold text-[0.95rem]
                      transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5
                      disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer mt-2">
                    {status === 'loading' ? 'Gönderiliyor...' : 'Mesaj Gönder →'}
                  </button>
                  <p className="text-center text-[0.75rem] text-ink/40">
                    Bilgileriniz yalnızca projeniz için kullanılır. Spam göndermeyiz.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Neden OD Agency */}
      <section className="py-28 bg-cream-soft border-t border-black/[0.07]">
        <div className="max-w-[1260px] mx-auto px-8">
          <div className="text-center mb-14">
            <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">// Neden Biz?</span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink">
              Sadece <span className="gradient-text">iyi bir site</span> değil
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-cream border-[1.5px] border-black/[0.09] rounded-[18px] p-8">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mb-4">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ff521b" strokeWidth="1.5" opacity="0.35"/>
                <path d="M7 13l3 3 7-7" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4 className="font-bold text-ink mb-2">Şeffaf Süreç</h4>
              <p className="text-[0.85rem] text-ink/50 leading-[1.65]">
                Her aşamada ne yapıldığını bilirsiniz. Sürpriz ek ücret veya gizli maliyetler olmaz.
              </p>
            </div>
            <div className="bg-cream border-[1.5px] border-black/[0.09] rounded-[18px] p-8">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mb-4">
                <path d="M13 2L3 14h9l-1 8 10-12h-9z" stroke="#e8881a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.35"/>
                <path d="M13 2L7 11h6" stroke="#e8881a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4 className="font-bold text-ink mb-2">Hızlı Teslim</h4>
              <p className="text-[0.85rem] text-ink/50 leading-[1.65]">
                Lansman paketi 5 iş günü. Kurumsal projeler 10 iş gününde tamamlanır. Söz verdiğimiz tarihi tutarız.
              </p>
            </div>
            <div className="bg-cream border-[1.5px] border-black/[0.09] rounded-[18px] p-8">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mb-4">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round" opacity="0.35"/>
                <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <h4 className="font-bold text-ink mb-2">Sürekli Destek</h4>
              <p className="text-[0.85rem] text-ink/50 leading-[1.65]">
                Teslim sonrası da yanınızdayız. Teknik destek, güncelleme ve geliştirmeler için buradayız.
              </p>
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
      <label className="block text-[0.78rem] font-bold text-ink/60 mb-1.5 tracking-[0.05em]">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        className="w-full bg-cream border-[1.5px] border-black/[0.09] rounded-[10px] px-4 py-3
          text-[0.9rem] text-ink placeholder:text-ink/30
          focus:outline-none focus:border-accent
          focus:shadow-[0_0_0_3px_rgba(255,82,27,0.1)] transition-all" />
    </div>
  )
}
