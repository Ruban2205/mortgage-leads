import type { Metadata } from "next";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "First-Time Home Buyer Guide — Canada",
  description:
    "A complete Canadian first-time home buyer guide covering FHSA, RRSP Home Buyers' Plan, land transfer tax rebates, the home buying process, and what to expect from offer to closing.",
};

const STEPS = [
  { title: "Check Your Financial Readiness", desc: "Review your credit score, existing debts, savings, and income stability before starting your home search. Understanding where you stand helps you prepare and set realistic expectations." },
  { title: "Explore First-Time Buyer Programs", desc: "Learn about programs that may be available, such as the First Home Savings Account (FHSA), RRSP Home Buyers' Plan (HBP), and provincial land transfer tax rebates. Program eligibility rules vary and can change — verify current details with a professional." },
  { title: "Speak with a Licensed Mortgage Professional", desc: "Get a mortgage pre-approval to understand your estimated borrowing range. A licensed mortgage professional can help you explore options and navigate the application process." },
  { title: "Work with a Real Estate Agent", desc: "A licensed REALTOR® can help you navigate property searches, offer submissions, and negotiation in your local market." },
  { title: "Make an Offer", desc: "Once you find a home, your agent will help you submit a purchase offer. This may include conditions such as a home inspection and financing approval." },
  { title: "Secure Final Mortgage Approval", desc: "Your lender will conduct a full review of your financials, order a property appraisal, and issue final approval. This is separate from your pre-approval." },
  { title: "Closing Day", desc: "Your lawyer or notary will complete the property transfer. You'll pay remaining closing costs (legal fees, land transfer tax, adjustments) and receive your keys." },
];

const PROGRAMS = [
  {
    name: "First Home Savings Account (FHSA)",
    tag: "Tax-Advantaged",
    tagColor: "bg-blue-100 text-blue-700",
    desc: "A registered savings account for first-time buyers. Contributions are tax-deductible, and qualifying withdrawals for a home purchase are tax-free. Annual limit: $8,000. Lifetime limit: $40,000.",
    note: "Eligibility rules and program details are subject to change. Consult a financial advisor for current information.",
  },
  {
    name: "RRSP Home Buyers' Plan (HBP)",
    tag: "RRSP Withdrawal",
    tagColor: "bg-teal-100 text-teal-700",
    desc: "Allows eligible first-time buyers to withdraw up to $35,000 from their RRSP tax-free to help purchase a qualifying home. The amount must be repaid over 15 years.",
    note: "Both spouses can use the HBP if purchasing together, potentially accessing up to $70,000 combined.",
  },
  {
    name: "Land Transfer Tax Rebate",
    tag: "Provincial / Municipal",
    tagColor: "bg-violet-100 text-violet-700",
    desc: "Some provinces and municipalities (such as Ontario and the City of Toronto) offer land transfer tax rebates for first-time home buyers. Eligibility and amounts vary by location.",
    note: "Always verify current program eligibility and amounts with your province/municipality or a licensed professional.",
  },
  {
    name: "GST/HST New Housing Rebate",
    tag: "Federal",
    tagColor: "bg-amber-100 text-amber-700",
    desc: "If you purchase a newly built home, you may be eligible for a rebate on the GST/HST paid on the purchase price, subject to conditions and maximum values.",
    note: "Rules and caps vary. A real estate lawyer can advise on applicable rebates for your specific purchase.",
  },
];

export default function FirstTimeBuyersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-violet-50 via-slate-50 to-blue-50 py-14 sm:py-20 section-dots">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-primary transition-colors mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 border border-violet-200 px-3 py-1 mb-4">
            <span className="text-xs font-semibold text-violet-700 uppercase tracking-wide">🏠 First-Time Buyer Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            First-Time Home Buyer Guide
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            A practical overview of the home-buying journey in Canada — programs, process, and what to expect at each stage.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              10 min read
            </span>
            <span className="text-slate-300">·</span>
            <span>General educational information</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <p className="text-lg text-slate-700 leading-relaxed mb-10">
          Buying your first home in Canada is a significant milestone. The process can feel complex,
          but breaking it into clear steps — and knowing what programs may be available — can help
          you approach it with more confidence. This guide is an educational overview only.
          Always speak with licensed professionals before making financial decisions.
        </p>

        {/* Steps */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-6">The Home Buying Process</h2>
        <div className="space-y-4 mb-12">
          {STEPS.map((step, i) => (
            <div key={i} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-brand text-white text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Programs */}
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Programs That May Help</h2>
        <p className="text-slate-500 text-sm mb-6">
          Program rules, eligibility, and amounts are subject to change. Verify current details with a licensed professional or government source.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {PROGRAMS.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${p.tagColor}`}>
                {p.tag}
              </span>
              <h3 className="font-bold text-slate-900">{p.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              <p className="text-xs text-slate-400 italic border-t border-slate-100 pt-2">{p.note}</p>
            </div>
          ))}
        </div>

        {/* Example scenario */}
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 mb-8">
          <h2 className="text-lg font-bold text-teal-900 mb-3">📌 Example Scenario</h2>
          <p className="text-teal-800 leading-relaxed text-sm">
            <strong>Maria</strong> is a first-time buyer in Ontario saving for a $450,000 condo.
            She has accumulated $22,500 in her FHSA and $15,000 in her RRSP eligible for the HBP —
            a potential total of $37,500 toward her down payment. She speaks with a licensed mortgage
            professional to understand how these savings, combined with her income and credit, affect
            her qualification range and monthly payments.
          </p>
          <p className="text-xs text-teal-700 mt-3 italic">
            Illustrative example only. All programs have eligibility requirements. Consult a financial advisor and licensed mortgage professional.
          </p>
        </div>

        {/* Common mistakes */}
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 mb-10">
          <h2 className="text-lg font-bold text-rose-900 mb-4">⚠️ Common First-Time Buyer Mistakes</h2>
          <ul className="space-y-3">
            {[
              "Not accounting for closing costs (legal fees, land transfer tax, title insurance, adjustments)",
              "Skipping the home inspection to win a bidding war",
              "Overextending based on maximum pre-approval amount rather than comfortable monthly budget",
              "Not comparing mortgage options from multiple lenders before committing",
              "Forgetting that pre-approval is not a guarantee of final mortgage approval",
            ].map((m, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-rose-800">
                <span className="text-rose-500 flex-shrink-0 font-bold mt-0.5">✗</span>
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-2xl gradient-brand p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-extrabold mb-2">Ready to Explore Your Options?</h2>
          <p className="text-white/85 mb-5 text-sm max-w-md mx-auto">
            Complete our free assessment to help a licensed mortgage professional understand your first-time buyer situation.
          </p>
          <LinkButton
            href="/assessment"
            id="first-time-buyers-cta"
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
