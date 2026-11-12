"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { SERVICES_PAGE_QUERY } from "@/sanity/lib/queries"
import type { ServicesPageDoc } from "@/sanity/lib/types"

function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black mt-[3px] flex-shrink-0">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  )
}

const DEFAULT_PARTNERSHIPS = {
  badge: "Partnerships & Collaborations",
  title: "Building Circular \nSupply Chains Together",
  description: "Collaboration is central to our mission. We work with businesses, agricultural producers, government agencies, municipalities, development organisations, and industry stakeholders to create resilient circular value chains.",
  opportunities: [
    "Organic waste supply partnerships",
    "Sustainable agriculture initiatives",
    "Circular supply chain development",
    "ESG and sustainability programs",
    "Climate action and carbon-emission avoidance projects"
  ],
  benefitsText: "By partnering with Grub Bio, organisations can strengthen their sustainability commitments, improve resource utilisation, and contribute to the growth of Africa's bio-circular economy. Our collaborative approach creates shared environmental, social, and economic value while supporting long-term resilience across supply chains.",
  image: "/waste-management-solution.jpg"
}

export function PartnershipsCollaboration() {
  const [content, setContent] = useState(DEFAULT_PARTNERSHIPS)

  useEffect(() => {
    fetchSanityData<ServicesPageDoc | null>(SERVICES_PAGE_QUERY, null).then((data) => {
      if (data) {
        setContent({
          badge: data.partnershipsBadge || DEFAULT_PARTNERSHIPS.badge,
          title: data.partnershipsTitle || DEFAULT_PARTNERSHIPS.title,
          description: data.partnershipsDescription || DEFAULT_PARTNERSHIPS.description,
          opportunities: data.partnershipsPoints && data.partnershipsPoints.length > 0 ? data.partnershipsPoints : DEFAULT_PARTNERSHIPS.opportunities,
          benefitsText: DEFAULT_PARTNERSHIPS.benefitsText,
          image: resolveImageUrl(data.partnershipsImage, DEFAULT_PARTNERSHIPS.image)
        })
      }
    })
  }, [])

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-wider text-black mb-6"
            >
              {content.badge}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[46px] font-bold text-[#0A5024] leading-[1.15] mb-6 whitespace-pre-line"
            >
              {content.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-black text-[14px] md:text-[15px] leading-[1.6] mb-8"
            >
              {content.description}
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-[19px] font-bold text-black mb-4"
            >
              Partnership Opportunities
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 mb-8"
            >
              {content.opportunities.map((opp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] md:text-[15px] text-black">
                  <ListIcon />
                  <span className="leading-[1.6]">{opp}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-4"
            >
              <img src="/key features.svg" alt="Benefits" className="w-6 h-6 object-contain" />
              <h3 className="text-lg md:text-[19px] font-bold text-black">
                Benefits
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-black text-[14px] md:text-[15px] leading-[1.6]"
            >
              {content.benefitsText}
            </motion.p>
          </div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[55%] relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={content.image}
                alt="Waste management solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
