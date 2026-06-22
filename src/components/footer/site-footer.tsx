"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary-dark md:text-4xl">
            Stay connected with CiruBio
          </h2>
          <p className="mb-10 text-muted">
            Subscribe to our newsletter to receive the latest updates on our initiatives, partnerships, and impact.
          </p>
          
          <form className="flex w-full flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-14 flex-1 rounded-full border border-zinc-300 bg-white px-6 text-foreground placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
            <Button type="submit" className="h-14 px-10">
              Subscribe
            </Button>
          </form>
          
          <div className="mt-12 flex items-center gap-6 text-primary-dark">
            <a href="#" className="transition-colors hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-primary-dark py-16 text-white/80">
      <Container>
        <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <img src="/GRUB LOGO FINAL.png" alt="Grub Bio Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Advancing Africa's transition to a bio-circular economy through innovative organic waste management.
            </p>
            <div className="text-sm">
              <p>Email: hello@cirubio.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          
          <div>
            <h4 className="mb-6 font-semibold text-white">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 font-semibold text-white">Solutions</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Waste Recycling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Protein Meal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Organic Fertilizer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ESG Reporting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 font-semibold text-white">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} CiruBio. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 text-sm text-white/60 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">System Status</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
