import { Hero } from '../components/Hero'
import { CryptoGrid } from '../components/CryptoGrid'
import {
  FeaturesSection,
  StatsSection,
  ExchangePreview,
  EscrowPreview,
  HowItWorksSection,
  CtaSection,
} from '../components/landing/LandingSections'

export function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Live Markets */}
      <CryptoGrid />

      {/* Section 3: Features */}
      <FeaturesSection />

      {/* Section 4: Platform Stats */}
      <StatsSection />

      {/* Section 5: Exchange Preview */}
      <ExchangePreview />

      {/* Section 6: Escrow / Marketplace Preview */}
      <EscrowPreview />

      {/* Section 7: How It Works + CTA */}
      <HowItWorksSection />
      <CtaSection />
    </>
  )
}
