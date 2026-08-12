import type { Metadata } from "next";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Credit & Debt Readiness Guide — Canada",
  description:
    "Understand how your credit score and existing debts affect your ability to get a Canadian mortgage. Learn about GDS, TDS, and strategies to improve your financial readiness.",
};

const CREDIT_SCORES = [
  { range: "750+", label: "Excellent", desc: "Access to the best rates and easiest qualification process. Gives lenders maximum confidence in your repayment ability." },
  { range: "680 - 749", label: "Good to Very Good", desc: "Generally qualifies for competitive rates. Represents a strong credit profile acceptable to most major Canadian lenders." },
  { range: "600 - 679", label: "Fair", desc: "May qualify for a mortgage, but options might be more limited. Some lenders have strict cut-offs around 600-620 for insured mortgages." },
  { range: "Below 600", label: "Needs Improvement", desc: "Typically requires alternative lending solutions, a co-signer, or a larger down payment. A licensed professional can advise on rebuilding strategies." },
];

const RATIOS = [
  {
    title: "Gross Debt Service (GDS) Ratio",
    desc: "Your GDS ratio is the percentage of your gross (before-tax) monthly income needed to cover your housing costs.",
    includes: [
      "Mortgage principal & interest payments",
      "Property taxes",
      "Heating costs",
      "50% of condominium fees (if applicable)"
    ],
    target: "Lenders typically want this ratio to be under 39%."
  },
  {
    title: "Total Debt Service (TDS) Ratio",
    desc: "Your TDS ratio includes all your GDS housing costs, plus all your other monthly debt obligations.",
    includes: [
      "All GDS housing costs",
      "Credit card payments (usually calculated at 3% of balance)",
      "Car loans or leases",
      "Student loans",
      "Lines of credit and other loans"
    ],
    target: "Lenders typically want this ratio to be under 44%."
  }
];

export default function CreditDebtPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-muted/40 via-muted/20 to-orange-50 py-14 sm:py-20 section-dots">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex w-fit items-center gap-1.5 text-sm text-slate-500 hover:text-primary transition-colors mb-3">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 border border-rose-200 px-4 py-1.5 mb-5">
            <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider">📊 Credit & Debt Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Credit & Debt Readiness
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Understand how lenders evaluate your credit history and existing debt, and learn what you need to qualify for a mortgage in Canada.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              7 min read
            </span>
            <span className="text-slate-300">·</span>
            <span>General educational information</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <p className="text-lg text-slate-700 leading-relaxed mb-10">
          When you apply for a mortgage, lenders want to know two main things: your track record of repaying debt (your credit history) and whether you earn enough to comfortably manage your new mortgage alongside your current obligations (your debt service ratios).
        </p>

        {/* Credit Score Section */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Understanding Your Credit Score</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          In Canada, credit scores range from 300 to 900. Equifax and TransUnion are the two main credit bureaus. Lenders use your score to assess risk. The higher your score, the more options you'll have.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {CREDIT_SCORES.map((score, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-card p-5 flex flex-col h-full card-hover">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-black text-primary">{score.range}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded">{score.label}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">{score.desc}</p>
            </div>
          ))}
        </div>

        {/* Debt Ratios Section */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Debt Service Ratios (GDS & TDS)</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          Lenders use two calculations to determine if you can afford a mortgage. These ratios compare your expenses to your gross household income. 
        </p>

        <div className="space-y-6 mb-12">
          {RATIOS.map((ratio, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{ratio.title}</h3>
              <p className="text-slate-600 mb-4">{ratio.desc}</p>
              
              <div className="bg-card rounded-xl border border-slate-100 p-4 mb-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {ratio.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="inline-flex items-center gap-2 rounded-lg bg-teal-50 border border-teal-100 px-3 py-2">
                <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-teal-800">{ratio.target}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Improving Credit Section */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8 mb-10">
          <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Tips for Improving Mortgage Readiness
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <ul className="space-y-3">
              {[
                "Always pay bills on time (even the minimum helps protect your score)",
                "Keep credit card balances below 30% of their limits",
                "Avoid closing old credit accounts (length of history matters)"
              ].map((m, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-blue-800">
                  <span className="text-blue-500 flex-shrink-0 font-bold mt-0.5">✓</span>
                  {m}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                "Don't apply for new credit (cars, store cards) before buying a home",
                "Pay down high-interest consumer debt to improve your TDS ratio",
                "Review your credit report annually to correct any errors"
              ].map((m, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-blue-800">
                  <span className="text-blue-500 flex-shrink-0 font-bold mt-0.5">✓</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl gradient-brand p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-extrabold mb-2">Check Your Mortgage Readiness</h2>
          <p className="text-white/85 mb-5 text-sm max-w-md mx-auto">
            Complete our free assessment to help a licensed professional understand your debt and credit situation.
          </p>
          <LinkButton
            href="/assessment"
            id="credit-debt-cta"
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
