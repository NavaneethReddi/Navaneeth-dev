import type { Metadata } from "next";
import Nav from "../components/page";
import AboutSection from "./AboutSection";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Navaneeth Reddy's 12+ years building scalable enterprise software for Fortune 500 financial institutions in Minneapolis.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Nav />
      <div className="pt-16">
        <AboutSection />
      </div>
    </main>
  );
}
