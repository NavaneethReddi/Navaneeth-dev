import Link from "next/link";
import Nav from "./components/page";

const highlights = [
  { value: "12+", label: "Years Experience" },
  { value: "30+", label: "Enterprise Apps" },
  { value: "40%", label: "Perf Improvement" },
  { value: "20+", label: "Devs Mentored" },
];

const topSkills = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Spring Boot", "AWS", "GraphQL", "Tailwind CSS",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
    <Nav />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">
            Available for opportunities
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Navaneeth Reddy
            <span className="block text-slate-400 font-light text-4xl md:text-5xl mt-2">
              Principal Architect
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Senior Full-Stack Developer &amp; Principal Architect with 12+ years designing
            scalable, high-performance web applications for Fortune 500 financial institutions.
            Currently at{" "}
            <span className="text-white font-medium">Discover Financial Services</span>,
            Minneapolis.
          </p>
          <div className="flex flex-wrap gap-3 mb-16">
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
          <div className="flex flex-wrap gap-2">
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

      {/* Stats */}
      <section className="border-t border-slate-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-1">{value}</p>
              <p className="text-slate-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick intro */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Building enterprise software that{" "}
              <span className="text-cyan-400">scales</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              From micro-frontend architectures to event-driven microservices, I architect
              full-stack solutions that handle real-world scale at financial institutions
              like US Bank and Discover Financial.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I bring deep expertise in React, Next.js, and the modern frontend ecosystem,
              paired with strong backend skills in Node.js and Java Spring Boot — bridging
              design systems to production deployments on AWS and Azure.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "⚛️", title: "Frontend", desc: "React, Next.js, Angular, TypeScript" },
              { icon: "⚙️", title: "Backend", desc: "Node.js, Spring Boot, NestJS" },
              { icon: "☁️", title: "Cloud", desc: "AWS, Azure, Docker, Kubernetes" },
              { icon: "🗄️", title: "Data", desc: "MongoDB, PostgreSQL, Redis, Kafka" },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-600 transition-colors"
              >
                <p className="text-2xl mb-2">{icon}</p>
                <p className="font-semibold text-white mb-1">{title}</p>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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