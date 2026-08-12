import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LinkButton from "@/components/LinkButton";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This feature is under development. Check back soon for new mortgage education tools and resources from MortgagePath AI.",
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl gradient-brand shadow-lg">
            <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <span className="inline-block rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 text-xs font-semibold px-4 py-1.5 mb-5">
          Coming Soon
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          We&apos;re Building This For You
        </h1>
        <p className="text-slate-600 text-base leading-relaxed mb-8">
          This feature is currently under development. Our team is working hard
          to bring you more powerful mortgage education tools. Check back soon!
        </p>

        {/* Email notify placeholder */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 mb-8">
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Want to be notified when this launches?
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              id="notify-email"
              placeholder="your@email.com"
              className="flex-1 rounded-xl border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <Button className="gradient-brand border-0 hover:opacity-90 shrink-0">
              Notify Me
            </Button>
          </div>
          <p className="text-xs text-slate-400 mt-2">No spam. Unsubscribe anytime.</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <LinkButton href="/assessment" className="gradient-brand border-0 hover:opacity-90 font-semibold">
            Start Your Assessment
          </LinkButton>
          <LinkButton href="/" variant="outline">
            Return to Dashboard
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
