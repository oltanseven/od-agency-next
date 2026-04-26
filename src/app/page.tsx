import type { Metadata } from 'next'
import HeroSection         from '@/components/sections/HeroSection'

export const metadata: Metadata = {
  title: 'Web Tasarım Ajansı & Dijital Çözümler | OD Agency',
  description: 'Web sitesi yaptırmak mı istiyorsunuz? OD Agency ile dönüşüm odaklı web tasarım, e-ticaret ve AI otomasyon hizmetleri. ₺7.500\'den başlayan fiyatlar, 14 gün memnuniyet garantisi. Ücretsiz web analizi alın.',
  keywords: ['web tasarım', 'web sitesi yaptır', 'dijital ajans', 'web tasarım ajansı', 'e-ticaret sitesi', 'AI otomasyon', 'web tasarım Antalya', 'profesyonel web sitesi'],
  alternates: { canonical: 'https://odagency.com' },
  openGraph: {
    title: 'Web Tasarım Ajansı & Dijital Çözümler | OD Agency',
    description: 'Profesyonel web tasarım, e-ticaret ve AI otomasyon hizmetleri. Antalya merkezli, Türkiye geneli.',
    url: 'https://odagency.com',
  },
}


import MarqueeSection      from '@/components/sections/MarqueeSection'
import ServicesSection     from '@/components/sections/ServicesSection'
import AISection           from '@/components/sections/AISection'
import ProcessSection      from '@/components/sections/ProcessSection'
import PortfolioSection    from '@/components/sections/PortfolioSection'
import StatsSection        from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection          from '@/components/sections/CTASection'
import WaveDivider         from '@/components/WaveDivider'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WaveDivider topColor="#FFFEF8" bottomColor="#0D0B1E" variant="wave" />
      <MarqueeSection />
      <WaveDivider topColor="#0D0B1E" bottomColor="#FFFEF8" variant="curve" flip />
      <ServicesSection />
      {/* Services → AI: çok yakın renkler, slope yeter */}
      <WaveDivider topColor="#FFFEF8" bottomColor="#F6F2E8" variant="slope" />
      <AISection />
      <WaveDivider topColor="#F6F2E8" bottomColor="#0D0B1E" variant="wave" flip />
      <ProcessSection />
      <WaveDivider topColor="#0D0B1E" bottomColor="#FFFEF8" variant="curve" />
      <PortfolioSection />
      <WaveDivider topColor="#FFFEF8" bottomColor="#ff521b" variant="wave" flip />
      <StatsSection />
      <WaveDivider topColor="#ff521b" bottomColor="#FFFEF8" variant="slope" />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
