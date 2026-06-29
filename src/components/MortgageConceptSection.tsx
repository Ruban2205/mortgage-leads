const CONCEPTS = [
  {
    id: "amortization",
    title: "Amortization Period",
    icon: "📅",
    shortDesc: "The total length of time to pay off your mortgage.",
    detail:
      "In Canada, the maximum amortization for insured mortgages (less than 20% down) is 25 years. For uninsured mortgages, it can extend to 30 years. A longer amortization means lower monthly payments but more interest paid overall.",
    tag: "Core Concept",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "gds-tds",
    title: "GDS & TDS Ratios",
    icon: "📐",
    shortDesc: "Key debt ratios every lender calculates.",
    detail:
      "Gross Debt Service (GDS) measures housing costs vs. income. Total Debt Service (TDS) includes all debts. Lenders typically require GDS below 39% and TDS below 44%. Understanding these ratios helps you estimate how much home you can afford.",
    tag: "Qualification",
    tagColor: "bg-teal-100 text-teal-700",
  },
  {
    id: "stress-test",
    title: "Mortgage Stress Test",
    icon: "🧪",
    shortDesc: "Canada's qualification buffer for rising rates.",
    detail:
      "All federally regulated lenders must apply the stress test. You must qualify at the higher of your contract rate plus 2%, or 5.25% — whichever is greater. This ensures you can handle rate increases over time.",
    tag: "Regulatory",
    tagColor: "bg-violet-100 text-violet-700",
  },
  {
    id: "cmhc",
    title: "CMHC Mortgage Insurance",
    icon: "🏦",
    shortDesc: "Required when your down payment is under 20%.",
    detail:
      "If your down payment is between 5–19.99%, you must pay CMHC mortgage default insurance. The premium ranges from 2.8% to 4% of the mortgage amount and is added to your loan balance. It protects the lender, not the borrower.",
    tag: "Insurance",
    tagColor: "bg-amber-100 text-amber-700",
  },
];

export default function MortgageConceptSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 section-dots">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
              Mortgage Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            How Mortgages Work in Canada
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Four key concepts every Canadian home buyer should understand before applying.
          </p>
        </div>

        {/* Concepts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONCEPTS.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-3 card-hover"
            >
              {/* Tag */}
              <span className={`self-start text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${c.tagColor}`}>
                {c.tag}
              </span>

              {/* Icon + title */}
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">{c.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{c.shortDesc}</p>
                </div>
              </div>

              {/* Detail */}
              <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {c.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            The above is general educational information only. Mortgage eligibility is determined by individual lender review. 
            Speak with a licensed mortgage professional for advice specific to your situation.
          </p>
        </div>
      </div>
    </section>
  );
}
