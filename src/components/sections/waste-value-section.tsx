"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { RefreshCcw } from "lucide-react"

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
            <span className="text-sm font-semibold tracking-wider text-primary">
              Value Proposition
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-primary-dark md:text-5xl lg:text-6xl">
              Turning Waste into Value
            </h2>
            <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
              <RefreshCcw size={32} />
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
              By harnessing the power of nature, particularly the Black Soldier Fly
              larvae, we convert organic waste into premium products. This not only
              diverts waste from landfills but also creates sustainable alternatives
              for protein meal and organic fertilizer, closing the loop in the
              agricultural supply chain.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
