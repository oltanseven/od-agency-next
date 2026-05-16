'use client'

import { useI18n } from '@/i18n/context'

export default function ProcessSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const steps = [
    {
      num: '01',
      title: en ? 'Discovery & Audit' : 'Kesif & Denetim',
      desc: en
        ? 'We dive deep into your operations, map every workflow, and identify where AI can deliver the biggest impact.'
        : 'Operasyonlarınızı derinlemesine inceliyoruz, her iş akışını haritalıyoruz ve AI ile en büyük etkiyi nerede yaratabileceğimizi belirliyoruz.',
      badge: en ? '3-5 days' : '3-5 gun',
    },
    {
      num: '02',
      title: en ? 'Build & Test' : 'Kurulum & Test',
      desc: en
        ? 'We build the automations, connect your tools, and run thorough testing. Nothing goes live until it works perfectly.'
        : 'Otomasyonları kuruyor, araçlarınızı bağlıyor ve kapsamlı testler yapıyoruz. Kusursuz çalışmadan hiçbir şey canlıya geçmez.',
      badge: en ? '2-3 weeks' : '2-3 hafta',
    },
    {
      num: '03',
      title: en ? 'Live & Optimize' : 'Canli & Optimizasyon',
      desc: en
        ? 'Your systems go live and we monitor performance continuously. We optimize based on real data to keep improving your results.'
        : 'Sistemleriniz canlıya geçer ve performansı sürekli izleriz. Sonuçlarınızı iyileştirmek için gerçek verilere dayalı optimizasyon yaparız.',
      badge: en ? 'Ongoing' : 'Surekli',
    },
  ]

  return (
    <section id="surec" className="py-28 sm:py-40 bg-[#0f172a]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">

        <div className="text-center mb-16">
          <span className="text-white/40 text-[0.75rem] font-semibold tracking-[0.12em] uppercase mb-4 block">
            {en ? 'Process' : 'Surec'}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.1] tracking-[-0.02em] text-white mb-4">
            {en ? 'How we make it happen' : 'Nasil hayata geciriyoruz'}
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-5" />
          <p className="text-white/50 max-w-[500px] mx-auto leading-[1.7] text-[1rem]">
            {en
              ? 'A proven 3-step framework that takes you from audit to live automation in weeks, not months.'
              : 'Haftalar icinde sizi denetimden canli otomasyona tasıyan kanıtlanmıs 3 adımlı cerceve.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center md:text-left">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-6 h-px bg-white/10 translate-x-3" />
              )}
              <div className="text-[3rem] font-black text-accent/20 leading-none mb-4">{step.num}</div>
              <h3 className="text-[1.1rem] font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/50 text-[0.9rem] leading-[1.7] mb-4">{step.desc}</p>
              <span className="inline-block text-[0.72rem] font-semibold px-3 py-1 rounded-full
                bg-accent/10 text-accent border border-accent/20">
                {step.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
