"use client";

import { useState } from "react";
import Nav from "../components/page";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
        <p className="text-slate-400 mb-14">
          Open to senior engineering roles, consulting, and architecture reviews.
        </p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-5">Contact Details</h3>
              <div className="space-y-4">
                {[
                  { label: "Email", value: "Navaneethr.work9@gmail.com", href: "mailto:Navaneethr.work9@gmail.com" },
                  { label: "Phone", value: "314-793-5365", href: "tel:3147935365" },
                  { label: "Location", value: "Minneapolis, MN", href: null },
                  { label: "LinkedIn", value: "navaneeth-reddy-pinnapureddy", href: "https://www.linkedin.com/in/navaneeth-reddy-pinnapureddy/" },
                  { label: "GitHub", value: "NavaneethReddi", href: "https://github.com/NavaneethReddi" },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Currently Open To</h3>
              <div className="space-y-2">
                {[
                  "Principal / Staff Engineer roles",
                  "Frontend Architecture consulting",
                  "Full-Stack Engineering leadership",
                  "Technical mentorship programs",
                  "AI/LLM integration projects",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-10 text-center">
                <p className="text-4xl mb-4">✅</p>
                <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-400 mb-1.5">Name</label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange} placeholder="Your name"
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">Email</label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange} placeholder="your@email.com"
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-slate-400 mb-1.5">Subject</label>
                  <select
                    id="subject" name="subject" required
                    value={form.subject} onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="" disabled>Select a subject…</option>
                    <option>Job opportunity</option>
                    <option>Consulting inquiry</option>
                    <option>Architecture review</option>
                    <option>Mentorship</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 mb-1.5">Message</label>
                  <textarea
                    id="message" name="message" required rows={6}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell me about the opportunity or project…"
                    className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <div className="pt-16">
        <ContactSection />
      </div>
    </main>
  );
}