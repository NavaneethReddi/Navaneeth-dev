import Link from "next/link";
import JsonLd from "./components/JsonLd"
import Nav from "./components/page";
import { ExperienceSection } from "./experience/page";
import AboutSection from "./about/page";
import { SkillsSection } from "./skills/page";
import { ContactSection } from "./contact/page";
import Testimonials from "./testimonials/page";

const topSkills = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Spring Boot", "AWS", "GraphQL", "Tailwind CSS",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Nav />
      <JsonLd />

      {/* Hero */}
      <section className="flex items-center justify-center pl-12 pr-6 pt-10 pb-10">
        <div className="w-full max-w-6xl text-center">
          <p className="text-cyan-500 text-sm font-medium tracking-widest uppercase mb-4">
            Available for opportunities
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Navaneeth Reddy
            <span className="block text-slate-500 dark:text-slate-400 font-light text-4xl md:text-5xl mt-2">
              Principal Architect
            </span>
          </h1>
          <p className="mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-3xl">
            Senior Full-Stack Developer &amp; Principal Architect with 12+ years designing
            scalable, high-performance web applications for Fortune 500 financial institutions.
            Currently at{" "}
            <span className="text-slate-900 dark:text-white font-medium">Discover Financial Services</span>,
            Minneapolis.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link
              href="/experience"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-xl transition-colors"
            >
              View Experience
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-900 dark:text-white rounded-xl transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {topSkills.map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full"
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

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-6 text-center text-slate-500 text-sm transition-colors">
        <p>
          Navaneeth Reddy Pinnapureddy · Minneapolis, MN ·{" "}
          <a href="mailto:Navaneethr.work9@gmail.com" className="text-cyan-500 hover:underline">
            Navaneethr.work9@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}
