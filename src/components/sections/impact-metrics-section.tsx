"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Container } from "@/components/ui/container"

interface CounterProps {
  end: number
  suffix?: string
  label: string
}

function AnimatedCounter({ end, suffix = "", label }: CounterProps) {
  const [count, setCount] = React.useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  React.useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const frames = 60
      const increment = end / (duration / (1000 / frames))
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / frames)

      return () => clearInterval(timer)
    }
  }, [end, isInView])

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="text-4xl font-bold text-primary-dark md:text-5xl lg:text-6xl">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-medium text-muted uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}

export function ImpactMetricsSection() {
  const metrics = [
    { value: 25000, suffix: "+", label: "Tons of waste diverted" },
    { value: 90, suffix: "%", label: "Recovery rate" },
    { value: 1000, suffix: "+", label: "Businesses served" },
    { value: 14, suffix: " days", label: "Average processing cycle" },
  ]

  return (
    <section id="impact" className="border-t border-zinc-200 py-24 md:py-32">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Impact
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-primary-dark md:text-5xl">
              Measurable outcomes from our work
            </h2>
            <p className="mt-6 text-lg text-muted max-w-lg">
              Our processes have a direct, verifiable impact on reducing waste and supporting local agricultural communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 items-center">
            {metrics.map((metric, idx) => (
              <AnimatedCounter
                key={idx}
                end={metric.value}
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
