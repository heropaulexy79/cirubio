import React from "react"
import { TechnologyHero } from "@/components/technology/technology-hero"
import { AutomatedRearing } from "@/components/technology/automated-rearing"
import { DigitalDashboard } from "@/components/technology/digital-dashboard"
import { EsgIntelligence } from "@/components/technology/esg-intelligence"
import { PartnerDashboard } from "@/components/technology/partner-dashboard"
import { NewsletterSection } from "@/components/footer/site-footer"

export const metadata = {
  title: "Circular Biotechnology & AI Technology | Grub.bio",
  description: "Discover Grub.bio's biotechnology and AI-powered environmental intelligence platform transforming organic waste into valuable resources.",
  keywords: ["circular biotechnology", "AI environmental intelligence", "waste technology", "black soldier fly technology", "ESG technology", "smart waste management"],
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




