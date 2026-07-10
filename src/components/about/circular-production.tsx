"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function CircularProduction() {
  return (
    <section className="py-20 bg-[#E8F5E8]">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative"
          >
             <img src="/circular-production-img.jpg" alt="Circular Production Facility" className="w-full h-full object-cover absolute inset-0" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#444] text-sm font-bold mb-4">Our Bio-Manufacturing Facilities</p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0A5024] leading-[1.2] mb-8">
              Demonstrating the Future of Circular Production
            </h2>
            
            <p className="text-black/80 leading-relaxed text-sm md:text-base mb-8">
              Our pilot bio-manufacturing facility serves as the foundation for Grub Bio's scalable growth strategy. Designed as a modern bio-refinery, the facility utilizes Black Soldier Fly technology to convert organic waste into high-value products through a resource-efficient production process.
            </p>

            {/* Checkmark List */}
            <ul className="space-y-4">
              {[
                "State-of-the-art bio-conversion technology",
                "Scalable modules for distributed waste processing",
                "ISO-compliant manufacturing and safety standards"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px] text-[#0A5024]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-black/80 text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
