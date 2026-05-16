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
          q: 'How does the partnership model work?',
          a: 'We work on annual partnerships with quarterly reviews. This gives enough time for systems to mature and deliver compounding returns.',
        },
        {
          q: 'What does the ongoing relationship look like?',
          a: 'We monitor, optimize, and expand your systems continuously. You get regular performance reports and quarterly strategy reviews to keep everything aligned with your goals.',
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
          q: 'Ortaklık modeli nasıl işliyor?',
          a: 'Yıllık ortaklık modeli ile çalışıyoruz, her çeyrekte değerlendirme yapıyoruz. Bu, sistemlerin olgunlaşıp bileşik getiri üretmesi için yeterli zaman tanır.',
        },
        {
          q: 'Devam eden ilişki nasıl görünüyor?',
          a: 'Sistemlerinizi sürekli izliyor, optimize ediyor ve genişletiyoruz. Düzenli performans raporları ve her çeyrekte strateji değerlendirmesiyle her şeyi hedeflerinizle uyumlu tutuyoruz.',
        },
        {
          q: 'Maliyeti ne kadar?',
          a: 'Her proje farklıdır. Ücretsiz keşif görüşmesinden sonra net bir sabit fiyat teklifi sunuyoruz. Gizli ücret yok, sürpriz yok.',
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
            {en ? 'Frequently asked questions' : 'Sıkça sorulan sorular'}
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className="od-card !p-0 overflow-hidden"
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
