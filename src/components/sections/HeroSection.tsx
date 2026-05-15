'use client'

import Link from 'next/link'

type Props = {
  dict: Record<string, string>
  locale: string
}

export default function HeroSection({ dict, locale }: Props) {
  const applyHref = locale === 'en' ? '/apply' : '/tr/apply'
  const solutionsHref = locale === 'en' ? '/#solutions' : '/tr/#solutions'

  return (
    <section className="min-h-screen flex items-center pt-32 sm:pt-28 pb-24 bg-cream relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/20 px-4 py-1.5 rounded-full text-accent text-[0.78rem] font-semibold mb-8">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-[blink_2s_ease-in-out_infinite]" />
            {dict.eyebrow}
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.08] tracking-[-0.03em] text-ink mb-5">
            {dict.headline}
            <br />
            <span className="gradient-text">{dict.headlineAccent}</span>
          </h1>

          {/* Subhead */}
          <p className="text-ink/50 text-[1.05rem] sm:text-[1.15rem] leading-[1.75] mb-10 max-w-[620px] mx-auto">
            {dict.subhead}
          </p>

          {/* Dual CTA */}
          <div className="flex gap-4 justify-center flex-wrap mb-14">
            <Link
              href={applyHref}
              className="bg-accent text-white px-8 rounded-full font-bold text-[0.95rem]
                no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.25)]
                transition-all duration-200 inline-flex items-center"
              style={{ minHeight: '52px' }}
            >
              {dict.cta1} →
            </Link>
            <a
              href={solutionsHref}
              className="bg-transparent text-ink border-2 border-ink/15 px-8 rounded-full font-bold text-[0.95rem]
                no-underline hover:-translate-y-0.5 hover:border-accent hover:text-accent
                transition-all duration-200 inline-flex items-center"
              style={{ minHeight: '52px' }}
            >
              {dict.cta2}
            </a>
          </div>

          {/* Trust Bar */}
          <div className="flex justify-center gap-8 sm:gap-12 flex-wrap">
            {[
              { num: '10+', label: dict.trust1 },
              { num: '90%', label: dict.trust2 },
              { num: '99.9%', label: dict.trust3 },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-[1.5rem] sm:text-[1.8rem] font-black text-ink leading-none">{item.num}</div>
                <div className="text-[0.72rem] text-ink/40 font-medium mt-1 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
