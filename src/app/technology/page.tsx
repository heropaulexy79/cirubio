import React from "react"
import { TechnologyHero } from "@/components/technology/technology-hero"
import { AutomatedRearing } from "@/components/technology/automated-rearing"
import { DigitalDashboard } from "@/components/technology/digital-dashboard"
import { EsgIntelligence } from "@/components/technology/esg-intelligence"
import { PartnerDashboard } from "@/components/technology/partner-dashboard"
import { NewsletterSection } from "@/components/footer/site-footer"

export const metadata = {
  title: "Our Technology | Grub Bio",
  description: "Where Biotechnology Meets Sustainability Intelligence.",
}

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TechnologyHero />
      <AutomatedRearing />
      <DigitalDashboard />
      <EsgIntelligence />
      <PartnerDashboard />
      <NewsletterSection />
    </div>
  )
}




