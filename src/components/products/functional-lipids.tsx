"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"

function KeyBenefitsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function FunctionalLipids() {
  return (
    <section className="py-20 bg-[#E8F5E8]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black font-semibold text-sm mb-4"
          >
            Functional Lipids
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0A5024] leading-[1.15] mb-6"
          >
            BSF Oil
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/80 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            A renewable lipid source with applications across animal nutrition and industrial value chains.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Card 1: Animal Feed Applications */}
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
                src="/functional-oils.png"
                alt="Animal Feed Applications"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content Half */}
            <div className="w-full lg:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col justify-center">
              <p className="text-black font-semibold text-sm mb-3">Functional Lipids</p>
              <h3 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#0A5024] leading-[1.2] mb-4">
                Animal Feed<br/>Applications
              </h3>
              <p className="text-black/80 leading-relaxed text-sm md:text-base mb-5 max-w-md">
                BSF Oil serves as a functional energy source in feed formulations, supporting animal performance and overall health.
              </p>
              
              <div className="flex items-center gap-3 mb-4">
                <KeyBenefitsIcon />
                <span className="font-bold text-black text-lg">Key Benefits</span>
              </div>
              
              <ul className="space-y-2">
                {[
                  "Improved energy utilization",
                  "Supports gut health and animal resilience",
                  "Enhances feed formulation flexibility",
                  "Sustainable alternative to conventional feed oils"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-2 w-1 h-1 rounded-full bg-black/60 flex-shrink-0" />
                    <span className="text-black/80 text-sm md:text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Industrial & Cosmetic Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col-reverse lg:flex-row bg-white rounded-[32px] overflow-hidden border border-zinc-200/60 shadow-sm"
          >
            {/* Content Half */}
            <div className="w-full lg:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col justify-center">
              <p className="text-black font-semibold text-sm mb-3">Functional Lipids</p>
              <h3 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-[#0A5024] leading-[1.2] mb-4">
                Industrial & Cosmetic<br/>Applications
              </h3>
              <p className="text-black/80 leading-relaxed text-sm md:text-base mb-5 max-w-md">
                BSF Oil can be utilized as a renewable bio-based ingredient for industrial and cosmetic manufacturing.
              </p>
              
              <div className="flex items-center gap-3 mb-4">
                <KeyBenefitsIcon />
                <span className="font-bold text-black text-lg">Key Benefits</span>
              </div>
              
              <ul className="space-y-2">
                {[
                  "Sustainable and traceable raw material",
                  "Renewable alternative to conventional inputs",
                  "Supports circular economy sourcing strategies",
                  "Lower environmental footprint compared to traditional alternatives"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-2 w-1 h-1 rounded-full bg-black/60 flex-shrink-0" />
                    <span className="text-black/80 text-sm md:text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Half */}
            <div className="w-full lg:w-1/2 relative min-h-[240px] lg:min-h-[300px]">
              <Image
                src="/technology-dashboard.jpg"
                alt="Industrial & Cosmetic Applications"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
