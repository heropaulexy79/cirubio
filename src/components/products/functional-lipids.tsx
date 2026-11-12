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

const DEFAULT_LIPIDS = {
  badge: "Functional Lipids",
  title: "BSF Oil",
  description: "A renewable lipid source with applications across animal nutrition and industrial value chains.",
  featureTitle: "Functional Lipids for Animal Nutrition",
  featureDescription: "Derived from Black Soldier Fly larvae, our lipids provide an energy-dense source of fatty acids with high lauric acid content, known for supporting gut health and metabolic efficiency in animals.",
  benefits: [
    "Improved energy utilization",
    "Supports gut health and animal resilience",
    "Enhances feed formulation flexibility",
    "Sustainable alternative to conventional feed oils"
  ],
  image: "/functional-oils.png"
}

export function FunctionalLipids() {
  const [content, setContent] = useState(DEFAULT_LIPIDS)

  useEffect(() => {
    fetchSanityData<ProductsPageDoc | null>(PRODUCTS_PAGE_QUERY, null).then((data) => {
      if (data) {
        setContent({
          badge: data.lipidsBadge || DEFAULT_LIPIDS.badge,
          title: data.lipidsTitle || DEFAULT_LIPIDS.title,
          description: data.lipidsDescription || DEFAULT_LIPIDS.description,
          featureTitle: data.lipidsFeatureTitle || DEFAULT_LIPIDS.featureTitle,
          featureDescription: data.lipidsFeatureDescription || DEFAULT_LIPIDS.featureDescription,
          benefits: data.lipidsBenefits && data.lipidsBenefits.length > 0 ? data.lipidsBenefits : DEFAULT_LIPIDS.benefits,
          image: resolveImageUrl(data.lipidsImage, DEFAULT_LIPIDS.image)
        })
      }
    })
  }, [])

  return (
    <section id="lipids" className="py-20 bg-[#E8F5E8]">
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
            className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.15] mb-6"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/80 text-base md:text-lg leading-[1.5] max-w-2xl"
          >
            {content.description}
          </motion.p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[380px] md:h-[450px] rounded-3xl overflow-hidden shadow-sm"
          >
            <Image
              src={content.image}
              alt={content.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Details & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A5024] mb-4">
              {content.featureTitle}
            </h3>
            
            <p className="text-black/80 text-sm md:text-base leading-[1.5] mb-8">
              {content.featureDescription}
            </p>

            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8 border border-zinc-200/60 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <KeyBenefitsIcon />
                <h4 className="font-bold text-black text-base md:text-lg">Key Benefits</h4>
              </div>
              <ul className="space-y-4">
                {content.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A5024] mt-2 flex-shrink-0" />
                    <span className="text-black/80 text-sm md:text-[15px] leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
