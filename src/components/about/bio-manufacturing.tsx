"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function BioManufacturing() {
  return (
    <section className="py-20 bg-[#f4f7f4]">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A5024] mb-8 leading-[1.2]">
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
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0A5024] mb-4">The Challenge</h3>
              <p className="text-black/80 leading-relaxed mb-4 text-sm md:text-base">
                Linear production models and improper waste management practices present a dual crisis for Africa: they contribute heavily to climate change while squandering valuable resources that could power sustainable development.
              </p>
              <p className="text-black/80 leading-relaxed text-sm md:text-base">
                Millions of tons of organic waste are discarded annually, rotting in landfills and releasing methane—a potent greenhouse gas. At the same time, critical industries like agriculture and aquaculture struggle with the rising costs and environmental impacts of conventional feed and fertilisers.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0A5024] mb-4">Our Solution</h3>
              <p className="text-black/80 leading-relaxed mb-4 text-sm md:text-base">
                We are building a new generation of bio-refineries that combine Black Soldier Fly biotechnology, automated production systems, and real-time environmental intelligence to upcycle organic waste into high-value resources for agriculture and industry.
              </p>
              <p className="text-black/80 leading-relaxed text-sm md:text-base">
                Our goal is to unlock the value trapped in organic waste while supporting sustainable agriculture, reducing carbon emissions, providing transparent ESG insights, and fostering a truly circular economy across Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
