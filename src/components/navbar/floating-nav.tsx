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

  const navLinks = [
    { name: "About Us", href: "/about", hasDropdown: true, isMegaAbout: true },
    { name: "Our Products", href: "/products", hasDropdown: true, isMega: true },
    { name: "Our Services", href: "/services", hasDropdown: true, isMegaServices: true },
    { name: "Sustainability", href: "/sustainability", hasDropdown: true },
    { name: "Our Technology", href: "/technology", hasDropdown: false },
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

                {/* Mega Menu */}
                {link.isMega && (
                  <div className="absolute top-[72px] left-0 w-full bg-white border-b border-zinc-200 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Item 1 */}
                        <Link href="/products#protein" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="14" x="8" y="6" rx="4"/><path d="m19 7-3 2"/><path d="m5 7 3 2"/><path d="m19 19-3-2"/><path d="m5 19 3-2"/><path d="M20 13h-4"/><path d="M4 13h4"/><path d="m9 4 1 2"/><path d="m15 4-1 2"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Protein Products</div>
                            <div className="text-sm text-zinc-500 mt-1">Explore our full product range</div>
                          </div>
                        </Link>
                        {/* Item 2 */}
                        <Link href="/products#lipids" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Functional Lipids</div>
                            <div className="text-sm text-zinc-500 mt-1">Discover how we support your operations</div>
                          </div>
                        </Link>
                        {/* Item 3 */}
                        <Link href="/products#fertiliser" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22h8"/><path d="M7 17h10"/><path d="M9 22V17"/><path d="M15 22V17"/><path d="M7 17l-1-6h12l-1 6"/><path d="M12 11V3"/><path d="M12 5a3 3 0 0 0-3 3"/><path d="M12 7a3 3 0 0 0 3 3"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Organic Fertiliser</div>
                            <div className="text-sm text-zinc-500 mt-1">Learn about our science and impact</div>
                          </div>
                        </Link>
                        {/* Item 4 */}
                        <Link href="/#technology" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Our Technology</div>
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

                {/* About Us Mega Menu */}
                {link.isMegaAbout && (
                  <div className="absolute top-[72px] left-0 w-full bg-white border-b border-zinc-200 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Item 1 */}
                        <Link href="/about#mission" className="flex items-start gap-4 group/item">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/></svg>
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

                {/* Our Services Mega Menu */}
                {link.isMegaServices && (
                  <div className="absolute top-[72px] left-0 w-full bg-white border-b border-zinc-200 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Item 1 */}
                        <Link href="/#manufacturing" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Circular Bio-Manufacturing Model</div>
                            <div className="text-sm text-zinc-500 mt-1">Explore our full product range</div>
                          </div>
                        </Link>
                        {/* Item 2 */}
                        <Link href="/#waste" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M12 17V8"/><path d="m8 12 4-4 4 4"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Waste Management Solutions</div>
                            <div className="text-sm text-zinc-500 mt-1">Discover how we support your operations</div>
                          </div>
                        </Link>
                        {/* Item 3 */}
                        <Link href="/#serve" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Who We Serve</div>
                            <div className="text-sm text-zinc-500 mt-1">Learn about our science and impact</div>
                          </div>
                        </Link>
                        {/* Item 4 */}
                        <Link href="/#partnerships" className="flex items-start gap-4 group/item">
                          <div className="mt-1 text-[#1B1B1B] group-hover/item:text-[#0A5024] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
                          </div>
                          <div>
                            <div className="font-semibold text-[#1B1B1B] text-[15px] group-hover/item:text-[#0A5024] transition-colors">Partnerships & Collaboration</div>
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
          <Link href="/contact" className="hidden h-[42px] px-6 text-[15px] font-medium bg-[#0A5024] hover:bg-[#073A1A] lg:inline-flex items-center justify-center rounded-full text-white transition-colors">
            Contact Us
          </Link>

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
              <Link href="/contact" className="w-full h-11 inline-flex items-center justify-center rounded-lg bg-[#0A5024] hover:bg-[#073A1A] text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
