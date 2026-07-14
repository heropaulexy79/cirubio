"use client"

import React from "react"
import { motion } from "framer-motion"

export function SustainabilityHero() {
  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 pt-32 pb-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Image Container */}
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[600px] flex items-center justify-center bg-zinc-900">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/circular-production-img.jpg")' }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 z-10 bg-black/60" />

          {/* Content */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center text-white py-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[14px] md:text-[15px] font-semibold mb-6 text-white tracking-wide"
            >
              Sustainability
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] md:text-5xl lg:text-[56px] font-bold leading-[1.15] mb-6"
            >
              Driving Measurable<br />
              Impact Through Circular<br />
              Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] md:text-[17px] text-white/90 leading-[1.5] max-w-4xl mx-auto"
            >
              At Grub Bio, sustainability is embedded in every stage of our operations. Our technology enabled, bio-manufacturing solution transforms organic waste into valuable resources while generating measurable environmental, social, and economic benefits. By combining biotechnology, circular production systems, and digital sustainability intelligence, we help build more resilient food systems and a more sustainable future for Africa.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
