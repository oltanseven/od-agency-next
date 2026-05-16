'use client'

import { useI18n } from '@/i18n/context'

export default function SolutionSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const cards = [
    {
      title: en ? 'Automate' : 'Otomatikleştir',
      desc: en
        ? 'Replace repetitive tasks with intelligent workflows that run themselves. Your team focuses on what matters.'
        : 'Tekrarlayan görevleri kendi kendine çalışan akıllı iş akışlarıyla değiştirin. Ekibiniz önemli işlere odaklansın.',
      tag: en ? 'Efficiency' : 'Verimlilik',
    },
    {
      title: en ? 'Scale' : 'Ölçekle',
      desc: en
        ? 'Handle 10x the volume without hiring 10x the people. AI systems grow with your demand.'
        : '10 kat fazla işi 10 kat fazla insan işe almadan yönetin. AI sistemleri talebinizle birlikte büyür.',
      tag: en ? 'Growth' : 'Büyüme',
    },
    {
      title: en ? 'Measure' : 'Ölç',
      desc: en
        ? 'Every automation is tracked with real metrics. You see exactly what is working and what needs tuning.'
        : 'Her otomasyon gerçek metriklerle takip edilir. Neyin işe yaradığını ve neyin ayarlanması gerektiğini net görürsünüz.',
      tag: en ? 'Data-Driven' : 'Veri Odaklı',
    },
  ]

  return (
    <section id="solutions" className="py-28 sm:py-40 bg-cream-soft">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="text-center mb-16">
          <span className="text-ink/40 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 block">
            {en ? 'Solution' : 'Çözüm'}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.1] tracking-[-0.02em] text-ink mb-4">
            {en ? 'AI that actually works' : 'Gerçekten çalışan AI'}
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-5" />
          <p className="text-ink/50 max-w-[500px] mx-auto leading-[1.7] text-[1rem]">
            {en
              ? 'We build custom automation systems that integrate into your existing operations and deliver measurable results from day one.'
              : 'Mevcut operasyonlarınıza entegre olan ve ilk günden ölçülebilir sonuçlar üreten özel otomasyon sistemleri kuruyoruz.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ title, desc, tag }) => (
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
      </div>
    </section>
  )
}
