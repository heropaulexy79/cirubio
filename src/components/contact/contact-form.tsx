"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    // Replace this with your actual Web3Forms access key
    formData.append("access_key", "35c57619-bf1f-42f6-8743-9fba80b4317b"); 

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-24">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
        
        {/* Left Column: Form */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[14px] md:text-[15px] font-semibold text-zinc-800 mb-4">
              Contact Form
            </p>
            <h2 className="text-[32px] sm:text-[36px] md:text-5xl lg:text-[40px] xl:text-[44px] tracking-tight font-bold text-[#0A5024] leading-[1.1] mb-6 whitespace-nowrap">
              Send Us a Message
            </h2>
            <p className="text-[15px] md:text-base text-[#1B1B1B] leading-[1.5] mb-12 max-w-lg">
              Have a question or project in mind? Complete the form below and a member of our team will get back to you as soon as possible.
            </p>
          </motion.div>

          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#E8F5E8] border border-[#0A5024]/20 rounded-2xl p-8 text-center"
            >
              <div className="w-12 h-12 bg-[#0A5024] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A5024] mb-2">Message Sent Successfully!</h3>
              <p className="text-[#1B1B1B]">Thank you for reaching out. A member of our team will get back to you shortly.</p>
              <Button onClick={() => setStatus("idle")} className="mt-6 rounded-full border border-[#0A5024] bg-transparent text-[#0A5024] hover:bg-[#0A5024] hover:text-white">
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-[#1B1B1B] pl-1">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full h-[52px] rounded-xl border border-zinc-200 px-5 text-sm focus:border-[#0A5024] focus:ring-1 focus:ring-[#0A5024] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-[#1B1B1B] pl-1">Organisation</label>
                  <input 
                    type="text" 
                    name="organisation"
                    className="w-full h-[52px] rounded-xl border border-zinc-200 px-5 text-sm focus:border-[#0A5024] focus:ring-1 focus:ring-[#0A5024] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-[#1B1B1B] pl-1">Email address *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full h-[52px] rounded-xl border border-zinc-200 px-5 text-sm focus:border-[#0A5024] focus:ring-1 focus:ring-[#0A5024] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-medium text-[#1B1B1B] pl-1">Phone number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full h-[52px] rounded-xl border border-zinc-200 px-5 text-sm focus:border-[#0A5024] focus:ring-1 focus:ring-[#0A5024] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#1B1B1B] pl-1">Inquiry type</label>
                <input 
                  type="text" 
                  name="inquiry_type"
                  className="w-full h-[52px] rounded-xl border border-zinc-200 px-5 text-sm focus:border-[#0A5024] focus:ring-1 focus:ring-[#0A5024] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-medium text-[#1B1B1B] pl-1">Message *</label>
                <textarea 
                  rows={6}
                  name="message"
                  required
                  className="w-full rounded-xl border border-zinc-200 p-5 text-sm focus:border-[#0A5024] focus:ring-1 focus:ring-[#0A5024] outline-none transition-all resize-y"
                />
              </div>

              {status === "error" && (
                <div className="text-red-500 text-sm pl-1">{errorMessage}</div>
              )}

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="h-[48px] px-8 rounded-full bg-[#0A5024] hover:bg-[#073A1A] text-white font-medium text-[15px] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </div>
            </motion.form>
          )}
        </div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[600px] lg:h-full min-h-[600px] rounded-[32px] overflow-hidden bg-zinc-100"
        >
          {/* Right Column: Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/contact-form-img.jpg")' }}
          />
        </motion.div>

      </div>
    </section>
  )
}
