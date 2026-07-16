"use client"

import React, { useState } from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function ContactUsSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    formData.append("access_key", "35c57619-bf1f-42f6-8743-9fba80b4317b"); 

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
    <section id="contact-form" className="py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="mb-10 text-4xl md:text-[42px] font-bold text-[#0A5024] leading-[1.2]">
            Contact us
          </h2>
          
          {status === "success" ? (
            <div className="w-full bg-[#E8F5E8] border border-[#0A5024]/20 rounded-2xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-[#0A5024] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0A5024] mb-3">Message Sent Successfully!</h3>
              <p className="text-[#1B1B1B] text-lg max-w-lg mx-auto">Thank you for reaching out. Our team will review your inquiry and get back to you shortly.</p>
              <Button onClick={() => setStatus("idle")} className="mt-8 rounded-full border border-[#0A5024] bg-transparent text-[#0A5024] hover:bg-[#0A5024] hover:text-white px-8 h-12">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#1B1B1B]">Company name*</label>
                  <input type="text" name="company_name" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024]" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#1B1B1B]">Contact person*</label>
                  <input type="text" name="name" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024]" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#1B1B1B]">Industry sector*</label>
                <select name="industry" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024] bg-white text-[#1B1B1B]" required defaultValue="">
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
                  <input type="email" name="email" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024]" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#1B1B1B]">Phone number*</label>
                  <input type="tel" name="phone" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024]" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#1B1B1B]">Registered office address (optional)</label>
                <input type="text" name="address" className="h-12 rounded-xl border border-zinc-200 px-4 focus:outline-none focus:border-[#0A5024]" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#1B1B1B]">Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  placeholder="Tell us more about your enquiry"
                  className="rounded-xl border border-zinc-200 p-4 focus:outline-none focus:border-[#0A5024] resize-none"
                />
              </div>

              {status === "error" && (
                <div className="text-red-500 text-sm text-center">{errorMessage}</div>
              )}

              <div className="mt-4 flex justify-center">
                <Button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="bg-[#0A5024] hover:bg-[#074612] text-white rounded-full px-12 h-12 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
