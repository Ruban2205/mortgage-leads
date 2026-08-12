"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import LinkButton from "@/components/LinkButton";
import ThemeToggle from "@/components/ThemeToggle";

const GUIDE_LINKS = [
  { href: "/mortgage-basics", label: "Mortgage Basics", icon: "📘" },
  { href: "/first-time-buyers", label: "First-Time Home Buyers", icon: "🏠" },
  { href: "/credit-debt", label: "Credit & Debt Readiness", icon: "📊" },
  { href: "/down-payment", label: "Down Payment Planning", icon: "💰" },
  { href: "/affordability", label: "Affordability & Pre-Approval", icon: "📋" },
  { href: "/glossary", label: "Mortgage Glossary", icon: "📖" },
];

function MapleLeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => pathname === href;
  const isGuideActive = GUIDE_LINKS.some((g) => pathname === g.href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-md"
          : "bg-background/90 backdrop-blur-xl border-b border-border/50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl gradient-brand shadow-sm group-hover:shadow-glow-blue transition-all duration-300">
              <MapleLeafIcon className="h-5 w-5 text-white" />
              {/* Subtle glow ring */}
              <div className="absolute inset-0 rounded-xl gradient-brand opacity-0 group-hover:opacity-30 blur-md transition-all duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-base font-extrabold tracking-tight gradient-brand-text"
                style={{ fontFamily: "var(--font-heading, var(--font-sans))" }}
              >
                TrueNorth
              </span>
              <span className="text-[9px] font-bold text-muted-foreground tracking-[0.12em] uppercase">
                Mortgage Guide
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            <Link
              href="/"
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive("/")
                  ? "bg-primary/8 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full gradient-brand" />
              )}
            </Link>

            {/* Guides dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGuidesOpen(true)}
              onMouseLeave={() => setGuidesOpen(false)}
            >
              <button
                id="guides-dropdown-toggle"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isGuideActive
                    ? "bg-primary/8 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                aria-expanded={guidesOpen}
                aria-haspopup="true"
              >
                Mortgage Guides
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${guidesOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {guidesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-border/60 bg-card/95 dark:bg-card/95 backdrop-blur-xl shadow-premium py-2 z-50">
                  {/* Dropdown header */}
                  <div className="px-4 pb-2 pt-1 border-b border-border mb-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Browse Guides</p>
                  </div>
                  {GUIDE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150 mx-1 rounded-xl ${
                        isActive(link.href)
                          ? "bg-primary/8 text-primary font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span className="text-base flex-shrink-0">{link.icon}</span>
                      {link.label}
                      {isActive(link.href) && (
                        <svg className="ml-auto h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/glossary"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive("/glossary")
                  ? "bg-primary/8 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Glossary
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive("/contact")
                  ? "bg-primary/8 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* ── CTA + Theme Toggle + Mobile toggle ── */}
          <div className="flex items-center gap-2.5">
            {/* Theme toggle */}
            <ThemeToggle />

            <Link
              href="/assessment"
              id="header-start-assessment"
              className="hidden lg:inline-flex items-center gap-2 gradient-brand btn-glow text-white text-sm font-semibold rounded-xl px-5 py-2.5 shadow-sm transition-all duration-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Start Assessment
            </Link>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border py-3 pb-5 space-y-0.5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive("/") ? "bg-primary/8 text-primary" : "text-foreground hover:bg-muted"
              }`}
            >
              Home
            </Link>

            {/* Mobile Guides Section */}
            <div className="px-4 pt-3 pb-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Mortgage Guides
              </p>
              <div className="space-y-0.5">
                {GUIDE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/8 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span className="text-base">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive("/contact") ? "bg-primary/8 text-primary" : "text-foreground hover:bg-muted"
              }`}
            >
              Contact
            </Link>

            <div className="pt-3 px-4">
              <Link
                href="/assessment"
                id="mobile-start-assessment"
                onClick={() => setMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 gradient-brand btn-glow text-white text-sm font-semibold rounded-xl px-5 py-3"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Start Free Assessment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
