"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { HOMEPAGE_QUERY, SERVICES_QUERY } from "@/sanity/lib/queries"
import type { HomePageDoc, ServiceDoc } from "@/sanity/lib/types"

const DEFAULT_SERVICES = [
  {
    title: "Organic Waste Upcycling",
    description: "Converting agricultural, food processing, and market waste into valuable resources.",
    image: "/Organic Waste Cycling.jpeg",
  },
  {
    title: "ESG & Sustainability Reporting",
    description: "Providing traceable sustainability data and environmental impact reporting for partners.",
    image: "/ESG & Sustainability Reporting.jpeg",
  },
  {
    title: "Climate Smart and Sustainable Agriculture",
    description: "Creating a circular system that simultaneously optimizes food production, reduces environmental degradation, and builds climate resilience.",
    image: "/Carbon-emssion tracking avoidance.jpeg",
  },
  {
    title: "Circular Economy Partnerships",
    description: "Developing tailored solutions for businesses, municipalities, and agricultural stakeholders.",
    image: "/CIrcular Economy Partnerships.jpeg",
  },
]

export function ServicesSection() {
  const [header, setHeader] = useState({
    label: "Our Services",
    title: "What we deliver",
    description: "Four integrated solutions for sustainable transformation"
  })
  const [services, setServices] = useState(DEFAULT_SERVICES)

  useEffect(() => {
    fetchSanityData<HomePageDoc | null>(HOMEPAGE_QUERY, null).then((data) => {
      if (data) {
        setHeader((prev) => ({
          label: data.servicesLabel || prev.label,
          title: data.servicesTitle || prev.title,
          description: data.servicesDescription || prev.description
        }))
        if (data.servicesCards && Array.isArray(data.servicesCards) && data.servicesCards.length > 0) {
          const mapped = data.servicesCards.map((c, idx) => ({
            title: c.title || DEFAULT_SERVICES[idx % DEFAULT_SERVICES.length].title,
            description: c.description || DEFAULT_SERVICES[idx % DEFAULT_SERVICES.length].description,
            image: resolveImageUrl(c.image, DEFAULT_SERVICES[idx % DEFAULT_SERVICES.length].image)
          }))
          setServices(mapped)
          return
        }
      }

      // Check if services collection has items
      fetchSanityData<ServiceDoc[] | null>(SERVICES_QUERY, null).then((res) => {
        if (res && Array.isArray(res) && res.length > 0) {
          const mapped = res.map((s, idx) => ({
            title: s.title || DEFAULT_SERVICES[idx % DEFAULT_SERVICES.length].title,
            description: s.description || s.tagline || DEFAULT_SERVICES[idx % DEFAULT_SERVICES.length].description,
            image: resolveImageUrl(s.image, DEFAULT_SERVICES[idx % DEFAULT_SERVICES.length].image)
          }))
          setServices(mapped)
        }
      })
    })
  }, [])

  return (
    <section id="services" className="border-t border-b border-zinc-200 bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          label={header.label}
          title={header.title}
          description={header.description}
          className="mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="h-48 w-full overflow-hidden rounded-2xl mb-5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="mb-3 text-xl lg:text-[22px] font-bold text-[#0A5024] leading-[1.3]">
                  {service.title}
                </h3>
                <p className="text-black text-[14px] md:text-[15px] leading-[1.5]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
