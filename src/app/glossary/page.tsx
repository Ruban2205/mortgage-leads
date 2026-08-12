import type { Metadata } from "next";
import Link from "next/link";
import GlossaryList from "@/components/GlossaryList";

export const metadata: Metadata = {
  title: "Mortgage Glossary — Canadian Mortgage Terms Explained",
  description:
    "A comprehensive glossary of Canadian mortgage terms. Learn the definitions of amortization, prime rate, stress test, CMHC, GDS/TDS ratios, and more.",
};

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-muted/50 dark:bg-card/40 py-14 sm:py-20 section-dots border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-3">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/20 px-4 py-1.5 mb-5">
            <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">📖 Reference Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            Canadian Mortgage Glossary
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A plain-language dictionary of essential mortgage terms to help you navigate the home-buying process with confidence.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <GlossaryList />
      </div>
    </div>
  );
}
