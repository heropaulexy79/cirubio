import React from "react"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { HowCanWeHelp } from "@/components/contact/how-can-we-help"
import { ContactInformation } from "@/components/contact/contact-information"
import { NewsletterSection } from "@/components/footer/site-footer"
import { FaqSection } from "@/components/contact/faq-section"

export const metadata = {
  title: "Contact Us | Grub Bio",
  description: "Let's Build a Circular Future Together.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ContactHero />
      <hr className="w-full border-t border-zinc-300" />
      <ContactForm />
      <HowCanWeHelp />
      <ContactInformation />
      <NewsletterSection />
      <FaqSection />
    </div>
  )
}





