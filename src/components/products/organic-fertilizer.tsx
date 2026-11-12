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

const DEFAULT_FERTILIZER = {
  badge: "Organic Fertilizer",
  title: "BSF Frass",
  description: "A nutrient-rich organic fertiliser produced through the natural bioconversion process of Black Soldier Fly larvae.",
  benefits: [
    "Rich in organic matter and essential nutrients",
    "Improves soil structure and water retention",
    "Enhances microbial activity for healthier crops",
    "100% natural and eco-friendly soil conditioner"
  ],
  image: "/Organic-fertilizers.jpg"
}

export function OrganicFertilizer() {
  const [content, setContent] = useState(DEFAULT_FERTILIZER)

  useEffect(() => {
    fetchSanityData<ProductsPageDoc | null>(PRODUCTS_PAGE_QUERY, null).then((data) => {
      if (data) {
        setContent({
          badge: data.fertilizerBadge || DEFAULT_FERTILIZER.badge,
          title: data.fertilizerTitle || DEFAULT_FERTILIZER.title,
          description: data.fertilizerDescription || DEFAULT_FERTILIZER.description,
          benefits: data.fertilizerBenefits && data.fertilizerBenefits.length > 0 ? data.fertilizerBenefits : DEFAULT_FERTILIZER.benefits,
          image: resolveImageUrl(data.fertilizerImage, DEFAULT_FERTILIZER.image)
        })
      }
    })
  }, [])

  return (
    <section id="fertiliser" className="py-20 bg-white">
      <Container>
        {/* Section Header (Left-aligned) */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
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
            <div className="bg-[#FAF9F5] rounded-2xl p-6 md:p-8 border border-zinc-200/80 shadow-sm">
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
