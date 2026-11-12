"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fetchSanityData } from "@/sanity/lib/client"
import { PRODUCTS_PAGE_QUERY } from "@/sanity/lib/queries"
import type { ProductsPageDoc } from "@/sanity/lib/types"

const DEFAULT_FAQS = [
  {
    question: "What types of organic waste does Grub Bio accept?",
    answer: "We primarily work with agricultural residues, food processing by-products, market waste, slaughterhouse by-products, and other suitable organic waste streams."
  },
  {
    question: "Do you offer long-term waste management contracts?",
    answer: "Yes, we establish long-term partnerships with agricultural producers, food processors, and municipalities to provide consistent, reliable, and sustainable waste management solutions."
  },
  {
    question: "How does Grub Bio ensure waste traceability?",
    answer: "Our Digital Sustainability Platform tracks organic waste from collection through bio-conversion, providing our partners with fully auditable data on resource recovery and emissions avoidance."
  },
  {
    question: "Can Grub Bio provide ESG and sustainability reporting?",
    answer: "Absolutely. We provide our partners with detailed metrics on waste diverted, carbon emissions avoided, and other key sustainability indicators that align with global ESG reporting standards."
  },
  {
    question: "What products are generated from the waste you collect?",
    answer: "Our bio-manufacturing process converts organic waste into high-value Black Soldier Fly (BSF) products, including Full-Fat and Defatted Insect Protein Meal, Functional Oils, and Organic Fertilizer (Frass)."
  },
  {
    question: "Who can partner with Grub Bio?",
    answer: "We partner with waste generators (farms, food processors, municipalities) looking for sustainable disposal solutions, as well as feed manufacturers, livestock farmers, and industrial businesses seeking high-quality, sustainable inputs."
  },
  {
    question: "Are your products suitable for commercial agriculture?",
    answer: "Yes, our BSF Protein Meal and Functional Oils are specifically engineered to meet the nutritional requirements of commercial poultry, aquaculture, and livestock operations. Our Organic Fertilizer is designed for both smallholder and commercial farming."
  },
  {
    question: "How can I become a waste supply or offtake partner?",
    answer: "You can easily get started by contacting our team through our website or reaching out directly to our partnership division to discuss your specific needs and how we can collaborate."
  }
]

function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
      >
        <span className="font-bold text-black text-sm md:text-base pr-8">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.span>
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
            <p className="pb-6 text-black/80 text-sm md:text-base leading-[1.5]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ProductsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [faqTitle, setFaqTitle] = useState("Frequently Asked Questions")
  const [faqList, setFaqList] = useState(DEFAULT_FAQS)

  useEffect(() => {
    fetchSanityData<ProductsPageDoc | null>(PRODUCTS_PAGE_QUERY, null).then((data) => {
      if (data) {
        if (data.faqTitle) setFaqTitle(data.faqTitle)
        if (data.faqs && Array.isArray(data.faqs) && data.faqs.length > 0) {
          setFaqList(data.faqs.map((f, idx) => ({
            question: f.question || DEFAULT_FAQS[idx % DEFAULT_FAQS.length].question,
            answer: f.answer || DEFAULT_FAQS[idx % DEFAULT_FAQS.length].answer
          })))
        }
      }
    })
  }, [])

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.2] mb-12"
          >
            {faqTitle}
          </motion.h2>

          <div className="flex flex-col">
            {faqList.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
