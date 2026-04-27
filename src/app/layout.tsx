import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionIndicator from '@/components/SectionIndicator'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Oder Agency | Web Tasarım & AI Otomasyon', template: '%s | Oder Agency' },
  description: 'İşletmenize özel yüksek performanslı web siteleri ve AI otomasyon çözümleri. Antalya merkezli, Türkiye geneli hizmet.',
  keywords: ['web tasarım', 'web sitesi yaptır', 'dijital ajans', 'AI otomasyon', 'e-ticaret', 'web tasarım Antalya', 'kurumsal web sitesi'],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Oder Agency',
    url: 'https://oder.agency',
  },
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  metadataBase: new URL('https://oder.agency'),
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Oder Agency',
  description: 'Antalya merkezli web tasarım, e-ticaret ve AI otomasyon ajansı. Türkiye geneli profesyonel dijital çözümler.',
  url: 'https://oder.agency',
  telephone: '+905324652031',
  email: 'merhaba@oder.agency',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Antalya',
    addressRegion: 'Antalya',
    addressCountry: 'TR',
  },
  areaServed: [
    { '@type': 'City', name: 'Antalya' },
    { '@type': 'City', name: 'İstanbul' },
    { '@type': 'City', name: 'Ankara' },
    { '@type': 'Country', name: 'Türkiye' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Tasarım & Dijital Hizmetler',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kurumsal Web Tasarım' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Ticaret Sitesi' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Otomasyon' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing Page Tasarımı' } },
    ],
  },
  sameAs: [
    'https://www.instagram.com/oder.agency',
    'https://www.linkedin.com/company/oderagency',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HWJK99YCQK" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HWJK99YCQK');`}
        </Script>
      </head>
      <body className="bg-cream text-ink font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SectionIndicator />
      </body>
    </html>
  )
}
