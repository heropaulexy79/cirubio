"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { CheckCircle2 } from "lucide-react"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { SUSTAINABILITY_QUERY } from "@/sanity/lib/queries"
import type { SustainabilityDoc } from "@/sanity/lib/types"

const DEFAULT_CIRCULAR = {
  badge: "Circular Economy Impact",
  title: "Transforming Waste\ninto Opportunity",
  p1: "Organic waste is one of Africa's most underutilised resources. Instead of allowing valuable nutrients to end up in landfills, we divert and upcycle organic waste into sustainable protein ingredients, functional oils, and organic fertilisers.",
  p2: "Our technology enabled, bioconversion model helps businesses and communities reduce waste, improve resource efficiency, and accelerate the transition to a bio-circular economy.",
  benefits: [
    "Recover organic waste from agricultural, industrial, and municipal sources",
    "Upcycle waste into valuable agricultural and industrial inputs",
    "Return nutrients back into productive use",
    "Reduce landfill dependency and environmental impact"
  ],
  image: "/circular-economy-impact.jpeg"
}

export function CircularEconomyImpact() {
  const [content, setContent] = useState(DEFAULT_CIRCULAR)

  useEffect(() => {
    fetchSanityData<SustainabilityDoc | null>(SUSTAINABILITY_QUERY, null).then((res) => {
      if (res) {
        setContent({
          badge: res.circularBadge || DEFAULT_CIRCULAR.badge,
          title: res.circularTitle || DEFAULT_CIRCULAR.title,
          p1: res.circularParagraph1 || DEFAULT_CIRCULAR.p1,
          p2: res.circularParagraph2 || DEFAULT_CIRCULAR.p2,
          benefits: res.circularBenefits && res.circularBenefits.length > 0 ? res.circularBenefits : DEFAULT_CIRCULAR.benefits,
          image: resolveImageUrl(res.circularImage, DEFAULT_CIRCULAR.image),
        })
      }
    })
  }, [])

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
              {content.badge}
            </span>
            <h2 className="text-3xl md:text-[40px] lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.1] mb-6 whitespace-pre-line">
              {content.title}
            </h2>
            
            <div className="space-y-4 text-black/80 leading-[1.5] mb-8">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-4">Our Circular Approach</h3>
              <ul className="space-y-3">
                {content.benefits.map((benefit, i) => (
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
                src={content.image}
                alt={content.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
