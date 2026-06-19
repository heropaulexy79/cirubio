"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const products = [
  {
    title: "Insect Protein Meal",
    description: "High-quality, sustainable protein source for animal feed, derived from Black Soldier Fly larvae. Our premium meal provides essential amino acids specifically optimized for aquaculture and poultry diets, drastically reducing reliance on traditional soy and fishmeal.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Organic Fertilizer",
    description: "Nutrient-rich frass that drastically improves soil health and crop yields without synthetic chemicals. Fortified with natural biomes that enhance root development and drought resilience across diverse agricultural landscapes.",
    image: "https://images.unsplash.com/photo-1416879598555-2575dcbcff55?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Eco-Biomaterials",
    description: "Chitin and chitosan extracts used in agriculture, water treatment, and pharmaceuticals. We isolate these high-value compounds to offer sustainable alternatives to synthetic polymers in industrial applications.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
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
  const flexValue = isActive ? 4 : 1
  const scaleValue = !isActive && isHoveredAny ? 0.95 : 1
  const opacityValue = !isActive && isHoveredAny ? 0.65 : 1

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
        "relative h-[250px] md:h-[325px] overflow-hidden rounded-[2rem] cursor-pointer origin-center shadow-xl",
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
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
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
          background: isActive
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 100%)"
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Content Container */}
      <motion.div layout className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-10 flex flex-col justify-end min-h-[60%]">
        <LayoutGroup>
          <motion.h3
            layout
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {product.title}
          </motion.h3>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-6 pt-3">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
                    transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white/90 text-sm md:text-base leading-relaxed max-w-[500px]"
                  >
                    {product.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
                    transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <button className="bg-white text-black hover:bg-zinc-200 transition-colors h-[48px] px-8 text-sm font-semibold rounded-full w-max">
                      Discover Product
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </motion.div>
    </motion.div>
  )
}

export function ProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Products"
          title="What we produce"
          description="Sustainable outputs from our circular process"
          className="mb-16 md:mb-20"
        />

        <LayoutGroup>
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full h-[750px] lg:h-[325px]">
            {products.map((product, idx) => (
              <ExpandableCard
                key={product.title}
                product={product}
                isActive={hoveredIndex === idx}
                isHoveredAny={hoveredIndex !== null}
                onHoverEnter={() => setHoveredIndex(idx)}
                onHoverLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </LayoutGroup>
      </Container>
    </section>
  )
}
