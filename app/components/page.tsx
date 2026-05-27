"use client"

import React from "react"
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
    url: "https://navaneeth-jscompiler.vercel.app/",
    icon: "code",
    bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    borderColor: "hover:border-amber-400 dark:hover:border-amber-500",
    iconColor: "text-amber-500",
  },
  {
    name: "AI Chat",
    url: "https://navaneeth-gpt.vercel.app/",
    icon: "chat",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
    borderColor: "hover:border-emerald-400 dark:hover:border-emerald-500",
    iconColor: "text-emerald-500",
  },
  {
    name: "AI Interview",
    url: "https://navaneeth-ai-interview.vercel.app/",
    icon: "briefcase",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    borderColor: "hover:border-blue-400 dark:hover:border-blue-500",
    iconColor: "text-blue-500",
  },
  {
    name: "Interview Prep",
    url: "https://interview-preparation-rose.vercel.app/",
    icon: "book",
    bgColor: "bg-rose-500/10 dark:bg-rose-500/20",
    borderColor: "hover:border-rose-400 dark:hover:border-rose-500",
    iconColor: "text-rose-500",
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

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)

const MessageCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

function AppNavLink({ app }: { app: (typeof apps)[0] }) {
  const iconMap: Record<string, () => React.ReactElement> = {
    code: CodeIcon,
    chat: MessageCircleIcon,
    briefcase: BriefcaseIcon,
    book: BookIcon,
  }
  const Icon = iconMap[app.icon]

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${app.bgColor} border border-slate-200/60 dark:border-slate-700/60 ${app.borderColor} hover:shadow-sm`}
    >
      <span className={`${app.iconColor} transition-transform duration-200 group-hover:scale-110`}>
        <Icon />
      </span>
      <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        {app.name}
      </span>
      <span className="text-slate-400 dark:text-slate-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        <ExternalLinkIcon />
      </span>
    </a>
  )
}

function AppsBar() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mr-1 uppercase tracking-wider">
            Apps
          </span>
          {apps.map((app) => (
            <AppNavLink key={app.name} app={app} />
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
