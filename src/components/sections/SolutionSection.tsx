'use client'

import { useI18n } from '@/i18n/context'
import NeuralBackground from '@/components/NeuralBackground'

export default function SolutionSection() {
  const { locale } = useI18n()
  const en = locale === 'en'

  const cards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      title: en ? 'Automate' : 'Otomatikleştir',
      desc: en
        ? 'Replace repetitive tasks with intelligent workflows that run themselves. Your team focuses on what matters.'
        : 'Tekrarlayan görevleri kendi kendine çalışan akıllı iş akışlarıyla değiştirin. Ekibiniz önemli işlere odaklansın.',
      tag: en ? 'Efficiency' : 'Verimlilik',
      tagColor: 'text-accent bg-accent/10 border-accent/20',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      ),
      title: en ? 'Scale' : 'Ölçekle',
      desc: en
        ? 'Handle 10x the volume without hiring 10x the people. AI systems grow with your demand.'
        : '10 kat fazla işi 10 kat fazla insan işe almadan yönetin. AI sistemleri talebinizle birlikte büyür.',
      tag: en ? 'Growth' : 'Büyüme',
      tagColor: 'text-[#166534] bg-[#D1FAE5] border-[rgba(22,163,74,0.25)]',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: en ? 'Measure' : 'Ölç',
      desc: en
        ? 'Every automation is tracked with real metrics. You see exactly what is working and what needs tuning.'
        : 'Her otomasyon gerçek metriklerle takip edilir. Neyin işe yaradığını ve neyin ayarlanması gerektiğini net görürsünüz.',
      tag: en ? 'Data-Driven' : 'Veri Odaklı',
      tagColor: 'text-coral bg-[rgba(232,136,26,0.1)] border-[rgba(232,136,26,0.25)]',
    },
  ]

  return (
    <section className="pt-16 sm:pt-28 pb-20 sm:pb-36 bg-night text-white relative overflow-hidden">
      <NeuralBackground />
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent text-[0.75rem] font-bold tracking-[0.12em] uppercase mb-3 block">
            {en ? '// Solution' : '// Çözüm'}
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-white">
            {en ? (
              <>AI that <span className="gradient-text">actually works</span></>
            ) : (
              <>Gerçekten <span className="gradient-text">çalışan AI</span></>
            )}
          </h2>
          <p className="text-white/50 mt-3 max-w-[500px] mx-auto leading-[1.7]">
            {en
              ? 'We build custom automation systems that integrate into your existing operations and deliver measurable results from day one.'
              : 'Mevcut operasyonlarınıza entegre olan ve ilk günden ölçülebilir sonuçlar üreten özel otomasyon sistemleri kuruyoruz.'}
          </p>
        </div>

        {/* AI Flow Diagram */}
        <div className="flex flex-col sm:flex-row items-center max-w-[720px] mx-auto bg-white/[0.04] border border-white/[0.09]
          rounded-[20px] px-5 sm:px-10 py-8 gap-4 sm:gap-0 mb-14">

          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center gap-2 text-center">
            <div className="w-[54px] h-[54px] rounded-[14px] bg-accent/10 border border-accent/20
              flex items-center justify-center mb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#ff521b" strokeWidth="1.5" strokeLinecap="round" opacity="0.38"/>
                <circle cx="12" cy="7" r="4" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
                <path d="M8 11l4 4 4-4" stroke="#ff521b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[0.8rem] font-bold text-white">
              {en ? 'Customer Action' : 'Müşteri Aksiyonu'}
            </span>
            <span className="text-[0.7rem] text-white/50">
              {en ? 'Form, message, visit...' : 'Form, mesaj, ziyaret...'}
            </span>
          </div>

          {/* Connector 1 */}
          <div className="hidden sm:block flex-none w-[60px] h-[2px] bg-white/[0.09] relative overflow-visible mx-2">
            <div className="absolute -top-[3px] w-2 h-2 rounded-full bg-accent
              shadow-[0_0_6px_rgba(255,82,27,0.6)] animate-[flowDot_2s_linear_infinite]" />
          </div>
          <div className="sm:hidden w-[2px] h-8 bg-white/[0.09] relative">
            <div className="absolute -left-[3px] w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(255,82,27,0.6)]" />
          </div>

          {/* Step 2 — center (AI) */}
          <div className="flex-1 flex flex-col items-center gap-2 text-center">
            <div className="w-[54px] h-[54px] rounded-[14px] flex items-center justify-center mb-1
              border border-accent/30 shadow-[0_0_24px_rgba(255,82,27,0.15)]"
              style={{background:'linear-gradient(135deg,rgba(255,82,27,0.12),rgba(232,136,26,0.12))'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6L15 19H9l-.3-4.1A7 7 0 0112 2z" stroke="#ff521b" strokeWidth="1.5" strokeLinejoin="round" opacity="0.38"/>
                <path d="M9 21h6M8 9h.01M12 7v4M16 9h.01" stroke="#ff521b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-[0.8rem] font-bold text-accent">
              {en ? 'AI Engine' : 'AI Motor'}
            </span>
            <span className="text-[0.7rem] text-white/50">
              {en ? 'Analyze & decide' : 'Analiz & karar'}
            </span>
          </div>

          {/* Connector 2 */}
          <div className="hidden sm:block flex-none w-[60px] h-[2px] bg-white/[0.09] relative overflow-visible mx-2">
            <div className="absolute -top-[3px] w-2 h-2 rounded-full bg-accent
              shadow-[0_0_6px_rgba(255,82,27,0.6)] animate-[flowDot_2s_linear_infinite_1s]" />
          </div>
          <div className="sm:hidden w-[2px] h-8 bg-white/[0.09] relative">
            <div className="absolute -left-[3px] w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(255,82,27,0.6)]" />
          </div>

          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center gap-2 text-center">
            <div className="w-[54px] h-[54px] rounded-[14px] bg-accent/10 border border-accent/20
              flex items-center justify-center mb-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#ff521b" strokeWidth="1.5" strokeLinecap="round" opacity="0.38"/>
                <path d="M22 4L12 14.01l-3-3" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[0.8rem] font-bold text-white">
              {en ? 'Automated Action' : 'Otomatik Aksiyon'}
            </span>
            <span className="text-[0.7rem] text-white/50">
              {en ? 'Email, response, record...' : 'E-posta, yanıt, kayıt...'}
            </span>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(({ icon, title, desc, tag, tagColor }) => (
            <div key={title}
              className="bg-white/[0.04] border border-white/[0.09] rounded-[18px] p-8
                transition-all duration-300 hover:-translate-y-1 hover:border-accent/30
                hover:shadow-[0_16px_40px_rgba(255,82,27,0.10)]">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-5">
                {icon}
              </div>
              <h3 className="text-[1.15rem] font-bold text-white mb-3">{title}</h3>
              <p className="text-white/50 text-[0.88rem] leading-[1.65]">{desc}</p>
              <span className={`inline-block mt-4 text-[0.68rem] font-bold px-3 py-1 rounded-full border ${tagColor}`}>
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
