import type { Metadata } from 'next'
import { locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { notFound } from 'next/navigation'
import ApplyForm from '@/components/ApplyForm'

type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) return {}
  return {
    title: locale === 'en' ? 'Get a Custom Quote' : 'Özel Teklif Alın',
    description: locale === 'en'
      ? 'Tell us about your business and what you want to automate. We\'ll get back within 24 hours.'
      : 'İşletmenizi ve neleri otomatikleştirmek istediğinizi anlatın. 24 saat içinde dönüş yapacağız.',
  }
}

export default async function ApplyPage({ params }: Props) {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) notFound()
  const dict = await getDictionary(locale as Locale)
  const apply = dict.apply as Record<string, unknown>

  return (
    <div className="pt-32 pb-24 bg-cream">
      <div className="max-w-[640px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-ink tracking-[-0.03em] mb-4">
            {apply.title as string}
          </h1>
          <p className="text-ink/45 text-[1rem] leading-relaxed">
            {apply.subtitle as string}
          </p>
        </div>

        <ApplyForm dict={apply} />

        {/* Trust badges */}
        <div className="flex justify-center gap-6 mt-10">
          {(apply.trust as string[]).map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[0.78rem] text-ink/40">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-[#22c55e]"><path d="M20 6L9 17l-5-5"/></svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
