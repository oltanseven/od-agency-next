import type { Metadata } from 'next'
import HeroSection         from '@/components/sections/HeroSection'
import MarqueeSection      from '@/components/sections/MarqueeSection'
import ServicesSection     from '@/components/sections/ServicesSection'
import AISection           from '@/components/sections/AISection'
import ProcessSection      from '@/components/sections/ProcessSection'
import StatsSection        from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection          from '@/components/sections/CTASection'
import WaveDivider         from '@/components/WaveDivider'

export const metadata: Metadata = {
  title: 'Web Siteniz Satış Yapsın | Web Tasarım & AI Otomasyon | Oder Agency',
  description: 'Dönüşüm odaklı web tasarım, e-ticaret ve AI otomasyon çözümleri. 14 gün para iade garantisi. 7.500₺\'den başlayan fiyatlarla profesyonel dijital çözümler.',
  keywords: ['web tasarım', 'web sitesi yaptır', 'dijital ajans', 'web tasarım ajansı', 'e-ticaret sitesi', 'AI otomasyon', 'web tasarım Antalya', 'profesyonel web sitesi'],
  alternates: { canonical: 'https://oder.agency' },
  openGraph: {
    title: 'Web Tasarım Ajansı & Dijital Çözümler | Oder Agency',
    description: 'Profesyonel web tasarım, e-ticaret ve AI otomasyon hizmetleri. Antalya merkezli, Türkiye geneli.',
    url: 'https://oder.agency',
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <WaveDivider topColor="#FFFEF8" bottomColor="#0D0B1E" variant="soft" />
      <MarqueeSection />
      <WaveDivider topColor="#0D0B1E" bottomColor="#FFFEF8" variant="wide" flip />
      <ServicesSection />
      <WaveDivider topColor="#FFFEF8" bottomColor="#F6F2E8" variant="tilt" />
      <AISection />
      <WaveDivider topColor="#F6F2E8" bottomColor="#0D0B1E" variant="soft" flip />
      <ProcessSection />
      <WaveDivider topColor="#0D0B1E" bottomColor="#ff521b" variant="wide" />
      <StatsSection />
      <WaveDivider topColor="#ff521b" bottomColor="#FFFEF8" variant="wide" flip />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
