"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { fetchSanityData } from "@/sanity/lib/client"
import { TECHNOLOGY_QUERY } from "@/sanity/lib/queries"
import type { TechnologyDoc } from "@/sanity/lib/types"

const DEFAULT_PARTNER = {
  badge: "Partner Dashboard Access",
  title: "Secure Access to\nSustainability\nInsights",
  p1: "Our secure partner portal provides authorised users with access to real-time operational and sustainability data through an intuitive digital interface.",
  p2: "Whether tracking waste volumes, monitoring environmental impact, or generating sustainability reports, partners have the tools needed to access transparent, verifiable, and actionable insights whenever they need them",
  demoText: "Request A Demo",
  demoLink: "/contact",
  subtitle: "Monitor. Measure. Report. Improve.",
  loginText: "Partner Login",
  loginLink: "/contact"
}

export function PartnerDashboard() {
  const [content, setContent] = useState(DEFAULT_PARTNER)

  useEffect(() => {
    fetchSanityData<TechnologyDoc | null>(TECHNOLOGY_QUERY, null).then((res) => {
      if (res) {
        setContent({
          badge: res.partnerBadge || DEFAULT_PARTNER.badge,
          title: res.partnerTitle || DEFAULT_PARTNER.title,
          p1: res.partnerParagraph1 || DEFAULT_PARTNER.p1,
          p2: res.partnerParagraph2 || DEFAULT_PARTNER.p2,
          demoText: res.partnerDemoText || DEFAULT_PARTNER.demoText,
          demoLink: res.partnerDemoLink || DEFAULT_PARTNER.demoLink,
          subtitle: res.partnerSubtitle || DEFAULT_PARTNER.subtitle,
          loginText: res.partnerLoginText || DEFAULT_PARTNER.loginText,
          loginLink: res.partnerLoginLink || DEFAULT_PARTNER.loginLink
        })
      }
    })
  }, [])

  return (
    <section className="w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Column */}
        <div className="lg:pr-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[15px] font-semibold text-zinc-800 mb-6"
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
        <div className="flex flex-col">
          <div className="space-y-6 text-[#1B1B1B] text-[15px] md:text-base leading-[1.5] mb-8">
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
            className="mb-8"
          >
            <Link
              href={content.demoLink}
              className="inline-flex items-center justify-center h-[44px] px-7 rounded-full border border-[#0A5024]/60 text-[#0A5024] hover:bg-[#0A5024]/5 hover:text-[#0A5024] transition-colors bg-transparent font-medium text-sm"
            >
              {content.demoText}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl md:text-[24px] font-bold text-[#0A5024] mb-5">
              {content.subtitle}
            </h3>
            <Link
              href={content.loginLink}
              className="inline-flex items-center justify-center h-[44px] px-8 rounded-full bg-[#0A5024] hover:bg-[#073A1A] text-white font-medium text-sm"
            >
              {content.loginText}
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
