"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function CircularProduction() {
  return (
    <section className="py-20 bg-[#E8F5E8]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch justify-between">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[420px] xl:w-[460px] flex-shrink-0 flex"
          >
             <div className="w-full h-full min-h-[450px] rounded-[24px] overflow-hidden shadow-xl relative">
               <img src="/about-intro-img2.jpg" alt="Circular Production Facility" className="w-full h-full object-cover absolute inset-0" />
             </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 lg:max-w-[640px]"
          >
            <p className="text-[#000] text-sm font-bold tracking-wide mb-4">Our Bio-Manufacturing Facility</p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.2] mb-8">
              Demonstrating the Future of Circular Production
            </h2>
            
            <div className="space-y-6 text-black/90 font-medium leading-[1.5] text-[15px] md:text-[16px] mb-8">
              <p>
                Our bio-manufacturing facility serves as the foundation for Grub Bio's scalable growth strategy. Designed as a modern bio-refinery, the facility utilizes Black Soldier Fly technology to convert organic waste into high-value products through a resource-efficient production process.<br />
                The facility also serves as a proving ground for our digital sustainability systems, operational excellence framework, and future expansion model across agricultural and industrial clusters.
              </p>
            </div>

            {/* Key Features List */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/key features.svg" alt="Key Features" className="w-6 h-6 object-contain" />
                <h3 className="text-[20px] font-bold text-black">Key Features</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                {[
                  "Organic waste upcycling and nutrient recovery",
                  "Production of sustainable protein, functional oils, and organic fertilisers",
                  "Technology-enabled monitoring and process optimization",
                  "Real time sustainability and impact measurement"
                ].map((item, idx) => (
                  <li key={idx} className="text-black/90 text-[15px] md:text-[16px] font-medium pl-1">
                    {item}
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
