"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="pt-32 pb-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[500px] md:min-h-[580px] w-full overflow-hidden rounded-2xl bg-[#051F11] flex flex-col items-center justify-center px-6 py-20 text-center"
        >
          {/* Background Image / Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/service-hero-img.jpg"
              alt="Services Background"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#051F11]/70" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold tracking-wider text-white mb-6"
            >
              Our Services
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-8 max-w-4xl"
            >
              Enabling Circular Value Across Agriculture, Industry, and Communities
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-white/90 font-medium leading-[1.5] max-w-3xl"
            >
              Grub Bio delivers integrated solutions that transform organic waste into valuable resources while helping organisations achieve their sustainability, operational, and climate objectives. Through our bio-manufacturing solution, we create circular systems that connect waste recovery, resource efficiency, and sustainable production.
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
