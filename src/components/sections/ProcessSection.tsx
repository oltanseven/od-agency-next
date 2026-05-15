'use client'

import { useI18n } from '@/i18n/context'

export default function ProcessSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const steps = [
    {
      num: '01',
      title: en ? 'Discovery & Audit' : 'Keşif & Denetim',
      desc: en
        ? 'We dive deep into your operations, map every workflow, and identify where AI can deliver the biggest impact.'
        : 'Operasyonlarınızı derinlemesine inceliyoruz, her iş akışını haritalıyoruz ve AI ile en büyük etkiyi nerede yaratabileceğimizi belirliyoruz.',
      badge: en ? '3-5 days' : '3-5 gün',
      color: '#22c55e',
      dotBg: 'bg-[#22c55e]',
      dotShadow: '0 0 12px rgba(34,197,94,0.5)',
      badgeBg: 'bg-[#D1FAE5]',
      badgeText: 'text-[#166534]',
    },
    {
      num: '02',
      title: en ? 'System Design' : 'Sistem Tasarımı',
      desc: en
        ? 'We architect the automation blueprint tailored to your business. Every integration, every trigger, every flow is planned before we build.'
        : 'İşletmenize özel otomasyon planını tasarlıyoruz. Her entegrasyon, her tetikleyici, her akış inşa etmeden önce planlanır.',
      badge: en ? '1-2 weeks' : '1-2 hafta',
      color: '#e8881a',
      dotBg: 'bg-coral',
      dotShadow: '0 0 12px rgba(232,136,26,0.5)',
      badgeBg: 'bg-[rgba(232,136,26,0.1)]',
      badgeText: 'text-coral',
    },
    {
      num: '03',
      title: en ? 'Build & Test' : 'Kurulum & Test',
      desc: en
        ? 'We build the automations, connect your tools, and run thorough testing. Nothing goes live until it works perfectly.'
        : 'Otomasyonları kuruyor, araçlarınızı bağlıyor ve kapsamlı testler yapıyoruz. Kusursuz çalışmadan hiçbir şey canlıya geçmez.',
      badge: en ? '2-3 weeks' : '2-3 hafta',
      color: '#ff521b',
      dotBg: 'bg-accent',
      dotShadow: '0 0 12px rgba(255,82,27,0.5)',
      badgeBg: 'bg-accent/10',
      badgeText: 'text-accent',
    },
    {
      num: '04',
      title: en ? 'Live & Optimize' : 'Canlı & Optimizasyon',
      desc: en
        ? 'Your systems go live and we monitor performance continuously. We optimize based on real data to keep improving your results.'
        : 'Sistemleriniz canlıya geçer ve performansı sürekli izleriz. Sonuçlarınızı iyileştirmek için gerçek verilere dayalı optimizasyon yaparız.',
      badge: en ? 'Ongoing' : 'Sürekli',
      color: '#e8881a',
      dotBg: 'bg-[#e8881a]',
      dotShadow: '0 0 12px rgba(232,136,26,0.5)',
      badgeBg: 'bg-[rgba(232,136,26,0.1)]',
      badgeText: 'text-[#e8881a]',
    },
  ]

  return (
    <section id="surec" className="pt-16 sm:pt-28 pb-20 sm:pb-36 bg-night relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full
        bg-accent/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full
        bg-coral/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            {en ? '// Process' : '// Süreç'}
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-white">
            {en ? (
              <>How we <span className="gradient-text">make it happen</span></>
            ) : (
              <>Nasıl <span className="gradient-text">hayata geçiriyoruz</span></>
            )}
          </h2>
          <p className="text-white/50 mt-3 max-w-[500px] mx-auto leading-[1.7]">
            {en
              ? 'A proven 4-step framework that takes you from audit to live automation in weeks, not months.'
              : 'Aylar değil, haftalar içinde sizi denetimden canlı otomasyona taşıyan kanıtlanmış 4 adımlı çerçeve.'}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[700px] mx-auto">
          {/* Vertical gradient line */}
          <div
            className="absolute top-0 bottom-0 left-[19px] sm:left-[23px] w-[2px] rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,82,27,0.4), rgba(232,136,26,0.2), transparent)',
            }}
          />

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.num} className="grid grid-cols-[40px_1fr] sm:grid-cols-[48px_1fr] gap-4 sm:gap-6 items-start">
                {/* Colored dot */}
                <div className="flex justify-center pt-1">
                  <div
                    className={`w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] rounded-full ${step.dotBg}`}
                    style={{ boxShadow: step.dotShadow }}
                  />
                </div>

                {/* Content card */}
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-[18px] p-6 sm:p-8
                  transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/20 text-[0.75rem] font-bold tracking-wider">{step.num}</span>
                    <span className={`text-[0.68rem] font-bold px-3 py-1 rounded-full ${step.badgeBg} ${step.badgeText}`}>
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-[1.1rem] font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/50 text-[0.88rem] leading-[1.65]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
