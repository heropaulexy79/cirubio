import { SustainabilityHero } from "@/components/sustainability/sustainability-hero"
import { SustainabilityIntro } from "@/components/sustainability/sustainability-intro"
import { CircularEconomyImpact } from "@/components/sustainability/circular-economy-impact"
import { ClimateAction } from "@/components/sustainability/climate-action"
import { SdgSection } from "@/components/sustainability/sdg-section"
import { BuildingImpact } from "@/components/sustainability/building-impact"
import { StayConnected } from "@/components/sustainability/stay-connected"

export const metadata = {
  title: "Sustainability at Grub.bio | Building a Circular Future",
  description: "Learn how Grub.bio reduces waste, lowers emissions, supports food security, and advances the Sustainable Development Goals through circular innovation.",
  keywords: ["sustainability", "circular economy", "carbon reduction", "SDGs", "methane reduction", "climate action", "environmental impact"],
}

export default function SustainabilityPage() {
  return (
    <>
      <SustainabilityHero />
      <SustainabilityIntro />
      <CircularEconomyImpact />
      <ClimateAction />
      <SdgSection />
      <BuildingImpact />
      <StayConnected />
    </>
  )
}
