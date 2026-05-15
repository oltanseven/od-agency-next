import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { I18nProvider } from '@/i18n/context'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const dict = await getDictionary(locale as Locale)

  return (
    <I18nProvider locale={locale as Locale} dict={dict as Record<string, unknown>}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </I18nProvider>
  )
}
