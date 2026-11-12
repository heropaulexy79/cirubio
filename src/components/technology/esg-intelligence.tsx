"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { TECHNOLOGY_QUERY } from "@/sanity/lib/queries"
import type { TechnologyDoc } from "@/sanity/lib/types"

const DEFAULT_ESG = {
  badge: "Real-Time ESG Intelligence",
  title: "Measuring What\nMatters",
  p1: "Sustainability should be measurable. Our SaaS-enabled environmental intelligence platform provides partners with real-time access to key sustainability metrics, helping them quantify and communicate their environmental impact.",
  p2: "By converting operational data into actionable insights, organizations can strengthen ESG reporting, support compliance requirements, and demonstrate progress toward sustainability goals with confidence.",
  metrics: [
    "Carbon-emission avoidance",
    "Methane avoidance from waste diversion",
    "Waste recovered and upcycled",
    "Circularity and resource-efficiency indicators",
    "Environmental impact reporting",
    "Contributions to SDGs"
  ],
  image: "/real-time-esg.jpg"
}

export function EsgIntelligence() {
  const [content, setContent] = useState(DEFAULT_ESG)

  useEffect(() => {
    fetchSanityData<TechnologyDoc | null>(TECHNOLOGY_QUERY, null).then((res) => {
      if (res) {
        setContent({
          badge: res.esgBadge || DEFAULT_ESG.badge,
          title: res.esgTitle || DEFAULT_ESG.title,
          p1: res.esgParagraph1 || DEFAULT_ESG.p1,
          p2: res.esgParagraph2 || DEFAULT_ESG.p2,
          metrics: res.esgCapabilities && res.esgCapabilities.length > 0 ? res.esgCapabilities : DEFAULT_ESG.metrics,
          image: resolveImageUrl(res.esgImage, DEFAULT_ESG.image)
        })
      }
    })
  }, [])

  return (
    <section className="w-full bg-[#E8F5E8] pb-24 pt-0 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="bg-white rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-sm">
          
          {/* Left: Image */}
          <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-[auto] bg-zinc-900">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${content.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 p-8 lg:p-10 xl:p-14 flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[15px] font-semibold text-zinc-800 mb-4"
            >
              {content.badge}
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[32px] md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] mb-8 leading-[1.15] whitespace-pre-line"
            >
              {content.title}
            </motion.h2>
            
            <div className="space-y-4 text-[#1B1B1B] text-[14px] md:text-[15px] leading-[1.5] mb-8">
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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl md:text-[22px] font-bold text-[#1B1B1B] mb-6">ESG Metrics Include</h3>
              <ul className="space-y-4">
                {content.metrics.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#1B1B1B] text-[15px]">
                    <CheckCircle2 className="w-[18px] h-[18px] text-zinc-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
