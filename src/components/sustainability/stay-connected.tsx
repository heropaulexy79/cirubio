"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { fetchSanityData } from "@/sanity/lib/client"
import { SUSTAINABILITY_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries"
import type { SiteSettingsDoc, SustainabilityDoc } from "@/sanity/lib/types"

export function StayConnected() {
  const [content, setContent] = useState({
    title: "Stay connected with\nGrub Bio",
    description: "Receive updates on bio-circular innovation, sustainable agriculture, climate impact, industry insights, and Grub Bio's latest developments.",
    communityText: "Join our community building a more resilient and sustainable future for Africa",
    facebookUrl: "https://www.facebook.com/share/1BbmfRzVxY/",
    instagramUrl: "https://www.instagram.com/grub.bio/",
    twitterUrl: "https://x.com/grub_bio",
    linkedinUrl: "https://www.linkedin.com/company/grub-bio",
    youtubeUrl: "#"
  })

  useEffect(() => {
    fetchSanityData<SustainabilityDoc | null>(SUSTAINABILITY_QUERY, null).then((res) => {
      if (res) {
        setContent((prev) => ({
          ...prev,
          title: res.stayConnectedTitle || prev.title,
          description: res.stayConnectedDescription || prev.description,
        }))
      }
    })
    fetchSanityData<SiteSettingsDoc | null>(SITE_SETTINGS_QUERY, null).then((res) => {
      if (res) {
        setContent((prev) => ({
          ...prev,
          communityText: res.newsletterCommunityText || prev.communityText,
          facebookUrl: res.facebookUrl || prev.facebookUrl,
          instagramUrl: res.instagramUrl || prev.instagramUrl,
          twitterUrl: res.twitterUrl || prev.twitterUrl,
          linkedinUrl: res.linkedinUrl || prev.linkedinUrl,
          youtubeUrl: res.youtubeUrl || prev.youtubeUrl,
        }))
      }
    })
  }, [])

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-[40px] lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.2] mb-6 whitespace-pre-line">
            {content.title}
          </h2>
          
          <p className="text-black/80 text-sm md:text-base leading-[1.5] mb-10 max-w-2xl mx-auto">
            {content.description}
          </p>

          <div className="flex items-center justify-center gap-6 mb-12 text-[#0A5024]">
            <a href={content.facebookUrl} target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href={content.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href={content.twitterUrl} target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a>
            <a href={content.linkedinUrl} target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href={content.youtubeUrl} target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:scale-110">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>
            </a>
          </div>

          <p className="text-black/80 text-sm">
            {content.communityText}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
