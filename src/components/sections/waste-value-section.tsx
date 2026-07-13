"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function WasteValueSection() {
  return (
    <section id="solutions" className="bg-primary-light py-16 md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="text-sm font-semibold tracking-wider text-black">
              Value Proposition
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-primary-dark md:text-5xl lg:text-[42px] leading-[1.2]">
              Turning Waste into Value
            </h2>
            <div className="mt-4 flex h-16 w-16 items-center justify-center">
              <img src="/turning-organic-waste-2.svg" alt="Turning Organic Waste" className="h-full w-full object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-sm md:text-base text-black leading-relaxed mb-8">
              Grub Bio leverages Black Soldier Fly biotechnology, circular bio-manufacturing, and digital sustainability intelligence to upcycle organic waste into high-value alternative proteins, organic fertilisers, and functional oils for agriculture, aquaculture, livestock production, and industrial applications. Through our integrated SaaS platform, we provide stakeholders with real-time environmental intelligence, enabling transparent tracking of waste diversion, carbon-emission avoidance, resource recovery, and ESG performance.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
