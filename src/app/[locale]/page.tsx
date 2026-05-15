import type { Metadata } from 'next'
import { locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { notFound } from 'next/navigation'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import ProcessSection from '@/components/sections/ProcessSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import FitSection from '@/components/sections/FitSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

type Props = { params: Promise<{ locale: string }> }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) return {}
  const dict = await getDictionary(locale as Locale)
  const meta = dict.meta as { title: string; description: string; keywords: string }
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: locale === 'en' ? 'https://oder.agency' : `https://oder.agency/tr`,
      languages: { en: 'https://oder.agency', tr: 'https://oder.agency/tr' },
    },
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) notFound()
  const dict = await getDictionary(locale as Locale)

  return (
    <>
      <HeroSection dict={dict.hero as Record<string, string>} locale={locale} />
      <ProblemSection dict={dict.problem as Record<string, unknown>} />
      <SolutionSection dict={dict.solution as Record<string, unknown>} />
      <ProcessSection dict={dict.process as Record<string, unknown>} />
      <WhyUsSection dict={dict.whyUs as Record<string, unknown>} />
      <FitSection dict={dict.fit as Record<string, unknown>} />
      <FAQSection dict={dict.faq as Record<string, unknown>} />
      <CTASection dict={dict.cta as Record<string, string>} locale={locale} />
    </>
  )
}
