"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"

const services = [
  {
    title: "Organic Waste Recycling",
    description: "End-to-end collection and processing of organic waste streams for food and beverage manufacturers.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "ESG Sustainability Reporting",
    description: "Detailed analytics and transparent tracing to verify your waste diversion and carbon emission reductions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Carbon Emission Reduction Consulting",
    description: "Advisory services on circular practices to meet your critical science-based climate targets.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Circular Bioeconomy Partnerships",
    description: "Tailored off-take agreements and integration of bio-materials into your sustainable supply chains.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-b border-zinc-200 bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          label="Services"
          title="What we deliver"
          description="Comprehensive solutions for a sustainable enterprise"
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
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col overflow-hidden rounded-xl bg-white transition-shadow hover:shadow-xl cursor-pointer border-none"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <h3 className="mb-3 text-xl font-bold text-primary-dark leading-[1.3]">
                  {service.title}
                </h3>
                <p className="text-muted flex-1 text-sm leading-relaxed">
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
