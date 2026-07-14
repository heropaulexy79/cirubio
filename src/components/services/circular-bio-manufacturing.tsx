"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"

function BenefitsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
      <path d="M12 22l-3.172-1.314-3.428.163-.163-3.428L3.923 14.25 6 12 3.923 9.75l1.314-3.172 3.428-.163.163-3.428L12 2l3.172 1.314 3.428-.163.163 3.428L20.077 9.75 18 12l2.077 2.25-1.314 3.172-3.428.163-.163 3.428L12 22z"/>
      <path d="M12 15l-3.09 1.62.59-3.44-2.5-2.44 3.45-.5L12 7l1.55 3.24 3.45.5-2.5 2.44.59 3.44Z"/>
    </svg>
  )
}

export function CircularBioManufacturing() {
  return (
    <section id="manufacturing" className="py-24 bg-white border-t border-b border-zinc-200">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-wider text-black mb-6"
            >
              Circular Bio-Manufacturing
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.15] mb-10"
            >
              Turning Organic<br/>Waste into Valuable<br/>Resources
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 md:w-24 md:h-24 relative"
            >
              <Image
                src="/turning-organic-waste-2.svg"
                alt="Turning Organic Waste"
                fill
                className="object-contain object-left"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#1B1B1B] text-[14px] md:text-[15px] leading-[1.6] mb-6"
            >
              Our circular bio-manufacturing model transforms organic waste streams into sustainable proteins , functional oils, and organic fertilisers through innovative Black Soldier Fly technology.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#1B1B1B] text-[14px] md:text-[15px] leading-[1.6] mb-8"
            >
              By recovering nutrients from low value waste streams, we produce sustainable proteins , functional oils, and organic fertilisers that support agriculture, industry, and environmental sustainability. This closed-loop approach enables the continuous circulation of resources while reducing waste and maximising value creation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <BenefitsIcon />
                <span className="font-bold text-black text-[17px]">Benefits</span>
              </div>
              <p className="text-[#1B1B1B] text-[14px] md:text-[15px] leading-[1.6]">
                Our solution helps organisations and municipalities convert waste from a disposal challenge into a valuable resource stream. By supporting circular economy objectives, reducing landfill dependency, and lowering environmental impact, we create measurable sustainability outcomes while contributing to more resilient agricultural and industrial value chains.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
