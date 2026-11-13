"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"
import Link from "next/link"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries"
import type { HomePageDoc } from "@/sanity/lib/types"
import { TERRABASE_URL } from "@/lib/links"

const DEFAULT_DATA = {
  badge: "Technology Dashboard",
  headline: "Data-driven\nsustainability",
  description: "Access real-time insights into waste diverted, carbon-emission avoidance, contributions to SDGs, resource recovery and circular economy performance through our Digital Sustainability Platform.",
  buttonText: "Explore our technologies",
  buttonLink: "/technology",
  image: "/technology-dashboard.jpg"
}

export function DataSustainabilitySection() {
  const [content, setContent] = useState(DEFAULT_DATA)

  useEffect(() => {
    fetchSanityData<HomePageDoc | null>(HOMEPAGE_QUERY, null).then((data) => {
      if (data) {
        setContent({
          badge: data.dataBadge || DEFAULT_DATA.badge,
          headline: data.dataHeadline || DEFAULT_DATA.headline,
          description: data.dataDescription || DEFAULT_DATA.description,
          buttonText: data.dataButtonText || DEFAULT_DATA.buttonText,
          buttonLink: data.dataButtonLink || DEFAULT_DATA.buttonLink,
          image: resolveImageUrl(data.dataImage, DEFAULT_DATA.image)
        })
      }
    })
  }, [])

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-wide text-black mb-6 block">
              {content.badge}
            </span>
            <h2 className="text-4xl md:text-[42px] font-bold tracking-tight text-[#0A5024] leading-[1.2] whitespace-pre-line">
              {content.headline}
            </h2>
            <p className="mt-8 text-base text-black max-w-md">
              {content.description}
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={content.buttonLink}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-10 bg-[#0A5024] text-white hover:bg-[#0A5024]/90 rounded-full px-8 py-6"
              >
                {content.buttonText}
              </Link>
              <a
                href={TERRABASE_URL}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors h-10 ring-1 ring-inset ring-[#0A5024] text-[#0A5024] hover:bg-[#0A5024]/5 rounded-full px-8 py-6"
              >
                Open TerraBASE
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg relative w-full aspect-[4/3] md:aspect-[5/4]"
          >
            <Image
              src={content.image}
              alt="Data dashboard"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
