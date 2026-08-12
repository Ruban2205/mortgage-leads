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
  {
    icon: (
      <svg className="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    label: "Private & Secure",
    color: "bg-blue-500/15",
  },
  {
    icon: (
      <svg className="h-3.5 w-3.5 text-[#D52B1E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
      </svg>
    ),
    label: "Proudly Canadian",
    color: "bg-red-500/15",
  },
  {
    icon: (
      <svg className="h-3.5 w-3.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: "Free Education",
    color: "bg-teal-500/15",
  },
  {
    icon: (
      <svg className="h-3.5 w-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    label: "No Credit Check",
    color: "bg-amber-500/15",
  },
  {
    icon: (
      <svg className="h-3.5 w-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "5-Minute Assessment",
    color: "bg-indigo-500/15",
  },
];

// Social icon placeholders
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
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
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #040D1A 0%, #0A1E3C 100%)" }}>
      {/* Top gradient border — Canadian red to blue */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, #D52B1E, #0A4D9B, #2B7FFF, #0A4D9B, #D52B1E)" }} />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-600/6 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-teal-600/6 blur-3xl" />
        <div className="absolute inset-0 section-grid opacity-4" />
        <div className="absolute inset-0 noise-texture opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Trust badges strip ── */}
        <div className="py-6 border-b border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <div className={`flex h-6 w-6 items-center justify-center rounded-lg ${badge.color}`}>
                  {badge.icon}
                </div>
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

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  {s.icon}
                </Link>
              ))}
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

        {/* ── Newsletter section ── */}
        <div className="border-t border-white/5 py-8 mb-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Stay Informed</h4>
              <p className="text-xs text-slate-500">Get Canadian mortgage tips and education delivered to your inbox.</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-56 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 transition-all"
                aria-label="Email address for newsletter"
              />
              <button
                type="button"
                className="flex-shrink-0 gradient-brand btn-glow text-white text-sm font-semibold rounded-xl px-4 py-2.5"
              >
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5 py-8">
          {/* Disclaimer */}
          <div className="rounded-2xl bg-white/3 border border-white/5 p-5 mb-6">
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
