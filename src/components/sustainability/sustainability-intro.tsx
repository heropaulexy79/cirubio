"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { fetchSanityData } from "@/sanity/lib/client"
import { SUSTAINABILITY_QUERY } from "@/sanity/lib/queries"
import type { SustainabilityDoc } from "@/sanity/lib/types"

export function SustainabilityIntro() {
  const [content, setContent] = useState({
    badge: "ESG Leadership & Strategy",
    title: "Sustainability\nBacked by Data",
    p1: "We believe that sustainability should be measurable, transparent, and actionable. Our technology-enabled approach combines circular bio-manufacturing with real-time sustainability monitoring, allowing us to quantify sustainability outcomes across our operations and partnerships.",
    p2: "Through our Digital Sustainability Platform, we provide transparent insights into waste diversion, resource recovery, carbon-emission avoidance, SDGs and other key ESG indicators. This enables partners to strengthen sustainability reporting, support compliance requirements, and demonstrate measurable impact."
  })

  useEffect(() => {
    fetchSanityData<SustainabilityDoc | null>(SUSTAINABILITY_QUERY, null).then((res) => {
      if (res) {
        setContent((prev) => ({
          badge: res.introBadge || prev.badge,
          title: res.introTitle || prev.title,
          p1: res.introParagraph1 || prev.p1,
          p2: res.introParagraph2 || prev.p2,
        }))
      }
    })
  }, [])

  return (
    <section className="w-full bg-[#E8F5E8] py-20 px-6 md:px-12 lg:px-20 border-b border-zinc-200">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="lg:pr-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[14px] md:text-[15px] font-bold text-zinc-900 tracking-wide mb-4"
            >
              {content.badge}
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[36px] md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.15] whitespace-pre-line"
            >
              {content.title}
            </motion.h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-4 lg:space-y-6 text-[#1B1B1B] text-[14px] md:text-[15px] leading-[1.5]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.p1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {content.p2}
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  )
}
