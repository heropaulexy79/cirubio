"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"

const services = [
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
    title: "Carbon-Emission Avoidance Tracking",
    description: "Monitoring and quantifying emissions avoided through circular waste management.",
    image: "/Carbon-emssion tracking avoidance.jpeg",
  },
  {
    title: "Circular Economy Partnerships",
    description: "Developing tailored solutions for businesses, municipalities, and agricultural stakeholders.",
    image: "/CIrcular Economy Partnerships.jpeg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-b border-zinc-200 bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          label="Our Services"
          title="What we deliver"
          description="Four integrated solutions for sustainable transformation"
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
