"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"

export function DataSustainabilitySection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-wide text-black mb-6 block">
              Technology Dashboard
            </span>
            <h2 className="text-4xl md:text-[52px] font-bold tracking-tight text-[#0A5024] leading-[1.1]">
              Data-driven<br/>sustainability
            </h2>
            <p className="mt-8 text-base text-black max-w-md">
              Access real-time insights into waste diverted, carbon-emission avoidance, contributions to SDGs, resource recovery and circular economy performance through our Digital Sustainability Platform.
            </p>
            
            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-10 bg-[#0A5024] text-white hover:bg-[#0A5024]/90 rounded-full px-8 py-6"
              >
                Explore our technologies
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg relative w-full aspect-[4/3] md:aspect-[5/4]"
          >
            <Image
              src="/technology-dashboard.jpg"
              alt="Data dashboard"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
