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
    title: 'Oder Agency | Web Tasarım & AI Otomasyon',
    description: 'İşletmenize özel yüksek performanslı web siteleri ve AI otomasyon çözümleri. Antalya merkezli, Türkiye geneli hizmet.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Oder Agency — Web siteniz satış yapsın, siz büyüyün' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oder Agency | Web Tasarım & AI Otomasyon',
    description: 'İşletmenize özel yüksek performanslı web siteleri ve AI otomasyon çözümleri. Antalya merkezli, Türkiye geneli hizmet.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
    'max-video-preview': -1,
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://oder.agency'),
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': 'https://oder.agency/#organization',
  name: 'Oder Agency',
  legalName: 'Oder Agency',
  description: 'Antalya merkezli web tasarım, e-ticaret ve AI otomasyon ajansı. Türkiye geneli profesyonel dijital çözümler.',
  url: 'https://oder.agency',
  logo: 'https://oder.agency/og-image.png',
  telephone: '+905324652031',
  email: 'merhaba@oder.agency',
  foundingDate: '2026',
  founder: {
    '@type': 'Person',
    name: 'Oltan Seven',
    jobTitle: 'Kurucu & Geliştirici',
    url: 'https://oder.agency/hakkimizda',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Antalya',
    addressRegion: 'Antalya',
    addressCountry: 'TR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+905324652031',
    contactType: 'customer service',
    availableLanguage: ['Turkish', 'English'],
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
  knowsAbout: ['Web Tasarım', 'E-Ticaret', 'AI Otomasyon', 'SEO', 'Dijital Pazarlama'],
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
          gtag('config', 'G-HWJK99YCQK');
          gtag('config', 'AW-18122299826');
          document.addEventListener('click', function(e) {
            var el = e.target.closest('a[href]');
            if (!el) return;
            var href = el.getAttribute('href') || '';
            if (href.startsWith('tel:') || href.indexOf('wa.me') !== -1) {
              gtag('event', 'conversion', { send_to: 'AW-18122299826/FAqNCMW64aUcELKzscFD', value: 1.0, currency: 'TRY' });
            }
          });`}
        </Script>
      </head>
      <body className="bg-cream text-ink font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SectionIndicator />
      </body>
    </html>
  )
}
