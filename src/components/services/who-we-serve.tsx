"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"



function PlantIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C89E39" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-6">
      <path d="M8 20h8l1-6H7z M12 14v-8 M12 10c-2 0-4-2-4-4s2 1 4 1 M12 8c2 0 4-2 4-4s-2 1-4 1"/>
      <path d="M8 20h8v2H8z" />
    </svg>
  )
}

export function WhoWeServe() {
  return (
    <section id="serve" className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-black mb-4 block"
          >
            Who We Serve
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[38px] font-bold text-[#0A5024] leading-[1.1] mb-6"
          >
            Creating Value Across the<br/>Circular Economy
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black text-[15px] leading-[1.5]"
          >
            Our solutions are designed to help businesses, agricultural producers, and public<br/> sector organisations transform organic waste into measurable environmental and economic value.
          </motion.p>
        </div>

        {/* Top Divider */}
        <div className="w-full h-px bg-zinc-200" />

        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Col 1 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="py-12 lg:pr-10 border-b lg:border-r border-zinc-200 flex flex-col"
          >
            <div className="relative w-10 h-10 mb-6">
              <Image src="/Food-Beverage-Manufacturers.svg" alt="Food & Beverage Manufacturers" fill className="object-contain" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#0A5024] leading-[1.2] mb-4">
              Food & Beverage<br/>Manufacturers
            </h3>
            <p className="text-black text-[14px] leading-[1.5] mb-4">
              Food processing and manufacturing operations generate significant volumes of organic by-products that often become costly disposal challenges. Grub Bio provides a structured pathway for recovering value from these waste streams through our bio-refinery platform.
            </p>
            <p className="text-black text-[14px] leading-[1.5]">
              By integrating with our circular bio-manufacturing model, manufacturers can reduce landfill dependency, lower waste management costs, strengthen ESG performance, and generate measurable sustainability outcomes through resource recovery and carbon-emission avoidance.
            </p>
          </motion.div>

          {/* Col 2 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="py-12 lg:px-10 border-b lg:border-r border-zinc-200 flex flex-col"
          >
            <div className="relative w-10 h-10 mb-6">
              <Image src="/Integrated-Farms-Agricultural-Processors.svg" alt="Integrated Farms & Agricultural Processors" fill className="object-contain" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#0A5024] leading-[1.2] mb-4">
              Integrated Farms &<br/>Agricultural Processors
            </h3>
            <p className="text-black text-[14px] leading-[1.5] mb-4">
              Agricultural producers and integrated farming operations often manage multiple waste streams across production systems. We help create closed-loop models where organic waste is upcycled into valuable feed ingredients and organic soil enhancers.
            </p>
            <p className="text-black text-[14px] leading-[1.5]">
              This approach improves resource efficiency, reduces input costs, strengthens sustainability performance, and creates additional value streams within existing agricultural operations.
            </p>
          </motion.div>

          {/* Col 3 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="py-12 lg:pl-10 border-b border-zinc-200 flex flex-col"
          >
            <div className="relative w-10 h-10 mb-6">
              <Image src="/Municipalities-Waste-Management-Authorities.svg" alt="Municipalities & Waste Management Authorities" fill className="object-contain" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#0A5024] leading-[1.2] mb-4">
              Municipalities & Waste<br/>Management Authorities
            </h3>
            <p className="text-black text-[14px] leading-[1.5] mb-4">
              Cities and communities face increasing pressure to manage growing volumes of organic waste while meeting environmental and climate objectives. Grub Bio supports urban and regional waste management systems by recovering the organic fraction of municipal waste and converting it into valuable bio-based products.
            </p>
            <p className="text-black text-[14px] leading-[1.5]">
              Our model reduces landfill pressure, lowers methane emissions, and contributes to cleaner, more resource-efficient communities aligned with sustainability and climate goals.
            </p>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Col 4 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="py-12 lg:pr-10 lg:border-r border-zinc-200 flex flex-col"
          >
            <div className="relative w-10 h-10 mb-6">
              <Image src="/Feed Millers.svg" alt="Feed Millers" fill className="object-contain" />
            </div>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#0A5024] leading-[1.2] mb-4">
              Feed Millers
            </h3>
            <p className="text-black text-[14px] leading-[1.5] mb-4">
              Feed manufacturers continue to face rising production costs driven by dependence on imported protein ingredients, foreign exchange volatility, and supply chain disruptions. These challenges create pricing uncertainty and reduce long-term planning stability.
            </p>
            <p className="text-black text-[14px] leading-[1.5]">
              Grub Bio provides a locally produced, sustainable protein alternative that reduces import dependence, shortens supply chains, and improves input availability. By incorporating upcycled protein ingredients into feed formulations, feed millers can achieve greater cost control, improved supply security, and stronger alignment with sustainability objectives.
            </p>
          </motion.div>

          {/* Col 5 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="py-12 lg:pl-10 flex flex-col"
          >
            <PlantIcon />
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#0A5024] leading-[1.2] mb-4">
              Smallholder Farmers
            </h3>
            <p className="text-black text-[14px] leading-[1.5] mb-4">
              Millions of smallholder farmers face rising fertiliser costs, declining soil health, and increasing pressure to maintain productivity. Heavy reliance on imported and synthetic inputs has made farming more expensive and less resilient.
            </p>
            <p className="text-black text-[14px] leading-[1.5]">
              Grub Bio's organic fertiliser provides an affordable, locally produced alternative that helps restore soil health, improve water retention, and enhance nutrient availability. By supporting regenerative agriculture practices, we help farmers increase productivity while reducing reliance on carbon-intensive agricultural inputs.
            </p>
          </motion.div>
        </div>

      </Container>
    </section>
  )
}
