"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function FounderMessage() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#000] text-sm font-bold tracking-wide mb-4">Message from the Founder</p>
            <h2 className="text-3xl md:text-4xl lg:text-[35px] font-bold text-[#0A5024] leading-[1.2] mb-8">
              A New Approach to Growth and Sustainability
            </h2>
            
            <div className="space-y-6 text-black/80 leading-relaxed text-sm md:text-base">
              <p>
                "At Grub Bio, we recognize that Africa's future depends on how efficiently we manage our resources today. The linear model of 'take, make, and dispose' is no longer viable."
              </p>
              <p>
                "By embracing bio-circularity, we are turning waste into a catalyst for change—creating sustainable inputs that secure food systems, regenerate soils, and combat climate change."
              </p>
              <p>
                "Our technology empowers businesses to not only reduce their environmental footprint but to actively participate in building a thriving, zero-waste economy."
              </p>
            </div>
            
            <div className="mt-8">
              <p className="font-bold text-[#0A5024] text-sm">- Obinna Onuoha, Founder/CEO, Grub Bio</p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl relative">
               <img src="/founder.jpeg" alt="Obinna Onuoha, Founder/CEO" className="w-full h-full object-cover absolute inset-0" />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
