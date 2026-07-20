import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import LearningPathway from "@/components/LearningPathway";
import GuideCard, { GuideCardProps } from "@/components/GuideCard";
import MortgageConceptSection from "@/components/MortgageConceptSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "TrueNorth Mortgage Guide — Your Canadian Mortgage Education Resource",
  description:
    "Learn how Canadian mortgages work, understand your readiness, and explore guides on credit, down payment, first-time buying, and affordability. Proudly Canadian mortgage education.",
};

const GUIDE_CARDS: Omit<GuideCardProps, "id">[] = [
  {
    title: "Mortgage Basics",
    description:
      "Understand how Canadian mortgages work — amortization, fixed vs. variable rates, mortgage terms, and the stress test explained clearly.",
    href: "/mortgage-basics",
    readTime: "8 min read",
    accentColor: "text-blue-600",
    accentBg: "bg-blue-50",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "First-Time Home Buyers",
    description:
      "A step-by-step guide covering FHSA, RRSP Home Buyers' Plan, land transfer tax rebates, and what to expect from offer to closing.",
    href: "/first-time-buyers",
    readTime: "10 min read",
    accentColor: "text-violet-600",
    accentBg: "bg-violet-50",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Credit & Debt Readiness",
    description:
      "Learn what credit score lenders look for, how GDS and TDS ratios work, and actionable ways to strengthen your credit profile.",
    href: "/credit-debt",
    readTime: "7 min read",
    accentColor: "text-rose-600",
    accentBg: "bg-rose-50",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Down Payment Planning",
    description:
      "Understand minimum down payment rules, CMHC insurance thresholds, and how to use the RRSP Home Buyers' Plan to reach your goal.",
    href: "/down-payment",
    readTime: "6 min read",
    accentColor: "text-teal-600",
    accentBg: "bg-teal-50",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Affordability & Pre-Approval",
    description:
      "Estimate how much home you can realistically afford, learn how lenders calculate affordability, and understand what pre-approval means.",
    href: "/affordability",
    readTime: "9 min read",
    accentColor: "text-orange-600",
    accentBg: "bg-orange-50",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 13h.01M13 13h.01M17 13h.01M17 17h.01M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Mortgage Glossary",
    description:
      "A plain-language reference of 30+ essential Canadian mortgage terms — from amortization and GDS ratios to CMHC insurance and the stress test.",
    href: "/glossary",
    readTime: "Reference",
    accentColor: "text-indigo-600",
    accentBg: "bg-indigo-50",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Learning pathway — "Start Here" */}
      <LearningPathway />

      {/* 3. Education category cards */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5 mb-5 shadow-sm">
              <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Mortgage Education Guides</span>
            </div>
            <h2 className="heading-display text-4xl sm:text-5xl text-slate-900 mb-5">
              Everything You Need{" "}
              <span className="gradient-brand-text">to Know</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Six comprehensive guides covering every major aspect of the Canadian mortgage journey —
              all in plain language, designed for Canadians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GUIDE_CARDS.map((card, i) => (
              <GuideCard
                key={card.title}
                id={`guide-card-${i + 1}`}
                {...card}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. How mortgages work in Canada */}
      <MortgageConceptSection />

      {/* 5. Are you mortgage ready? CTA */}
      <CTASection />

      {/* 6. FAQ Accordion */}
      <FAQAccordion />

      {/* 7. Compliance disclaimer section */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <DisclaimerBox variant="page" />
        </div>
      </section>
    </>
  );
}
