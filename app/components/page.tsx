"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white font-semibold text-lg tracking-tight">
            NR<span className="text-cyan-400">.</span>
          </Link>
         
        </div>

        <div className="flex items-center gap-4">
             <ul className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === href
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Show when="signed-out">
            <SignInButton>
              <button className="px-3 py-2 text-sm rounded-md text-white hover:bg-slate-800">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-purple-700 text-white rounded-full font-medium text-sm h-10 px-4 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </nav>
  );
}
