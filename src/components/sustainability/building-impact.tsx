"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { SUSTAINABILITY_QUERY } from "@/sanity/lib/queries"
import type { SustainabilityDoc } from "@/sanity/lib/types"

export function BuildingImpact() {
  const [content, setContent] = useState({
    title: "Building Impact\nBeyond Products",
    description: "Every tonne of organic waste recovered, every kilogram of sustainable protein produced, and every sustainability metric tracked contributes to a broader vision: building a resilient, low-carbon, and resource-efficient future for Africa through the principles of the bio-circular economy.",
    buttonText: "Partner With Us to Drive Circular Impact",
    buttonLink: "/contact",
    image: "/building-impact.png"
  })

  useEffect(() => {
    fetchSanityData<SustainabilityDoc | null>(SUSTAINABILITY_QUERY, null).then((res) => {
      if (res) {
        setContent((prev) => ({
          title: res.buildingTitle || prev.title,
          description: res.buildingParagraph1 || prev.description,
          buttonText: res.buildingButtonText || prev.buttonText,
          buttonLink: res.buildingButtonLink || prev.buttonLink,
          image: resolveImageUrl(res.buildingImage, prev.image)
        }))
      }
    })
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
          {/* Image - Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 shadow-lg">
              <img
                src={content.image}
                alt={content.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-[40px] lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.1] mb-6 whitespace-pre-line">
              {content.title}
            </h2>
            
            <p className="text-[#1B1B1B] text-[14px] md:text-[15px] leading-[1.5] mb-8">
              {content.description}
            </p>

            <Link
              href={content.buttonLink}
              className="inline-flex items-center justify-center bg-[#0A5024] hover:bg-[#073A1A] text-white transition-colors h-[44px] px-8 text-[14px] md:text-[15px] font-medium rounded-full cursor-pointer"
            >
              {content.buttonText}
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
