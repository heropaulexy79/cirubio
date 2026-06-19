import { FloatingNav } from "@/components/navbar/floating-nav"
import { HeroSection } from "@/components/hero/hero-section"
import { IntroSection } from "@/components/sections/intro-section"
import { WasteValueSection } from "@/components/sections/waste-value-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ProductsSection } from "@/components/sections/products-section"
import { ServicesSection } from "@/components/sections/services-section"
import { DataSustainabilitySection } from "@/components/sections/data-sustainability-section"
import { ImpactMetricsSection } from "@/components/sections/impact-metrics-section"
import { NewsletterSection, SiteFooter } from "@/components/footer/site-footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <FloatingNav />
      <HeroSection />
      <IntroSection />
      <WasteValueSection />
      <FeaturesSection />
      <ProductsSection />
      <ServicesSection />
      <DataSustainabilitySection />
      <ImpactMetricsSection />
      <NewsletterSection />
      <SiteFooter />
    </main>
  )
}
