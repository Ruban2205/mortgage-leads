import type { Metadata } from "next";
import AssessmentForm from "@/components/AssessmentForm";
import DisclaimerBox from "@/components/DisclaimerBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Mortgage Readiness Assessment",
  description:
    "Complete our free 6-step mortgage readiness assessment. Help a licensed Canadian mortgage professional understand your income, credit, down payment, and goals — no credit check required.",
};

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Page header */}
        <div className="text-center mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-5">
            <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Free Mortgage Readiness Assessment
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Understand Your Mortgage Readiness
          </h1>
          <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
            Answer a few questions to help a licensed mortgage professional understand your
            situation and explain possible next steps — at no cost or obligation.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5 text-xs text-muted-foreground">
            {[
              { icon: "🚫", label: "No Credit Check" },
              { icon: "⏱️", label: "Takes About 5 Minutes" },
              { icon: "🔒", label: "Secure & Private" },
              { icon: "🍁", label: "Canadian-Focused Guidance" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-1.5">
                <span>{t.icon}</span>
                <span className="font-medium">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance note before form */}
        <div className="mb-6 rounded-xl bg-primary/8 border border-primary/15 p-4">
          <p className="text-xs text-primary leading-relaxed text-center">
            <strong>This is not a mortgage application.</strong> Submitting this assessment does not
            guarantee mortgage approval or create a lending obligation. This is general educational
            information to help a licensed professional understand your situation.
          </p>
        </div>

        {/* Assessment card */}
        <div className="bg-card rounded-3xl border border-border shadow-xl shadow-black/5 p-6 sm:p-8">
          <AssessmentForm />
        </div>

        {/* Disclaimer */}
        <DisclaimerBox className="mt-6" />

        <p className="text-center text-xs text-muted-foreground/70 mt-4">
          TrueNorth Mortgage Guide · For informational and educational purposes only · Not financial advice
        </p>

        <p className="text-center text-xs text-muted-foreground/70 mt-1">
          <Link href="/disclaimer" className="underline hover:text-foreground transition-colors">View Full Disclaimer</Link>
          {" · "}
          <Link href="/privacy-policy" className="underline hover:text-foreground transition-colors">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
