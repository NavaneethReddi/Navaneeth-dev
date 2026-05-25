"use client"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Recommendations from colleagues and stakeholders who have worked with Navaneeth Reddy at US Bank, Cognizant, and Salesforce.',
  alternates: { canonical: 'https://clerk-nextjs-phi.vercel.app/testimonials' },
  openGraph: {
    title: 'Testimonials | Navaneeth Reddy',
    description: 'Recommendations from colleagues and stakeholders who have worked with Navaneeth Reddy at US Bank, Cognizant, and Salesforce.',
    url: 'https://clerk-nextjs-phi.vercel.app/testimonials',
  },
}

;

import { useState, useEffect } from "react";

type Testimonial = {
  name: string;
  feedback: string;
  role: string;
  initials: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Karen Longworth, CSM, ICP-ACC",
    feedback: "Navaneeth has been a pleasure to have on our team! He is always taking initiative to help find the best experience for our customers.",
    role: "Senior Scrum Master at U.S. Bank",
    initials: "K",
    rating: 5,
  },
  {
    name: "Jagadeesh Natarajan",
    feedback: "Navaneeth is one of the coolest and most dedicated developers I have ever seen. He is very punctual, calm, and above all very good technically.",
    role: "Technical Architect, Cognizant Technologies",
    initials: "J",
    rating: 5,
  },
  {
    name: "Brad Mages",
    feedback: "A valuable and productive technical resource. Has a great ability to connect with stakeholders and create operational efficiencies.",
    role: "Product Owner, Salesforce",
    initials: "B",
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 justify-center mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-amber-400" : "text-slate-300 dark:text-slate-700"}>★</span>
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-slate-300 dark:hover:border-slate-600 transition-colors h-full">
      <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-amber-400/60 flex items-center justify-center mb-4 text-amber-500 font-bold text-xl flex-shrink-0">
        {t.initials}
      </div>
      <Stars count={t.rating} />
      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic mb-6 flex-1">
        &ldquo;{t.feedback}&rdquo;
      </p>
      <div>
        <p className="text-slate-900 dark:text-white font-semibold text-sm">{t.name}</p>
        <p className="text-slate-500 text-xs mt-1">{t.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-cyan-500 text-sm font-medium tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-white">What People Say</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-14">Kind words from colleagues and stakeholders.</p>

        {isMobile ? (
          <div>
            <Card t={testimonials[current]} />
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center"
                aria-label="Previous"
              >←</button>
              <div className="flex gap-1.5 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-cyan-500" : "bg-slate-300 dark:bg-slate-700"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center"
                aria-label="Next"
              >→</button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {testimonials.map((t, i) => <Card key={i} t={t} />)}
          </div>
        )}
      </div>
    </section>
  );
}
