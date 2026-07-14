"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function BioManufacturing() {
  return (
    <section className="py-20 bg-[#ffffff]">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Image & Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] mb-8 leading-[1.2]">
              Bio-Manufacturing<br/>for a Circular<br/>Economy
            </h2>
            {/* Logo/Icon */}
            <div className="w-24 h-24 rounded-full mb-8 flex items-start">
               <img src="/bio-manufacturing-icon.svg" alt="Bio-Manufacturing Icon" className="w-full h-full object-contain" />
            </div>
            
            {/* Facility Image */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-lg">
              <img src="/about-intro-img.jpg" alt="Bio-Manufacturing Facility" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-10"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A5024] mb-4">The Challenge</h3>
              <p className="text-black/80 font-medium leading-[1.5] mb-4 text-sm md:text-base">
                Across Africa, millions of tonnes of organic waste are generated annually from agricultural activities, food processing facilities, markets, livestock operations, and municipal sources. Much of this waste is improperly managed, contributing to greenhouse gas emissions, environmental degradation, and lost economic value.
              </p>
              <p className="text-black/80 font-medium leading-[1.5] text-sm md:text-base">
                At the same time, the continent faces growing demand for sustainable protein and resilient agricultural inputs, while many organisations struggle to transparently measure and audit their environmental impact in line with evolving global ESG reporting requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A5024] mb-4">Our Solution</h3>
              <p className="text-black/80 font-medium leading-[1.5] mb-4 text-sm md:text-base">
                Our approach addresses a critical structural gap: Africa’s protein supply remains heavily exposed to import dependency, climate volatility, and resource-intensive production systems. Grub Bio provides a locally anchored alternative—one that is resilient, cost-efficient, and environmentally responsible.
              </p>
              <p className="text-black/80 font-medium leading-[1.5] text-sm md:text-base">
                Through our integrated model, we enable partners to transition from linear, extractive supply chains to circular, value-generating systems—turning waste into productive assets while strengthening food security, improving farmer economics, and advancing measurable ESG outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
