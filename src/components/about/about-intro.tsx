"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function AboutIntro() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-zinc-200">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-2xl md:text-[26px] text-[#0A5024] font-bold leading-relaxed mb-10">
            Operating at the intersection of waste management, sustainable agriculture, and climate action, we leverage automation, real-time monitoring, and circular bio-refining systems to create measurable environmental and economic value.
          </p>
          <p className="text-2xl md:text-[26px] text-[#0A5024] font-bold leading-relaxed">
            Our goal is simple: to turn waste into opportunity while strengthening food systems, supporting environmental sustainability, providing real-time ESG insights, and advancing Africa's transition to a bio-circular economy.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
