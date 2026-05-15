'use client'

import Link from 'next/link'

type Props = {
  dict: Record<string, string>
  locale: string
}

/* Mini dashboard kartları */
const dashboards = [
  { bg: 'from-[#F5F3FF] to-[#EDE9FE]', label: 'WhatsApp Bot', accent: '#7c3aed', dark: false },
  { bg: 'from-[#FFF7ED] to-[#FFEDD5]', label: 'Voice AI', accent: '#ea580c', dark: false },
  { bg: 'from-[#EFF6FF] to-[#DBEAFE]', label: 'CRM', accent: '#2563eb', dark: false },
  { bg: 'from-[#0F1A2E] to-[#1E2D47]', label: 'Analytics', accent: '#38bdf8', dark: true },
  { bg: 'from-[#F0FDF4] to-[#DCFCE7]', label: 'Reviews', accent: '#16a34a', dark: false },
  { bg: 'from-[#FFFBEB] to-[#FEF3C7]', label: 'Invoices', accent: '#d97706', dark: false },
  { bg: 'from-[#FDF2F8] to-[#FCE7F3]', label: 'Email AI', accent: '#db2777', dark: false },
  { bg: 'from-[#F0FDFA] to-[#CCFBF1]', label: 'Workflows', accent: '#0d9488', dark: false },
  { bg: 'from-[#FEFCE8] to-[#FEF9C3]', label: 'Scheduler', accent: '#ca8a04', dark: false },
]

function MiniCard({ idx }: { idx: number }) {
  const s = dashboards[idx % dashboards.length]
  const txt = s.dark ? 'rgba(255,255,255,' : 'rgba(0,0,0,'
  return (
    <div className="w-[200px] h-[138px] shrink-0 rounded-[12px] overflow-hidden border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.15)] bg-white">
      <div className="h-[22px] bg-[#F4F4F6] border-b border-black/5 flex items-center gap-1 px-2">
        <span className="w-[6px] h-[6px] rounded-full bg-[#FF5F57]" />
        <span className="w-[6px] h-[6px] rounded-full bg-[#FEBC2E]" />
        <span className="w-[6px] h-[6px] rounded-full bg-[#28C840]" />
        <div className="flex-1 h-[10px] bg-[#E2E2E6] rounded-sm ml-1" />
      </div>
      <div className={`h-[calc(100%-22px)] bg-gradient-to-br ${s.bg} p-3 flex flex-col`}>
        <div className="flex items-center justify-between mb-2">
          <div className="h-[6px] w-[40px] rounded-sm" style={{ background: s.accent }} />
          <div className="flex gap-1.5">
            <div className="h-[4px] w-[20px] rounded-sm" style={{ background: `${txt}0.15)` }} />
            <div className="h-[4px] w-[20px] rounded-sm" style={{ background: `${txt}0.15)` }} />
          </div>
        </div>
        <div className="h-[8px] w-[70%] rounded-sm mb-1.5" style={{ background: `${txt}0.6)` }} />
        <div className="h-[5px] w-[50%] rounded-sm mb-2.5" style={{ background: `${txt}0.2)` }} />
        <div className="h-[12px] w-[55px] rounded-full mb-2.5" style={{ background: s.accent }} />
        <div className="flex gap-1.5 mt-auto">
          <div className="flex-1 h-[22px] rounded-[4px]" style={{ background: `${txt}0.06)` }} />
          <div className="flex-1 h-[22px] rounded-[4px]" style={{ background: `${txt}0.06)` }} />
          <div className="flex-1 h-[22px] rounded-[4px]" style={{ background: `${txt}0.06)` }} />
        </div>
        <div className="mt-1.5 text-[6px] font-bold tracking-wider uppercase text-right" style={{ color: `${txt}0.25)` }}>
          {s.label}
        </div>
      </div>
    </div>
  )
}

const row1 = [0,1,2,3,4,5,6]
const row2 = [7,8,6,3,1,0,5]
const row3 = [4,2,7,8,0,6,1]

