"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { CONTACT_INFO_QUERY } from "@/sanity/lib/queries"
import type { ContactInfoDoc } from "@/sanity/lib/types"

const DEFAULT_HELP_CARDS = [
  {
    icon: "/General-inquiries.svg",
    title: "General Inquiries",
    description: "Learn more about Grub Bio, our products, services, technology platform, and sustainability initiatives."
  },
  {
    icon: "/Partnerships-request.svg",
    title: "Partnership Requests",
    description: "Explore opportunities for collaboration, including waste supply partnerships, product offtake agreements, municipal waste management programs, ESG initiatives, and circular supply chain development."
  },
  {
    icon: "/Product-Commercial-Enquiries.svg",
    title: "Product & Commercial Enquiries",
    description: "Speak with our team about sustainable protein ingredients, organic fertilisers, functional oils, and other bio-based products."
  },
  {
    icon: "/Sustainability-ESG-Solutions.svg",
    title: "Sustainability & ESG Solutions",
    description: "Learn how our Digital Sustainability Platform can help your organization track environmental impact, carbon-emission avoidance, and ESG performance metrics."
  }
]

export function HowCanWeHelp() {
  const [title, setTitle] = useState("How Can We Help?")
  const [cards, setCards] = useState(DEFAULT_HELP_CARDS)

  useEffect(() => {
    fetchSanityData<ContactInfoDoc | null>(CONTACT_INFO_QUERY, null).then((data) => {
      if (data) {
        if (data.helpTitle) setTitle(data.helpTitle)
        if (data.helpCards && Array.isArray(data.helpCards) && data.helpCards.length > 0) {
          const mapped = data.helpCards.map((c, idx) => ({
            icon: resolveImageUrl(c.icon, DEFAULT_HELP_CARDS[idx % DEFAULT_HELP_CARDS.length].icon),
            title: c.title || DEFAULT_HELP_CARDS[idx % DEFAULT_HELP_CARDS.length].title,
            description: c.description || DEFAULT_HELP_CARDS[idx % DEFAULT_HELP_CARDS.length].description
          }))
          setCards(mapped)
        }
      }
    })
  }, [])

  return (
    <section className="w-full bg-[#E8F5E8] py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] mb-16"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16 lg:gap-y-20">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
            >
              <div className="mb-6">
                {card.icon.startsWith("/") ? (
                  <div 
                    className="w-[42px] h-[42px] bg-[#C49A29]" 
                    style={{ 
                      WebkitMaskImage: `url(${card.icon})`, 
                      maskImage: `url(${card.icon})`, 
                      WebkitMaskSize: 'contain', 
                      WebkitMaskRepeat: 'no-repeat', 
                      WebkitMaskPosition: 'center' 
                    }} 
                  />
                ) : (
                  <img src={card.icon} alt={card.title} className="w-[42px] h-[42px] object-contain" />
                )}
              </div>
              <h3 className="text-xl md:text-[24px] font-bold text-[#0A5024] mb-4">
                {card.title}
              </h3>
              <p className="text-[15px] md:text-base text-[#1B1B1B] leading-[1.5]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
