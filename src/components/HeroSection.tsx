"use client";

import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ── Animated counter hook ── */
function useAnimatedCounter(target: number, duration = 1600, startOnMount = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!startOnMount || started) return;
    setStarted(true);
    const start = performance.now();
    const frame = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    const timeout = setTimeout(() => requestAnimationFrame(frame), 800);
    return () => clearTimeout(timeout);
  }, [target, duration, startOnMount, started]);

  return count;
}

const STATS = [
  { value: 10000, suffix: "+", label: "Canadians educated" },
  { value: 6, suffix: "", label: "Comprehensive guides" },
  { value: 5, suffix: " min", label: "Quick assessment" },
];

const TRUST_ITEMS = [
  { icon: "🔒", label: "Private & Secure" },
  { icon: "🍁", label: "100% Canadian" },
  { icon: "🚫", label: "No Credit Check" },
  { icon: "🎓", label: "Free Education" },
];

/* ── Mortgage Dashboard Mockup (right column) ──────────────────────────── */
function MortgageDashboardMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
      {/* Floating background glow */}
      <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-teal-500/10 blur-2xl dark:from-blue-500/20 dark:via-indigo-500/15" />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative glass-premium dark:glass-dark-card rounded-3xl p-6 shadow-premium"
      >
        {/* Card header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Mortgage Readiness</p>
            <p className="text-base font-bold text-foreground mt-0.5">Your Profile Summary</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-brand shadow-sm">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        {/* Approval progress ring */}
        <div className="flex items-center gap-6 mb-6">
          <div className="relative flex-shrink-0">
            <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="10" className="text-muted/60" />
              <motion.circle
                cx="50" cy="50" r="40" fill="none"
                stroke="url(#progressGrad)" strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 75.36 }}
                transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0A4D9B" />
                  <stop offset="100%" stopColor="#2B7FFF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold text-foreground">70%</span>
              <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wide">Ready</span>
            </div>
          </div>
          <div className="flex-1 space-y-2.5">
            {[
              { label: "Credit Score", value: "Good", color: "from-teal-500 to-emerald-500", width: "75%" },
              { label: "Down Payment", value: "On Track", color: "from-blue-500 to-blue-600", width: "60%" },
              { label: "Income Ratio", value: "Eligible", color: "from-indigo-500 to-blue-500", width: "85%" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground font-medium">{item.label}</span>
                  <span className="text-foreground font-semibold">{item.value}</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: item.width }}
                    transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step checklist */}
        <div className="space-y-2 border-t border-border pt-4">
          {[
            { step: "Mortgage Basics", done: true },
            { step: "First-Time Buyer Guide", done: true },
            { step: "Complete Assessment", done: false, active: true },
          ].map((item) => (
            <div key={item.step} className={`flex items-center gap-2.5 rounded-lg px-3 py-2 ${item.active ? "bg-primary/5 border border-primary/15" : ""}`}>
              <div className={`flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0 ${item.done ? "gradient-brand" : item.active ? "border-2 border-primary/50 bg-background" : "border-2 border-muted-foreground/30"}`}>
                {item.done && (
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {item.active && <div className="h-2 w-2 rounded-full bg-primary" />}
              </div>
              <span className={`text-xs font-medium ${item.active ? "text-primary" : item.done ? "text-muted-foreground line-through" : "text-muted-foreground"}`}>
                {item.step}
              </span>
              {item.active && (
                <span className="ml-auto text-[10px] font-bold text-primary bg-primary/10 rounded-full px-2 py-0.5">Next</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating stat card 1 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="animate-float absolute -top-6 -right-4 glass-premium dark:glass-dark-card rounded-2xl px-4 py-3 shadow-card"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-500/15">
            <svg className="h-4 w-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">No Credit Check</p>
            <p className="text-[10px] text-muted-foreground">Safe to complete</p>
          </div>
        </div>
      </motion.div>

      {/* Floating stat card 2 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="animate-float-delay absolute -bottom-6 -left-4 glass-premium dark:glass-dark-card rounded-2xl px-4 py-3 shadow-card"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/15">
            <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">5 Minutes</p>
            <p className="text-[10px] text-muted-foreground">Average completion</p>
          </div>
        </div>
      </motion.div>

      {/* Maple leaf watermark */}
      <div className="absolute -bottom-2 right-4 opacity-5 pointer-events-none">
        <svg className="h-24 w-24 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
        </svg>
      </div>
    </div>
  );
}

/* ── Animated Stat Item ── */
function StatItem({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const count = useAnimatedCounter(value);
  return (
    <div className="flex items-center gap-2">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
        className="text-xl font-extrabold gradient-finance-text tabular-nums"
      >
        {value === 10000 ? count.toLocaleString() : count}{suffix}
      </motion.span>
      <span className="text-sm text-muted-foreground">{label}</span>
      {index < STATS.length - 1 && <span className="hidden sm:block h-4 w-px bg-border ml-2" />}
    </div>
  );
}

/* ── HeroSection ────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 400], [0, -80]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mesh gradient */}
        <div className="absolute inset-0 gradient-mesh dark:gradient-mesh-navy" />
        {/* Parallax animated blobs */}
        <motion.div
          style={{ y: blobY }}
          className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-400/8 dark:bg-blue-500/12 blur-3xl animate-float-slow"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 400], [0, 40]) }}
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal-400/8 dark:bg-teal-500/10 blur-3xl animate-float"
        />
        <div className="absolute top-1/2 left-1/3 h-[400px] w-[600px] rounded-full bg-indigo-300/5 dark:bg-indigo-500/8 blur-3xl" />
        {/* Rotating gradient ring for depth */}
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full border border-blue-200/20 dark:border-blue-500/10 animate-rotate-slow opacity-50" />
        {/* Dot grid */}
        <div className="absolute inset-0 section-dots opacity-40" />
        {/* Noise texture */}
        <div className="absolute inset-0 noise-texture opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* ── Left Column ── */}
          <div className="text-center lg:text-left">
            {/* Trust badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full bg-card/90 dark:bg-card/80 border border-primary/10 px-4 py-1.5 mb-7 shadow-sm backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D52B1E] opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D52B1E]" />
              </span>
              <svg className="h-3.5 w-3.5 text-[#D52B1E]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
              </svg>
              <span className="text-xs font-semibold text-foreground tracking-wide">
                Free Canadian Mortgage Education — No Obligation
              </span>
              <span className="hidden sm:flex h-4 w-px bg-border" />
              <span className="hidden sm:block text-xs font-medium text-teal-600 dark:text-teal-400">100% Free</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="heading-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 text-balance"
            >
              Your Canadian{" "}
              <span className="gradient-finance-text-animated">
                Mortgage Guide
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed"
            >
              Learn how mortgages work, understand your readiness, and take the
              next step with clear education built specifically for Canadians.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-10"
            >
              <Link
                href="/assessment"
                id="hero-start-assessment"
                className="group relative inline-flex items-center gap-2.5 gradient-brand btn-neomorph text-white font-semibold rounded-2xl px-8 py-4 text-base w-full sm:w-auto justify-center"
              >
                <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Start Free Assessment
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <LinkButton
                href="/mortgage-basics"
                variant="outline"
                size="lg"
                id="hero-explore-guides"
                className="border-2 border-border hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 px-8 py-4 text-base font-semibold rounded-2xl w-full sm:w-auto transition-smooth"
              >
                <svg className="mr-2 h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Explore Guides
              </LinkButton>
            </motion.div>

            {/* Stats row — animated counters */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8"
            >
              {STATS.map((stat, i) => (
                <StatItem key={stat.label} {...stat} index={i} />
              ))}
            </motion.div>

            {/* Trust signals */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5"
            >
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="trust-pill">
                  <span className="text-base leading-none">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Fine print */}
            <motion.p
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-7 text-xs text-muted-foreground/70 max-w-md mx-auto lg:mx-0"
            >
              General educational information only. Not financial, legal, tax, or mortgage approval advice.
              Speak with a licensed mortgage professional before making decisions.
            </motion.p>
          </div>

          {/* ── Right Column — Dashboard mockup ── */}
          <div className="hidden lg:block">
            <MortgageDashboardMockup />
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full text-muted/50 dark:text-card/50"
          viewBox="0 0 1440 64"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" />
        </svg>
      </div>
    </section>
  );
}
