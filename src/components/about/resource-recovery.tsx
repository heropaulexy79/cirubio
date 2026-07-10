"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function ResourceRecovery() {
  return (
    <section className="py-20 bg-[#f4f7f4]">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column (Headers + Image) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <p className="text-black font-semibold text-sm mb-4">Our Impact Vision</p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0A5024] leading-[1.2] mb-8">
              Resource Recovery<br/>for Food Security
            </h2>
            
            {/* Apple Icon */}
            <div className="w-20 h-20 mb-8 text-black">
              {/* Apple with a hand underneath (rough approximation) */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                <path d="M10 2c1 .5 2 2 2 5" />
                <path d="M22 18H2v2h20z" />
              </svg>
            </div>

            {/* Image */}
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative">
               <img src="/resources-recovery.jpg" alt="Resource Recovery for Food Security" className="w-full h-full object-cover absolute inset-0" />
            </div>
          </motion.div>

          {/* Right Column (Text Content) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <p className="text-black/80 leading-relaxed text-sm md:text-base mb-6">
              Africa's growing population requires resilient food production systems, sustainable agricultural inputs, and more efficient resource utilisation. At the same time, millions of tonnes of valuable organic resources are lost annually through inefficient waste management practices.
            </p>
            <p className="text-black/80 leading-relaxed text-sm md:text-base mb-6">
              Grub Bio is helping bridge this gap by recovering nutrients from organic waste streams and converting them into high-value products that support agriculture, animal nutrition, and environmental sustainability.
            </p>
            <p className="text-black/80 leading-relaxed text-sm md:text-base mb-8">
              Through our bio-circular economy model, we are helping to:
            </p>

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
                  <span className="text-black/80 text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-black/80 leading-relaxed text-sm md:text-base font-medium">
              By turning waste into productive resources, we are building a more resilient and sustainable food system for Africa.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
