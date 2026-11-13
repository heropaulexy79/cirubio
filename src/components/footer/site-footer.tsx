"use client"

import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { fetchSanityData, resolveImageUrl } from "@/sanity/lib/client"
import { SITE_SETTINGS_QUERY, CONTACT_INFO_QUERY } from "@/sanity/lib/queries"
import type { SiteSettingsDoc, ContactInfoDoc } from "@/sanity/lib/types"
import { TERRABASE_URL } from "@/lib/links"

export function NewsletterSection() {
  const pathname = usePathname()
  const [content, setContent] = useState({
    heading: "Stay connected with\nGrub Bio",
    subtext: "Receive updates on bio-circular innovation, sustainable agriculture, climate impact, industry insights, and Grub Bio's latest developments.",
    communityText: "Join our community building a more resilient and sustainable future for Africa",
    facebookUrl: "https://www.facebook.com/share/1BbmfRzVxY/",
    instagramUrl: "https://www.instagram.com/grub.bio/",
    twitterUrl: "https://x.com/grub_bio",
    linkedinUrl: "https://www.linkedin.com/company/grub-bio",
    youtubeUrl: "#"
  })

  useEffect(() => {
    fetchSanityData<SiteSettingsDoc | null>(SITE_SETTINGS_QUERY, null).then((res) => {
      if (res) {
        setContent((prev) => ({
          heading: res.newsletterHeading || prev.heading,
          subtext: res.newsletterSubtext || prev.subtext,
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

  if (pathname?.startsWith('/studio')) return null

  return (
    <section className="pt-12 pb-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="bg-[#E8F5E8] rounded-[32px] py-10 md:py-16 px-6 md:px-12 flex flex-col items-center text-center">
          <h2 className="mb-6 text-[32px] md:text-4xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.2] whitespace-pre-line">
            {content.heading}
          </h2>
          <p className="mb-10 text-[15px] md:text-base text-[#1B1B1B] max-w-2xl leading-[1.5]">
            {content.subtext}
          </p>
          
          <div className="flex items-center gap-8 mb-10 text-[#0A5024]">
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

          <p className="text-[13px] text-[#1B1B1B] font-medium">
            {content.communityText}
          </p>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  const pathname = usePathname()
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage] = useState("");
  const [siteSettings, setSiteSettings] = useState({
    logo: "/GRUB LOGO FINAL.png",
    footerText: "Get the latest news and updates from Grub Bio.",
    newsletterPrivacyNote: "By subscribing you agree to our Privacy Policy and consent to receive updates from Grub Bio.",
    copyrightText: "© 2026 Grub Bio. All rights reserved.",
    privacyPolicyUrl: "#",
    termsUrl: "#",
    cookiesUrl: "#",
    facebookUrl: "https://www.facebook.com/share/1BbmfRzVxY/",
    instagramUrl: "https://www.instagram.com/grub.bio/",
    twitterUrl: "https://x.com/grub_bio",
    linkedinUrl: "https://www.linkedin.com/company/grub-bio",
    youtubeUrl: "#",
    email: "info@grub.bio"
  })

  useEffect(() => {
    fetchSanityData<SiteSettingsDoc | null>(SITE_SETTINGS_QUERY, null).then((res) => {
      if (res) {
        setSiteSettings((prev) => ({
          ...prev,
          logo: resolveImageUrl(res.logo, prev.logo),
          footerText: res.footerText || prev.footerText,
          newsletterPrivacyNote: res.newsletterPrivacyNote || prev.newsletterPrivacyNote,
          copyrightText: res.copyrightText || prev.copyrightText,
          privacyPolicyUrl: res.privacyPolicyUrl || prev.privacyPolicyUrl,
          termsUrl: res.termsUrl || prev.termsUrl,
          cookiesUrl: res.cookiesUrl || prev.cookiesUrl,
          facebookUrl: res.facebookUrl || prev.facebookUrl,
          instagramUrl: res.instagramUrl || prev.instagramUrl,
          twitterUrl: res.twitterUrl || prev.twitterUrl,
          linkedinUrl: res.linkedinUrl || prev.linkedinUrl,
          youtubeUrl: res.youtubeUrl || prev.youtubeUrl,
        }))
      }
    })
    fetchSanityData<ContactInfoDoc | null>(CONTACT_INFO_QUERY, null).then((res) => {
      if (res) {
        setSiteSettings((prev) => ({
          ...prev,
          email: res.email || prev.email,
          linkedinUrl: res.linkedinUrl || prev.linkedinUrl,
          twitterUrl: res.twitterUrl || prev.twitterUrl,
          instagramUrl: res.instagramUrl || prev.instagramUrl,
          facebookUrl: res.facebookUrl || prev.facebookUrl,
          youtubeUrl: res.youtubeUrl || prev.youtubeUrl,
        }))
      }
    })
  }, [])

  if (pathname?.startsWith('/studio')) return null

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    const email = formData.get("email");
    
    window.location.href = `mailto:${siteSettings.email}?subject=New Newsletter Subscription&body=Please add my email (${email}) to the Grub Bio newsletter.`;
    
    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <footer id="contact" className="bg-white pt-8">
      <hr className="w-full border-t border-zinc-200" />
      <Container className="pt-8 pb-12">
        <div className="bg-[#051F11] rounded-2xl p-6 sm:p-10 md:p-16 text-white grid gap-12 md:grid-cols-12 overflow-hidden">
          
          <div className="md:col-span-5 flex flex-col gap-6">
            <img src={siteSettings.logo} alt="Grub Bio Logo" className="h-10 w-auto object-contain brightness-0 invert self-start" />
            <p className="text-sm mt-4 text-white">{siteSettings.footerText}</p>
            <form className="flex flex-col sm:flex-row w-full max-w-sm gap-3 mt-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="h-12 w-full sm:flex-1 rounded-xl border border-white/30 bg-transparent px-5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
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
              {siteSettings.newsletterPrivacyNote}
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-white">Products</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-white/80">
                <li><Link href="/products#protein" className="hover:text-white transition-colors">Protein products</Link></li>
                <li><Link href="/products#lipids" className="hover:text-white transition-colors">Functional lipids</Link></li>
                <li><Link href="/products#fertiliser" className="hover:text-white transition-colors">Organic fertilizer</Link></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-white">Services</h4>
              <ul className="flex flex-col gap-4 text-sm font-semibold text-white">
                <li><Link href="/services#partnerships" className="hover:text-white/80 transition-colors">Partnerships</Link></li>
                <li><Link href="/about" className="hover:text-white/80 transition-colors">About us</Link></li>
                <li><Link href="/contact" className="hover:text-white/80 transition-colors">Contact us</Link></li>
                <li><a href={TERRABASE_URL} className="hover:text-white/80 transition-colors">Open TerraBASE</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-white">Follow us</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-white/80">
                <li>
                  <a href={siteSettings.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={siteSettings.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={siteSettings.twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="lucide lucide-twitter"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                    X
                  </a>
                </li>
                <li>
                  <a href={siteSettings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={siteSettings.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="lucide lucide-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#1B1B1B]">
          <p>{siteSettings.copyrightText}</p>
          <div className="flex items-center gap-6">
            <a href={siteSettings.privacyPolicyUrl} className="hover:text-black underline underline-offset-2 transition-colors">Privacy policy</a>
            <a href={siteSettings.termsUrl} className="hover:text-black underline underline-offset-2 transition-colors">Terms of service</a>
            <a href={siteSettings.cookiesUrl} className="hover:text-black underline underline-offset-2 transition-colors">Cookies settings</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
