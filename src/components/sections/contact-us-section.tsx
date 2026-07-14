"use client"

import React from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function ContactUsSection() {
  return (
    <section id="contact-form" className="py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="mb-10 text-4xl md:text-[42px] font-bold text-[#0A5024] leading-[1.2]">
            Contact us
          </h2>
          
          <form className="w-full flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#1B1B1B]">Company name*</label>
                <input type="text" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024]" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#1B1B1B]">Contact person*</label>
                <input type="text" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024]" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1B1B1B]">Industry sector*</label>
              <select className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024] bg-white text-[#1B1B1B]" required defaultValue="">
                <option value="" disabled>Select your sector</option>
                <option value="agriculture">Agriculture</option>
                <option value="aquaculture">Aquaculture</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail / Market</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#1B1B1B]">Email address*</label>
                <input type="email" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024]" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#1B1B1B]">Phone number*</label>
                <input type="tel" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024]" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1B1B1B]">Registered office address (optional)</label>
              <input type="text" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024]" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1B1B1B]">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell us more about your enquiry"
                className="rounded-xl border border-zinc-200 p-4 focus:outline-none focus:border-[#0A5024] resize-none"
              />
            </div>

            <div className="mt-4 flex justify-center">
              <Button type="submit" className="bg-[#0A5024] hover:bg-[#074612] text-white rounded-full px-12 h-12 font-medium">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}
