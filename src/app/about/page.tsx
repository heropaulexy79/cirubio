import React from "react"
import { AboutHero } from "@/components/about/about-hero"
import { AboutIntro } from "@/components/about/about-intro"
import { BioManufacturing } from "@/components/about/bio-manufacturing"
import { MissionVision } from "@/components/about/mission-vision"
import { FounderMessage } from "@/components/about/founder-message"
import { CircularProduction } from "@/components/about/circular-production"
import { ResourceRecovery } from "@/components/about/resource-recovery"
import { SdgGoals } from "@/components/about/sdg-goals"
import { NewsletterSection } from "@/components/footer/site-footer"

export const metadata = {
  title: "About Grub.bio | Driving Circular Bioeconomy Innovation",
  description: "Learn about Grub.bio's mission to transform organic waste into sustainable resources through biotechnology, innovation, and circular economy solutions.",
  keywords: ["circular bioeconomy", "sustainability company", "biotechnology", "climate innovation", "insect farming"],
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutIntro />
      <BioManufacturing />
      <MissionVision />
      <FounderMessage />
      <CircularProduction />
      <ResourceRecovery />
      <SdgGoals />
      <NewsletterSection />
    </div>
  )
}
