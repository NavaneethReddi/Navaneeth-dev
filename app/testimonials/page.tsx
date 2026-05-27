import type { Metadata } from "next";
import Nav from "../components/page";
import TestimonialsSection from "./TestimonialsSection";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Testimonials",
  description:
    "Recommendations from colleagues at U.S. Bank, Cognizant, and Salesforce for Navaneeth Reddy, Principal Architect.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Nav />
      <div className="pt-0">
        <TestimonialsSection />
      </div>
    </main>
  );
}
