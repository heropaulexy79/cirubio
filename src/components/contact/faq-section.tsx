"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "What does Grub Bio do?",
    answer: "Grub Bio transforms organic waste into sustainable protein ingredients, organic fertilisers, functional oils, and other bio-based products through advanced bio-manufacturing technologies."
  },
  {
    question: "What types of organic waste do you work with?",
    answer: "We process a wide range of organic waste streams, including agricultural by-products, food processing waste, municipal organic waste, and retail food waste. Contact us to discuss your specific waste streams."
  },
  {
    question: "Who can partner with Grub Bio?",
    answer: "We partner with waste generators, agricultural producers, feed manufacturers, municipal bodies, and organizations seeking sustainable waste management and bio-based products."
  },
  {
    question: "Can Grub Bio help with ESG reporting?",
    answer: "Yes, our Digital Sustainability Platform provides transparent, verifiable data on your environmental impact, helping you track carbon-emission avoidance and other key ESG performance metrics."
  },
  {
    question: "Do you offer waste management services?",
    answer: "Yes, we provide end-to-end organic waste management solutions, diverting waste from landfills and transforming it into valuable resources."
  },
  {
    question: "How can I become a partner?",
    answer: "Simply fill out the contact form above with your inquiry type set to Partnership, or reach out to us directly via email. Our team will get back to you promptly to discuss collaboration opportunities."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-zinc-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className="text-[15px] md:text-[17px] font-bold text-[#1B1B1B] pr-8 group-hover:text-[#0A5024] transition-colors">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-[#1B1B1B]">
                    <motion.svg 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </motion.svg>
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[15px] md:text-[16px] text-[#1B1B1B] leading-[1.5]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
          {/* Bottom border for the last item */}
          <div className="border-t border-zinc-200" />
        </div>
      </div>

    </section>
  )
}
