"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { ABOUT_QUERY } from "@/sanity/lib/queries"
import type { AboutDoc } from "@/sanity/lib/types"

const DEFAULT_SDGS = [
  { id: 2, src: "/zero-hunger.png", title: "Zero Hunger" },
  { id: 6, src: "/clean-water.png", title: "Clean Water and Sanitation" },
  { id: 8, src: "/decent-work.png", title: "Decent Work and Economic Growth" },
  { id: 9, src: "/industry-innovation.png", title: "Industry, Innovation and Infrastructure" },
  { id: 14, src: "/life-below-water.png", title: "Life Below Water" },
  { id: 11, src: "/sustainable-cities.png", title: "Sustainable Cities and Communities" },
  { id: 12, src: "/responsible-consumption.png", title: "Responsible Consumption and Production" },
  { id: 13, src: "/climate-action.png", title: "Climate Action" },
  { id: 15, src: "/life-on-land.png", title: "Life on Land" },
]

export function SdgGoals() {
  const [content, setContent] = useState({
    badge: "Sustainable Development Goals",
    title: "Advancing Global Goals\nThrough Local Action",
    description: "Our business model contributes directly to the following United Nations Sustainable Development Goals:",
    sdgs: DEFAULT_SDGS
  })

  useEffect(() => {
    fetchSanityData<AboutDoc | null>(ABOUT_QUERY, null).then((data) => {
      if (data) {
        setContent((prev) => ({
          badge: data.sdgBadge || prev.badge,
          title: data.sdgTitle || prev.title,
          description: data.sdgDescription || prev.description,
          sdgs: data.sdgs && data.sdgs.length > 0
            ? data.sdgs.map((s, idx) => ({
                id: idx,
                src: resolveImageUrl(s.image, DEFAULT_SDGS[idx % DEFAULT_SDGS.length].src),
                title: s.title || DEFAULT_SDGS[idx % DEFAULT_SDGS.length].title
              }))
            : DEFAULT_SDGS
        }))
      }
    })
  }, [])

  return (
    <section id="sdg" className="py-20 bg-[#E8F5E8]">
      <Container>
        <div className="max-w-[1042px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full text-left"
          >
            <p className="text-black text-sm font-bold tracking-wide mb-4">{content.badge}</p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.2] mb-6 whitespace-pre-line">
              {content.title}
            </h2>
            <p className="text-black/90 font-medium leading-[1.5] text-[15px] md:text-[16px] mb-12 max-w-[640px]">
              {content.description}
            </p>
          </motion.div>

          {/* SDG Icons Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-x-8 lg:gap-x-12 gap-y-12 justify-start lg:justify-center w-full"
          >
            {content.sdgs.map((sdg, index) => (
              <div 
                key={index} 
                className="w-[120px] sm:w-[140px] md:w-[150px] lg:w-[170px] flex-shrink-0 flex items-center justify-center"
              >
                <img src={sdg.src} alt={sdg.title} className="w-full h-auto object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
