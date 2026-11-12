"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fetchSanityData } from "@/sanity/lib/client"
import { PRODUCTS_PAGE_QUERY } from "@/sanity/lib/queries"
import type { ProductsPageDoc } from "@/sanity/lib/types"

export function ProductsCta() {
  const [content, setContent] = useState({
    title: "Creating Value from Every\nResource",
    description: "Every Grub Bio product is developed through a closed-loop bio-manufacturing process that transforms organic waste into valuable agricultural and industrial inputs—advancing sustainability, resource efficiency, and Africa's bio-circular economy."
  })

  useEffect(() => {
    fetchSanityData<ProductsPageDoc | null>(PRODUCTS_PAGE_QUERY, null).then((data) => {
      if (data && data.ctaTitle) {
        setContent((prev) => ({
          title: data.ctaTitle || prev.title,
          description: data.ctaDescription || prev.description
        }))
      }
    })
  }, [])

  return (
    <section className="py-24 bg-[#E8F5E8]">
      <Container>
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.2] mb-8 whitespace-pre-line"
          >
            {content.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black/80 text-base md:text-lg leading-[1.5] max-w-3xl"
          >
            {content.description}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
