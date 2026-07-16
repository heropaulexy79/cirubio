"use client"

import React, { useState } from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NewsletterSection() {
  return (
    <section className="pt-12 pb-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="bg-[#E8F5E8] rounded-[32px] py-16 px-6 md:px-12 flex flex-col items-center text-center">
          <h2 className="mb-6 text-[32px] md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold tracking-tight text-[#0A5024] leading-[1.2]">
            Stay connected with<br className="hidden md:block" /> Grub Bio
          </h2>
          <p className="mb-10 text-[15px] md:text-base text-[#1B1B1B] max-w-2xl leading-[1.5]">
            Receive updates on bio-circular innovation, sustainable agriculture, climate impact, industry insights, and Grub Bio&apos;s latest developments.
          </p>
          
          <div className="flex items-center gap-8 mb-10 text-[#0A5024]">
            <a href="https://www.facebook.com/share/1BbmfRzVxY/" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://www.instagram.com/grub.bio/" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="https://x.com/grub_bio" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/grub-bio" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#" className="transition-all hover:opacity-80 hover:scale-110">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>
            </a>
          </div>

          <p className="text-[13px] text-[#1B1B1B] font-medium">
            Join our community building a more resilient and sustainable future for Africa
          </p>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    formData.append("access_key", "35c57619-bf1f-42f6-8743-9fba80b4317b"); 
    formData.append("subject", "New Newsletter Subscription");

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json
      });
      const data = await res.json();
      if (res.status === 200) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000); // Reset after 5 seconds
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Network error. Please try again later.");
    }
  };

  return (
    <footer id="contact" className="bg-white pt-8">
      <hr className="w-full border-t border-zinc-200" />
      <Container className="pt-8 pb-12">
        <div className="bg-[#051F11] rounded-2xl p-10 md:p-16 text-white grid gap-12 md:grid-cols-12">
          
          <div className="md:col-span-5 flex flex-col gap-6">
            <img src="/GRUB LOGO FINAL.png" alt="Grub Bio Logo" className="h-10 w-auto object-contain brightness-0 invert self-start" />
            <p className="text-sm mt-4 text-white">Get the latest news and updates from Grub Bio.</p>
            <form className="flex w-full max-w-sm gap-3 mt-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="h-12 flex-1 rounded-xl border border-white/30 bg-transparent px-5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                required
              />
              <Button 
                type="submit" 
                disabled={status === "submitting"}
                className="h-12 rounded-full border border-white bg-transparent text-white hover:bg-transparent hover:text-white px-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            {status === "success" && (
              <p className="text-sm text-green-400 mt-1">Successfully subscribed!</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400 mt-1">{errorMessage}</p>
            )}
            <p className="text-[11px] text-white/60 max-w-sm leading-[1.5] mt-2">
              By subscribing you agree to our Privacy Policy and consent to receive updates from Grub Bio.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-white">Products</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-white/80">
                <li><Link href="/products" className="hover:text-white transition-colors">Protein products</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Functional lipids</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Organic fertilizer</Link></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-white">Services</h4>
              <ul className="flex flex-col gap-4 text-sm font-semibold text-white">
                <li><Link href="/contact" className="hover:text-white/80 transition-colors">Partnerships</Link></li>
                <li><Link href="/about" className="hover:text-white/80 transition-colors">About us</Link></li>
                <li><Link href="/contact" className="hover:text-white/80 transition-colors">Contact us</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-white">Follow us</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-white/80">
                <li>
                  <a href="https://www.facebook.com/share/1BbmfRzVxY/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/grub.bio/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://x.com/grub_bio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="lucide lucide-twitter"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                    X
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/grub-bio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="lucide lucide-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#1B1B1B]">
          <p>© 2026 Grub Bio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-black underline underline-offset-2 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-black underline underline-offset-2 transition-colors">Terms of service</a>
            <a href="#" className="hover:text-black underline underline-offset-2 transition-colors">Cookies settings</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
