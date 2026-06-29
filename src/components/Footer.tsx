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

function MapleLeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column — spans 2 on large */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-brand shadow-sm">
                <MapleLeafIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-extrabold tracking-tight text-white">TrueNorth</span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                  Mortgage Guide
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Helping Canadians understand mortgages with clear, trustworthy educational content.
              Proudly Canadian mortgage education.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <MapleLeafIcon className="h-3.5 w-3.5 text-[#D52B1E]" />
              <span>Proudly Canadian Mortgage Education</span>
            </div>
          </div>

          {/* Link groups */}
          {footerGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
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

        <div className="border-t border-slate-800 py-8">

          {/* Disclaimer */}
          <div className="bg-slate-800/40 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-2.5">
              <svg className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-slate-400 leading-relaxed">{DISCLAIMER}</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} TrueNorth Mortgage Guide. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Use</Link>
              <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
