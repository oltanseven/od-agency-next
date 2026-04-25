import type { Metadata } from 'next'
import HeroSection         from '@/components/sections/HeroSection'

export const metadata: Metadata = {
  title: 'Web Tasarım Ajansı & Dijital Çözümler | OD Agency',
  description: 'Web sitesi yaptırmak mı istiyorsunuz? OD Agency ile profesyonel web tasarım, e-ticaret ve AI otomasyon hizmetleri. Antalya merkezli, Türkiye geneli. Ücretsiz keşif görüşmesi.',
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

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <AISection />
      <ProcessSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
