"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { HERO_QUERY } from "@/sanity/lib/queries"
import type { HeroDoc } from "@/sanity/lib/types"

const DEFAULT_SLIDES = [
  {
    video: "https://pub-95f6a0295449459292ad27c9169c0b00.r2.dev/Homepage%20-%20Hero%20Slider%201.mp4",
    title: "Advancing Africa's transition\nto a bio-circular economy",
    subtext: "Transforming organic waste into sustainable resources that power agriculture, strengthen food systems, and accelerate climate action across Africa.",
    buttons: [
      { text: "Explore our solution", variant: "solid", href: "/services" },
      { text: "Partner With Us", variant: "outline", href: "/contact" }
    ]
  },
  {
    video: "https://pub-95f6a0295449459292ad27c9169c0b00.r2.dev/Home%20page%20-%20Hero%20Slider%202.mp4",
    title: "Turning Waste into\nHigh Value Resources",
    subtext: "We upcycle organic waste into sustainable protein ingredients, organic fertilisers, and functional oils, creating value for industries while reducing environmental impact.",
    buttons: [
      { text: "Discover our Products", variant: "solid", href: "/products" }
    ]
  },
  {
    video: "https://pub-95f6a0295449459292ad27c9169c0b00.r2.dev/Home%20Page%20-%20Hero%20Slider%203.mp4",
    title: "Building Climate-Smart\nAgriculture for Africa",
    subtext: "Through innovative bio-refining technology and data-driven sustainability solutions, we help businesses reduce emissions, improve resource efficiency, and achieve measurable ESG outcomes.",
    buttons: [
      { text: "View Our Impact", variant: "solid", href: "/sustainability" },
      { text: "Explore Our Technology", variant: "outline", href: "/technology" }
    ]
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState(DEFAULT_SLIDES)

  useEffect(() => {
    fetchSanityData<HeroDoc | null>(HERO_QUERY, null).then((data) => {
      if (!data) return

      if (data.slides && Array.isArray(data.slides) && data.slides.length > 0) {
        const mapped = data.slides.map((s, idx) => {
          const fallback = DEFAULT_SLIDES[idx % DEFAULT_SLIDES.length]
          return {
            video: s.videoUrl || fallback.video,
            poster: s.fallbackImage ? resolveImageUrl(s.fallbackImage, "") : "",
            title: s.title || fallback.title,
            subtext: s.subtext || fallback.subtext,
            buttons: s.buttons && s.buttons.length > 0
              ? s.buttons.map((b) => ({
                  text: b.text || "Learn More",
                  variant: b.variant || "solid",
                  href: b.href || "/contact"
                }))
              : fallback.buttons
          }
        })
        setSlides(mapped)
      } else if (data.headline) {
        setSlides((prev) => {
          const updated = [...prev]
          updated[0] = {
            ...updated[0],
            title: data.headline || updated[0].title,
            subtext: data.subheadline || updated[0].subtext,
            buttons: [
              { text: data.primaryCtaText || updated[0].buttons[0].text, variant: "solid", href: data.primaryCtaLink || updated[0].buttons[0].href },
              { text: data.secondaryCtaText || updated[0].buttons[1].text, variant: "outline", href: data.secondaryCtaLink || updated[0].buttons[1].href }
            ]
          }
          return updated
        })
      }
    })
  }, [])

  // Auto-advance slider
  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="px-6 md:px-12 lg:px-20 pt-32 pb-16 bg-white">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[500px] w-full overflow-hidden rounded-2xl bg-[#051F11] md:min-h-[580px] md:rounded-2xl flex items-center justify-center pt-[72px]"
        >
          {/* Background Image Slider / Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/50 z-20" />
            <AnimatePresence mode="popLayout">
              {slides[currentSlide]?.video ? (
                <motion.video
                  key={`video-${currentSlide}`}
                  src={slides[currentSlide]?.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover z-10"
                />
              ) : null}
            </AnimatePresence>
          </div>

          <div className="relative z-30 flex h-full min-h-[500px] flex-col items-center justify-center px-6 pb-20 text-center md:min-h-[580px] md:pb-24 pt-10 max-w-[1000px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] mb-6 whitespace-pre-line">
                  {slides[currentSlide]?.title}
                </h1>
                
                <p className="mt-4 max-w-3xl text-sm md:text-base text-white/90 leading-[1.5] mb-8">
                  {slides[currentSlide]?.subtext}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  {slides[currentSlide]?.buttons.map((btn, idx) => (
                    <Link
                      key={idx}
                      href={btn.href}
                      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base font-semibold transition-all ${
                        btn.variant === "solid"
                          ? "bg-[#0A5024] text-white hover:bg-[#073c1b]"
                          : "border border-white text-white hover:bg-white hover:text-[#0A5024]"
                      }`}
                    >
                      {btn.text}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Dots */}
          {slides.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 z-40 flex justify-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === idx ? "w-8 bg-white" : "w-2.5 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
