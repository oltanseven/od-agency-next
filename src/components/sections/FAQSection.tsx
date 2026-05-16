'use client'

import { useState } from 'react'
import { useI18n } from '@/i18n/context'

export default function FAQSection() {
  const { locale } = useI18n()
  const en = locale === 'en'
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const items = en
    ? [
        {
          q: 'How long does it take to go live?',
          a: 'Most projects go live within 2-4 weeks. We start with a discovery audit, design the system, build and test it, then launch. Simple automations can be live in days.',
        },
        {
          q: 'Do I need technical knowledge?',
          a: 'Not at all. We handle everything from setup to maintenance. You get a simple dashboard to monitor results and we walk you through every step.',
        },
        {
          q: 'What if the automation doesn\u0027t work as expected?',
          a: 'We monitor every system continuously and optimize based on real data. If something is not performing, we fix it at no extra cost. Our work is outcome-based.',
        },
        {
          q: 'Can I cancel anytime?',
          a: 'Yes. We work month-to-month with no long-term contracts. If we are not delivering value, you can walk away at any time.',
        },
        {
          q: 'What tools and platforms do you use?',
          a: 'We build on proven infrastructure including n8n, Next.js, Supabase, Vercel, and leading AI models. The exact stack depends on your needs.',
        },
        {
          q: 'How much does it cost?',
          a: 'Every project is different. After our free discovery call, we provide a clear fixed-price proposal. No hidden fees, no surprises.',
        },
      ]
    : [
        {
          q: 'Canliya gecmek ne kadar surer?',
          a: 'Cogu proje 2-4 hafta icinde canliya gecer. Kesif denetimiyle baslar, sistemi tasarlar, kurar ve test eder, ardından yayına alırız. Basit otomasyonlar gunler icinde canlı olabilir.',
        },
        {
          q: 'Teknik bilgiye ihtiyacım var mı?',
          a: 'Kesinlikle hayır. Kurulumdan bakıma kadar her seyi biz yonetiyoruz. Sonucları izlemek icin basit bir panel alırsınız ve her adımda size rehberlik ederiz.',
        },
        {
          q: 'Otomasyon beklendigi gibi calısmazsa ne olur?',
          a: 'Her sistemi surekli izliyor ve gercek verilere gore optimize ediyoruz. Performans dusukse ek ucret almadan duzeltiyoruz. Calısmamız sonuc odaklıdır.',
        },
        {
          q: 'Istedigim zaman iptal edebilir miyim?',
          a: 'Evet. Uzun vadeli sozlesme olmadan ay be ay calısıyoruz. Deger uretemiyorsak istediginiz zaman ayrılabilirsiniz.',
        },
        {
          q: 'Hangi arac ve platformları kullanıyorsunuz?',
          a: 'n8n, Next.js, Supabase, Vercel ve onde gelen AI modelleri dahil kanıtlanmıs altyapı uzerine kuruyoruz. Tam teknoloji yıgını ihtiyaclarınıza baglıdır.',
        },
        {
          q: 'Maliyeti ne kadar?',
          a: 'Her proje farklıdır. Ucretsiz kesif gorusmesinden sonra net bir sabit fiyat teklifi sunuyoruz. Gizli ucret yok, surpriz yok.',
        },
      ]

  return (
    <section className="py-28 sm:py-40 bg-white">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">

        <div className="text-center mb-14">
          <span className="text-ink/40 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 block">
            {en ? 'FAQ' : 'SSS'}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-ink tracking-[-0.02em] mb-4">
            {en ? 'Frequently asked questions' : 'Sıkca sorulan sorular'}
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className="border border-black/[0.08] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                    bg-white hover:bg-[#f8fafc] transition-colors cursor-pointer"
                >
                  <span className="text-[0.95rem] font-semibold text-ink">{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`shrink-0 text-ink/30 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 bg-white">
                    <p className="text-ink/50 text-[0.92rem] leading-[1.7]">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
