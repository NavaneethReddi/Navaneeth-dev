import Link from "next/link";
import Nav from "./components/page";

import { ExperienceSection } from "./experience/page";
import { AboutSection } from "./about/page";

import { SkillsSection } from "./skills/page";
import { ContactSection } from "./contact/page";

import Testimonials from "./testimonials/page";






const topSkills = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Spring Boot", "AWS", "GraphQL", "Tailwind CSS",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
    <Nav />

      {/* Hero */}
      <section className="min-h-screen flex items-start justify-center px-6 pt-20 pb-4 w-full mx-auto">
        <div className="w-full max-w-6xl text-center">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">
            Available for opportunities
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Navaneeth Reddy
            <span className="block text-slate-400 font-light text-4xl md:text-5xl mt-2">
              Principal Architect
            </span>
          </h1>
          <p className="mx-auto text-slate-400 text-lg leading-relaxed mb-8 max-w-4xl">
            Senior Full-Stack Developer &amp; Principal Architect with 12+ years designing
            scalable, high-performance web applications for Fortune 500 financial institutions.
            Currently at{" "}
            <span className="text-white font-medium">Discover Financial Services</span>,
            Minneapolis.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link
              href="/experience"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl transition-colors"
            >
              View Experience
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-white rounded-xl transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Skill tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {topSkills.map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
     
      </section>
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Testimonials />
      {/* Stats */}
      


      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
        <p>
          Navaneeth Reddy Pinnapureddy · Minneapolis, MN ·{" "}
          <a href="mailto:Navaneethr.work9@gmail.com" className="text-cyan-400 hover:underline">
            Navaneethr.work9@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}