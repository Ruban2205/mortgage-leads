"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const PATHWAY_STEPS = [
  {
    step: 1,
    title: "Mortgage Basics",
    description: "Understand how Canadian mortgages work — amortization, interest, and the stress test.",
    href: "/mortgage-basics",
    readTime: "8 min",
    difficulty: "Beginner",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "from-blue-500 to-blue-700",
    diffColor: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  },
  {
    step: 2,
    title: "First-Time Home Buyers",
    description: "Explore FHSA, RRSP Home Buyers' Plan, government rebates, and what to expect.",
    href: "/first-time-buyers",
    readTime: "10 min",
    difficulty: "Beginner",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    diffColor: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400",
  },
  {
    step: 3,
    title: "Credit & Debt Readiness",
    description: "Learn what credit score lenders look for and how your debt ratios affect your options.",
    href: "/credit-debt",
    readTime: "7 min",
    difficulty: "Intermediate",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: "from-rose-500 to-pink-600",
    diffColor: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400",
  },
  {
    step: 4,
    title: "Down Payment Planning",
    description: "Understand minimum requirements, CMHC insurance, and how to use the RRSP HBP.",
    href: "/down-payment",
    readTime: "6 min",
    difficulty: "Beginner",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-teal-500 to-emerald-600",
    diffColor: "bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-400",
  },
  {
    step: 5,
    title: "Affordability & Pre-Approval",
    description: "Estimate how much you can afford and learn what pre-approval truly means.",
    href: "/affordability",
    readTime: "9 min",
    difficulty: "Intermediate",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 13h.01M13 13h.01M17 13h.01M17 17h.01M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-orange-500 to-amber-600",
    diffColor: "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400",
  },
  {
    step: 6,
    title: "Mortgage Assessment",
    description: "Complete your free assessment to help a licensed professional understand your situation.",
    href: "/assessment",
    readTime: "5 min",
    difficulty: "Quick",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-[#0A4D9B] to-[#2B7FFF]",
    diffColor: "bg-white/20 text-white",
    isCTA: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function LearningPathway() {
  return (
    <section className="py-20 sm:py-28 bg-muted/40 dark:bg-card/30 section-dots relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-100/30 dark:bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-teal-100/30 dark:bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-card border border-primary/15 dark:border-primary/20 px-4 py-1.5 mb-5 shadow-sm">
            <div className="h-4 w-4 rounded-full gradient-brand flex-shrink-0" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Start Here</span>
          </div>
          <h2 className="heading-display text-4xl sm:text-5xl text-foreground mb-5">
            Your Mortgage{" "}
            <span className="gradient-finance-text">Learning Pathway</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Follow these six steps to build your knowledge before speaking with a licensed mortgage professional.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PATHWAY_STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link
                  href={item.href}
                  id={`pathway-step-${item.step}`}
                  className={`group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300 ${
                    item.isCTA
                      ? "border-transparent shadow-finance hover:shadow-glow-blue"
                      : "bg-card dark:bg-card border-border hover:border-primary/20 shadow-card hover:shadow-card-hover"
                  }`}
                  style={item.isCTA ? { background: `linear-gradient(135deg, #0A4D9B 0%, #2B7FFF 100%)` } : undefined}
                >
                  {/* CTA shimmer overlay */}
                  {item.isCTA && (
                    <div className="absolute inset-0 animate-shimmer pointer-events-none" />
                  )}

                  <div className="relative p-6 flex flex-col flex-1">
                    {/* Step number badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-extrabold tabular-nums ${item.isCTA ? "text-white/40" : "text-muted-foreground/40"}`}>
                        {String(item.step).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Icon with hover animation */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ duration: 0.2 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl mb-4 bg-gradient-to-br ${item.isCTA ? "" : item.color} shadow-sm`}
                      style={item.isCTA ? { background: "rgba(255,255,255,0.2)" } : undefined}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Badges row */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest ${item.isCTA ? "text-white/60" : "text-muted-foreground"}`}>
                        Step {item.step}
                      </span>
                      <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 ${item.diffColor}`}>
                        {item.difficulty}
                      </span>
                      <span className={`ml-auto text-[10px] font-semibold flex items-center gap-1 ${item.isCTA ? "text-white/60" : "text-muted-foreground"}`}>
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold mb-2 leading-snug ${item.isCTA ? "text-white" : "text-foreground group-hover:text-primary"} transition-colors`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed flex-1 ${item.isCTA ? "text-white/80" : "text-muted-foreground"}`}>
                      {item.description}
                    </p>

                    {/* CTA link row */}
                    <div className={`mt-5 flex items-center gap-1.5 text-sm font-semibold ${item.isCTA ? "text-white" : "text-primary"}`}>
                      {item.isCTA ? "Begin Assessment" : "Read Guide"}
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom accent bar (non-CTA) */}
                  {!item.isCTA && (
                    <div
                      className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                    />
                  )}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
