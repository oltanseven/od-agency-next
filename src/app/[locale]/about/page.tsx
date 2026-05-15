import type { Metadata } from 'next'
import Link from 'next/link'
import { locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { notFound } from 'next/navigation'

type PrincipleItem = { title: string; desc: string }
type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) return {}
  return {
    title: locale === 'en' ? 'About' : 'Hakkımızda',
    description: locale === 'en'
      ? 'Built by operators, for operators. Meet the team behind Oder Agency.'
      : 'Operatörler tarafından, operatörler için kuruldu. Oder Agency ekibini tanıyın.',
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) notFound()
  const dict = await getDictionary(locale as Locale)
  const about = dict.about as Record<string, unknown>
  const principles = about.principles as { title: string; items: PrincipleItem[] }
  const tech = about.tech as { title: string; items: string[] }
  const prefix = locale === 'en' ? '' : '/tr'

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-cream">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 text-center">
          <span className="text-accent text-[0.8rem] font-semibold uppercase tracking-wider">{about.eyebrow as string}</span>
          <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black text-ink tracking-[-0.03em] mt-3 mb-6">
            {about.headline as string}
          </h1>
          <p className="text-ink/50 text-[1.05rem] leading-[1.85] mb-4 max-w-[640px] mx-auto">
            {about.story as string}
          </p>
          <p className="text-ink/50 text-[1.05rem] leading-[1.85] max-w-[640px] mx-auto">
            {about.story2 as string}
          </p>
        </div>
      </div>

      {/* Principles */}
      <section className="py-24 bg-cream-soft">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <h2 className="text-[1.8rem] font-black text-ink tracking-[-0.02em] mb-12 text-center">{principles.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.items.map((item, i) => (
              <div key={i} className="bg-cream border border-black/[0.06] rounded-2xl p-7">
                <h3 className="text-[1.05rem] font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-ink/45 text-[0.88rem] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-night text-white">
        <div className="max-w-[700px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-[1.8rem] font-black tracking-[-0.02em] mb-10">{tech.title}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tech.items.map((item) => (
              <span key={item} className="text-[0.85rem] font-medium text-white/60 bg-white/8 border border-white/10 px-4 py-2 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-[600px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-[1.6rem] font-black text-ink mb-4">
            {locale === 'en' ? 'Ready to work together?' : 'Birlikte çalışmaya hazır mısınız?'}
          </h2>
          <Link
            href={`${prefix}/apply`}
            className="bg-accent text-white px-8 rounded-full font-bold text-[0.95rem]
              no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,82,27,0.25)]
              transition-all duration-200 inline-flex items-center"
            style={{ minHeight: '52px' }}
          >
            {locale === 'en' ? 'Book a Strategy Call' : 'Strateji Görüşmesi'} →
          </Link>
        </div>
      </section>
    </>
  )
}
