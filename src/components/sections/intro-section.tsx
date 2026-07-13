"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function IntroSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      {/* Full-width Divider */}
      <div className="w-full h-[1px] bg-zinc-200 mb-16 md:mb-24" />
      <Container>
        {/* Full-width header */}
        <div className="w-full mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold tracking-wider text-black mb-4 xl:mb-6">
              About Us
            </p>
            <h2 className="text-3xl md:text-[40px] lg:text-[42px] font-bold tracking-tight text-[#0A5024] leading-[1.2] max-w-[1300px]">
              Driving Innovation at the Intersection of Organic Waste Management, Sustainable Agriculture and Climate Resilience
            </h2>
          </motion.div>
        </div>

        {/* 2-column lower section */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex flex-col h-full justify-between">
              <p className="text-sm md:text-base text-black leading-relaxed mb-8">
                We are building a new generation of bio-refineries that combine Black Soldier Fly biotechnology, automated production systems, and real-time environmental intelligence to upcycle organic waste into high-value resources for agriculture and industry. Our goal is to unlock the value trapped in organic waste while supporting sustainable agriculture, reducing carbon emissions, providing transparent ESG insights, and fostering a truly circular economy across Africa.
              </p>
              <div>
                <button className="bg-[#0A5C19] hover:bg-[#074612] text-white transition-colors h-[48px] px-8 text-sm md:text-base font-semibold rounded-full cursor-pointer">
                  Discover our story
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl bg-zinc-100 shadow-md h-full"
          >
            <div className="h-full w-full overflow-hidden relative">
              <img
                src="/ABout Us img.jpg"
                alt="Sustainable agriculture facility"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
