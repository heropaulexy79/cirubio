"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"

function KeyBenefitsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
      <path d="M12 22l-3.172-1.314-3.428.163-.163-3.428L3.923 14.25 6 12 3.923 9.75l1.314-3.172 3.428-.163.163-3.428L12 2l3.172 1.314 3.428-.163.163 3.428L20.077 9.75 18 12l2.077 2.25-1.314 3.172-3.428.163-.163 3.428L12 22z"/>
      <path d="M12 15l-3.09 1.62.59-3.44-2.5-2.44 3.45-.5L12 7l1.55 3.24 3.45.5-2.5 2.44.59 3.44Z"/>
    </svg>
  )
}

export function OrganicFertilizer() {
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
            Organic Fertilizer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.15] mb-6"
          >
            BSF Frass
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/80 text-base md:text-lg leading-[1.5] max-w-2xl"
          >
            A nutrient-rich organic fertiliser produced through the natural bioconversion process of Black Soldier Fly larvae.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Card 1: Regenerative Agriculture Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row bg-white rounded-[32px] overflow-hidden border border-zinc-200/60 shadow-sm"
          >
            {/* Image Half */}
            <div className="w-full lg:w-1/2 relative min-h-[240px] lg:min-h-[300px]">
              <Image
                src="/Organic-fertilizers.jpg"
                alt="Regenerative Agriculture Solutions"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content Half */}
            <div className="w-full lg:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col justify-center">
              <p className="text-black font-semibold text-sm mb-3">Organic Fertilizer</p>
              <h3 className="text-3xl md:text-4xl lg:text-[38px] font-bold text-[#0A5024] leading-[1.1] mb-4">
                Regenerative<br/>Agriculture Solutions
              </h3>
              <p className="text-black font-medium leading-[1.5] text-sm md:text-base mb-6 max-w-md">
                Designed to improve soil health, support crop productivity, and enhance long-term agricultural sustainability.
              </p>
              
              <div className="flex items-center gap-3 mb-3">
                <img src="/key features.svg" alt="Key Benefits" className="w-5 h-5 object-contain" />
                <span className="font-bold text-black text-lg">Key Benefits</span>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 ml-1 marker:text-black">
                {[
                  "Improves soil structure and biological activity",
                  "Enhances nutrient availability and plant performance",
                  "Supports regenerative and climate-smart agriculture",
                  "Reduces dependence on synthetic fertilizers",
                  "Contributes to carbon-emission avoidance through circular nutrient recovery"
                ].map((benefit, idx) => (
                  <li key={idx} className="text-black text-[15px] md:text-base leading-[1.5] pl-1">
                    {benefit}
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
