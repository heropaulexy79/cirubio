"use client"

import React from "react"
import { motion } from "framer-motion"

export function ContactInformation() {
  return (
    <section className="w-full bg-white">
      <div className="pt-24 pb-12 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] mb-16"
        >
          Contact Information
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 mb-20">
          
          {/* Left Column: Email and Phone */}
          <div className="space-y-12">
            {/* Email Block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-[#C49A29] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#1B1B1B] mb-2">
                Email
              </h3>
              <a href="mailto:info@grub.bio" className="text-[15px] text-[#1B1B1B] underline hover:text-[#0A5024] transition-colors">
                info@grub.bio
              </a>
            </motion.div>

            {/* Phone Block */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-[#C49A29] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#1B1B1B] mb-2">
                Phone
              </h3>
              <a href="tel:+2348107254202" className="text-[15px] text-[#1B1B1B] underline hover:text-[#0A5024] transition-colors">
                +234 810 725 4202
              </a>
            </motion.div>
          </div>

          {/* Right Column: Office Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-[#C49A29] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="text-[17px] font-bold text-[#1B1B1B] mb-4">
              Office Location
            </h3>
            
            <div className="mb-6">
              <h4 className="text-[14px] font-bold text-[#1B1B1B] mb-2">
                Head Office
              </h4>
              <p className="text-[15px] text-[#1B1B1B] leading-[1.5]">
                Mepowu Road, Odogbolu Agricultural Acquisition, Odogbolu LGA, Ogun State
              </p>
            </div>

            <div>
              <h4 className="text-[14px] font-bold text-[#1B1B1B] mb-2">
                Business Hours
              </h4>
              <p className="text-[15px] text-[#1B1B1B] leading-[1.5]">
                Monday – Friday<br />
                8:00 AM – 5:00 PM
              </p>
            </div>
          </motion.div>

        </div>
      </div>
      </div>
      
      {/* Bottom Divider (Full Width) */}
      <hr className="w-full border-t border-zinc-300" />
    </section>
  )
}
