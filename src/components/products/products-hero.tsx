"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"

export function ProductsHero() {
  return (
    <section className="pt-32 pb-16 bg-white px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[500px] md:min-h-[600px] w-full rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center p-6 md:p-12"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/product-hero-img.png"
              alt="Grub Bio Manufacturing"
              fill
              priority
              className="object-cover"
            />
            {/* Dark Overlay to make text readable like in screenshot */}
            <div className="absolute inset-0 bg-black/60 z-10" />
          </div>

          {/* Centered Content */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white font-medium text-sm md:text-base mb-4 tracking-wide"
            >
              Our Products
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.2] mb-6"
            >
              Sustainable Solutions from<br/>Circular Bio-Manufacturing
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl"
            >
              Through innovative Black Soldier Fly technology, Grub Bio transforms organic waste into high-value products that support sustainable agriculture, animal nutrition, and industrial applications.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
