"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function AutomatedRearing() {
  const capabilities = [
    "Automated rearing and climate-controlled production environments",
    "Real-time monitoring of biological and environmental conditions",
    "Data-driven process optimization and performance management",
    "Scalable infrastructure for circular bio-manufacturing"
  ]

  return (
    <section className="w-full bg-[#E8F5E8] py-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="bg-white rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-sm">
          
          {/* Left: Image */}
          <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-[auto] bg-zinc-100">
            {/* The image is placed as a background to ensure it covers the area perfectly */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("/automated-rearing.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 p-8 lg:p-10 xl:p-14 flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[15px] font-semibold text-zinc-800 mb-4"
            >
              Automated Rearing Environment
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[32px] md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] mb-8 leading-[1.15]"
            >
              Enhancing Biological<br />Performance
            </motion.h2>
            
            <div className="space-y-4 text-[#1B1B1B] text-[14px] md:text-[15px] leading-[1.5] mb-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At the core of our operations is a technology-enabled bio-manufacturing platform built to optimise every stage of the Black Soldier Fly lifecycle. Through automated rearing environments, precision climate management, and continuous monitoring, we create ideal conditions for biological growth and resource conversion.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our system leverages sensors, data analytics, AI and process automation to monitor critical production parameters in real time, enabling greater consistency, improved yields, and enhanced operational efficiency.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl md:text-[22px] font-bold text-[#1B1B1B] mb-6">Key Capabilities</h3>
              <ul className="space-y-4">
                {capabilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#1B1B1B] text-[15px]">
                    <CheckCircle2 className="w-[18px] h-[18px] text-zinc-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
