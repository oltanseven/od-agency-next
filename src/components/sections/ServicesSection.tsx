'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/context'

export default function ServicesSection() {
  const { locale } = useI18n()
  const en = locale === 'en'
  const applyHref = en ? '/apply' : '/tr/apply'

  const services = [
    {
      title: en ? 'AI Automation' : 'AI Otomasyon',
      desc: en
        ? 'We deploy AI systems that handle your operations 24/7. From customer communication to internal workflows, your business keeps running while you sleep.'
        : 'Operasyonlarınızı 7/24 yöneten AI sistemleri kuruyoruz. Müşteri iletişiminden iç süreçlere kadar, siz uyurken işletmeniz çalışmaya devam eder.',
      tag: en ? 'Most Popular' : 'En Popüler',
    },
    {
      title: en ? 'Operations Audit' : 'Süreç Analizi',
      desc: en
        ? 'We map your workflows end to end and find every automation opportunity. You get a clear roadmap before a single line of code is written.'
        : 'İş akışlarınızı uçtan uca haritalıyor ve her otomasyon fırsatını belirliyoruz. Tek satır kod yazılmadan net bir yol haritası elinizde olur.',
      tag: en ? 'Strategic Planning' : 'Stratejik Planlama',
    },
    {
      title: en ? 'Integration' : 'Entegrasyon',
      desc: en
        ? 'We connect your existing tools into one intelligent system. No more switching between apps or copy-pasting data manually.'
        : 'Mevcut araçlarınızı tek bir akıllı sisteme bağlıyoruz. Artık uygulamalar arasında geçiş yapmak veya verileri elle kopyalamak yok.',
      tag: en ? 'Connectivity' : 'Bağlantı',
    },
  ]

  return (
    <section id="hizmetler" className="py-28 sm:py-40 bg-white">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="mb-16">
          <span className="text-ink/40 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 block">
            {en ? 'Services' : 'Hizmetler'}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink mb-4">
            {en ? 'Your business, running on autopilot' : 'İşletmeniz otopilotta çalışsın'}
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-5" />
          <p className="text-ink/50 max-w-[500px] leading-[1.7] text-[1rem]">
            {en
              ? 'Looking good is not enough. Your systems should generate results every single day. Here are the solutions that make it happen.'
              : 'Güzel görünmek yetmez. Sistemleriniz her gün sonuç üretmeli. İşte tam bunu yapan çözümler:'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map(({ title, desc, tag }) => (
            <div key={title}
              className="od-card">
              <h3 className="text-[1.15rem] font-bold text-ink mb-3">{title}</h3>
              <p className="text-ink/50 text-[0.92rem] leading-[1.7] mb-5">{desc}</p>
              <span className="inline-block text-[0.72rem] font-semibold px-3 py-1 rounded-full
                bg-accent/8 text-accent border border-accent/15">
                {tag}
              </span>
            </div>
          ))}
        </div>

        <div className="od-card !bg-cream-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[1.1rem] font-bold text-ink mb-1">
              {en
                ? 'Let\u0027s figure out which processes we can automate together'
                : 'Hangi süreçlerinizi otomatikleştirebileceğimizi birlikte belirleyelim'}
            </h3>
            <p className="text-ink/50 text-[0.92rem] max-w-[500px] leading-[1.7]">
              {en
                ? 'Book a free discovery call. We will walk through your operations and show you the quickest wins.'
                : 'Ücretsiz bir keşif görüşmesi planlayın. Operasyonlarınızı birlikte inceleyelim ve en hızlı kazanımları gösterelim.'}
            </p>
          </div>
          <Link href={applyHref}
            className="shrink-0 bg-accent text-white px-8 py-3.5 rounded-full font-bold text-[0.95rem]
              no-underline hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
            {en ? 'Get a Proposal' : 'Teklif Al'}
          </Link>
        </div>

      </div>
    </section>
  )
}
