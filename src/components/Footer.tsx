import Link from "next/link";

const DISCLAIMER =
  "This website provides general educational information only. It does not provide financial, legal, tax, or mortgage approval advice. Mortgage eligibility depends on lender review, credit history, income verification, debt obligations, down payment, property details, and applicable regulations. Please speak with a licensed mortgage professional before making financial decisions.";

const footerLinks = [
  {
    heading: "Learn",
    items: [
      { label: "Dashboard", href: "/" },
      { label: "Assessment", href: "/assessment" },
      { label: "First-Time Buyers", href: "/coming-soon" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Credit Score Guide", href: "/coming-soon" },
      { label: "DTI Calculator", href: "/coming-soon" },
      { label: "Down Payment Planner", href: "/coming-soon" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Contact Us", href: "/coming-soon" },
      { label: "Privacy Policy", href: "/coming-soon" },
      { label: "Terms of Service", href: "/coming-soon" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand shadow-sm">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-bold text-white">MortgagePath <span className="text-slate-400">AI</span></span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Helping Canadians understand their mortgage readiness with simple, guided financial education.
            </p>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <svg className="h-3.5 w-3.5 text-[#0d9f6e]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No fees. No commitments.</span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 py-6">
          <div className="bg-slate-800/60 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-2">
              <svg className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-slate-400 leading-relaxed">{DISCLAIMER}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} MortgagePath AI. All rights reserved.</p>
            <p>For informational purposes only. Not financial advice.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
