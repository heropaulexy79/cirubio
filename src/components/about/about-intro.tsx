"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function AboutIntro() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-[#0A5024] font-bold leading-relaxed mb-8">
            Operating at the intersection of waste management, sustainable agriculture, and climate action, we leverage innovation, real-time monitoring, and circular bio-refining systems to create measurable environmental and economic value.
          </p>
          <p className="text-xl md:text-2xl text-[#0A5024] font-bold leading-relaxed">
            Our goal is simple: to turn waste into opportunity while strengthening food systems, supporting environmental sustainability, providing verifiable ESG insights, and advancing Africa's transition to a bio-circular economy.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
