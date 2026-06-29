"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LinkButton from "@/components/LinkButton";

const GUIDE_LINKS = [
  { href: "/mortgage-basics", label: "Mortgage Basics" },
  { href: "/first-time-buyers", label: "First-Time Home Buyers" },
  { href: "/credit-debt", label: "Credit & Debt Readiness" },
  { href: "/down-payment", label: "Down Payment Planning" },
  { href: "/affordability", label: "Affordability & Pre-Approval" },
  { href: "/glossary", label: "Mortgage Glossary" },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

function MapleLeafIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  const isGuideActive = GUIDE_LINKS.some((g) => pathname === g.href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-brand shadow-sm group-hover:shadow-md transition-shadow">
              <MapleLeafIcon className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-extrabold tracking-tight gradient-brand-text">
                TrueNorth
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                Mortgage Guide
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/")
                  ? "bg-primary/10 text-primary"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Home
            </Link>

            {/* Guides dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGuidesOpen(true)}
              onMouseLeave={() => setGuidesOpen(false)}
            >
              <button
                id="guides-dropdown-toggle"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isGuideActive
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
                aria-expanded={guidesOpen}
                aria-haspopup="true"
              >
                Mortgage Guides
                <svg
                  className={`h-3.5 w-3.5 transition-transform ${guidesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {guidesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-border bg-white shadow-xl shadow-slate-200/60 py-2 z-50">
                  {GUIDE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                        isActive(link.href)
                          ? "bg-primary/8 text-primary font-semibold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/glossary"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/glossary")
                  ? "bg-primary/10 text-primary"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Glossary
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "bg-primary/10 text-primary"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <LinkButton
              href="/assessment"
              size="sm"
              id="header-start-assessment"
              className="hidden lg:flex gradient-brand border-0 hover:opacity-90 shadow-sm font-semibold"
            >
              Start Assessment
            </LinkButton>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border/50 py-3 pb-5 space-y-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive("/") ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              Home
            </Link>

            {/* Mobile Guides Section */}
            <div className="px-3 pt-2 pb-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Mortgage Guides
              </p>
              <div className="space-y-0.5 pl-1">
                {GUIDE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive("/contact") ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              Contact
            </Link>

            <div className="pt-3 px-3">
              <LinkButton
                href="/assessment"
                size="sm"
                id="mobile-start-assessment"
                onClick={() => setMenuOpen(false)}
                className="w-full gradient-brand border-0 hover:opacity-90 font-semibold justify-center"
              >
                Start Free Assessment
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
