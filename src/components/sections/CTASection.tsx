import Link from 'next/link'

type Props = {
  dict: Record<string, string>
  locale: string
}

export default function CTASection({ dict, locale }: Props) {
  const applyHref = locale === 'en' ? '/apply' : '/tr/apply'

  return (
    <section className="py-24 sm:py-32 bg-night text-white">
      <div className="max-w-[700px] mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black tracking-[-0.02em] mb-4">
          {dict.title}
        </h2>
        <p className="text-white/50 text-[1rem] leading-relaxed mb-10 max-w-[520px] mx-auto">
          {dict.subtitle}
        </p>
        <Link
          href={applyHref}
          className="bg-accent text-white px-10 rounded-full font-bold text-[1rem]
            no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,82,27,0.35)]
            transition-all duration-200 inline-flex items-center"
          style={{ minHeight: '56px' }}
        >
          {dict.button} →
        </Link>
        <p className="text-white/30 text-[0.78rem] mt-5">{dict.note}</p>
      </div>
    </section>
  )
}
