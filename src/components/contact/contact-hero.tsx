"use client"

import React from "react"
import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 pt-32 pb-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Image Container */}
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[600px] flex items-center justify-center bg-zinc-900">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/contact-hero.png")' }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 z-10 bg-black/75" />

          {/* Content */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center text-white py-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[15px] font-semibold mb-6 text-white"
            >
              Contact Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-10"
            >
              Let&apos;s Build a Circular Future<br />Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] md:text-[17px] text-white/90 leading-[1.5] max-w-3xl mx-auto mb-6"
            >
              Whether you&apos;re looking to manage organic waste, source sustainable products, explore partnership opportunities, or learn more about our technology platform, we&apos;d love to hear from you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[15px] md:text-[17px] text-white/90 leading-[1.5] max-w-3xl mx-auto"
            >
              Our team is ready to help you discover how Grub Bio can support your sustainability, circular economy, and climate objectives.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