export default function HeroSection({ dict, locale }: Props) {
  const applyHref = locale === 'en' ? '/apply' : '/tr/apply'
  const solutionsId = '#solutions'

  return (
    <section className="min-h-screen flex items-center pt-40 sm:pt-32 pb-40 sm:pb-36 bg-cream relative overflow-hidden">

      {/* Kayan kart arka plani */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.25] sm:opacity-[0.15]">
        <div className="flex flex-col gap-4 justify-center h-full">
          <div className="flex gap-4 w-max animate-[slideLeft_38s_linear_infinite]">
            {[...row1,...row1].map((t,i) => <MiniCard key={i} idx={t} />)}
          </div>
          <div className="flex gap-4 w-max animate-[slideRight_44s_linear_infinite]">
            {[...row2,...row2].map((t,i) => <MiniCard key={i} idx={t} />)}
          </div>
          <div className="flex gap-4 w-max animate-[slideLeft_30s_linear_infinite]">
            {[...row3,...row3].map((t,i) => <MiniCard key={i} idx={t} />)}
          </div>
        </div>
      </div>

      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{background:'linear-gradient(to bottom,#FFFEF8 0%,transparent 10%,transparent 90%,#FFFEF8 100%), linear-gradient(to right,#FFFEF8 0%,transparent 8%,transparent 92%,#FFFEF8 100%)'}} />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* SOL: metin karti */}
          <div className="bg-[rgba(255,254,248,0.82)] sm:bg-[rgba(255,254,248,0.88)] backdrop-blur-xl border border-black/10
            shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-3xl p-6 sm:p-9 md:p-12">

            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/40
              px-3 sm:px-4 py-1.5 rounded-full text-accent text-[0.7rem] sm:text-[0.8rem] font-semibold mb-7">
              <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 animate-[blink_2s_ease-in-out_infinite]" />
              {dict.eyebrow}
            </div>

            <h1 className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-black leading-[1.08] tracking-[-0.03em] mb-4 text-ink">
              {dict.headline}<br />
              <span className="gradient-text">{dict.headlineAccent}</span>
            </h1>

            <p className="text-ink/50 text-[0.95rem] leading-[1.75] mb-8 max-w-[420px]">
              {dict.subhead}
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href={applyHref}
                className="bg-accent text-white px-8 rounded-full font-bold text-[0.95rem]
                  no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.2)]
                  transition-all duration-200 inline-flex items-center gap-1"
                style={{ minHeight: '48px' }}>
                {dict.cta1} →
              </Link>
              <a href={solutionsId}
                className="bg-transparent text-ink border-2 border-ink/15 px-8 rounded-full font-bold text-[0.95rem]
                  no-underline hover:-translate-y-0.5 hover:border-accent hover:text-accent
                  transition-all duration-200 inline-flex items-center"
                style={{ minHeight: '48px' }}>
                {dict.cta2}
              </a>
            </div>
          </div>

          {/* SAG: metric pills */}
          <div className="hidden lg:block relative h-[400px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[360px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.13)]
              border border-black/[0.07] overflow-hidden">
              <div className="bg-[#F2F2F2] border-b border-black/[0.06] px-3 py-2 flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 bg-[#E5E5E5] rounded-full h-[22px] px-2.5 flex items-center text-[0.62rem] text-gray-400">
                  oder.agency/dashboard
                </div>
              </div>
              <div className="p-3.5 bg-[#FAFAFA]">
                <div className="h-7 bg-white rounded-lg mb-3 border border-black/5" />
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 mb-3 border border-orange-100/50">
                  <div className="h-3 w-[70%] bg-ink/80 rounded-md mb-2" />
                  <div className="h-2 w-[55%] bg-ink/30 rounded mb-3.5" />
                  <div className="h-5 w-28 bg-accent rounded-full" />
                </div>
                <div className="flex gap-2">
                  {['from-orange-50 to-red-50','from-blue-50 to-indigo-50','from-green-50 to-emerald-50'].map(g => (
                    <div key={g} className={`flex-1 h-14 rounded-lg bg-gradient-to-br ${g} border border-black/5`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute top-2.5 left-[-20px] bg-white border border-black/[0.08]
              shadow-[0_8px_28px_rgba(0,0,0,0.1)] rounded-2xl px-4 py-3
              flex items-center gap-3 whitespace-nowrap animate-[floatA_4s_ease-in-out_infinite]">
              <div className="w-9 h-9 rounded-[10px] bg-accent/10 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="6" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
                  <path d="M8 12l3 3 5-5" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-[1.15rem] font-black text-ink leading-none">90%</div>
                <div className="text-[0.72rem] text-ink/50 font-medium mt-0.5">{dict.trust2}</div>
              </div>
            </div>

            <div className="absolute bottom-7 right-[-10px] bg-white border border-black/[0.08]
              shadow-[0_8px_28px_rgba(0,0,0,0.1)] rounded-2xl px-4 py-3
              flex items-center gap-3 whitespace-nowrap animate-[floatB_5s_ease-in-out_infinite]">
              <div className="w-9 h-9 rounded-[10px] bg-accent/10 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#ff521b" strokeWidth="1.5" opacity="0.38"/>
                  <path d="M12 6v6l4 2" stroke="#ff521b" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="text-[1.15rem] font-black text-ink leading-none">24/7</div>
                <div className="text-[0.72rem] text-ink/50 font-medium mt-0.5">{dict.trust3}</div>
              </div>
            </div>

            <div className="absolute top-3.5 right-0 bg-white border border-black/[0.08]
              shadow-[0_8px_28px_rgba(0,0,0,0.1)] rounded-2xl px-4 py-3 text-center
              animate-[floatC_4.5s_ease-in-out_infinite]">
              <div className="text-[1.5rem] font-black text-[#28C840] leading-none">10+</div>
              <div className="text-[0.7rem] text-ink/50 font-medium mt-1">{dict.trust1}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
