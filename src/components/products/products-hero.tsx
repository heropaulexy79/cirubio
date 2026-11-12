"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { PRODUCTS_PAGE_QUERY } from "@/sanity/lib/queries"
import type { ProductsPageDoc } from "@/sanity/lib/types"

const DEFAULT_HERO = {
  badge: "Our Products",
  headline: "Sustainable Solutions from\nCircular Bio-Manufacturing",
  subheadline: "Through innovative Black Soldier Fly technology, Grub Bio transforms organic waste into high-value products that support sustainable agriculture, animal nutrition, and industrial applications.",
  video: "https://pub-95f6a0295449459292ad27c9169c0b00.r2.dev/Our%20products%20header.mp4",
  image: ""
}

export function ProductsHero() {
  const [content, setContent] = useState(DEFAULT_HERO)

  useEffect(() => {
    fetchSanityData<ProductsPageDoc | null>(PRODUCTS_PAGE_QUERY, null).then((data) => {
      if (data) {
        setContent({
          badge: data.heroBadge || DEFAULT_HERO.badge,
          headline: data.heroHeadline || DEFAULT_HERO.headline,
          subheadline: data.heroSubheadline || DEFAULT_HERO.subheadline,
          video: data.heroVideoUrl || DEFAULT_HERO.video,
          image: data.heroImage ? resolveImageUrl(data.heroImage, "") : ""
        })
      }
    })
  }, [])

  return (
    <section className="pt-32 pb-16 bg-white px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[500px] md:min-h-[600px] w-full rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center p-6 md:p-12"
        >
          {/* Background Video / Image */}
          <div className="absolute inset-0 z-0">
            {content.video ? (
              <video
                src={content.video}
                autoPlay
                loop
                muted
                playsInline
                poster={content.image || undefined}
                className="w-full h-full object-cover"
              />
            ) : content.image ? (
              <img src={content.image} alt={content.headline} className="w-full h-full object-cover" />
            ) : null}
            <div className="absolute inset-0 bg-black/60 z-10" />
          </div>

          {/* Centered Content */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white font-medium text-sm md:text-base mb-4 tracking-wide"
            >
              {content.badge}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[56px] tracking-tight font-bold text-white leading-[1.15] mb-6 whitespace-pre-line"
            >
              {content.headline}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg text-white/90 leading-[1.5] max-w-3xl"
            >
              {content.subheadline}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
