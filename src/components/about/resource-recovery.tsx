"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { ABOUT_QUERY } from "@/sanity/lib/queries"
import type { AboutDoc } from "@/sanity/lib/types"

const DEFAULT_RECOVERY = {
  badge: "Our Impact Vision",
  title: "Resource Recovery\nfor Food Security",
  icon: "/resource-recovery.svg",
  image: "/resources-recovery.jpg",
  intro1: "Africa's growing population requires resilient food production systems, sustainable agricultural inputs, and more efficient resource utilisation. At the same time, millions of tonnes of valuable organic resources are lost annually through inefficient waste management practices.",
  intro2: "Grub Bio is helping bridge this gap by recovering nutrients from organic waste streams and converting them into high-value products that support agriculture, animal nutrition, and environmental sustainability.",
  points: [
    "Recover valuable nutrients from underutilized organic waste streams",
    "Strengthen local food and feed production systems",
    "Reduce dependence on imported agricultural inputs",
    "Support sustainable agriculture and soil regeneration",
    "Divert organic waste from landfills and unmanaged disposal pathways",
    "Reduce methane emissions through resource recovery and upcycling",
    "Create economic value and new opportunities across agricultural value chains",
    "Deliver transparent and auditable ESG and sustainability metrics through our digital platform"
  ],
  conclusion: "By turning waste into productive resources, we are building a more resilient, resource-efficient, and food-secure future for Africa."
}

export function ResourceRecovery() {
  const [content, setContent] = useState(DEFAULT_RECOVERY)

  useEffect(() => {
    fetchSanityData<AboutDoc | null>(ABOUT_QUERY, null).then((data) => {
      if (data) {
        setContent({
          badge: data.recoveryBadge || DEFAULT_RECOVERY.badge,
          title: data.recoveryTitle || DEFAULT_RECOVERY.title,
          icon: resolveImageUrl(data.recoveryIcon, DEFAULT_RECOVERY.icon),
          image: resolveImageUrl(data.recoveryImage, DEFAULT_RECOVERY.image),
          intro1: data.recoveryIntro1 || DEFAULT_RECOVERY.intro1,
          intro2: data.recoveryIntro2 || DEFAULT_RECOVERY.intro2,
          points: data.recoveryPoints && data.recoveryPoints.length > 0 ? data.recoveryPoints : DEFAULT_RECOVERY.points,
          conclusion: data.recoveryConclusion || DEFAULT_RECOVERY.conclusion
        })
      }
    })
  }, [])

  return (
    <section id="impact" className="py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
          
          {/* Left Column (Headers + Image) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[420px] xl:w-[460px] flex-shrink-0 flex flex-col"
          >
            <p className="text-black font-semibold text-sm mb-4">{content.badge}</p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.2] mb-8 whitespace-pre-line">
              {content.title}
            </h2>
            
            {/* Icon */}
            <div className="w-24 h-24 mb-10">
              <img src={content.icon} alt="Resource Recovery Icon" className="w-full h-full object-contain" />
            </div>

            {/* Image */}
            <div className="w-full aspect-square rounded-[24px] overflow-hidden shadow-xl relative">
               <img src={content.image} alt={content.title} className="w-full h-full object-cover absolute inset-0" />
            </div>
          </motion.div>

          {/* Right Column (Text Content) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 lg:max-w-[640px] flex flex-col"
          >
            <div className="space-y-6 text-black/90 font-medium leading-[1.5] text-[15px] md:text-[16px] mb-8">
              <p>{content.intro1}</p>
              <p>{content.intro2}</p>
              <p>Through our bio-circular economy model, we are helping to:</p>
            </div>

            <ul className="space-y-4 mb-8">
              {content.points.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-[#0A5024]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                      <path d="M2 22 12 12"/>
                    </svg>
                  </div>
                  <span className="text-black/90 text-[15px] md:text-[16px] font-medium leading-[1.5]">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-black/90 font-medium leading-[1.5] text-[15px] md:text-[16px] mt-2">
              {content.conclusion}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
