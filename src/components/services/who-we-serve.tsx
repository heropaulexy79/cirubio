"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { SERVICES_PAGE_QUERY } from "@/sanity/lib/queries"
import type { ServicesPageDoc } from "@/sanity/lib/types"

function PlantIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C89E39" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-6">
      <path d="M8 20h8l1-6H7z M12 14v-8 M12 10c-2 0-4-2-4-4s2 1 4 1 M12 8c2 0 4-2 4-4s-2 1-4 1"/>
      <path d="M8 20h8v2H8z" />
    </svg>
  )
}

const DEFAULT_SERVE_CARDS = [
  {
    icon: "/Food-Beverage-Manufacturers.svg",
    title: "Food & Beverage\nManufacturers",
    p1: "Food processing and manufacturing operations generate significant volumes of organic by-products that often become costly disposal challenges. Grub Bio provides a structured pathway for recovering value from these waste streams through our bio-refinery platform.",
    p2: "By integrating with our circular bio-manufacturing model, manufacturers can reduce landfill dependency, lower waste management costs, strengthen ESG performance, and generate measurable sustainability outcomes through resource recovery and carbon-emission avoidance."
  },
  {
    icon: "/Integrated-Farms-Agricultural-Processors.svg",
    title: "Integrated Farms &\nAgricultural Processors",
    p1: "Agricultural producers and integrated farming operations often manage multiple waste streams across production systems. We help create closed-loop models where organic waste is upcycled into valuable feed ingredients and organic soil enhancers.",
    p2: "This approach improves resource efficiency, reduces input costs, strengthens sustainability performance, and creates additional value streams within existing agricultural operations."
  },
  {
    icon: "/Municipalities-Waste-Management-Authorities.svg",
    title: "Municipalities & Waste\nManagement Authorities",
    p1: "Cities and communities face increasing pressure to manage growing volumes of organic waste while meeting environmental and climate objectives. Grub Bio supports urban and regional waste management systems by recovering the organic fraction of municipal waste and converting it into valuable bio-based products.",
    p2: "Our model reduces landfill pressure, lowers methane emissions, and contributes to cleaner, more resource-efficient communities aligned with sustainability and climate goals."
  },
  {
    icon: "/Feed Millers.svg",
    title: "Feed Millers",
    p1: "Feed manufacturers continue to face rising production costs driven by dependence on imported protein ingredients, foreign exchange volatility, and supply chain disruptions. These challenges create pricing uncertainty and reduce long-term planning stability.",
    p2: "Grub Bio provides a locally produced, sustainable protein alternative that reduces import dependence, shortens supply chains, and improves input availability. By incorporating upcycled protein ingredients into feed formulations, feed millers can achieve greater cost control, improved supply security, and stronger alignment with sustainability objectives."
  },
  {
    icon: "plant-icon",
    title: "Smallholder Farmers",
    p1: "Millions of smallholder farmers face rising fertiliser costs, declining soil health, and increasing pressure to maintain productivity. Heavy reliance on imported and synthetic inputs has made farming more expensive and less resilient.",
    p2: "Grub Bio's organic fertiliser provides an affordable, locally produced alternative that helps restore soil health, improve water retention, and enhance nutrient availability. By supporting regenerative agriculture practices, we help farmers increase productivity while reducing reliance on carbon-intensive agricultural inputs."
  }
]

export function WhoWeServe() {
  const [header, setHeader] = useState({
    badge: "Who We Serve",
    title: "Creating Value Across the\nCircular Economy",
    description: "Our solutions are designed to help businesses, agricultural producers, and public sector organisations transform organic waste into measurable environmental and economic value."
  })
  const [cards, setCards] = useState(DEFAULT_SERVE_CARDS)

  useEffect(() => {
    fetchSanityData<ServicesPageDoc | null>(SERVICES_PAGE_QUERY, null).then((data) => {
      if (data) {
        setHeader((prev) => ({
          badge: data.whoWeServeBadge || prev.badge,
          title: data.whoWeServeTitle || prev.title,
          description: data.whoWeServeDescription || prev.description
        }))
        if (data.whoWeServeCards && Array.isArray(data.whoWeServeCards) && data.whoWeServeCards.length > 0) {
          const mapped = data.whoWeServeCards.map((c, idx) => ({
            icon: resolveImageUrl(c.icon, DEFAULT_SERVE_CARDS[idx % DEFAULT_SERVE_CARDS.length].icon),
            title: c.title || DEFAULT_SERVE_CARDS[idx % DEFAULT_SERVE_CARDS.length].title,
            p1: c.description || DEFAULT_SERVE_CARDS[idx % DEFAULT_SERVE_CARDS.length].p1,
            p2: ""
          }))
          setCards(mapped)
        }
      }
    })
  }, [])

  return (
    <section id="serve" className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-black mb-4 block"
          >
            {header.badge}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[38px] font-bold text-[#0A5024] leading-[1.1] mb-6 whitespace-pre-line"
          >
            {header.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black text-[15px] leading-[1.5]"
          >
            {header.description}
          </motion.p>
        </div>

        {/* Top Divider */}
        <div className="w-full h-px bg-zinc-200" />

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="py-8 flex flex-col border-b border-zinc-200"
            >
              <div className="relative w-10 h-10 mb-6">
                {card.icon === "plant-icon" ? (
                  <PlantIcon />
                ) : (
                  <Image src={card.icon} alt={card.title} fill className="object-contain" />
                )}
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-[#0A5024] leading-[1.2] mb-4 whitespace-pre-line">
                {card.title}
              </h3>
              <p className="text-black text-[14px] leading-[1.5] mb-4 whitespace-pre-line">
                {card.p1}
              </p>
              {card.p2 && (
                <p className="text-black text-[14px] leading-[1.5]">
                  {card.p2}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
