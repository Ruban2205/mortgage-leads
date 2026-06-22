import Link from "next/link";
import { Button } from "@/components/ui/button";
import LinkButton from "@/components/LinkButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 sm:py-28 lg:py-36">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-50/40 blur-3xl" />
      </div>

      {/* Trust badge */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-blue-200/60 px-4 py-1.5 mb-8 shadow-sm backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
            Free Mortgage Readiness Tool — No Obligation
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Understand Your{" "}
          <span className="gradient-brand-text">Mortgage Readiness</span>
          <br className="hidden sm:block" /> Before You Apply
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Learn the basics, check your readiness, and take the next step with
          simple, guided mortgage support — designed for Canadians.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton
            href="/assessment"
            size="lg"
            id="hero-start-assessment"
            className="gradient-brand border-0 hover:opacity-90 shadow-lg hover:shadow-xl transition-all px-8 py-6 text-base font-semibold rounded-xl"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Start Free Assessment
          </LinkButton>
          <LinkButton
            href="#learning-dashboard"
            variant="outline"
            size="lg"
            id="hero-explore-dashboard"
            className="border-2 border-slate-200 hover:border-primary/40 hover:bg-primary/5 px-8 py-6 text-base font-semibold rounded-xl"
          >
            Explore Learning Dashboard
          </LinkButton>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
          {[
            { icon: "🔒", label: "Private & Secure" },
            { icon: "⚡", label: "Takes 5 Minutes" },
            { icon: "🍁", label: "Built for Canadians" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
