import type { Metadata } from "next";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Down Payment Planning Guide — Canada",
  description:
    "Learn about Canadian mortgage down payment rules, minimum requirements, CMHC insurance thresholds, and strategies for saving your down payment.",
};

export default function DownPaymentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-50 via-slate-50 to-blue-50 py-14 sm:py-20 section-dots">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-primary transition-colors mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 border border-teal-200 px-3 py-1 mb-4">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">💰 Down Payment Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Down Payment Planning
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Understand minimum requirements, mortgage insurance, and how the size of your down payment impacts your monthly costs.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              6 min read
            </span>
            <span className="text-slate-300">·</span>
            <span>General educational information</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <p className="text-lg text-slate-700 leading-relaxed mb-10">
          Your down payment is the portion of the home's purchase price that you pay upfront. The rest is covered by your mortgage. In Canada, federal rules dictate the minimum down payment you must provide based on the property's purchase price.
        </p>

        {/* Minimum Rules */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Minimum Down Payment Rules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              price: "Under $500,000",
              min: "5% of purchase price",
              desc: "The absolute minimum required in Canada."
            },
            {
              price: "$500,000 to $999,999",
              min: "5% on first $500k + 10% on remainder",
              desc: "A blended rate for mid-priced homes."
            },
            {
              price: "$1,000,000 and up",
              min: "20% of purchase price",
              desc: "Properties over $1M do not qualify for CMHC insurance."
            }
          ].map((tier, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{tier.price}</p>
              <p className="text-xl font-black text-slate-900 mb-2">{tier.min}</p>
              <p className="text-sm text-slate-600">{tier.desc}</p>
            </div>
          ))}
        </div>

        {/* Mortgage Insurance Section */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">CMHC Mortgage Default Insurance</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          If your down payment is less than 20% (known as a high-ratio mortgage), you are legally required to purchase mortgage default insurance (often called CMHC insurance, though private companies also provide it). This protects the lender if you stop making payments.
        </p>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 mb-12">
          <ul className="space-y-3 text-amber-900 text-sm">
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600">•</span>
              The premium costs between 2.80% and 4.00% of your total mortgage amount, depending on your exact down payment percentage.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600">•</span>
              You do not have to pay this upfront; it is typically added to your mortgage balance and paid off over the life of the loan.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600">•</span>
              Because the lender is insured, high-ratio mortgages often qualify for slightly lower interest rates than uninsured (20%+ down) mortgages.
            </li>
          </ul>
        </div>

        {/* Acceptable Sources */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Acceptable Sources of Down Payment</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          Lenders must verify the source of your down payment to comply with anti-money laundering regulations. You typically must provide 90 days of bank statements showing the funds in your account.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { title: "Personal Savings", desc: "Money saved in chequing, savings, or TFSA accounts." },
            { title: "Gifted Funds", desc: "A non-repayable gift from an immediate family member. A signed gift letter will be required." },
            { title: "RRSP Home Buyers' Plan", desc: "Eligible first-time buyers can withdraw up to $35,000 tax-free from their RRSP." },
            { title: "FHSA", desc: "Funds saved in a First Home Savings Account can be used tax-free." }
          ].map((source, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/60 p-5">
              <svg className="h-6 w-6 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{source.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{source.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl gradient-brand p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-extrabold mb-2">Understand Your Down Payment Options</h2>
          <p className="text-white/85 mb-5 text-sm max-w-md mx-auto">
            Complete our free assessment to help a licensed professional understand your down payment situation.
          </p>
          <LinkButton
            href="/assessment"
            id="down-payment-cta"
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
