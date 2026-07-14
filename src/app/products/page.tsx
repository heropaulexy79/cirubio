import React from "react"
import { ProductsHero } from "@/components/products/products-hero"
import { ProteinProducts } from "@/components/products/protein-products"
import { FunctionalLipids } from "@/components/products/functional-lipids"
import { OrganicFertilizer } from "@/components/products/organic-fertilizer"
import { ProductsCta } from "@/components/products/products-cta"
import { ProductsFaq } from "@/components/products/products-faq"
import { ProductsNewsletterSection } from "@/components/products/products-newsletter"
import { ContactUsSection } from "@/components/sections/contact-us-section"

export const metadata = {
  title: "Our Products | Grub Bio",
  description: "Sustainable outputs from our circular process.",
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProductsHero />
      <ProteinProducts />
      <FunctionalLipids />
      <OrganicFertilizer />
      <ProductsCta />
      <ProductsFaq />
      <ProductsNewsletterSection />
      <ContactUsSection />
    </div>
  )
}
