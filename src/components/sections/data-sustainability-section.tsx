"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function DataSustainabilitySection() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label="Our Technology"
              title="Data-driven sustainability"
              description="Empower your organization with real-time analytics. Our dashboard provides comprehensive insights into waste diversion rates, carbon footprint reduction, and overall sustainability performance."
            />
            <div className="mt-10">
              <Button>Explore Platform</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl bg-zinc-900 p-2 shadow-2xl overflow-hidden"
          >
            {/* Dashboard Mockup Representation */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
              </div>
              <Image
                src="/technology-dashboard.jpg"
                alt="Data dashboard"
                width={1200}
                height={800}
                className="w-full h-auto object-cover opacity-90 mix-blend-screen"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
