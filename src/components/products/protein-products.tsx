"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { PRODUCTS_PAGE_QUERY } from "@/sanity/lib/queries"
import type { ProductsPageDoc } from "@/sanity/lib/types"

function KeyBenefitsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
      <path d="M12 22l-3.172-1.314-3.428.163-.163-3.428L3.923 14.25 6 12 3.923 9.75l1.314-3.172 3.428-.163.163-3.428L12 2l3.172 1.314 3.428-.163.163 3.428L20.077 9.75 18 12l2.077 2.25-1.314 3.172-3.428.163-.163 3.428L12 22z"/>
      <path d="M12 15l-3.09 1.62.59-3.44-2.5-2.44 3.45-.5L12 7l1.55 3.24 3.45.5-2.5 2.44.59 3.44Z"/>
    </svg>
  )
}

const DEFAULT_PROTEIN = {
  badge: "Protein Products",
  sectionTitle: "Black Soldier Fly Larvae\nMeal",
  sectionSubheadline: "A sustainable, locally produced protein ingredient designed to support the growing demand for high-performance animal nutrition.",
  fullFatTitle: "Full-Fat BSF Larvae Meal",
  fullFatDescription: "A nutrient-dense protein and energy source for poultry, aquaculture, and livestock feed formulations.",
  fullFatBenefits: [
    "High-quality protein with natural energy-rich lipids",
    "Supports growth performance and feed efficiency",
    "Sustainable alternative to imported protein ingredients",
    "Produced through a resource-efficient circular process"
  ],
  fullFatImage: "/full-fat-protein-meal.jpg",
  defattedTitle: "Defatted BSF Larvae Meal",
  defattedDescription: "A concentrated protein ingredient developed for advanced feed formulations requiring higher protein inclusion levels.",
  defattedBenefits: [
    "High protein concentration for optimized feed performance",
    "Excellent digestibility and nutrient availability",
    "Suitable for poultry, aquaculture, and livestock applications",
    "Helps reduce dependence on conventional protein sources"
  ],
  defattedImage: "/Defatted-BSF-Larvae-Meal.jpg"
}

export function ProteinProducts() {
  const [content, setContent] = useState(DEFAULT_PROTEIN)

  useEffect(() => {
    fetchSanityData<ProductsPageDoc | null>(PRODUCTS_PAGE_QUERY, null).then((data) => {
      if (data) {
        setContent({
          badge: data.proteinBadge || DEFAULT_PROTEIN.badge,
          sectionTitle: data.proteinSectionTitle || DEFAULT_PROTEIN.sectionTitle,
          sectionSubheadline: data.proteinSectionSubheadline || DEFAULT_PROTEIN.sectionSubheadline,
          fullFatTitle: data.fullFatTitle || DEFAULT_PROTEIN.fullFatTitle,
          fullFatDescription: data.fullFatDescription || DEFAULT_PROTEIN.fullFatDescription,
          fullFatBenefits: data.fullFatBenefits && data.fullFatBenefits.length > 0 ? data.fullFatBenefits : DEFAULT_PROTEIN.fullFatBenefits,
          fullFatImage: resolveImageUrl(data.fullFatImage, DEFAULT_PROTEIN.fullFatImage),
          defattedTitle: data.defattedTitle || DEFAULT_PROTEIN.defattedTitle,
          defattedDescription: data.defattedDescription || DEFAULT_PROTEIN.defattedDescription,
          defattedBenefits: data.defattedBenefits && data.defattedBenefits.length > 0 ? data.defattedBenefits : DEFAULT_PROTEIN.defattedBenefits,
          defattedImage: resolveImageUrl(data.defattedImage, DEFAULT_PROTEIN.defattedImage),
        })
      }
    })
  }, [])

  return (
    <section id="protein" className="py-20 bg-[#fafafa]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black font-semibold text-sm mb-4"
          >
            {content.badge}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.15] mb-6 whitespace-pre-line"
          >
            {content.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/80 text-base md:text-lg leading-[1.5] max-w-2xl"
          >
            {content.sectionSubheadline}
          </motion.p>
        </div>

        {/* 2-Column Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Full-Fat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-zinc-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={content.fullFatImage}
                  alt={content.fullFatTitle}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0A5024] mb-4">
                {content.fullFatTitle}
              </h3>
              
              <p className="text-black/75 text-sm md:text-base leading-[1.5] mb-8">
                {content.fullFatDescription}
              </p>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <KeyBenefitsIcon />
                  <h4 className="font-bold text-black text-base md:text-lg">Key Benefits</h4>
                </div>
                <ul className="space-y-3">
                  {content.fullFatBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A5024] mt-2 flex-shrink-0" />
                      <span className="text-black/80 text-sm md:text-[15px] leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Defatted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-zinc-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={content.defattedImage}
                  alt={content.defattedTitle}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0A5024] mb-4">
                {content.defattedTitle}
              </h3>
              
              <p className="text-black/75 text-sm md:text-base leading-[1.5] mb-8">
                {content.defattedDescription}
              </p>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <KeyBenefitsIcon />
                  <h4 className="font-bold text-black text-base md:text-lg">Key Benefits</h4>
                </div>
                <ul className="space-y-3">
                  {content.defattedBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A5024] mt-2 flex-shrink-0" />
                      <span className="text-black/80 text-sm md:text-[15px] leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
