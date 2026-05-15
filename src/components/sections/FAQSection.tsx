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
          q: 'Canlıya geçmek ne kadar sürer?',
          a: 'Çoğu proje 2-4 hafta içinde canlıya geçer. Keşif denetimiyle başlar, sistemi tasarlar, kurar ve test eder, ardından yayına alırız. Basit otomasyonlar günler içinde canlı olabilir.',
        },
        {
          q: 'Teknik bilgiye ihtiyacım var mı?',
          a: 'Kesinlikle hayır. Kurulumdan bakıma kadar her şeyi biz yönetiyoruz. Sonuçları izlemek için basit bir panel alırsınız ve her adımda size rehberlik ederiz.',
        },
        {
          q: 'Otomasyon beklendiği gibi çalışmazsa ne olur?',
          a: 'Her sistemi sürekli izliyor ve gerçek verilere göre optimize ediyoruz. Performans düşükse ek ücret almadan düzeltiyoruz. Çalışmamız sonuç odaklıdır.',
        },
        {
          q: 'İstediğim zaman iptal edebilir miyim?',
          a: 'Evet. Uzun vadeli sözleşme olmadan ay be ay çalışıyoruz. Değer üretemiyorsak istediğiniz zaman ayrılabilirsiniz.',
        },
        {
          q: 'Hangi araç ve platformları kullanıyorsunuz?',
          a: 'n8n, Next.js, Supabase, Vercel ve önde gelen AI modelleri dahil kanıtlanmış altyapı üzerine kuruyoruz. Tam teknoloji yığını ihtiyaçlarınıza bağlıdır.',
        },
        {
          q: 'Maliyeti ne kadar?',
          a: 'Her proje farklıdır. Ücretsiz keşif görüşmesinden sonra net bir sabit fiyat teklifi sunuyoruz. Gizli ücret yok, sürpriz yok.',
        },
      ]

  return (
    <section className="pt-16 sm:pt-28 pb-20 sm:pb-36 bg-cream">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            {en ? '// FAQ' : '// SSS'}
          </span>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-ink tracking-[-0.02em]">
            {en ? 'Frequently asked questions' : 'Sıkça sorulan sorular'}
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className="border border-black/[0.09] rounded-[18px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                    bg-cream-soft hover:bg-cream-soft/80 transition-colors cursor-pointer"
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
                  <div className="px-6 pb-5 bg-cream-soft">
                    <p className="text-ink/50 text-[0.88rem] leading-relaxed">{item.a}</p>
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
