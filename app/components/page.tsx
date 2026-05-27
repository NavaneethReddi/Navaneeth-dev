"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Show, SignInButton, UserButton } from "@clerk/nextjs"
import { useTheme } from "../providers/ThemeProvider"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
]

const apps = [
  {
    name: "JS Compiler",
    description: "JavaScript Playground",
    url: "https://navaneeth-jscompiler.vercel.app/",
    gradient: "from-amber-400 via-orange-500 to-red-500",
  },
  {
    name: "AI Chat",
    description: "GPT Assistant",
    url: "https://navaneeth-gpt.vercel.app/",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
  },
  {
    name: "AI Interview",
    description: "Practice Interviews",
    url: "https://navaneeth-ai-interview.vercel.app/",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
  },
]

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

function AppCard({ app }: { app: (typeof apps)[0] }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50"
    >
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${app.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      <div className="flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 group-hover:from-slate-100 group-hover:to-white dark:group-hover:from-slate-500 dark:group-hover:to-slate-600 transition-all duration-300">
        <span className={`text-sm font-bold bg-gradient-to-r ${app.gradient} bg-clip-text text-transparent`}>
          {app.name.split(" ").map((w) => w[0]).join("")}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors flex items-center gap-1.5">
          {app.name}
          <ExternalLinkIcon />
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400">{app.description}</span>
      </div>
    </a>
  )
}

function AppsBar() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-center">
        <div className="flex items-center gap-3">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Nav() {
  const pathname = usePathname()
  const { theme, toggle } = useTheme()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-slate-900 dark:text-white font-semibold text-lg tracking-tight">
            NR<span className="text-cyan-500">.</span>
          </Link>
          <div className="flex items-center gap-3">
            <ul className="hidden md:flex items-center gap-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname === href
                        ? "bg-cyan-500/10 text-cyan-500"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={toggle}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
            <Show when="signed-out">
              <SignInButton>
                <button className="px-3 py-2 text-sm rounded-md text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
      </nav>
      <AppsBar />
    </>
  )
}
