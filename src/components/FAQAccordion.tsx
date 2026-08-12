"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-1.5 mb-5">
            <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Common Questions</span>
          </div>
          <h2 className="heading-display text-4xl sm:text-5xl text-foreground mb-5">
            Questions Canadians{" "}
            <span className="gradient-brand-text">Ask About Mortgages</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            General answers to help you start learning. Always verify details with a licensed mortgage professional.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-primary/25 shadow-premium bg-card"
                      : "border-border bg-card hover:border-border/80 shadow-card"
                  }`}
                >
                  {/* Left accent bar on open */}
                  <div className="flex">
                    <div className={`w-1 flex-shrink-0 transition-all duration-300 rounded-l-2xl ${isOpen ? "gradient-brand" : "bg-transparent"}`} />

                    <div className="flex-1">
                      <button
                        id={faq.id}
                        onClick={() => toggle(faq.id)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className={`text-sm font-semibold leading-relaxed transition-colors duration-200 ${isOpen ? "text-primary" : "text-foreground"}`}>
                          {faq.q}
                        </span>
                        <div className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "gradient-brand text-white rotate-45" : "bg-muted text-muted-foreground"}`}>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200/70 dark:border-amber-500/20 p-5 text-xs text-amber-700 dark:text-amber-400 leading-relaxed"
        >
          <div className="flex items-start gap-3">
            <svg className="h-4 w-4 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p>
              <strong className="font-semibold">Educational Information Only:</strong> The answers above are general information intended to help you understand Canadian mortgage concepts. They are not financial, legal, tax, or mortgage approval advice. Mortgage eligibility depends on lender review, income, credit, debts, property, and applicable regulations. Speak with a licensed mortgage professional before making decisions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
