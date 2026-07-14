"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Link from "next/link"

function FacebookIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="#0A5024" className="hover:opacity-80 transition-opacity">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V15.32h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 3.32h-2.33v6.559C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0A5024" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hover:opacity-80 transition-opacity">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A5024" className="hover:opacity-80 transition-opacity">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="#0A5024" className="hover:opacity-80 transition-opacity">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="#0A5024" className="hover:opacity-80 transition-opacity">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

export function ServicesSocial() {
  return (
    <section className="py-24 bg-white text-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.15] mb-6">
            Stay connected with<br/>Grub Bio
          </h2>
          
          <p className="text-black text-[15px] leading-[1.5] mb-12 max-w-2xl font-medium">
            Receive updates on bio-circular innovation, sustainable agriculture, climate impact, industry insights, and Grub Bio's latest developments.
          </p>

          <div className="flex items-center justify-center gap-6 md:gap-8 mb-12">
            <Link href="#" aria-label="Facebook"><FacebookIcon /></Link>
            <Link href="#" aria-label="Instagram"><InstagramIcon /></Link>
            <Link href="#" aria-label="X"><XIcon /></Link>
            <Link href="#" aria-label="LinkedIn"><LinkedInIcon /></Link>
            <Link href="#" aria-label="YouTube"><YouTubeIcon /></Link>
          </div>

          <p className="text-black text-[14px] leading-[1.5]">
            Join our community building a more resilient and sustainable future for Africa
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
