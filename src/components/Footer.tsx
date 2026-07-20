import Link from "next/link";

const DISCLAIMER = `This website provides general educational information only and does not constitute financial, legal, tax, or mortgage approval advice. Mortgage eligibility depends on lender review, verified income, credit history, debt obligations, down payment, property details, and applicable federal and provincial regulations. Speak with a licensed mortgage professional before making any financial decisions.`;

const footerGroups = [
  {
    heading: "Mortgage Guides",
    items: [
      { label: "Mortgage Basics", href: "/mortgage-basics" },
      { label: "First-Time Home Buyers", href: "/first-time-buyers" },
      { label: "Credit & Debt Readiness", href: "/credit-debt" },
      { label: "Down Payment Planning", href: "/down-payment" },
      { label: "Affordability & Pre-Approval", href: "/affordability" },
      { label: "Mortgage Glossary", href: "/glossary" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Mortgage Assessment", href: "/assessment" },
      { label: "Contact a Professional", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

const TRUST_BADGES = [
  { icon: "🔒", label: "Private & Secure" },
  { icon: "🍁", label: "Proudly Canadian" },
  { icon: "🎓", label: "Free Education" },
  { icon: "🚫", label: "No Credit Check" },
  { icon: "⏱️", label: "5-Minute Assessment" },
];

function MapleLeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)" }}>
      {/* Top gradient border */}
      <div className="h-px w-full gradient-brand opacity-60" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-teal-600/8 blur-3xl" />
        <div className="absolute inset-0 section-grid opacity-5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Trust badges strip ── */}
        <div className="py-6 border-b border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span className="text-base">{badge.icon}</span>
                <span className="text-xs font-semibold text-slate-400">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main footer grid ── */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand shadow-sm group-hover:shadow-glow-blue transition-all duration-300">
                <MapleLeafIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-tight text-white" style={{ fontFamily: "var(--font-heading, var(--font-sans))" }}>
                  TrueNorth
                </span>
                <span className="text-[9px] font-bold text-slate-500 tracking-[0.12em] uppercase">
                  Mortgage Guide
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Helping Canadians understand mortgages with clear, trustworthy educational content.
              Proudly Canadian mortgage education.
            </p>

            {/* Canadian badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <MapleLeafIcon className="h-3.5 w-3.5 text-[#D52B1E]" />
              <span className="text-xs font-semibold text-slate-400">Proudly Canadian Mortgage Education</span>
            </div>

            {/* Quick assessment CTA */}
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2.5 gradient-brand btn-glow text-white text-sm font-semibold rounded-xl px-5 py-2.5 shadow-sm"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Start Free Assessment
            </Link>
          </div>

          {/* Link groups */}
          {footerGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500 mb-5">
                {group.heading}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      <span className="h-px w-3 bg-slate-600 group-hover:w-4 group-hover:bg-primary transition-all duration-200" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 py-8">
          {/* Disclaimer */}
          <div className="rounded-2xl bg-white/4 border border-white/6 p-5 mb-6">
            <div className="flex items-start gap-3">
              <svg className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-slate-500 leading-relaxed">{DISCLAIMER}</p>
            </div>
          </div>

          {/* Copyright + links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <p>© {new Date().getFullYear()} TrueNorth Mortgage Guide. All rights reserved.</p>
            <div className="flex items-center gap-1">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Use", href: "/terms" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link, i) => (
                <span key={link.label} className="flex items-center gap-1">
                  {i > 0 && <span className="text-slate-700">·</span>}
                  <Link href={link.href} className="hover:text-slate-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
