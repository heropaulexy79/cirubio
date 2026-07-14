import React from "react"
import { ServicesHero } from "@/components/services/services-hero"
import { CircularBioManufacturing } from "@/components/services/circular-bio-manufacturing"
import { WasteManagementSolutions } from "@/components/services/waste-management-solutions"
import { WhoWeServe } from "@/components/services/who-we-serve"
import { ServicesCta } from "@/components/services/services-cta"
import { PartnershipsCollaboration } from "@/components/services/partnerships-collaboration"
import { ServicesFinalCta } from "@/components/services/services-final-cta"
import { ServicesSocial } from "@/components/services/services-social"

export const metadata = {
  title: "Our Services | Grub Bio",
  description: "Enabling Circular Value Across Agriculture, Industry, and Communities.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHero />
      <CircularBioManufacturing />
      <WasteManagementSolutions />
      <WhoWeServe />
      <ServicesCta />
      <PartnershipsCollaboration />
      <ServicesFinalCta />
      <ServicesSocial />
    </div>
  )
}
