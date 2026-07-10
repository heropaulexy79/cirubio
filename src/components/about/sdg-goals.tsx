"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

// Using colored div blocks as placeholders for the SDG icons
const sdgs = [
  { id: 2, color: "bg-[#DDA63A]", title: "Zero Hunger" },
  { id: 6, color: "bg-[#26BDE2]", title: "Clean Water and Sanitation" },
  { id: 8, color: "bg-[#A21942]", title: "Decent Work and Economic Growth" },
  { id: 9, color: "bg-[#FD6925]", title: "Industry, Innovation and Infrastructure" },
  { id: 11, color: "bg-[#FD9D24]", title: "Sustainable Cities and Communities" },
  { id: 12, color: "bg-[#BF8B2E]", title: "Responsible Consumption and Production" },
  { id: 13, color: "bg-[#3F7E44]", title: "Climate Action" },
  { id: 15, color: "bg-[#56C02B]", title: "Life on Land" },
]

export function SdgGoals() {
  return (
    <section className="py-20 bg-[#E8F5E8]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-[#D2AE5B] text-sm font-bold uppercase tracking-widest mb-4">Commitment to SDGs</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A5024] leading-[1.2] mb-6">
            Advancing Global Goals<br/>Through Local Action
          </h2>
          <p className="text-black/80 leading-relaxed text-sm md:text-base mb-12 max-w-2xl">
            Our business model directly contributes to the United Nations Sustainable Development Goals, driving impact where it matters most.
          </p>
        </motion.div>

        {/* SDG Icons Grid Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {sdgs.map((sdg) => (
            <div 
              key={sdg.id} 
              className={`aspect-square rounded-xl flex flex-col items-center justify-center p-4 shadow-sm text-white text-center ${sdg.color}`}
            >
              <span className="text-2xl font-bold mb-2">SDG {sdg.id}</span>
              <span className="text-xs font-medium leading-tight">{sdg.title}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
