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
              description="Access real-time insights into waste diverted, carbon-emission avoidance, contributions to SDGs, resource recovery and circular economy performance through our Digital Sustainability Platform."
            />
            <div className="mt-10">
              <Button>Explore our technologies</Button>
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
            <div className="rounded-2xl overflow-hidden shadow-2xl relative w-full aspect-[20/19]">
              <Image
                src="/technology-dashboard.jpg"
                alt="Data dashboard"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
