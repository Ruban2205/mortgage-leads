import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import LearningCard, { LearningCardProps } from "@/components/LearningCard";

export const metadata: Metadata = {
  title: "Dashboard — MortgagePath AI",
  description:
    "Access your mortgage readiness tools and learning resources. Start with the Mortgage Readiness Assessment and explore first-time buyer guides, credit improvement plans, and more.",
};

const LEARNING_OPTIONS: Omit<LearningCardProps, "id">[] = [
  {
    title: "Mortgage Readiness Assessment",
    description:
      "Find out where you stand before speaking with a mortgage professional. This guided assessment covers your income, credit, down payment, and goals to give you a clear picture of your readiness.",
    ctaLabel: "Start Assessment",
    href: "/assessment",
    isActive: true,
    accentColor: "gradient-brand",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "First-Time Home Buyer Guide",
    description:
      "A step-by-step guide covering everything you need to know as a first-time buyer in Canada — from pre-approval to closing day.",
    ctaLabel: "Coming Soon",
    href: "/coming-soon",
    isActive: false,
    accentColor: "bg-violet-500",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Credit Score Improvement Plan",
    description:
      "Learn what affects your credit score in Canada and discover actionable steps to improve it before applying for a mortgage.",
    ctaLabel: "Coming Soon",
    href: "/coming-soon",
    isActive: false,
    accentColor: "bg-rose-500",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Debt-to-Income Calculator",
    description:
      "Calculate your Gross Debt Service (GDS) and Total Debt Service (TDS) ratios — two key numbers every Canadian mortgage lender reviews.",
    ctaLabel: "Coming Soon",
    href: "/coming-soon",
    isActive: false,
    accentColor: "bg-orange-500",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 13h.01M13 13h.01M17 13h.01M17 17h.01M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Down Payment & Affordability Planner",
    description:
      "Understand how much home you can afford, how much to save, and what different down payment amounts mean for your monthly costs.",
    ctaLabel: "Coming Soon",
    href: "/coming-soon",
    isActive: false,
    accentColor: "bg-teal-500",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Learning Dashboard Section */}
      <section id="learning-dashboard" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-4">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Learning Dashboard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Your Mortgage Education Hub
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to understand your mortgage options — from
              readiness checks to financial planning tools. New modules launching
              soon.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEARNING_OPTIONS.map((option, i) => (
              <LearningCard
                key={option.title}
                id={`learning-card-${i + 1}`}
                {...option}
              />
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              🍁 Built for Canadians. More tools coming throughout 2025.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              How It Works
            </h2>
            <p className="text-slate-600">Three simple steps to mortgage clarity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Complete Your Assessment",
                description: "Answer straightforward questions about your finances, goals, and situation in about 5 minutes.",
                icon: "📋",
              },
              {
                step: "02",
                title: "Get Your Profile",
                description: "A licensed mortgage professional reviews your responses and builds a personalized picture of your readiness.",
                icon: "🔍",
              },
              {
                step: "03",
                title: "Take Your Next Step",
                description: "Receive guidance on what to improve, what you qualify for, and how to move forward confidently.",
                icon: "🏡",
              },
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="absolute -top-3 left-6 text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
