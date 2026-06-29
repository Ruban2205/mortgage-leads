"use client";

import { useState } from "react";

const FAQS = [
  {
    id: "faq-1",
    q: "How much down payment do I need to buy a home in Canada?",
    a: "In Canada, the minimum down payment depends on the purchase price. For homes under $500,000, the minimum is 5%. For homes between $500,000 and $999,999, it's 5% on the first $500,000 and 10% on the remainder. For homes $1,000,000 and above, a minimum 20% down payment is required. Providing 20% or more allows you to avoid CMHC mortgage default insurance.",
  },
  {
    id: "faq-2",
    q: "What credit score do I need to qualify for a mortgage in Canada?",
    a: "Most Canadian lenders look for a minimum credit score of 620–680 for insured mortgages, though stronger scores (700+) typically open more product options. Your credit score is one factor — lenders also assess your income, employment history, debt levels, and down payment. If your score is lower, speaking with a licensed mortgage professional can help you understand your options.",
  },
  {
    id: "faq-3",
    q: "What is the mortgage stress test and how does it affect me?",
    a: "The mortgage stress test is a Canadian federal requirement that lenders must apply when approving mortgages. It requires borrowers to qualify at the higher of their contract rate plus 2%, or 5.25% (whichever is greater). This is designed to ensure borrowers can manage payments if rates rise. It applies to most federally regulated lenders regardless of your down payment amount.",
  },
  {
    id: "faq-4",
    q: "What is CMHC mortgage insurance and do I need it?",
    a: "CMHC (Canada Mortgage and Housing Corporation) mortgage default insurance is required when your down payment is less than 20% of the purchase price. The premium ranges from 2.80% to 4% of the mortgage amount and is typically added to your mortgage balance. It protects the lender in the event of default — it does not protect the borrower. You cannot opt out if your down payment is under 20%.",
  },
  {
    id: "faq-5",
    q: "What is the difference between a fixed and variable rate mortgage?",
    a: "A fixed-rate mortgage locks your interest rate for the term (e.g., 5 years), giving payment predictability. A variable-rate mortgage fluctuates with the lender's prime rate, which can mean lower initial rates but less predictability. The right choice depends on your financial situation, risk tolerance, and market conditions. A licensed mortgage professional can help you compare options.",
  },
  {
    id: "faq-6",
    q: "What is the First Home Savings Account (FHSA)?",
    a: "The FHSA is a registered savings account introduced in Canada that lets first-time home buyers save up to $8,000 per year (lifetime maximum of $40,000) on a tax-deductible basis. Qualifying withdrawals for a first home purchase are tax-free. It combines features of an RRSP and TFSA. Eligibility and rules may change — consult a financial advisor for the latest details.",
  },
  {
    id: "faq-7",
    q: "What is the RRSP Home Buyers' Plan (HBP)?",
    a: "The RRSP Home Buyers' Plan allows eligible first-time buyers to withdraw up to $35,000 from their RRSPs tax-free to help purchase a qualifying home. The withdrawn amount must be repaid into your RRSP over 15 years. This program has specific eligibility rules — speak with a licensed professional or financial advisor to determine if it applies to your situation.",
  },
  {
    id: "faq-8",
    q: "Should I get pre-approved before looking at homes?",
    a: "Getting a mortgage pre-approval before house hunting is generally recommended. A pre-approval helps you understand your estimated purchase price range, shows sellers you are a serious buyer, and can lock in an interest rate for a period (commonly 90–130 days, subject to lender terms). Note that pre-approval is not a guarantee of final mortgage approval — it is subject to full application review, property appraisal, and verification of your financial information.",
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Questions Canadians Ask About Mortgages
          </h2>
          <p className="text-slate-600 text-lg">
            General answers to help you start learning. Always verify details with a licensed mortgage professional.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? "border-primary/30 bg-primary/3 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  id={faq.id}
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm font-semibold leading-relaxed ${isOpen ? "text-primary" : "text-slate-900"}`}>
                    {faq.q}
                  </span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : "text-slate-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Compliance note */}
        <div className="mt-8 rounded-xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-700 leading-relaxed">
          <strong className="font-semibold">Educational Information Only:</strong> The answers above are general information intended to help you understand Canadian mortgage concepts. They are not financial, legal, tax, or mortgage approval advice. Mortgage eligibility depends on lender review, income, credit, debts, property, and applicable regulations. Speak with a licensed mortgage professional before making decisions.
        </div>
      </div>
    </section>
  );
}
