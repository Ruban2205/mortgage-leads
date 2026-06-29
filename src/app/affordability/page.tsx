import type { Metadata } from "next";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Affordability & Pre-Approval Guide — Canada",
  description:
    "Learn how Canadian mortgage lenders calculate affordability, the difference between pre-qualification and pre-approval, and how to estimate your purchasing power.",
};

export default function AffordabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-50 via-slate-50 to-rose-50 py-14 sm:py-20 section-dots">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-primary transition-colors mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-3 py-1 mb-4">
            <span className="text-xs font-semibold text-orange-700 uppercase tracking-wide">📋 Affordability Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Affordability & Pre-Approval
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Understand how much home you can realistically afford and what lenders look for during the pre-approval process.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              9 min read
            </span>
            <span className="text-slate-300">·</span>
            <span>General educational information</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <p className="text-lg text-slate-700 leading-relaxed mb-10">
          Determining how much home you can afford is the most critical first step in the buying journey. It sets your expectations and ensures you don't overextend your budget. While online calculators offer a starting point, lenders use strict regulatory calculations to determine your official borrowing capacity.
        </p>

        {/* What Determines Affordability */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-6">What Determines Your Affordability?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Gross Income",
              desc: "Your before-tax income. Stable, full-time employment is viewed most favorably. Self-employed income requires longer verification (usually 2 years of NOAs)."
            },
            {
              title: "Down Payment Size",
              desc: "A larger down payment reduces your loan amount, decreasing monthly payments and potentially allowing you to qualify for a more expensive home."
            },
            {
              title: "Existing Debts",
              desc: "Car loans, credit cards, and student loans reduce the amount of income available to service a mortgage (your TDS ratio)."
            },
            {
              title: "Interest Rates & Stress Test",
              desc: "You must qualify at the stress test rate (usually 5.25% or contract + 2%), meaning your affordability is lower than what current rates suggest."
            }
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 card-hover">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pre-Qualification vs Pre-Approval */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Pre-Qualification vs. Pre-Approval</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <div className="inline-block rounded bg-blue-200/50 px-2 py-1 text-xs font-bold text-blue-700 uppercase tracking-wide mb-3">
              Pre-Qualification
            </div>
            <h3 className="text-lg font-bold text-blue-900 mb-3">A General Estimate</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Based on information you provide verbally or online.</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Usually no hard credit check required.</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Good for getting a rough idea of your budget early on.</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> Does not guarantee a rate or lock in terms.</li>
            </ul>
          </div>
          
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <div className="inline-block rounded bg-teal-200/50 px-2 py-1 text-xs font-bold text-teal-700 uppercase tracking-wide mb-3">
              Pre-Approval
            </div>
            <h3 className="text-lg font-bold text-teal-900 mb-3">A Formal Commitment</h3>
            <ul className="space-y-2 text-sm text-teal-800">
              <li className="flex gap-2"><span className="text-teal-500 font-bold">•</span> Requires verification of income, employment, and down payment.</li>
              <li className="flex gap-2"><span className="text-teal-500 font-bold">•</span> Includes a formal hard credit check.</li>
              <li className="flex gap-2"><span className="text-teal-500 font-bold">•</span> Can lock in an interest rate for 90 to 120 days.</li>
              <li className="flex gap-2"><span className="text-teal-500 font-bold">•</span> Gives sellers confidence that you are a serious, qualified buyer.</li>
            </ul>
          </div>
        </div>

        {/* Important Warning */}
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 mb-10">
          <h2 className="text-lg font-bold text-rose-900 mb-3">⚠️ Pre-Approval is Not Final Approval</h2>
          <p className="text-rose-800 text-sm leading-relaxed mb-4">
            Many buyers mistakenly believe a pre-approval means their mortgage is guaranteed. <strong>Final approval is always subject to:</strong>
          </p>
          <ul className="space-y-2 text-sm text-rose-800 font-medium">
            <li className="flex items-center gap-2"><span className="text-rose-500">•</span> The property appraisal (the lender must agree the home is worth what you paid).</li>
            <li className="flex items-center gap-2"><span className="text-rose-500">•</span> The property meeting lender guidelines (e.g., no former grow-ops, structurally sound).</li>
            <li className="flex items-center gap-2"><span className="text-rose-500">•</span> Your financial situation remaining unchanged (do not take on new debt before closing).</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-2xl gradient-brand p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-extrabold mb-2">Ready to Check Your Affordability?</h2>
          <p className="text-white/85 mb-5 text-sm max-w-md mx-auto">
            Complete our free assessment to help a licensed professional estimate your mortgage readiness.
          </p>
          <LinkButton
            href="/assessment"
            id="affordability-cta"
            className="bg-white text-primary border-0 font-semibold hover:bg-white/90 shadow-sm px-8"
          >
            Start Free Assessment
          </LinkButton>
        </div>

        <DisclaimerBox variant="page" />
      </div>
    </div>
  );
}
