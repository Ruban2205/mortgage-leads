"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const TRUST_ITEMS = [
  "No credit check required",
  "Takes about 5 minutes",
  "No commitment needed",
  "Canadian-focused guidance",
];

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Section wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg className="w-full text-slate-50" viewBox="0 0 1440 48" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-3xl gradient-brand-animated shadow-2xl shadow-blue-500/25 p-10 sm:p-16 text-center">
            {/* Animated background orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-2xl animate-float" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-2xl animate-float-delay" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              {/* Grid overlay */}
              <div className="absolute inset-0 section-grid opacity-10" />
            </div>

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm px-5 py-2 mb-8">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
                </svg>
                <span className="text-sm font-bold text-white tracking-wide">
                  Free Mortgage Readiness Assessment
                </span>
                <span className="text-white/50">·</span>
                <span className="text-sm font-semibold text-white/80">No Obligation</span>
              </div>

              {/* Headline */}
              <h2 className="heading-display text-4xl sm:text-5xl text-white mb-5 text-balance">
                Are You Mortgage Ready?
              </h2>
              <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
                Complete our free 5-minute assessment to help a licensed mortgage professional
                understand your situation and explain your possible next steps.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
                {TRUST_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/85">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/assessment"
                id="cta-section-assessment"
                className="group inline-flex items-center gap-3 bg-white text-primary font-bold rounded-2xl px-10 py-4 text-lg shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Free Assessment
                <span className="flex h-8 w-8 items-center justify-center rounded-full gradient-brand shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <p className="mt-6 text-xs text-white/50">
                General educational information only. Not financial, legal, tax, or mortgage approval advice.
                Submitting this assessment is not a mortgage application.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
