"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
const features = [
  {
    icon: "/waste management.svg",
    title: "Waste\nManagement",
    description: "Diverting organic waste from landfills and uncontrolled disposal while creating valuable circular economy products.",
  },
  {
    icon: "/sustainable agriculture.svg",
    title: "Sustainable\nAgriculture",
    description: "Producing sustainable animal feed ingredients and organic soil enhancers that support resilient food production systems.",
  },
  {
    icon: "/climate change.svg",
    title: "Climate\nChange",
    description: "Reducing greenhouse gas emissions through carbon-emission avoidance and resource-efficient bio-manufacturing.",
  },
  {
    icon: "/sustainability intelligence.svg",
    title: "Sustainability\nIntelligence",
    description: "Leveraging automation, real-time monitoring, and ESG analytics to optimize bio-manufacturing processes while delivering transparent, auditable sustainability metrics.",
  },
]

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="mb-20">
          <SectionHeading
            label="Our Impact Pillars"
            title="How we create change"
            description="Four pillars driving sustainable transformation"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, idx) => {
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="flex flex-col items-start"
              >
                <div className="mb-6">
                  <img src={feature.icon} alt={feature.title.replace('\n', ' ')} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-[22px] font-bold text-[#0A5024] whitespace-pre-line leading-[1.3] mb-4">
                  {feature.title}
                </h3>
                <p className="text-black leading-[1.5] text-sm">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
