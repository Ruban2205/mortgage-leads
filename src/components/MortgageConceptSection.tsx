"use client";

import { motion } from "framer-motion";

const CONCEPTS = [
  {
    id: "amortization",
    title: "Amortization Period",
    icon: (
      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    shortDesc: "The total length of time to pay off your mortgage.",
    detail:
      "In Canada, the maximum amortization for insured mortgages (less than 20% down) is 25 years. For uninsured mortgages, it can extend to 30 years. A longer amortization means lower monthly payments but more interest paid overall.",
    tag: "Core Concept",
    gradient: "from-blue-500 to-blue-700",
    tagColor: "bg-blue-100/80 text-blue-700",
    glow: "blue",
  },
  {
    id: "gds-tds",
    title: "GDS & TDS Ratios",
    icon: (
      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    shortDesc: "Key debt ratios every lender calculates.",
    detail:
      "Gross Debt Service (GDS) measures housing costs vs. income. Total Debt Service (TDS) includes all debts. Lenders typically require GDS below 39% and TDS below 44%. Understanding these ratios helps you estimate how much home you can afford.",
    tag: "Qualification",
    gradient: "from-teal-500 to-emerald-600",
    tagColor: "bg-teal-100/80 text-teal-700",
    glow: "teal",
  },
  {
    id: "stress-test",
    title: "Mortgage Stress Test",
    icon: (
      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    shortDesc: "Canada's qualification buffer for rising rates.",
    detail:
      "All federally regulated lenders must apply the stress test. You must qualify at the higher of your contract rate plus 2%, or 5.25% — whichever is greater. This ensures you can handle rate increases over time.",
    tag: "Regulatory",
    gradient: "from-violet-500 to-purple-700",
    tagColor: "bg-violet-100/80 text-violet-700",
    glow: "violet",
  },
  {
    id: "cmhc",
    title: "CMHC Insurance",
    icon: (
      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    shortDesc: "Required when your down payment is under 20%.",
    detail:
      "If your down payment is between 5–19.99%, you must pay CMHC mortgage default insurance. The premium ranges from 2.8% to 4% of the mortgage amount and is added to your loan balance. It protects the lender, not the borrower.",
    tag: "Insurance",
    gradient: "from-amber-500 to-orange-600",
    tagColor: "bg-amber-100/80 text-amber-700",
    glow: "amber",
  },
];

export default function MortgageConceptSection() {
  return (
    <section className="py-20 sm:py-28 gradient-mesh-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-teal-100 px-4 py-1.5 mb-5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Mortgage Education</span>
          </div>
          <h2 className="heading-display text-4xl sm:text-5xl text-slate-900 mb-5">
            How Mortgages Work{" "}
            <span className="gradient-brand-text">in Canada</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Four key concepts every Canadian home buyer should understand before applying.
          </p>
        </motion.div>

        {/* Concepts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONCEPTS.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-350 hover:-translate-y-1.5">
                {/* Gradient header band */}
                <div className={`relative bg-gradient-to-br ${c.gradient} p-5`}>
                  {/* Icon */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-white/20">
                    {c.icon}
                  </div>
                  {/* Tag badge */}
                  <span className={`absolute top-4 right-4 text-[9px] font-extrabold uppercase tracking-widest rounded-full px-2.5 py-1 ${c.tagColor} bg-white/90`}>
                    {c.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">{c.title}</h3>
                  <p className="text-xs font-medium text-slate-400 mb-3">{c.shortDesc}</p>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{c.detail}</p>
                </div>

                {/* Bottom hover bar */}
                <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${c.gradient} transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            The above is general educational information only. Mortgage eligibility is determined by individual lender review.{" "}
            Speak with a licensed mortgage professional for advice specific to your situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
