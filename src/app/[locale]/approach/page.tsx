import type { Metadata } from 'next'
import { locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { notFound } from 'next/navigation'

type StepItem = { num: string; title: string; desc: string; details: string[] }
type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) return {}
  return {
    title: locale === 'en' ? 'Our Approach' : 'Yaklaşımımız',
    description: locale === 'en'
      ? 'Audit. Build. Scale. We start by understanding your operations, then build AI systems that compound over time.'
      : 'Denetle. Kur. Ölçekle. Operasyonlarınızı anlayarak başlıyoruz, sonra zamanla bileşik getiri sağlayan AI sistemleri kuruyoruz.',
  }
}

export default async function ApproachPage({ params }: Props) {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) notFound()
  const dict = await getDictionary(locale as Locale)
  const approach = dict.approach as Record<string, unknown>
  const steps = approach.steps as StepItem[]
  const antiAgency = approach.antiAgency as { title: string; items: string[] }

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-cream">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 text-center">
          <span className="text-accent text-[0.8rem] font-semibold uppercase tracking-wider">{approach.eyebrow as string}</span>
          <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black text-ink tracking-[-0.03em] mt-3 mb-4">
            {approach.headline as string}
          </h1>
          <p className="text-ink/45 text-[1.05rem] max-w-[600px] mx-auto leading-relaxed">
            {approach.subtitle as string}
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="pb-24 bg-cream">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6">
                <div className="text-[4rem] font-black text-accent/10 leading-none">{step.num}</div>
                <div>
                  <h2 className="text-[1.4rem] font-bold text-ink mb-3">{step.title}</h2>
                  <p className="text-ink/50 text-[0.95rem] leading-relaxed mb-5">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail, j) => (
                      <span key={j} className="text-[0.78rem] font-medium text-ink/40 bg-cream-soft border border-black/[0.06] px-3 py-1.5 rounded-full">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Agency */}
      <section className="py-24 bg-night text-white">
        <div className="max-w-[700px] mx-auto px-5 sm:px-8">
          <h2 className="text-[1.8rem] font-black tracking-[-0.02em] mb-10 text-center">{antiAgency.title}</h2>
          <div className="space-y-6">
            {antiAgency.items.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <p className="text-white/70 text-[0.95rem] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
