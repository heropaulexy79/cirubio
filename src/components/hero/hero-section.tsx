"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const SLIDES = [
  {
    image: "/slider1.jpeg",
    title: "Advancing Africa's\ntransition to a bio-\ncircular economy",
    subtext: "Transforming organic waste into sustainable resources that power agriculture, strengthen food systems, and accelerate climate action across Africa.",
    buttons: [
      { text: "Explore our solution", variant: "solid" },
      { text: "Partner With Us", variant: "outline" }
    ]
  },
  {
    image: "/slider2.jpeg",
    title: "Turning Waste\n into High Value\n Resources",
    subtext: "Transforming organic waste into sustainable resources that power agriculture, strengthen food systems, and accelerate climate action across Africa.",
    buttons: [
      { text: "Discover our Products", variant: "solid" }
    ]
  },
  {
    image: "/slider3.jpeg",
    title: "Build Climate-\nSmart Agriculture\nfor Africa",
    subtext: "Transforming organic waste into sustainable resources that power agriculture, strengthen food systems, and accelerate climate action across Africa.",
    buttons: [
      { text: "View Our Impact", variant: "solid" },
      { text: "Explore Our Technology", variant: "outline" }
    ]
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16 bg-white">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[500px] w-full overflow-hidden rounded-2xl bg-primary-dark md:min-h-[580px] md:rounded-2xl flex items-center justify-center pt-[72px]"
        >
          {/* Background Image Slider / Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/50 z-20" />
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentSlide}
                src={SLIDES[currentSlide].image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                alt="Sustainability"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />
            </AnimatePresence>
          </div>

          <div className="relative z-30 flex h-full min-h-[500px] flex-col items-center justify-center px-6 pb-20 text-center md:min-h-[580px] md:pb-24 pt-10 max-w-[1000px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-[4.2rem] leading-[1.1] whitespace-pre-line">
                  {SLIDES[currentSlide].title}
                </h1>
                
                <p className="mb-10 text-base md:text-lg text-white/90 font-normal max-w-[800px] leading-relaxed">
                  {SLIDES[currentSlide].subtext}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 relative z-40 mt-2">
                  {SLIDES[currentSlide].buttons.map((btn, idx) => (
                    <button
                      key={idx}
                      className={
                        btn.variant === "solid"
                          ? "bg-[#0A5C19] hover:bg-[#074612] text-white transition-colors h-[48px] px-8 text-base font-medium rounded-full cursor-pointer"
                          : "border border-white bg-transparent hover:bg-white/10 text-white transition-colors h-[48px] px-8 text-base font-medium rounded-full cursor-pointer"
                      }
                    >
                      {btn.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-[3px] w-12 rounded-full transition-colors ${
                  idx === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
