import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 sm:py-28 lg:py-36">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-indigo-50/40 blur-3xl" />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 section-dots opacity-40" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-blue-200/70 px-4 py-1.5 mb-8 shadow-sm backdrop-blur-sm">
          <svg
            className="h-3.5 w-3.5 text-[#D52B1E]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
          </svg>
          <span className="text-xs font-semibold text-slate-700 tracking-wide">
            Free Canadian Mortgage Education — No Obligation
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight text-balance">
          Your Canadian Guide to{" "}
          <span className="gradient-brand-text">Understanding Mortgages</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Learn the basics, understand your readiness, and take the next step
          with clear mortgage education built for Canadians.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton
            href="/assessment"
            size="lg"
            id="hero-start-assessment"
            className="gradient-brand border-0 hover:opacity-90 shadow-lg hover:shadow-xl transition-all px-8 py-6 text-base font-semibold rounded-xl w-full sm:w-auto"
          >
            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Start Mortgage Assessment
          </LinkButton>

          <LinkButton
            href="/mortgage-basics"
            variant="outline"
            size="lg"
            id="hero-explore-guides"
            className="border-2 border-slate-200 hover:border-primary/40 hover:bg-primary/5 px-8 py-6 text-base font-semibold rounded-xl w-full sm:w-auto"
          >
            <svg className="mr-2 h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Explore Mortgage Guides
          </LinkButton>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
          {[
            { icon: "🔒", label: "Secure & Private" },
            { icon: "⏱️", label: "Takes About 5 Minutes" },
            { icon: "🚫", label: "No Credit Check" },
            { icon: "🍁", label: "Canadian-Focused Guidance" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Compliance notice */}
        <p className="mt-8 text-xs text-slate-400 max-w-xl mx-auto">
          General educational information only. Not financial, legal, tax, or mortgage approval advice.
          Speak with a licensed mortgage professional before making decisions.
        </p>
      </div>
    </section>
  );
}
