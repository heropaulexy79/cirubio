"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m9 18 6-6-6-6"></path>
  </svg>
)

const products = [
  {
    category: "Protein",
    icon: "/insect protein meal.svg",
    title: "Insect Protein Meal",
    description: "Sustainable, nutrient-rich Full-Fat and Defatted Black Soldier Fly Larvae Meal for aquaculture, poultry, and livestock feed.",
    image: "/Insect-Protein-Meal.jpg",
    link: "/products#protein",
  },
  {
    category: "Fertiliser",
    icon: "/sustainable agriculture.svg",
    title: "Organic Fertiliser",
    description: "Bio-augmented fertiliser supporting regenerative agriculture.",
    image: "/Organic-fertilizers.jpg",
    link: "/products#fertiliser",
  },
  {
    category: "Oils",
    icon: "/functional oils.svg",
    title: "Functional Oils",
    description: "BSF-derived oils for animal nutrition, feed formulation, and industrial applications.",
    image: "/functional-oils.png",
    link: "/products#lipids",
  },
]

function ExpandableCard({
  product,
  isActive,
  isHoveredAny,
  onHoverEnter,
  onHoverLeave,
}: {
  product: typeof products[0]
  isActive: boolean
  isHoveredAny: boolean
  onHoverEnter: () => void
  onHoverLeave: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [cardCenter, setCardCenter] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isActive || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
    setCardCenter({ x: rect.width / 2, y: rect.height / 2 })
  }

  // Calculate subtle 3D tilt up to 3deg
  const rotateX = isActive ? ((mousePos.y - cardCenter.y) / cardCenter.y) * -3 : 0
  const rotateY = isActive ? ((mousePos.x - cardCenter.x) / cardCenter.x) * 3 : 0

  // Layout flex transition values
  const flexValue = isActive ? 1.5 : 1
  const scaleValue = !isActive && isHoveredAny ? 0.95 : 1
  const opacityValue = 1

  return (
    <motion.div
      ref={cardRef}
      layout
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      onMouseMove={handleMouseMove}
      animate={{
        flex: flexValue,
        scale: scaleValue,
        opacity: opacityValue,
        rotateX,
        rotateY,
      }}
      transition={{
        flex: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.7, ease: "easeInOut" },
        rotateX: { type: "spring", stiffness: 300, damping: 30 },
        rotateY: { type: "spring", stiffness: 300, damping: 30 },
      }}
      className={cn(
        "relative h-[280px] md:h-[240px] overflow-hidden rounded-xl cursor-pointer origin-center shadow-xl",
        "min-w-0"
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200
      }}
    >
      {/* Expanding Parallax Image */}
      <motion.div
        layout
        className="absolute inset-0 w-full h-full origin-center"
        animate={{
          scale: isActive ? 1.15 : 1,
          y: isActive ? -20 : 0
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Dynamic Radial Gradient Spotlight */}
      {isActive && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.18), transparent 45%)`
          }}
        />
      )}

      {/* Dynamic Background Overlay */}
      <motion.div
        layout
        className="absolute inset-0 z-10 pointer-events-none"
        initial={false}
        animate={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)"
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Content Container */}
      <motion.div layout className="absolute inset-x-0 bottom-0 z-20 p-6 flex flex-col justify-end min-h-[60%] w-full">
        <LayoutGroup>
          <div className="flex flex-col text-left items-start w-full">
            {isActive ? (
              <motion.span
                layoutId={`cat-icon-${product.title}`}
                className="text-sm font-bold text-white mb-3"
              >
                {product.category}
              </motion.span>
            ) : (
              <motion.div
                layoutId={`cat-icon-${product.title}`}
                className="mb-3 text-white"
              >
                <img src={product.icon} alt={product.category} className="w-8 h-8 object-contain brightness-0 invert" />
              </motion.div>
            )}

            <motion.h3
              layout
              className={cn(
                "font-bold text-white mb-2 leading-tight transition-all duration-500",
                isActive ? "text-3xl md:text-4xl" : "text-lg md:text-xl"
              )}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {product.title}
            </motion.h3>

            <motion.p
              layout
              className="text-white/90 text-sm leading-[1.5] max-w-[500px]"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {product.description}
            </motion.p>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <Link href={product.link} className="flex items-center gap-2 text-white hover:text-white/80 transition-colors text-base font-semibold">
                    Learn more <ChevronRightIcon />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </motion.div>
    </motion.div>
  )
}

export function ProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0)

  return (
    <section className="border-t border-zinc-200 bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          label="Products"
          title="What we produce"
          description="Sustainable outputs from our circular process"
          className="mb-16 md:mb-20"
        />

        <LayoutGroup>
          <div
            className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full h-auto min-h-[600px] lg:h-[270px] lg:min-h-0"
            onMouseLeave={() => setHoveredIndex(0)}
          >
            {products.map((product, idx) => (
              <ExpandableCard
                key={product.title}
                product={product}
                isActive={hoveredIndex === idx}
                isHoveredAny={true}
                onHoverEnter={() => setHoveredIndex(idx)}
                onHoverLeave={() => { }}
              />
            ))}
          </div>
        </LayoutGroup>
      </Container>
    </section>
  )
}
