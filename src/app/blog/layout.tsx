import { I18nProvider } from '@/i18n/context'
import { getDictionary } from '@/i18n/dictionaries'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const dict = await getDictionary('tr')

  return (
    <I18nProvider locale="tr" dict={dict as Record<string, unknown>}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </I18nProvider>
  )
}
