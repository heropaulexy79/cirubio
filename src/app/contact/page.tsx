import React from "react"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { HowCanWeHelp } from "@/components/contact/how-can-we-help"
import { ContactInformation } from "@/components/contact/contact-information"
import { NewsletterSection } from "@/components/footer/site-footer"
import { FaqSection } from "@/components/contact/faq-section"

export const metadata = {
  title: "Contact Grub.bio | Partner with Circular Economy Experts",
  description: "Get in touch with Grub.bio to discuss sustainable waste management, insect protein production, partnerships, and circular economy solutions.",
  keywords: ["contact Grub.bio", "sustainability partnership", "waste management company", "circular economy experts", "contact us"],
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





