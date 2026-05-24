import Nav from "../components/page";

const jobs = [
  {
    title: "Principal Architect",
    company: "Discover Financial Services (Cognizant)",
    location: "Minneapolis, MN",
    period: "Dec 2024 – Present",
    current: true,
    bullets: [
      "Architect React-based enterprise web applications ensuring scalability, performance, accessibility, and observability.",
      "Designed and rolled out a comprehensive Storybook environment as an interactive component library and living design system.",
      "Established and enforced responsive design, WCAG 2.1 accessibility, and internationalization best practices.",
      "Implemented Vite bundler to increase React app performance significantly.",
      "Wrote Jest and Playwright test cases, helping catch bugs early in the development cycle.",
      "Mentored engineers in frontend best practices, React ecosystem, design system adoption, and web performance.",
    ],
    stack: ["React", "Next.js", "Storybook", "Vite", "Jest", "Playwright", "WCAG 2.1"],
  },
  {
    title: "UI Lead",
    company: "US Bank (Cognizant)",
    location: "Minneapolis, MN",
    period: "Oct 2019 – Nov 2024",
    current: false,
    bullets: [
      "Led technical development of 30+ React applications across a 5-year engagement.",
      "Applied modern frontend patterns: micro-frontends, component-driven architecture, Redux/Zustand/Recoil, and SSR with Next.js.",
      "Implemented TurboRepo and Vite bundler to improve build performance across the monorepo.",
      "Built rapid custom UIs with Tailwind CSS and integrated GraphQL APIs via useQuery hooks.",
      "Developed a standalone Spring Boot application integrated with AutoSys within 3 weeks.",
      "Built cross-platform mobile apps with React Native, reducing dev time and costs.",
      "Deployed applications through AWS S3, Azure, and Jenkins with Kubernetes containers.",
    ],
    stack: ["React", "Next.js", "Redux", "Tailwind CSS", "GraphQL", "React Native", "Spring Boot", "AWS", "Azure", "Kubernetes"],
  },
  {
    title: "UI Developer",
    company: "Amtrak (Cognizant)",
    location: "Washington, DC",
    period: "Jun 2019 – Oct 2019",
    current: false,
    bullets: [
      "Led from client location and managed a team of 20 to build a mobile app for train emergency management.",
      "Converted legacy mobile app to React Native for complex emergency handling workflows.",
      "Designed and developed REST APIs using Node.js (Express) for mobile and web applications.",
      "Developed an Angular web application to post CSV files to AWS S3 bucket.",
      "Built complex SQL queries and stored procedures for backend data operations.",
    ],
    stack: ["React Native", "Angular 7", "Node.js", "Express", "AWS S3", "SQL"],
  },
  {
    title: "Full-Stack Developer",
    company: "Vixxo (Cognizant)",
    location: "Baltimore, MD",
    period: "Jul 2018 – Jun 2019",
    current: false,
    bullets: [
      "Worked extensively on Angular 5 to develop webpages according to UX designs.",
      "Used NgUpgrade so that AngularJS and Angular versions run in parallel.",
      "Developed SPAs using Next.js for high-performance application delivery.",
      "Developed and consumed Spring Boot REST APIs for scalable frontend-backend communication.",
      "Worked on d3.js for data visualization features.",
    ],
    stack: ["Angular 5", "Next.js", "Spring Boot", "d3.js", "REST APIs"],
  },
  {
    title: "UI Developer",
    company: "Marathon Oil",
    location: "Houston, TX",
    period: "Jan 2018 – Jul 2018",
    current: false,
    bullets: [
      "Designed and developed application using Angular 5, Node.js, MySQL, TypeScript, and Bootstrap.",
      "Implemented Angular Material Design components including tables, pagination, and form fields.",
      "Consumed Web APIs via Angular HttpClient for full CRUD operations.",
      "Built and deployed applications on Azure.",
    ],
    stack: ["Angular 5", "Node.js", "TypeScript", "MySQL", "Azure", "Angular Material"],
  },
  {
    title: "UI Developer",
    company: "Capital One",
    location: "Dallas, TX",
    period: "Jul 2017 – Dec 2017",
    current: false,
    bullets: [
      "Built a data engineering UI for uploading and managing user data without scripts.",
      "Upgraded project from Angular 4 to 5 and leveraged new version features.",
      "Created a complex full calendar with Key Indicator and Reminder for sales and promotion events.",
      "Developed banking analytics using d3.js for various graph visualizations.",
    ],
    stack: ["Angular 5", "TypeScript", "d3.js", "REST APIs", "C#"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Nav />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Career</p>
        <h1 className="text-4xl font-bold mb-3">Work Experience</h1>
        <p className="text-slate-400 mb-14">
          12+ years delivering enterprise-grade full-stack applications across finance, energy, and transportation.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-slate-800 ml-[7px]" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div key={i} className="relative pl-10">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                    job.current
                      ? "bg-cyan-400 border-cyan-400"
                      : "bg-slate-950 border-slate-600"
                  }`}
                />

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                        {job.current && (
                          <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 font-medium">{job.company}</p>
                      <p className="text-slate-500 text-sm">{job.location}</p>
                    </div>
                    <span className="text-slate-400 text-sm font-mono whitespace-nowrap">{job.period}</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-cyan-400 mt-1 flex-shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-0.5 text-xs font-mono bg-slate-800 text-slate-400 border border-slate-700 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-2xl font-bold mb-8">Academic Background</h2>
          <div className="space-y-4">
            {[
              { degree: "Master's in Information Technology Management", school: "Cumberland University", year: "2018" },
              { degree: "Master's in Computer Science", school: "Silicon Valley University", year: "2016" },
              { degree: "Bachelor's in Electronics & Communication Engineering", school: "JNTUH", year: "2014" },
            ].map((edu) => (
              <div
                key={edu.school}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-slate-900 border border-slate-800 rounded-xl"
              >
                <div>
                  <p className="font-medium text-white">{edu.degree}</p>
                  <p className="text-slate-400 text-sm">{edu.school}</p>
                </div>
                <span className="text-slate-500 text-sm font-mono mt-1 sm:mt-0">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}