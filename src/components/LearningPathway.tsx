import Link from "next/link";

const PATHWAY_STEPS = [
  {
    step: 1,
    title: "Mortgage Basics",
    description: "Understand how Canadian mortgages work — amortization, interest, and the stress test.",
    href: "/mortgage-basics",
    icon: "📘",
  },
  {
    step: 2,
    title: "First-Time Home Buyers",
    description: "Explore government programs, rebates, and what to expect as a first-time buyer.",
    href: "/first-time-buyers",
    icon: "🏠",
  },
  {
    step: 3,
    title: "Credit & Debt Readiness",
    description: "Learn what credit score you need and how your debts affect your mortgage options.",
    href: "/credit-debt",
    icon: "📊",
  },
  {
    step: 4,
    title: "Down Payment Planning",
    description: "Understand minimum requirements, RRSP Home Buyers' Plan, and CMHC insurance.",
    href: "/down-payment",
    icon: "💰",
  },
  {
    step: 5,
    title: "Affordability & Pre-Approval",
    description: "Estimate how much home you can afford and understand the pre-approval process.",
    href: "/affordability",
    icon: "📋",
  },
  {
    step: 6,
    title: "Mortgage Assessment",
    description: "Complete your free assessment to help a licensed professional understand your situation.",
    href: "/assessment",
    icon: "✅",
    isCTA: true,
  },
];

export default function LearningPathway() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-4">
            <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Start Here</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Your Mortgage Learning Pathway
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Follow these steps to build your knowledge before speaking with a licensed mortgage professional.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[8.333%] right-[8.333%] h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PATHWAY_STEPS.map((item) => (
              <Link
                key={item.step}
                href={item.href}
                id={`pathway-step-${item.step}`}
                className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                  item.isCTA
                    ? "gradient-brand text-white border-transparent shadow-lg hover:shadow-xl hover:opacity-95"
                    : "bg-white border-slate-200 hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {/* Step number badge */}
                <div
                  className={`absolute -top-3 left-5 text-xs font-bold rounded-full px-2.5 py-0.5 ${
                    item.isCTA
                      ? "bg-white/20 text-white border border-white/30"
                      : "bg-primary/10 text-primary border border-primary/20"
                  }`}
                >
                  Step {item.step}
                </div>

                <div className="flex items-start gap-4 mt-2">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3
                      className={`text-base font-bold mb-1.5 ${
                        item.isCTA ? "text-white" : "text-slate-900 group-hover:text-primary"
                      } transition-colors`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        item.isCTA ? "text-white/85" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={`mt-4 flex items-center text-xs font-semibold ${item.isCTA ? "text-white/90" : "text-primary"}`}>
                  {item.isCTA ? "Begin Assessment" : "Read Guide"}
                  <svg className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
