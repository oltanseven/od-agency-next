import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import BackgroundBlurs from '@/components/BackgroundBlurs'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Oder Agency | AI-Powered Growth Partner', template: '%s | Oder Agency' },
  description: 'We build AI systems that run your business operations — so you can focus on growth. WhatsApp agents, voice receptionists, and automation that works 24/7.',
  keywords: ['AI automation', 'growth partner', 'WhatsApp AI agent', 'voice receptionist', 'business automation', 'AI solutions'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Oder Agency',
    url: 'https://oder.agency',
    title: 'Oder Agency | AI-Powered Growth Partner',
    description: 'We build AI systems that run your business operations — so you can focus on growth.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Oder Agency — AI-Powered Growth Partner' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oder Agency | AI-Powered Growth Partner',
    description: 'We build AI systems that run your business operations — so you can focus on growth.',
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
  description: 'AI-powered growth partner. We build AI systems that run business operations — WhatsApp agents, voice receptionists, and automation that works 24/7.',
  url: 'https://oder.agency',
  logo: 'https://oder.agency/og-image.png',
  telephone: '+905324652031',
  email: 'merhaba@oder.agency',
  foundingDate: '2026',
  founder: {
    '@type': 'Person',
    name: 'Oltan Seven',
    jobTitle: 'Founder & AI Automation Specialist',
    url: 'https://oder.agency/about',
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
    { '@type': 'Country', name: 'Türkiye' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Automation Solutions',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WhatsApp AI Sales Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Voice AI Receptionist' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Review & Reputation Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer Reactivation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Invoice & AP Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom AI Workflows' } },
    ],
  },
  knowsAbout: ['AI Automation', 'Voice AI', 'Business Process Automation', 'Machine Learning', 'Growth Systems'],
  sameAs: [
    'https://www.instagram.com/oder.agency',
    'https://www.linkedin.com/company/oderagency',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
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
      <body className="bg-cream text-ink font-sans antialiased transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ThemeProvider>
          <BackgroundBlurs />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
