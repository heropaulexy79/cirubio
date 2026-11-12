"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { SERVICES_PAGE_QUERY } from "@/sanity/lib/queries"
import type { ServicesPageDoc } from "@/sanity/lib/types"

const DEFAULT_BIO = {
  title: "Turning Organic Waste into Valuable Resources",
  p1: "Our circular bio-manufacturing model transforms organic waste streams into sustainable proteins, functional oils, and organic fertilisers through innovative Black Soldier Fly technology.",
  p2: "By recovering nutrients from low value waste streams, we produce sustainable proteins, functional oils, and organic fertilisers that support agriculture, industry, and environmental sustainability. This closed-loop approach enables the continuous circulation of resources while reducing waste and maximising value creation.",
  benefits: "Our solution helps organisations and municipalities convert waste from a disposal challenge into a valuable resource stream. By supporting circular economy objectives, reducing landfill dependency, and lowering environmental impact, we create measurable sustainability outcomes while contributing to more resilient agricultural and industrial value chains.",
  image: "/Turning Organic Waste into Valuable Resources.jpg"
}

export function CircularBioManufacturing() {
  const [content, setContent] = useState(DEFAULT_BIO)

  useEffect(() => {
    fetchSanityData<ServicesPageDoc | null>(SERVICES_PAGE_QUERY, null).then((data) => {
      if (data) {
        setContent({
          title: data.bioManufacturingTitle || DEFAULT_BIO.title,
          p1: data.bioManufacturingDescription || DEFAULT_BIO.p1,
          p2: data.bioManufacturingSubdescription || DEFAULT_BIO.p2,
          benefits: data.bioManufacturingBenefits || DEFAULT_BIO.benefits,
          image: resolveImageUrl(data.bioManufacturingImage, DEFAULT_BIO.image)
        })
      }
    })
  }, [])

  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.2] mb-8">
              {content.title}
            </h2>
            
            <div className="space-y-6 text-[#1B1B1B] text-[15px] leading-[1.5]">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
              <p>{content.benefits}</p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={content.image}
              alt={content.title}
              className="h-full w-full object-cover"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
