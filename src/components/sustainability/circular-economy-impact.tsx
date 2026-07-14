"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { CheckCircle2 } from "lucide-react"

export function CircularEconomyImpact() {
  const benefits = [
    "Recover organic waste from agricultural, industrial, and municipal sources",
    "Upcycle waste into valuable agricultural and industrial inputs",
    "Return nutrients back into productive use",
    "Reduce landfill dependency and environmental impact"
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16 xl:gap-24 items-stretch">
          {/* Text Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-bold tracking-wider text-black mb-4 block">
              Circular Economy Impact
            </span>
            <h2 className="text-3xl md:text-[40px] lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.1] mb-6">
              Transforming Waste<br />into Opportunity
            </h2>
            
            <div className="space-y-4 text-black/80 leading-[1.5] mb-8">
              <p>
                Organic waste is one of Africa&apos;s most underutilised resources. Instead of
                allowing valuable nutrients to end up in landfills, we divert and upcycle
                organic waste into sustainable protein ingredients, functional oils, and organic
                fertilisers.
              </p>
              <p>
                Our technology enabled, bioconversion model helps businesses and
                communities reduce waste, improve resource efficiency, and accelerate the
                transition to a bio-circular economy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-4">Our Circular Approach</h3>
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

          {/* Image - Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-zinc-100 shadow-lg">
              <img
                src="/circular-economy-impact.jpeg"
                alt="Circular Economy Impact"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
