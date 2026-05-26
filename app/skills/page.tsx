import type { Metadata } from "next";
import Nav from "../components/page";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Skills",
  description:
    "Technical skills: React, Next.js, TypeScript, Node.js, Spring Boot, AWS, GraphQL, and enterprise architecture expertise.",
  path: "/skills",
});

const skillGroups = [
  {
    category: "Frontend", icon: "⚛️", color: "cyan",
    skills: [
      { name: "React.js", level: 98 }, { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 95 }, { name: "Angular", level: 90 },
      { name: "React Native", level: 85 }, { name: "Tailwind CSS", level: 92 },
      { name: "Redux / Zustand", level: 90 }, { name: "GraphQL (Apollo)", level: 85 },
    ],
  },
  {
    category: "Backend", icon: "⚙️", color: "violet",
    skills: [
      { name: "Node.js", level: 90 }, { name: "Spring Boot (Java)", level: 85 },
      { name: "Express.js", level: 88 }, { name: "NestJS", level: 78 },
      { name: "REST APIs", level: 95 }, { name: "Microservices", level: 88 },
    ],
  },
  {
    category: "Cloud & DevOps", icon: "☁️", color: "sky",
    skills: [
      { name: "AWS (S3, EC2, Lambda)", level: 82 }, { name: "Azure", level: 80 },
      { name: "Docker", level: 82 }, { name: "Kubernetes", level: 75 },
      { name: "Jenkins / CI/CD", level: 80 }, { name: "Vite / TurboRepo", level: 88 },
    ],
  },
  {
    category: "Data & Messaging", icon: "🗄️", color: "emerald",
    skills: [
      { name: "MongoDB", level: 82 }, { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 75 }, { name: "Kafka", level: 72 },
      { name: "DynamoDB", level: 72 }, { name: "MySQL", level: 78 },
    ],
  },
  {
    category: "Testing & Quality", icon: "🧪", color: "amber",
    skills: [
      { name: "Jest", level: 88 }, { name: "Playwright", level: 82 },
      { name: "Storybook", level: 85 }, { name: "Enzyme / Jasmine", level: 78 },
    ],
  },
];

const colorMap: Record<string, { bar: string; text: string }> = {
  cyan:    { bar: "bg-cyan-500",    text: "text-cyan-500" },
  violet:  { bar: "bg-violet-500",  text: "text-violet-500" },
  sky:     { bar: "bg-sky-500",     text: "text-sky-500" },
  emerald: { bar: "bg-emerald-500", text: "text-emerald-500" },
  amber:   { bar: "bg-amber-500",   text: "text-amber-500" },
};

const tools = [
  "VS Code", "IntelliJ IDEA", "WebStorm", "Figma", "Postman",
  "Jira", "GitHub", "GitLab", "Webpack", "Babel", "Storybook",
  "Adobe XD", "InVision", "d3.js",
];

export function SkillsSection() {
  return (
    <section className="border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto pl-52 pr-6 py-20">
        <p className="text-cyan-500 text-sm font-medium tracking-widest uppercase mb-3">Expertise</p>
        <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-white">Technical Skills</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-14">
          A breadth of technologies refined over 12+ years of enterprise engineering.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const colors = colorMap[group.color];
            return (
              <div
                key={group.category}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className={`text-lg font-semibold ${colors.text}`}>{group.category}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${colors.bar}`} style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Tools &amp; Platforms</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-xl hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Key Achievements</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "🏗️", text: "Led development of 30+ enterprise-grade applications used by thousands of users daily." },
              { icon: "⚡", text: "Improved application performance by 30–40% through frontend and backend layer optimization." },
              { icon: "🚀", text: "Delivered full-stack Spring Boot batch systems under tight deadlines — in under 3 weeks." },
              { icon: "🎓", text: "Mentored teams of up to 20 developers, enforcing architectural best practices." },
              { icon: "🤖", text: "Hands-on with Generative AI — LLMs, embeddings, AI-driven personalization, and conversational UIs." },
              { icon: "🧰", text: "Experienced with agentic programming tools: GitHub Copilot, Claude Code." },
            ].map(({ icon, text }) => (
              <div key={text} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <span className="text-xl mt-0.5">{icon}</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Nav />
      <div className="pt-16"><SkillsSection /></div>
    </main>
  );
}
