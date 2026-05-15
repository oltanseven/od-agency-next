import Link from 'next/link'

type SolutionItem = { slug: string; title: string; desc: string; tag: string }

type Props = {
  dict: Record<string, unknown>
  locale: string
}

export default function SolutionsGridSection({ dict, locale }: Props) {
  const items = dict.items as SolutionItem[]
  const applyHref = locale === 'en' ? '/apply' : '/tr/apply'

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-ink tracking-[-0.02em] mb-4">
            {dict.title as string}
          </h2>
          <p className="text-ink/45 text-[1rem] max-w-[560px] mx-auto leading-relaxed">
            {dict.subtitle as string}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.slug}
              className="bg-cream-soft border border-black/[0.06] rounded-2xl p-7
                hover:border-accent/25 hover:shadow-[0_8px_30px_rgba(255,82,27,0.06)]
                transition-all duration-300 flex flex-col"
            >
              {item.tag && (
                <span className="self-start text-[0.68rem] font-bold uppercase tracking-wider text-accent bg-accent/8 px-3 py-1 rounded-full mb-4">
                  {item.tag}
                </span>
              )}
              <h3 className="text-[1.1rem] font-bold text-ink mb-3">{item.title}</h3>
              <p className="text-ink/45 text-[0.88rem] leading-relaxed flex-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={applyHref}
            className="bg-accent text-white px-8 rounded-full font-bold text-[0.92rem]
              no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.25)]
              transition-all duration-200 inline-flex items-center"
            style={{ minHeight: '48px' }}
          >
            {dict.cta as string} →
          </Link>
        </div>
      </div>
    </section>
  )
}
