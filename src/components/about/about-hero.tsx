"use client"

import React from "react"
import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 pt-32 pb-12 bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative h-[65vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden rounded-2xl">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
          {/* We would use next/image here in the real implementation with the provided image */}
          <img src="/about-hero.jpg" alt="About Us Hero Image" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-sm md:text-base font-semibold tracking-wide mb-6"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
          >
            Building Circular Solutions
            <br />
            for Africa's Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-100 text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Grub Bio is a technology-enabled (B2B SaaS), bio-manufacturing company transforming organic waste into high-value resources through advanced Black Soldier Fly biotechnology, data-driven operations, and digital sustainability solutions.
          </motion.p>
        </div>
        </div>
      </div>
    </section>
  )
}
