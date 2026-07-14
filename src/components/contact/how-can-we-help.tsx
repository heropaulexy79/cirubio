"use client"

import React from "react"
import { motion } from "framer-motion"

export function HowCanWeHelp() {
  return (
    <section className="w-full bg-[#E8F5E8] py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] mb-16"
        >
          How Can We Help?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16 lg:gap-y-20">
          {/* General Inquiries */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6">
              {/* Question/Help Icon */}
              <div 
                className="w-[42px] h-[42px] bg-[#C49A29]" 
                style={{ 
                  WebkitMaskImage: 'url(/General-inquiries.svg)', 
                  maskImage: 'url(/General-inquiries.svg)', 
                  WebkitMaskSize: 'contain', 
                  WebkitMaskRepeat: 'no-repeat', 
                  WebkitMaskPosition: 'center' 
                }} 
              />
            </div>
            <h3 className="text-xl md:text-[24px] font-bold text-[#0A5024] mb-4">
              General Inquiries
            </h3>
            <p className="text-[15px] md:text-base text-[#1B1B1B] leading-[1.5]">
              Learn more about Grub Bio, our products, services, technology platform, and sustainability initiatives.
            </p>
          </motion.div>

          {/* Partnership Requests */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              {/* Handshake Icon */}
              <div 
                className="w-[42px] h-[42px] bg-[#C49A29]" 
                style={{ 
                  WebkitMaskImage: 'url(/Partnerships-request.svg)', 
                  maskImage: 'url(/Partnerships-request.svg)', 
                  WebkitMaskSize: 'contain', 
                  WebkitMaskRepeat: 'no-repeat', 
                  WebkitMaskPosition: 'center' 
                }} 
              />
            </div>
            <h3 className="text-xl md:text-[24px] font-bold text-[#0A5024] mb-4">
              Partnership Requests
            </h3>
            <p className="text-[15px] md:text-base text-[#1B1B1B] leading-[1.5]">
              Explore opportunities for collaboration, including waste supply partnerships, product offtake agreements, municipal waste management programs, ESG initiatives, and circular supply chain development.
            </p>
          </motion.div>

          {/* Product & Commercial Enquiries */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-6">
              {/* Box Icon */}
              <div 
                className="w-[42px] h-[42px] bg-[#C49A29]" 
                style={{ 
                  WebkitMaskImage: 'url(/Product-Commercial-Enquiries.svg)', 
                  maskImage: 'url(/Product-Commercial-Enquiries.svg)', 
                  WebkitMaskSize: 'contain', 
                  WebkitMaskRepeat: 'no-repeat', 
                  WebkitMaskPosition: 'center' 
                }} 
              />
            </div>
            <h3 className="text-xl md:text-[24px] font-bold text-[#0A5024] mb-4">
              Product & Commercial Enquiries
            </h3>
            <p className="text-[15px] md:text-base text-[#1B1B1B] leading-[1.5]">
              Speak with our team about sustainable protein ingredients, organic fertilisers, functional oils, and other bio-based products.
            </p>
          </motion.div>

          {/* Sustainability & ESG Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-6">
              {/* Leaf Icon */}
              <div 
                className="w-[42px] h-[42px] bg-[#C49A29]" 
                style={{ 
                  WebkitMaskImage: 'url(/Sustainability-ESG-Solutions.svg)', 
                  maskImage: 'url(/Sustainability-ESG-Solutions.svg)', 
                  WebkitMaskSize: 'contain', 
                  WebkitMaskRepeat: 'no-repeat', 
                  WebkitMaskPosition: 'center' 
                }} 
              />
            </div>
            <h3 className="text-xl md:text-[24px] font-bold text-[#0A5024] mb-4">
              Sustainability & ESG Solutions
            </h3>
            <p className="text-[15px] md:text-base text-[#1B1B1B] leading-[1.5]">
              Learn how our Digital Sustainability Platform can help your organization track environmental impact, carbon-emission avoidance, and ESG performance metrics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
