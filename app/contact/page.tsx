"use client"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Hire Navaneeth Reddy — Principal Architect and Full-Stack Developer in Minneapolis, MN. Open to senior engineering roles, consulting, and architecture reviews.',
  alternates: { canonical: 'https://clerk-nextjs-phi.vercel.app/contact' },
  openGraph: {
    title: 'Contact | Navaneeth Reddy',
    description: 'Hire Navaneeth Reddy — Principal Architect and Full-Stack Developer in Minneapolis, MN. Open to senior engineering roles, consulting, and architecture reviews.',
    url: 'https://clerk-nextjs-phi.vercel.app/contact',
  },
}

;

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import Nav from "../components/page";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
   
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Email validation using serverless API route
  const validateEmail = async (email: string) => {
    try {
      const response = await fetch("/api/validate-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      return data.valid;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    setStatus(null);

    const email = (form.email as unknown as HTMLInputElement)?.value;
    console.log("Validating email:", email);
    const isValid = await validateEmail(form.email);

    if (!isValid) {
      setStatus("Invalid or undeliverable email address.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_m1cky61",      // Replace with your EmailJS service ID
        "template_b8pdmam",     // Replace with your EmailJS template ID
        e.target as HTMLFormElement,
        "0VD5drCEigGwb2beB"     // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setSubmitted(true);},
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      ).catch(() => {
        setStatus("An unexpected error occurred. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const inputClass = "w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors";

  return (
    <section className="border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto pl-12 pr-6 py-20">
      <div className="max-w-6xl mx-auto pl-12 pr-6 py-20">
        <p className="text-cyan-500 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-white">Get in Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-14">
          Open to senior engineering roles, consulting, and architecture reviews.
        </p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-5 text-slate-900 dark:text-white">Contact Details</h3>
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
                      <a href={href} className="text-cyan-500 hover:text-cyan-400 text-sm font-medium transition-colors">{value}</a>
                    ) : (
                      <p className="text-slate-900 dark:text-white text-sm font-medium">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Currently Open To</h3>
              <div className="space-y-2">
                {[
                  "Principal / Staff Engineer roles",
                  "Frontend Architecture consulting",
                  "Full-Stack Engineering leadership",
                  "Technical mentorship programs",
                  "AI/LLM integration projects",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-slate-50 dark:bg-slate-900 border border-cyan-500/30 rounded-2xl p-10 text-center">
                <p className="text-4xl mb-4">✅</p>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Message sent!</h3>
                <p className="text-slate-600 dark:text-slate-400">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">Name</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">Subject</label>
                  <select id="subject" name="subject" required value={form.subject} onChange={handleChange} className={inputClass}>
                    <option value="" disabled>Select a subject…</option>
                    <option>Job opportunity</option>
                    <option>Consulting inquiry</option>
                    <option>Architecture review</option>
                    <option>Mentorship</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-600 dark:text-slate-400 mb-1.5">Message</label>
                  <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Tell me about the opportunity or project…" className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-xl transition-colors">
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
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Nav />
      <div className="pt-16"><ContactSection /></div>
    </main>
  );
}
