"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Container } from "@/components/ui/container"

interface CounterProps {
  value: string
  suffix?: string
  label: string
}

function MetricCard({ value, suffix = "", label }: CounterProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-4 border border-zinc-200 rounded-xl p-8 bg-white"
    >
      <div className="text-[40px] md:text-[48px] font-bold text-[#C59942] leading-none">
        {value}{suffix}
      </div>
      <div className="text-sm font-semibold text-[#1B1B1B] leading-snug">
        {label}
      </div>
    </motion.div>
  )
}

export function ImpactMetricsSection() {
  const metrics = [
    { value: "0.5", suffix: "T", label: "CO2e per metric tonne on Organic Waste diverted from land fills" },
    { value: "90", suffix: "%", label: "Less Water Required Compared to Traditional Protein Source" },
    { value: "1,000", suffix: "x", label: "Less Land Requirement Than Conventional Soy-Based Protein Production" },
    { value: "0", suffix: "%", label: "Quantity of organic waste left after upcycling" },
  ]

  return (
    <section id="impact" className="py-24 bg-white">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="max-w-lg">
            <span className="text-sm font-bold tracking-wide text-black mb-6 block">
              Impact
            </span>
            <h2 className="text-4xl md:text-[56px] font-bold tracking-tight text-[#0A5024] leading-[1.1]">
              Measurable<br/>outcomes<br/>from our work
            </h2>
            <p className="mt-8 text-base text-black max-w-sm">
              Real data demonstrating the scale of our contribution to Africa's circular bio-economy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((metric, idx) => (
              <MetricCard
                key={idx}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
