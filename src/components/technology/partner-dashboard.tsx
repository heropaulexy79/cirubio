"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function PartnerDashboard() {
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Column */}
        <div className="lg:pr-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[15px] font-semibold text-zinc-800 mb-6"
          >
            Partner Dashboard Access
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[36px] md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.15]"
          >
            Secure Access to<br />
            Sustainability<br />
            Insights
          </motion.h2>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          <div className="space-y-6 text-[#1B1B1B] text-[15px] md:text-base leading-[1.5] mb-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our secure partner portal provides authorised users with access to real-time operational and sustainability data through an intuitive digital interface.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Whether tracking waste volumes, monitoring environmental impact, or generating sustainability reports, partners have the tools needed to access transparent, verifiable, and actionable insights whenever they need them
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <Button className="h-[44px] px-7 rounded-full border border-[#0A5024]/60 text-[#0A5024] hover:bg-[#0A5024]/5 hover:text-[#0A5024] transition-colors bg-transparent font-medium">
              Request A Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl md:text-[24px] font-bold text-[#0A5024] mb-5">
              Monitor. Measure. Report. Improve.
            </h3>
            <Button className="h-[44px] px-8 rounded-full bg-[#0A5024] hover:bg-[#073A1A] text-white font-medium">
              Partner Login
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
