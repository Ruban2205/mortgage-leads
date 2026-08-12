"use client";

import { useState } from "react";

interface GlossaryTerm {
  term: string;
  definition: string;
}

const TERMS: GlossaryTerm[] = [
  { term: "Amortization Period", definition: "The total length of time it takes to pay off a mortgage in full, including all interest. In Canada, the maximum for insured mortgages is 25 years; for uninsured mortgages, up to 30 years." },
  { term: "Appraisal", definition: "A professional assessment of a property's market value, typically required by the lender before approving a mortgage. The borrower usually pays the appraisal fee." },
  { term: "Bridge Financing", definition: "A short-term loan that helps homeowners cover the gap between buying a new home before the sale of their existing home closes." },
  { term: "CMHC Insurance", definition: "Mortgage default insurance required by law when a homebuyer's down payment is less than 20%. Provided by Canada Mortgage and Housing Corporation (CMHC), Sagen, or Canada Guaranty. Protects the lender, not the borrower." },
  { term: "Closed Mortgage", definition: "A mortgage with restrictions on paying off, renewing, or renegotiating the loan before the term ends. Prepayment penalties may apply if broken early." },
  { term: "Collateral Charge Mortgage", definition: "A type of mortgage registration that allows you to borrow up to 125% of your home's value, but is harder to transfer between lenders without refinancing." },
  { term: "Conventional Mortgage", definition: "A mortgage where the borrower has provided a down payment of 20% or more, so CMHC insurance is not required." },
  { term: "Down Payment", definition: "The upfront portion of the home purchase price paid by the buyer. In Canada, the minimum is 5% for homes under $500,000." },
  { term: "FHSA (First Home Savings Account)", definition: "A registered savings account allowing eligible first-time home buyers to contribute up to $8,000 per year (max $40,000 lifetime) with tax-deductible contributions and tax-free withdrawals for qualifying home purchases." },
  { term: "Fixed Rate Mortgage", definition: "A mortgage where the interest rate remains constant for the entire mortgage term, providing predictable monthly payments." },
  { term: "GDS Ratio (Gross Debt Service)", definition: "A ratio comparing your total monthly housing costs (mortgage principal and interest, property taxes, heating, and 50% of condo fees) to your gross monthly income. Lenders typically require this to be under 39%." },
  { term: "High-Ratio Mortgage", definition: "A mortgage where the down payment is less than 20% of the purchase price. Mortgage default insurance is required." },
  { term: "Home Equity", definition: "The portion of your home's value that you own outright. Calculated as the current market value minus any outstanding mortgage balance." },
  { term: "HBP (Home Buyers' Plan)", definition: "A federal program allowing eligible first-time home buyers to withdraw up to $35,000 from their RRSP to put toward a qualifying home purchase, with the amount to be repaid over 15 years." },
  { term: "Insured Mortgage", definition: "A mortgage backed by CMHC mortgage default insurance, required when the down payment is less than 20%. This allows lenders to offer lower interest rates in some cases." },
  { term: "Interest Rate", definition: "The percentage charged by the lender on the outstanding mortgage balance. Can be fixed (stays the same) or variable (fluctuates with the prime rate)." },
  { term: "Lender", definition: "A financial institution (bank, credit union, trust company, or private lender) that provides mortgage funds to a borrower." },
  { term: "Maturity Date", definition: "The date on which the mortgage term ends. At this point, you can renew, refinance, or pay off the remaining balance." },
  { term: "Mortgage", definition: "A legal loan agreement where a borrower uses real property as collateral to secure funds from a lender to purchase a home or other property." },
  { term: "Mortgage Broker", definition: "A licensed professional who shops multiple lenders on behalf of a borrower to find mortgage options. Mortgage brokers in Canada must be licensed in their province." },
  { term: "Mortgage Term", definition: "The length of time the current mortgage agreement (including interest rate and conditions) is in effect. Common terms in Canada are 1–5 years. At the end of each term, the mortgage is renewed." },
  { term: "Open Mortgage", definition: "A mortgage that allows the borrower to pay off part or all of the loan at any time without penalty, typically at a higher interest rate than a closed mortgage." },
  { term: "Prepayment Privilege", definition: "A clause in a closed mortgage allowing borrowers to make additional lump-sum payments or increase regular payments without penalty, up to a specified limit per year." },
  { term: "Prime Rate", definition: "The benchmark interest rate set by chartered banks in Canada, which influences variable-rate mortgages and home equity lines of credit." },
  { term: "Principal", definition: "The original amount borrowed in a mortgage loan, not including interest." },
  { term: "Refinancing", definition: "The process of replacing an existing mortgage with a new one, often to access home equity, get a lower rate, or change the mortgage structure." },
  { term: "Renewal", definition: "At the end of a mortgage term, the borrower renews the mortgage under new terms and conditions. This is an opportunity to shop for a better rate." },
  { term: "RRSP (Registered Retirement Savings Plan)", definition: "A Canadian government-registered savings account that provides tax deductions on contributions. Can be used under the Home Buyers' Plan (HBP) for first-time home purchases." },
  { term: "Stress Test", definition: "A federal requirement that mortgage applicants must qualify at the higher of their contract rate plus 2%, or 5.25%, to ensure they can handle potential interest rate increases." },
  { term: "TDS Ratio (Total Debt Service)", definition: "A ratio comparing your total monthly debt payments (housing costs plus all other debts like car loans, credit cards, student loans) to your gross monthly income. Lenders typically require this to be under 44%." },
  { term: "Title", definition: "The legal document proving ownership of a property. A title search is conducted before purchase to confirm the seller has clear ownership." },
  { term: "Title Insurance", definition: "An insurance policy protecting homeowners and lenders against losses from title defects, fraud, encroachments, or errors in public records." },
  { term: "Variable Rate Mortgage", definition: "A mortgage where the interest rate fluctuates based on the lender's prime rate. Payments may stay the same or change depending on the lender's policy." },
];

export default function GlossaryList() {
  const [search, setSearch] = useState("");

  const filtered = TERMS.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
  );

  // Group by first letter
  const grouped = filtered.reduce<Record<string, GlossaryTerm[]>>((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {});

  const letters = Object.keys(grouped).sort();

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          id="glossary-search"
          type="text"
          placeholder="Search mortgage terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-border bg-card pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Term count */}
      <p className="text-xs text-muted-foreground mb-6">
        Showing {filtered.length} of {TERMS.length} terms
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg font-medium mb-2">No terms found</p>
          <p className="text-sm">Try a different search term</p>
        </div>
      ) : (
        <div className="space-y-10">
          {letters.map((letter) => (
            <div key={letter} id={`glossary-letter-${letter}`}>
              {/* Letter heading */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-brand flex-shrink-0">
                  <span className="text-sm font-bold text-white">{letter}</span>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Terms */}
              <div className="space-y-3 pl-12">
                {grouped[letter].map((item) => (
                  <div key={item.term} className="rounded-xl border border-border bg-muted/50 p-4">
                    <dt className="text-sm font-bold text-foreground mb-1.5">{item.term}</dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">{item.definition}</dd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
