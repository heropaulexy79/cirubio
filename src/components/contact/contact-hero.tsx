"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { CONTACT_INFO_QUERY } from "@/sanity/lib/queries"
import type { ContactInfoDoc } from "@/sanity/lib/types"

const DEFAULT_HERO = {
  badge: "Contact Us",
  headline: "Let's Build a Circular Future\nTogether",
  subheadline1: "Whether you're looking to manage organic waste, source sustainable products, explore partnership opportunities, or learn more about our technology platform, we'd love to hear from you.",
  subheadline2: "Our team is ready to help you discover how Grub Bio can support your sustainability, circular economy, and climate objectives.",
  image: "/contact-hero.png"
}

export function ContactHero() {
  const [content, setContent] = useState(DEFAULT_HERO)

  useEffect(() => {
    fetchSanityData<ContactInfoDoc | null>(CONTACT_INFO_QUERY, null).then((data) => {
      if (data) {
        setContent({
          badge: data.heroBadge || DEFAULT_HERO.badge,
          headline: data.heroHeadline || DEFAULT_HERO.headline,
          subheadline1: data.heroSubheadline1 || DEFAULT_HERO.subheadline1,
          subheadline2: data.heroSubheadline2 || DEFAULT_HERO.subheadline2,
          image: resolveImageUrl(data.heroImage, DEFAULT_HERO.image)
        })
      }
    })
  }, [])

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 pt-32 pb-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Image Container */}
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[600px] flex items-center justify-center bg-zinc-900">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${content.image}")` }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 z-10 bg-black/75" />

          {/* Content */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center text-white py-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[15px] font-semibold mb-6 text-white"
            >
              {content.badge}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-10 whitespace-pre-line"
            >
              {content.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] md:text-[17px] text-white/90 leading-[1.5] max-w-3xl mx-auto mb-6"
            >
              {content.subheadline1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[15px] md:text-[17px] text-white/90 leading-[1.5] max-w-3xl mx-auto"
            >
              {content.subheadline2}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
