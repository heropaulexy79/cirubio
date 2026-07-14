import { SustainabilityHero } from "@/components/sustainability/sustainability-hero"
import { SustainabilityIntro } from "@/components/sustainability/sustainability-intro"
import { CircularEconomyImpact } from "@/components/sustainability/circular-economy-impact"
import { ClimateAction } from "@/components/sustainability/climate-action"
import { SdgSection } from "@/components/sustainability/sdg-section"
import { BuildingImpact } from "@/components/sustainability/building-impact"
import { StayConnected } from "@/components/sustainability/stay-connected"

export const metadata = {
  title: "Sustainability | CiruBio",
  description: "Our commitment to sustainable practices and circular bio-economy.",
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
