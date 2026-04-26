import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroSection         from '@/components/sections/HeroSection'

export const metadata: Metadata = {
  title: 'Web Siteniz Satış Yapsın | Web Tasarım & AI Otomasyon | OD Agency',
  description: 'Dönüşüm odaklı web tasarım, e-ticaret ve AI otomasyon çözümleri. 14 gün para iade garantisi. 7.500₺\'den başlayan fiyatlarla profesyonel dijital çözümler.',
  keywords: ['web tasarım', 'web sitesi yaptır', 'dijital ajans', 'web tasarım ajansı', 'e-ticaret sitesi', 'AI otomasyon', 'web tasarım Antalya', 'profesyonel web sitesi'],
  alternates: { canonical: 'https://odagency.com' },
  openGraph: {
    title: 'Web Tasarım Ajansı & Dijital Çözümler | OD Agency',
    description: 'Profesyonel web tasarım, e-ticaret ve AI otomasyon hizmetleri. Antalya merkezli, Türkiye geneli.',
    url: 'https://odagency.com',
  },
}

// Above-fold: direkt import (hero + marquee hemen görünür)
import MarqueeSection      from '@/components/sections/MarqueeSection'
import WaveDivider         from '@/components/WaveDivider'

// Below-fold: lazy load (scroll edince yüklenir)
const ServicesSection     = dynamic(() => import('@/components/sections/ServicesSection'))
const AISection           = dynamic(() => import('@/components/sections/AISection'))
const ProcessSection      = dynamic(() => import('@/components/sections/ProcessSection'))
const PortfolioSection    = dynamic(() => import('@/components/sections/PortfolioSection'))
const StatsSection        = dynamic(() => import('@/components/sections/StatsSection'))
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'))
const CTASection          = dynamic(() => import('@/components/sections/CTASection'))

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* cream → night: geniş yumuşak dalga */}
      <WaveDivider topColor="#FFFEF8" bottomColor="#0D0B1E" variant="soft" />
      <MarqueeSection />
      {/* night → cream: ters yönde asimetrik eğim */}
      <WaveDivider topColor="#0D0B1E" bottomColor="#FFFEF8" variant="wide" flip />
      <ServicesSection />
      {/* cream → cream-soft: minimal geçiş */}
      <WaveDivider topColor="#FFFEF8" bottomColor="#F6F2E8" variant="tilt" />
      <AISection />
      {/* cream-soft → night: geniş dalga, ters yön */}
      <WaveDivider topColor="#F6F2E8" bottomColor="#0D0B1E" variant="soft" flip />
      <ProcessSection />
      {/* night → cream: asimetrik eğim */}
      <WaveDivider topColor="#0D0B1E" bottomColor="#FFFEF8" variant="wide" />
      <PortfolioSection />
      {/* cream → accent: geniş dalga */}
      <WaveDivider topColor="#FFFEF8" bottomColor="#ff521b" variant="soft" flip />
      <StatsSection />
      {/* accent → cream: asimetrik eğim */}
      <WaveDivider topColor="#ff521b" bottomColor="#FFFEF8" variant="wide" flip />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
