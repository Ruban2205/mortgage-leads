import type { Metadata } from "next";
import AssessmentForm from "@/components/AssessmentForm";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Mortgage Readiness Assessment",
  description:
    "Complete our free 6-step mortgage readiness assessment. Understand your credit, income, down payment situation, and more before speaking with a mortgage professional.",
};

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Page header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-4">
            <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Free Assessment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Mortgage Readiness Assessment
          </h1>
          <p className="text-slate-600 text-base max-w-lg mx-auto">
            Answer a few questions to help a mortgage professional understand
            your situation. Takes about 5 minutes.
          </p>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-5 mt-4 text-xs text-slate-500">
            {[
              { icon: "🔒", label: "Secure & Private" },
              { icon: "⏱️", label: "~5 Minutes" },
              { icon: "🚫", label: "No Hard Credit Check" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-1">
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/60 p-6 sm:p-8">
          <AssessmentForm />
        </div>

        {/* Disclaimer */}
        <DisclaimerBox className="mt-6" />

        <p className="text-center text-xs text-slate-400 mt-4">
          MortgagePath AI · For informational purposes only · Not financial advice
        </p>
      </div>
    </div>
  );
}
