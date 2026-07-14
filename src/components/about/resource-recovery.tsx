"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function ResourceRecovery() {
  return (
    <section id="impact" className="py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
          
          {/* Left Column (Headers + Image) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[420px] xl:w-[460px] flex-shrink-0 flex flex-col"
          >
            <p className="text-black font-semibold text-sm mb-4">Our Impact Vision</p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.2] mb-8">
              Resource Recovery<br/>for Food Security
            </h2>
            
            {/* Apple Icon */}
            <div className="w-24 h-24 mb-10">
              <img src="/resource-recovery.svg" alt="Resource Recovery Icon" className="w-full h-full object-contain" />
            </div>

            {/* Image */}
            <div className="w-full aspect-square rounded-[24px] overflow-hidden shadow-xl relative">
               <img src="/resources-recovery.jpg" alt="Resource Recovery for Food Security" className="w-full h-full object-cover absolute inset-0" />
            </div>
          </motion.div>

          {/* Right Column (Text Content) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 lg:max-w-[640px] flex flex-col"
          >
            <div className="space-y-6 text-black/90 font-medium leading-[1.5] text-[15px] md:text-[16px] mb-8">
              <p>
                Africa's growing population requires resilient food production systems, sustainable agricultural inputs, and more efficient resource utilisation. At the same time, millions of tonnes of valuable organic resources are lost annually through inefficient waste management practices.
              </p>
              <p>
                Grub Bio is helping bridge this gap by recovering nutrients from organic waste streams and converting them into high-value products that support agriculture, animal nutrition, and environmental sustainability.
              </p>
              <p>
                Through our bio-circular economy model, we are helping to:
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Recover valuable nutrients from underutilized organic waste streams",
                "Strengthen local food and feed production systems",
                "Reduce dependence on imported agricultural inputs",
                "Support sustainable agriculture and soil regeneration",
                "Divert organic waste from landfills and unmanaged disposal pathways",
                "Reduce methane emissions through resource recovery and upcycling",
                "Create economic value and new opportunities across agricultural value chains",
                "Deliver transparent and auditable ESG and sustainability metrics through our digital platform"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-[#0A5024]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                      <path d="M2 22 12 12"/>
                    </svg>
                  </div>
                  <span className="text-black/90 text-[15px] md:text-[16px] font-medium leading-[1.5]">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-black/90 font-medium leading-[1.5] text-[15px] md:text-[16px] mt-2">
              By turning waste into productive resources, we are building a more resilient, resource-efficient, and food-secure future for Africa.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
