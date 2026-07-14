"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Link from "next/link"

export function ServicesCta() {
  return (
    <section className="py-20 md:py-24 bg-[#E8F5E8]">
      <Container>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-[45%]"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.15]">
              Looking for a Circular<br/>Solution?
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-[55%] flex flex-col items-start md:pt-3"
          >
            <p className="text-[#1B1B1B] text-[14px] md:text-[15px] leading-[1.6] mb-8">
              Whether you're managing organic waste, producing food, manufacturing agricultural inputs, or advancing sustainability goals, Grub Bio can help create value through circular innovation.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-semibold text-white bg-[#0A5024] rounded-full hover:bg-[#0A5024]/90 transition-colors"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
