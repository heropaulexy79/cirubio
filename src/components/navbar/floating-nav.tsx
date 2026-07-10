"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export function FloatingNav() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10)
  })

  // Adjusted links to match user screenshot exact text and structure
  const navLinks = [
    { name: "About Us", href: "/about", hasDropdown: false },
    { name: "Our Products", href: "/products", hasDropdown: true },
    { name: "Our Services", href: "/#services", hasDropdown: true },
    { name: "Sustainability", href: "#sustainability", hasDropdown: false },
    { name: "Our Technology", href: "#technology", hasDropdown: false },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white ${
        isScrolled ? "border-b border-zinc-200 shadow-sm" : "border-b border-zinc-200"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-6 md:px-12 lg:px-20">
        
        {/* Left Side: Logo and Navigation */}
        <div className="flex items-center gap-10 xl:gap-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/GRUB LOGO FINAL.png" alt="Grub Bio Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center gap-1.5 text-[15px] font-medium text-[#1B1B1B] hover:text-primary transition-colors"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDownIcon className="text-zinc-500 group-hover:text-primary transition-colors" />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Side: CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button className="hidden h-[42px] px-6 text-sm font-medium bg-[#0A5C19] hover:bg-[#074612] lg:inline-flex rounded-full">
            Contact Us
          </Button>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden border-t border-zinc-100 bg-white px-6 py-4 shadow-lg"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex items-center justify-between">
                <a
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary py-2"
                  onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
                {link.hasDropdown && <ChevronDownIcon className="text-zinc-400" />}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-zinc-100">
              <Button className="w-full bg-[#0A5C19] hover:bg-[#074612]">Contact Us</Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
