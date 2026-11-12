"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { SERVICES_PAGE_QUERY } from "@/sanity/lib/queries"
import type { ServicesPageDoc } from "@/sanity/lib/types"

const DEFAULT_WASTE_SOLUTIONS = {
  title: "Sustainable Waste Upcycling Solutions",
  description: "We partner with food processors, agricultural operations, and commercial entities to divert organic waste from landfills and convert it into high-value bio-based products.",
  benefits: [
    "Zero-landfill organic waste diversion",
    "Verifiable carbon footprint reduction & ESG compliance",
    "Cost-effective waste handling & processing",
    "Closed-loop resource upcycling for industrial facilities"
  ],
  image: "/Sustainable Waste Upcycling Solutions.jpg"
}

export function WasteManagementSolutions() {
  const [content, setContent] = useState(DEFAULT_WASTE_SOLUTIONS)

  useEffect(() => {
    fetchSanityData<ServicesPageDoc | null>(SERVICES_PAGE_QUERY, null).then((data) => {
      if (data) {
        setContent({
          title: data.wasteSolutionsTitle || DEFAULT_WASTE_SOLUTIONS.title,
          description: data.wasteSolutionsDescription || DEFAULT_WASTE_SOLUTIONS.description,
          benefits: data.wasteSolutionsBenefits && data.wasteSolutionsBenefits.length > 0
            ? data.wasteSolutionsBenefits
            : DEFAULT_WASTE_SOLUTIONS.benefits,
          image: resolveImageUrl(data.wasteSolutionsImage, DEFAULT_WASTE_SOLUTIONS.image)
        })
      }
    })
  }, [])

  return (
    <section className="py-24 bg-[#E8F5E8] border-b border-zinc-200">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1"
          >
            <img
              src={content.image}
              alt={content.title}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.2] mb-6">
              {content.title}
            </h2>
            
            <p className="text-[#1B1B1B] text-[15px] leading-[1.5] mb-8">
              {content.description}
            </p>

            <ul className="space-y-4">
              {content.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-[#0A5024]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span className="text-[#1B1B1B] text-[15px] font-medium leading-[1.5]">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
