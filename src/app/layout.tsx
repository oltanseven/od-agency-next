import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'OD Agency — Web Tasarım & AI Otomasyon', template: '%s | OD Agency' },
  description: 'İşletmenize özel yüksek performanslı web siteleri ve AI otomasyon çözümleri. Antalya merkezli, Türkiye geneli hizmet.',
  keywords: ['web tasarım', 'web sitesi', 'dijital ajans', 'AI otomasyon', 'e-ticaret', 'Antalya'],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'OD Agency',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <body className="bg-cream text-ink font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
