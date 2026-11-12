"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { SERVICES_PAGE_QUERY } from "@/sanity/lib/queries"
import type { ServicesPageDoc } from "@/sanity/lib/types"

const DEFAULT_HERO = {
  badge: "Our Services",
  headline: "Enabling Circular Value Across Agriculture, Industry, and Communities",
  subheadline: "Grub Bio delivers integrated solutions that transform organic waste into valuable resources while helping organisations achieve their sustainability, operational, and climate objectives. Through our bio-manufacturing solution, we create circular systems that connect waste recovery, resource efficiency, and sustainable production.",
  video: "https://pub-95f6a0295449459292ad27c9169c0b00.r2.dev/Our%20services%20header%20(1).mp4",
  image: ""
}

export function ServicesHero() {
  const [content, setContent] = useState(DEFAULT_HERO)

  useEffect(() => {
    fetchSanityData<ServicesPageDoc | null>(SERVICES_PAGE_QUERY, null).then((data) => {
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
    <section className="pt-32 pb-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[500px] md:min-h-[580px] w-full overflow-hidden rounded-2xl bg-[#051F11] flex flex-col items-center justify-center px-6 py-20 text-center"
        >
          {/* Background Image / Overlay */}
          <div className="absolute inset-0 z-0">
            {content.video ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={content.image || undefined}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={content.video} type="video/mp4" />
              </video>
            ) : content.image ? (
              <img src={content.image} alt={content.headline} className="w-full h-full object-cover" />
            ) : null}
            <div className="absolute inset-0 bg-[#051F11]/70" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold tracking-wider text-white mb-6"
            >
              {content.badge}
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-8 max-w-4xl"
            >
              {content.headline}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-white/90 leading-[1.5] max-w-3xl"
            >
              {content.subheadline}
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
