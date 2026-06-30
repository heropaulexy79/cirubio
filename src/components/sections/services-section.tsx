"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"

const services = [
  {
    title: "Organic Waste Recycling",
    description: "Converting agricultural, food processing, and market waste into valuable resources.",
    image: "/Organic Waste Cycling.jpeg",
  },
  {
    title: "ESG Sustainability Reporting",
    description: "Providing traceable sustainability data and environmental impact reporting for partners.",
    image: "/ESG & Sustainability Reporting.jpeg",
  },
  {
    title: "Carbon Emission Reduction Consulting",
    description: "Monitoring and quantifying emissions avoided through circular waste management.",
    image: "/Carbon-emssion tracking avoidance.jpeg",
  },
  {
    title: "Circular Bioeconomy Partnerships",
    description: "Developing tailored solutions for businesses, municipalities, and agricultural stakeholders.",
    image: "/CIrcular Economy Partnerships.jpeg",
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
                <p className="text-black flex-1 text-sm leading-relaxed">
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
