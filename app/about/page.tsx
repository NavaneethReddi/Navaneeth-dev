const highlights = [
  { value: "12+", label: "Years Experience" },
  { value: "30+", label: "Enterprise Apps" },
  { value: "40%", label: "Perf Improvement" },
  { value: "20+", label: "Devs Mentored" },
];

export default function AboutSection() {
  return (
    <section className="border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {highlights.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-bold text-cyan-500 mb-1">{value}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Intro + cards */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              Building enterprise software that{" "}
              <span className="text-cyan-500">scales</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              From micro-frontend architectures to event-driven microservices, I architect
              full-stack solutions that handle real-world scale at financial institutions
              like US Bank and Discover Financial.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
                className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
              >
                <p className="text-2xl mb-2">{icon}</p>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">{title}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
