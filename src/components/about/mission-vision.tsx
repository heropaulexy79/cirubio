"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function MissionVision() {
  return (
    <section className="py-20 bg-[#E8F5E8]">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-6"
          >
            <p className="text-black font-semibold text-sm mb-4">Mission and Vision</p>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0A5024] leading-[1.2]">
              Bridging the Gap<br/>Between Waste and<br/>Life
            </h3>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-3"
          >
            {/* Target Icon Placeholder */}
            <div className="w-12 h-12 mb-6 text-[#D2AE5B]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A5024] mb-4">Mission</h3>
            <p className="text-black/80 leading-relaxed text-sm">
              To bridge the gap between industrial waste and life through world-class bio-manufacturing — enabling partners to transition from linear, extractive supply chains to circular, value-generating systems.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1 lg:col-span-3"
          >
            {/* Eye Icon Placeholder */}
            <div className="w-12 h-12 mb-6 text-[#D2AE5B]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
                {/* Adding corners to match screenshot eye icon roughly */}
                <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" stroke="currentColor" strokeLinecap="square" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A5024] mb-4">Vision</h3>
            <p className="text-black/80 leading-relaxed text-sm">
              A world where organic waste is obsolete and nutrition is infinite — protein production that is locally sourced, decoupled from global supply shocks, environmentally regenerative, and scalable for Africa's growing population.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
