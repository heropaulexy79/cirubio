"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { fetchSanityData } from "@/sanity/lib/client"
import { TECHNOLOGY_QUERY } from "@/sanity/lib/queries"

export function TechnologyHero() {
  const [data, setData] = useState({
    heroHeadline: "Where Biotechnology Meets\nSustainability Intelligence",
    heroSubheadline: "Grub Bio combines advanced Black Soldier Fly biotechnology, automated production systems, and digital sustainability solutions to create a smarter approach to waste recovery and resource transformation. Our technology platform is designed to maximize biological performance, optimize operational efficiency, and generate measurable environmental impact.",
  })

  useEffect(() => {
    fetchSanityData(TECHNOLOGY_QUERY, null).then((res: any) => {
      if (res) {
        setData((prev) => ({
          ...prev,
          heroHeadline: res.heroHeadline || prev.heroHeadline,
          heroSubheadline: res.heroSubheadline || prev.heroSubheadline,
        }))
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
            style={{ backgroundImage: 'url("/Environmental-Intelligence.jpg")' }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 z-10 bg-black/60" />

          {/* Content */}
          <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center text-white py-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[15px] font-semibold mb-6 text-white"
            >
              Our Technology
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[40px] md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 whitespace-pre-line"
            >
              {data.heroHeadline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] md:text-[17px] text-white/90 leading-[1.5] max-w-4xl mx-auto"
            >
              {data.heroSubheadline}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
