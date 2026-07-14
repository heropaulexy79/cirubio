"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function SdgSection() {
  const sdgs = [
    {
      id: "2",
      title: "SDG 2 – Zero Hunger",
      description: "We support food security by producing sustainable, locally sourced protein ingredients for animal feed and organic fertilisers that improve agricultural productivity. By strengthening local food production systems and reducing dependence on imported inputs, we contribute to more resilient and affordable food value chains.",
      icon: "/zero-hunger.png"
    },
    {
      id: "6",
      title: "SDG 6 – Clean Water and Sanitation",
      description: "Improperly managed organic waste can contaminate natural water systems and surrounding ecosystems. Through responsible waste recovery and nutrient recycling, we help reduce environmental pollution while promoting more sustainable management of organic waste streams.",
      icon: "/clean-water.png"
    },
    {
      id: "8",
      title: "SDG 8 – Decent Work and Economic Growth",
      description: "Our bio-manufacturing model creates new economic opportunities across waste recovery, agriculture, logistics, processing, and sustainability services. As we scale, we contribute to job creation, local enterprise development, and the growth of green industries within Africa's emerging bio-circular economy.",
      icon: "/decent-work.png"
    },
    {
      id: "9",
      title: "SDG 9 – Industry, Innovation and Infrastructure",
      description: "Grub Bio is advancing industrial innovation through biotechnology, AI, automation, and digital sustainability systems. Our bio-refineries and technology-enabled production platforms help build resilient, resource-efficient infrastructure that supports sustainable industrial development.",
      icon: "/industry-innovation.png"
    },
    {
      id: "11",
      title: "SDG 11 – Sustainable Cities and Communities",
      description: "We support municipalities and communities by diverting organic waste from landfills and unmanaged disposal pathways. This contributes to cleaner cities, improved waste management systems, and more sustainable urban environments.",
      icon: "/sustainable-cities.png"
    },
    {
      id: "12",
      title: "SDG 12 – Responsible Consumption",
      description: "Our business is founded on circular economy principles. By recovering nutrients from organic waste and converting them into valuable products, we extend resource lifecycles, reduce waste generation, and promote more responsible production and consumption patterns.",
      icon: "/responsible-consumption.png"
    },
    {
      id: "13",
      title: "SDG 13 – Climate Action",
      description: "Organic waste is a significant source of greenhouse gas emissions when left to decompose unmanaged. Through waste diversion, nutrient recovery, and sustainable bio-manufacturing, we help avoid methane emissions, reduce carbon intensity within agricultural supply chains, and support climate-resilient food production systems.",
      icon: "/climate-action.png"
    },
    {
      id: "14",
      title: "SDG 14 – Life Below Water",
      description: "By providing sustainable alternatives to conventional fishmeal, Grub Bio helps reduce pressure on wild fish stocks and marine ecosystems. Our insect-based protein contributes to more sustainable aquaculture and animal feed systems, supporting the long-term health of aquatic biodiversity.",
      icon: "/life-below-water.png"
    },
    {
      id: "15",
      title: "SDG 15 – Life on Land",
      description: "Our organic fertilisers support soil regeneration, improve soil biodiversity, and reduce dependence on synthetic agricultural inputs. Through sustainable land-use practices and nutrient recycling, we contribute to healthier ecosystems and more resilient agricultural landscapes.",
      icon: "/life-on-land.png"
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-[#E8F5E8]">
      <Container>
        <div className="max-w-4xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-wider text-black mb-4 block">
              Sustainable Development Goals (SDGs)
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.1] mb-8">
              Advancing Global Goals<br />Through Local Action
            </h2>
            
            <div className="space-y-6 text-black/80 text-lg leading-[1.5]">
              <p>
                At Grub Bio, sustainability is not an add-on—it's embedded within our business model. By
                transforming organic waste into valuable agricultural and industrial resources, we address
                some of the world's most pressing challenges, including food security, waste management,
                climate change, resource efficiency, and ecosystem preservation.
              </p>
              <p>
                Our bio-circular economy approach aligns with several United Nations Sustainable
                Development Goals (SDGs), creating measurable environmental, social, and economic
                impact across the communities and industries we serve.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={sdg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-6 flex items-start">
                <img
                  src={sdg.icon}
                  alt={sdg.title}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
              <h3 className="text-lg lg:text-[20px] tracking-tight font-bold text-[#0A5024] mb-3 leading-[1.2]">
                {sdg.title}
              </h3>
              <p className="text-sm text-black/80 leading-[1.5]">
                {sdg.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
