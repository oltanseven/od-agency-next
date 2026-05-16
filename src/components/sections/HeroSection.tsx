'use client'

import Link from 'next/link'

type Props = {
  dict: Record<string, string>
  locale: string
}

export default function HeroSection({ dict, locale }: Props) {
  const applyHref = locale === 'en' ? '/apply' : '/tr/apply'

  return (
    <section className="min-h-screen flex items-center py-28 sm:py-40 bg-cream relative">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-[720px] mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/20
            px-4 py-1.5 rounded-full text-accent text-[0.78rem] font-semibold mb-8">
            <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
            {dict.eyebrow}
          </div>

          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.08] tracking-[-0.03em] mb-6 text-ink">
            {dict.headline}{' '}
            <span className="text-accent">{dict.headlineAccent}</span>
          </h1>

          <p className="text-ink/50 text-[1.05rem] leading-[1.75] mb-10 max-w-[520px] mx-auto">
            {dict.subhead}
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Link href={applyHref}
              className="bg-accent text-white px-10 rounded-full font-bold text-[1rem]
                no-underline hover:-translate-y-0.5 hover:shadow-lg
                transition-all duration-200 inline-flex items-center gap-1"
              style={{ minHeight: '52px' }}>
              {dict.cta1}
            </Link>
            <a href="#solutions"
              className="bg-transparent text-ink border-2 border-ink/10 px-10 rounded-full font-bold text-[1rem]
                no-underline hover:-translate-y-0.5 hover:border-accent hover:text-accent
                transition-all duration-200 inline-flex items-center"
              style={{ minHeight: '52px' }}>
              {dict.cta2}
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            <div className="text-center">
              <div className="text-[1.5rem] font-black text-ink leading-none">10+</div>
              <div className="text-[0.75rem] text-ink/40 font-medium mt-1">{dict.trust1}</div>
            </div>
            <div className="w-px h-8 bg-ink/10" />
            <div className="text-center">
              <div className="text-[1.5rem] font-black text-ink leading-none">90%</div>
              <div className="text-[0.75rem] text-ink/40 font-medium mt-1">{dict.trust2}</div>
            </div>
            <div className="w-px h-8 bg-ink/10" />
            <div className="text-center">
              <div className="text-[1.5rem] font-black text-ink leading-none">24/7</div>
              <div className="text-[0.75rem] text-ink/40 font-medium mt-1">{dict.trust3}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
