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
                Africa's future depends on our ability to rethink organic waste—not as a burden, but as a valuable resource. At Grub Bio, we believe that the solutions to some of our greatest challenges in food security, agriculture, and climate resilience already exist within the resources we discard every day.
              </p>
              <p>
                Our mission is to harness innovation, technology, and nature-inspired systems to build scalable circular solutions that create lasting value for businesses, communities, and future generations.
              </p>
              <p>
               Together, we are building a future where waste becomes opportunity, sustainability drives profitability, and Africa leads the next generation of bio-circular innovation.
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
               <img src="/founder.jpeg" alt="Oladipo Williams, Founder/CEO" className="w-full h-full object-cover absolute inset-0" />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
