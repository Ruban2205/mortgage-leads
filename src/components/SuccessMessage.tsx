import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function SuccessMessage() {
  return (
    <div className="text-center py-8 px-4 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Success icon with layered rings */}
      <div className="flex justify-center">
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full gradient-brand opacity-15 scale-150 blur-xl animate-pulse" />
          {/* Mid ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-125 animate-ping-soft" />
          {/* Inner ring */}
          <div className="absolute inset-0 rounded-full border border-primary/30 scale-110" />
          {/* Icon container */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full gradient-brand shadow-glow-blue">
            <svg
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-3 max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
          Assessment Submitted!
        </h2>
        <p className="text-base text-foreground font-medium">
          Your assessment has been submitted.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Your answers can help a licensed mortgage professional understand your situation
          and explain possible next steps. You will be contacted using your preferred method.
        </p>
      </div>

      {/* What happens next — glass card */}
      <div className="glass-premium rounded-2xl border border-border p-5 text-left max-w-md mx-auto space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What Happens Next</p>
        {[
          { icon: "📋", text: "Your responses may be reviewed by a licensed mortgage professional" },
          { icon: "📞", text: "You may be reached via your preferred contact method" },
          { icon: "📘", text: "Explore our guides while you wait to learn more about mortgages" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-lg leading-none mt-0.5">{item.icon}</span>
            <p className="text-sm text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Important compliance note */}
      <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl p-4 max-w-md mx-auto">
        <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
          <strong>Please Note:</strong> Submitting this assessment is not a mortgage application and
          does not guarantee mortgage approval. Mortgage eligibility is determined by lender review.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <LinkButton href="/" className="gradient-brand border-0 hover:opacity-90 font-semibold shadow-glow-blue">
          Return to Home
        </LinkButton>
        <LinkButton href="/mortgage-basics" variant="outline">
          Explore Mortgage Guides
        </LinkButton>
      </div>

      <p className="text-xs text-muted-foreground/60">
        No commitment required. We respect your privacy.
      </p>
    </div>
  );
}
