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
    { name: "About Us", href: "/about", hasDropdown: true, isMega: true },
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
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-6 md:px-12 lg:px-20 relative">
        
        {/* Left Side: Logo and Navigation */}
        <div className="flex items-center gap-10 xl:gap-14 h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/GRUB LOGO FINAL.png" alt="Grub Bio Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <div key={link.name} className="group flex items-center h-full">
                <a
                  href={link.href}
                  className="flex items-center gap-1.5 text-[15px] font-medium text-[#1B1B1B] hover:text-[#0A5024] transition-colors py-4"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDownIcon className="text-zinc-500 group-hover:text-[#0A5024] transition-colors" />
                  )}
                </a>

                {/* About Us Mega Menu */}
                {link.isMega && (
                  <div className="absolute top-[72px] left-0 w-full bg-white border-b border-zinc-200 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Item 1 */}
                        <Link href="/about" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Our Mission & Vision</div>
                            <div className="text-sm text-zinc-500 mt-1">Explore our full product range</div>
                          </div>
                        </Link>
                        {/* Item 2 */}
                        <Link href="/about#founder" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Message from the Founder</div>
                            <div className="text-sm text-zinc-500 mt-1">Discover how we support your operations</div>
                          </div>
                        </Link>
                        {/* Item 3 */}
                        <Link href="/about#impact" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/><path d="M3 3l18 18" strokeWidth="1.5" strokeOpacity="0.2"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Our Impact Vision</div>
                            <div className="text-sm text-zinc-500 mt-1">Learn about our science and impact</div>
                          </div>
                        </Link>
                        {/* Item 4 */}
                        <Link href="/about#sdg" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Sustainable Development Goals</div>
                            <div className="text-sm text-zinc-500 mt-1">Ready to partner with us?</div>
                          </div>
                        </Link>
                      </div>

                      {/* Bottom Footer Area */}
                      <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-center items-center">
                        <span className="text-[15px] text-[#1B1B1B]">
                          Questions about our work? <Link href="/contact" className="font-medium underline hover:text-[#0A5024]">Get in touch</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side: CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 h-full">
          <Button className="hidden h-[42px] px-6 text-sm font-medium bg-[#0A5024] hover:bg-[#073A1A] lg:inline-flex rounded-full text-white">
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
                  className="text-base font-medium text-foreground hover:text-[#0A5024] py-2"
                  onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
                {link.hasDropdown && <ChevronDownIcon className="text-zinc-400" />}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-zinc-100">
              <Button className="w-full bg-[#0A5024] hover:bg-[#073A1A] text-white">Contact Us</Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
