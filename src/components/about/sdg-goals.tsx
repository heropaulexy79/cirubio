"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

const sdgs = [
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
  return (
    <section id="sdg" className="py-20 bg-[#E8F5E8]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-black text-sm font-bold tracking-wide mb-4">Sustainable Development Goals</p>
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#0A5024] leading-[1.2] mb-6">
            Advancing Global Goals<br/>Through Local Action
          </h2>
          <p className="text-black/90 font-medium leading-relaxed text-[15px] md:text-[16px] mb-12 max-w-[640px]">
            Our business model contributes directly to the following United Nations Sustainable Development Goals:
          </p>
        </motion.div>

        {/* SDG Icons Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex flex-col gap-y-12 w-full lg:w-auto"
        >
          {/* Top Row (5 items) */}
          <div className="flex flex-wrap gap-x-8 lg:gap-x-12 justify-start">
            {sdgs.slice(0, 5).map((sdg) => (
              <div 
                key={sdg.id} 
                className="w-[120px] sm:w-[140px] md:w-[150px] lg:w-[170px] flex-shrink-0 flex items-center justify-center"
              >
                <img src={sdg.src} alt={sdg.title} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>

          {/* Bottom Row (4 items) */}
          <div className="flex flex-wrap gap-x-8 lg:gap-x-12 justify-start lg:justify-center">
            {sdgs.slice(5).map((sdg) => (
              <div 
                key={sdg.id} 
                className="w-[120px] sm:w-[140px] md:w-[150px] lg:w-[170px] flex-shrink-0 flex items-center justify-center"
              >
                <img src={sdg.src} alt={sdg.title} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
