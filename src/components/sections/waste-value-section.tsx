"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries"
import type { HomePageDoc } from "@/sanity/lib/types"

const DEFAULT_WASTE = {
  badge: "Value Proposition",
  headline: "Turning Waste into Value",
  description: "Grub Bio leverages Black Soldier Fly biotechnology, circular bio-manufacturing, and digital sustainability intelligence to upcycle organic waste into high-value alternative proteins, organic fertilisers, and functional oils for agriculture, aquaculture, livestock production, and industrial applications. Through our integrated SaaS platform, we provide stakeholders with real-time environmental intelligence, enabling transparent tracking of waste diversion, carbon-emission avoidance, resource recovery, and ESG performance.",
  icon: "/environment_12459581.png"
}

export function WasteValueSection() {
  const [content, setContent] = useState(DEFAULT_WASTE)

  useEffect(() => {
    fetchSanityData<HomePageDoc | null>(HOMEPAGE_QUERY, null).then((data) => {
      if (data) {
        setContent({
          badge: data.wasteBadge || DEFAULT_WASTE.badge,
          headline: data.wasteHeadline || DEFAULT_WASTE.headline,
          description: data.wasteDescription || DEFAULT_WASTE.description,
          icon: resolveImageUrl(data.wasteIcon, DEFAULT_WASTE.icon)
        })
      }
    })
  }, [])

  return (
    <section id="solutions" className="bg-[#E8F5E8] py-16 md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="text-sm font-semibold tracking-wider text-black">
              {content.badge}
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-[#0A5024] md:text-5xl lg:text-[40px] xl:text-[44px] leading-[1.2]">
              {content.headline}
            </h2>
            <div className="flex h-16 w-16 items-center justify-center">
              <img src={content.icon} alt="Environment Icon" className="h-full w-full object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-sm md:text-base text-black font-medium leading-[1.5]">
              {content.description}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
