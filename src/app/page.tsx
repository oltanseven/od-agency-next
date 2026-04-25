import HeroSection         from '@/components/sections/HeroSection'
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
