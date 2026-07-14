"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function DigitalDashboard() {
  const features = [
    "Waste diversion tracking",
    "Resource recovery monitoring",
    "Product traceability and reporting",
    "Sustainability performance analytics",
    "Audit-ready environmental records"
  ]

  return (
    <section className="w-full bg-[#E8F5E8] pb-20 pt-0 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="bg-white rounded-[32px] overflow-hidden flex flex-col-reverse lg:flex-row shadow-sm">
          
          {/* Left: Content */}
          <div className="lg:w-1/2 p-8 lg:p-10 xl:p-14 flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[15px] font-semibold text-zinc-800 mb-4"
            >
              Digital Sustainability Dashboard
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[32px] md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] mb-8 leading-[1.15]"
            >
              End-to-End <br className="hidden lg:block"/> Traceability
            </motion.h2>
            
            <div className="space-y-4 text-[#1B1B1B] text-[14px] md:text-[15px] leading-[1.5] mb-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Digital Sustainability Dashboard provides complete visibility across the waste-to-value lifecycle. From waste collection and resource recovery to product output and environmental impact, every stage is monitored, measured, and recorded.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                This creates a transparent chain of custody that allows partners to track the journey of organic waste as it is transformed into valuable agricultural and industrial inputs.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl md:text-[22px] font-bold text-[#1B1B1B] mb-6">Dashboard Features</h3>
              <ul className="space-y-4">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#1B1B1B] text-[15px]">
                    <CheckCircle2 className="w-[18px] h-[18px] text-zinc-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-[auto] bg-zinc-100">
            {/* Background image for perfect coverage */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("/digital-sustainability-dashboard.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
