import type { Metadata } from "next";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Mortgage Basics — How Canadian Mortgages Work",
  description:
    "Learn the fundamentals of Canadian mortgages: amortization, mortgage terms, fixed vs. variable rates, the stress test, and how lenders evaluate you. Clear educational content for Canadians.",
};

const CONCEPTS = [
  {
    title: "Mortgage Term vs. Amortization Period",
    content:
      "Your mortgage term is how long your current rate and conditions are locked in — commonly 1 to 5 years in Canada. Your amortization period is the total time to pay off the loan — typically 25 years for insured mortgages. At the end of each term, you renew your mortgage, often at a different rate.",
  },
  {
    title: "Fixed vs. Variable Interest Rates",
    content:
      "A fixed-rate mortgage keeps your interest rate the same throughout the term, providing payment predictability. A variable-rate mortgage fluctuates with the lender's prime rate. Variable rates can sometimes start lower but carry more risk if rates rise significantly. The right choice depends on your situation, risk tolerance, and the rate environment.",
  },
  {
    title: "The Mortgage Stress Test",
    content:
      "All applicants at federally regulated lenders must qualify at the higher of: their contract rate plus 2%, or 5.25% — whichever is greater. This is called the stress test. It is designed to ensure borrowers can afford payments even if rates rise during their term.",
  },
  {
    title: "GDS and TDS Ratios",
    content:
      "Gross Debt Service (GDS) compares your housing costs (mortgage, taxes, heat, 50% of condo fees) to your gross income — lenders typically want this under 39%. Total Debt Service (TDS) adds all other debts (car loans, credit cards, student loans) — usually must be under 44%. These ratios are central to how lenders calculate how much you can borrow.",
  },
  {
    title: "Open vs. Closed Mortgages",
    content:
      "A closed mortgage offers lower interest rates but limits your ability to pay down the mortgage early without penalty. An open mortgage allows you to pay it off at any time but comes with higher rates. Most Canadians choose closed mortgages with prepayment privileges built in.",
  },
  {
    title: "Mortgage Renewal",
    content:
      "When your mortgage term ends, you enter a renewal period. You can renew with your existing lender or switch lenders for a better rate. This is one of the most important opportunities to review your options and speak with a licensed mortgage professional.",
  },
];

export default function MortgageBasicsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page hero */}
      <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50 py-14 sm:py-20 section-dots">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex w-fit items-center gap-1.5 text-sm text-slate-500 hover:text-primary transition-colors mb-3">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 border border-blue-200 px-4 py-1.5 mb-5">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">📘 Mortgage Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Mortgage Basics
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            A clear, beginner-friendly guide to how Canadian mortgages work — from amortization and interest rates to the stress test.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              8 min read
            </span>
            <span className="text-slate-300">·</span>
            <span>General educational information</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            A mortgage is a loan used to purchase a home, secured against the property itself. In Canada,
            mortgages are regulated by both federal and provincial rules, and there are several key concepts
            every prospective home buyer should understand before speaking with a licensed mortgage professional.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            This guide covers the foundational concepts in plain language. It is intended as a starting
            point for your learning — not as mortgage advice or an assessment of your specific situation.
          </p>
        </div>

        {/* Concept cards */}
        <div className="space-y-6 mb-12">
          {CONCEPTS.map((concept, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full gradient-brand text-white text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {concept.title}
              </h2>
              <p className="text-slate-600 leading-relaxed pl-10">{concept.content}</p>
            </div>
          ))}
        </div>

        {/* Example scenario */}
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 mb-8">
          <h2 className="text-lg font-bold text-teal-900 mb-3">
            📌 Example Scenario
          </h2>
          <p className="text-teal-800 leading-relaxed text-sm">
            <strong>Sarah and David</strong> are looking to purchase a home in Calgary for $550,000.
            They have saved $55,000 (10% down payment), so they will need CMHC mortgage default insurance.
            Their mortgage amount would be approximately $495,000. At a 5-year fixed rate, with a 25-year
            amortization, they need to qualify under the stress test — meaning they must demonstrate
            they can afford payments at 2% above their contract rate. Their GDS and TDS ratios must fall
            within lender guidelines based on their combined gross income.
          </p>
          <p className="text-xs text-teal-700 mt-3 italic">
            This is a simplified illustrative example only. Actual mortgage calculations involve many
            additional factors. Speak with a licensed mortgage professional for a full assessment.
          </p>
        </div>

        {/* Common mistakes */}
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 mb-10">
          <h2 className="text-lg font-bold text-rose-900 mb-4">⚠️ Common Misconceptions</h2>
          <ul className="space-y-3">
            {[
              "Believing your mortgage pre-approval amount is the same as what you can comfortably afford monthly",
              "Assuming the lowest interest rate always means the best mortgage product",
              "Not accounting for land transfer tax, legal fees, home inspection, and moving costs in your budget",
              "Forgetting that mortgage term and amortization are different things",
              "Thinking that variable rate is always better or always worse than fixed rate — it depends on your situation",
            ].map((mistake, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-rose-800">
                <span className="text-rose-500 flex-shrink-0 mt-0.5 font-bold">✗</span>
                {mistake}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-2xl gradient-brand p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-extrabold mb-2">Ready to Assess Your Readiness?</h2>
          <p className="text-white/85 mb-5 text-sm max-w-md mx-auto">
            Complete our free assessment to help a licensed mortgage professional understand your situation.
          </p>
          <LinkButton
            href="/assessment"
            id="mortgage-basics-cta"
            className="bg-white text-primary border-0 font-semibold hover:bg-white/90 shadow-sm px-8"
          >
            Start Free Assessment
          </LinkButton>
        </div>

        {/* Disclaimer */}
        <DisclaimerBox variant="page" />
      </div>
    </div>
  );
}
