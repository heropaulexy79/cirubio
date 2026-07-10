"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function ProductsCta() {
  return (
    <section className="py-24 bg-[#E8F5E8]">
      <Container>
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0A5024] leading-[1.2] mb-8"
          >
            Creating Value from Every<br/>Resource
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black/80 text-base md:text-lg leading-relaxed max-w-3xl"
          >
            Every Grub Bio product is developed through a closed-loop bio-manufacturing process that transforms organic waste into valuable agricultural and industrial inputs—advancing sustainability, resource efficiency, and Africa's bio-circular economy.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
