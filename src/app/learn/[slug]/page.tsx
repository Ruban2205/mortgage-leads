import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LinkButton from "@/components/LinkButton";
import DisclaimerBox from "@/components/DisclaimerBox";

// Static learning content for module pages
const MODULES: Record<string, {
  title: string;
  subtitle: string;
  readTime: string;
  sections: { heading: string; content: string }[];
}> = {
  "mortgage-basics": {
    title: "Mortgage Basics",
    subtitle: "Everything you need to know before you apply",
    readTime: "8 min read",
    sections: [
      {
        heading: "What is a Mortgage?",
        content:
          "A mortgage is a loan used to purchase a home, where the property itself serves as collateral. In Canada, lenders assess your income, credit history, debt levels, and down payment before approving a mortgage.",
      },
      {
        heading: "Fixed vs. Variable Rates",
        content:
          "A fixed-rate mortgage locks your interest rate for the entire term, giving you payment predictability. A variable-rate mortgage fluctuates with the Bank of Canada's prime rate — it can save money when rates fall but adds uncertainty.",
      },
      {
        heading: "Amortization Period",
        content:
          "This is the total time to pay off your mortgage. In Canada, the maximum amortization is typically 25 years for insured mortgages (under 20% down). Longer periods mean lower monthly payments but more interest paid overall.",
      },
      {
        heading: "Mortgage Terms",
        content:
          "A mortgage term (typically 1–5 years in Canada) is the period your rate and conditions are locked in. At the end of each term, you renew, renegotiate, or pay off the balance.",
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const module = MODULES[slug];
  return {
    title: module ? module.title : "Learning Module",
    description: module
      ? `${module.subtitle} — MortgagePath AI educational resource.`
      : "Mortgage education resource from MortgagePath AI.",
  };
}

export default async function LearnPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const module = MODULES[slug];

  if (!module) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-3">Module Not Found</h1>
          <p className="text-slate-600 mb-6">
            This learning module doesn&apos;t exist yet, but more content is on the way!
          </p>
          <LinkButton href="/" className="gradient-brand border-0 hover:opacity-90">
            Back to Dashboard
          </LinkButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">Dashboard</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{module.title}</span>
        </nav>

        {/* Article header */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 mb-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Learning Module</span>
            <span>·</span>
            <span>{module.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            {module.title}
          </h1>
          <p className="text-lg text-slate-600 mb-6">{module.subtitle}</p>

          {/* Article sections */}
          <div className="space-y-6 divide-y divide-slate-100">
            {module.sections.map((section) => (
              <div key={section.heading} className="pt-6 first:pt-0">
                <h2 className="text-lg font-bold text-slate-900 mb-2">{section.heading}</h2>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 p-6 rounded-2xl gradient-hero border border-blue-100">
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Ready to check your readiness?
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Take our free 5-minute assessment and get personalized guidance from a
              licensed mortgage professional.
            </p>
            <LinkButton href="/assessment" className="gradient-brand border-0 hover:opacity-90 font-semibold">
              Start Free Assessment
            </LinkButton>
          </div>
        </div>

        <DisclaimerBox />
      </div>
    </div>
  );
}
