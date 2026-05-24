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
const highlights = [
  { value: "12+", label: "Years Experience" },
  { value: "30+", label: "Enterprise Apps" },
  { value: "40%", label: "Perf Improvement" },
  { value: "20+", label: "Devs Mentored" },
];
export function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
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
    </div>
  );
}