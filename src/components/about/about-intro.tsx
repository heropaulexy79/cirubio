"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fetchSanityData } from "@/sanity/lib/client"
import { ABOUT_QUERY } from "@/sanity/lib/queries"
import type { AboutDoc } from "@/sanity/lib/types"

export function AboutIntro() {
  const [content, setContent] = useState({
    p1: "Operating at the intersection of waste management, sustainable agriculture, and climate action, we leverage automation, real-time monitoring, and circular bio-refining systems to create measurable environmental and economic value.",
    p2: "Our goal is simple: to turn waste into opportunity while strengthening food systems, supporting environmental sustainability, providing real-time ESG insights, and advancing Africa's transition to a bio-circular economy."
  })

  useEffect(() => {
    fetchSanityData<AboutDoc | null>(ABOUT_QUERY, null).then((data) => {
      if (data) {
        setContent((prev) => ({
          p1: data.introParagraph1 || prev.p1,
          p2: data.introParagraph2 || prev.p2
        }))
      }
    })
  }, [])

  return (
    <section className="py-12 md:py-16 bg-white border-y border-zinc-200">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-2xl md:text-[26px] text-[#0A5024] font-bold leading-[1.5] mb-10">
            {content.p1}
          </p>
          <p className="text-2xl md:text-[26px] text-[#0A5024] font-bold leading-[1.5]">
            {content.p2}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
