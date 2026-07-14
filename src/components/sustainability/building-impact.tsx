"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function BuildingImpact() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 shadow-lg">
              <img
                src="/building-impact.png"
                alt="ESG Sustainability AI Dashboard"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-[40px] lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.1] mb-6">
              Building Impact<br />Beyond Products
            </h2>
            
            <p className="text-[#1B1B1B] text-[14px] md:text-[15px] leading-[1.5] mb-8">
              Every tonne of organic waste recovered, every kilogram of sustainable
              protein produced, and every sustainability metric tracked contributes to
              a broader vision: building a resilient, low-carbon, and resource-efficient
              future for Africa through the principles of the bio-circular economy.
            </p>

            <button className="bg-[#0A5024] hover:bg-[#073A1A] text-white transition-colors h-[44px] px-8 text-[14px] md:text-[15px] font-medium rounded-full cursor-pointer">
              Partner With Us to Drive Circular Impact
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
