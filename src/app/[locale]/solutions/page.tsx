import type { Metadata } from 'next'
import Link from 'next/link'
import { locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { notFound } from 'next/navigation'

type SolutionItem = { slug: string; title: string; desc: string; tag: string }
type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) return {}
  return {
    title: locale === 'en' ? 'AI Solutions' : 'AI Çözümler',
    description: locale === 'en'
      ? 'Purpose-built AI systems for the operations that matter most. WhatsApp agents, voice receptionists, review management, and more.'
      : 'En önemli operasyonlarınız için özel olarak tasarlanmış AI sistemleri. WhatsApp asistanları, sesli resepsiyonistler, yorum yönetimi ve daha fazlası.',
  }
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) notFound()
  const dict = await getDictionary(locale as Locale)
  const solutions = dict.solutions as Record<string, unknown>
  const items = solutions.items as SolutionItem[]
  const prefix = locale === 'en' ? '' : '/tr'

  return (
    <>
      <div className="pt-32 pb-16 bg-cream">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-black text-ink tracking-[-0.03em] mb-4">
            {solutions.title as string}
          </h1>
          <p className="text-ink/45 text-[1.05rem] max-w-[560px] mx-auto leading-relaxed">
            {solutions.subtitle as string}
          </p>
        </div>
      </div>

      <section className="pb-24 bg-cream">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.slug}
                className="bg-cream-soft border border-black/[0.06] rounded-2xl p-8
                  hover:border-accent/25 hover:shadow-[0_8px_30px_rgba(255,82,27,0.06)]
                  transition-all duration-300 flex flex-col"
              >
                {item.tag && (
                  <span className="self-start text-[0.68rem] font-bold uppercase tracking-wider text-accent bg-accent/8 px-3 py-1 rounded-full mb-4">
                    {item.tag}
                  </span>
                )}
                <h2 className="text-[1.2rem] font-bold text-ink mb-3">{item.title}</h2>
                <p className="text-ink/45 text-[0.9rem] leading-relaxed flex-1 mb-6">{item.desc}</p>
                <Link
                  href={`${prefix}/apply`}
                  className="text-accent text-[0.88rem] font-semibold no-underline hover:underline"
                >
                  {solutions.cta as string} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
