"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { CheckCircle2 } from "lucide-react"

export function ClimateAction() {
  const benefits = [
    "Methane-emission avoidance through organic waste recovery",
    "Reduced reliance on imported protein ingredients",
    "Lower environmental footprint compared to conventional feed sources",
    "Improved soil health and regenerative agriculture outcomes"
  ]

  return (
    <section className="py-16 md:py-24 bg-white border-t border-zinc-200">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1 w-full"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-[#FAFAFA]">
              <img
                src="/climate-action-image.png"
                alt="Climate Action"
                className="absolute inset-0 w-full h-full object-contain p-8"
              />
            </div>
          </motion.div>

          {/* Text Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <span className="text-sm font-bold tracking-wider text-black mb-4 block">
              Climate-Smart Agriculture
            </span>
            <h2 className="text-3xl md:text-[40px] lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.1] mb-6">
              Supporting Climate<br />Action Through Bio-<br />Manufacturing
            </h2>
            
            <div className="space-y-4 text-black/80 leading-[1.5] mb-8">
              <p>
                Our solutions contribute to climate resilience by reducing emissions
                associated with organic waste decomposition and by providing sustainable
                alternatives to resource-intensive agricultural inputs.
              </p>
              <p>
                Through waste diversion and nutrient recovery, we help avoid methane
                emissions that would otherwise occur when organic waste is disposed of in
                landfills or unmanaged environments. Our products also support regenerative
                agricultural practices that improve soil health and reduce dependence on
                carbon-intensive inputs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-4">Climate Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-black/80 text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
