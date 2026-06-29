import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function SuccessMessage() {
  return (
    <div className="text-center py-8 px-4 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Success icon */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="flex h-24 w-24 items-center justify-center rounded-full gradient-brand shadow-lg">
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
          {/* Ripple ring */}
          <div className="absolute inset-0 rounded-full gradient-brand opacity-20 scale-125 animate-ping" />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-3 max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Assessment Submitted!
        </h2>
        <p className="text-base text-slate-700 font-medium">
          Your assessment has been submitted.
        </p>
        <p className="text-sm text-slate-500 leading-relaxed">
          Your answers can help a licensed mortgage professional understand your situation
          and explain possible next steps. You will be contacted using your preferred method.
        </p>
      </div>

      {/* What happens next */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 text-left max-w-md mx-auto space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">What Happens Next</p>
        {[
          { icon: "📋", text: "Your responses may be reviewed by a licensed mortgage professional" },
          { icon: "📞", text: "You may be reached via your preferred contact method" },
          { icon: "📘", text: "Explore our guides while you wait to learn more about mortgages" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-lg leading-none mt-0.5">{item.icon}</span>
            <p className="text-sm text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Important compliance note */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-md mx-auto">
        <p className="text-xs text-amber-700 leading-relaxed">
          <strong>Please Note:</strong> Submitting this assessment is not a mortgage application and
          does not guarantee mortgage approval. Mortgage eligibility is determined by lender review.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <LinkButton href="/" className="gradient-brand border-0 hover:opacity-90 font-semibold">
          Return to Home
        </LinkButton>
        <LinkButton href="/mortgage-basics" variant="outline">
          Explore Mortgage Guides
        </LinkButton>
      </div>

      <p className="text-xs text-slate-400">
        No commitment required. We respect your privacy.
      </p>
    </div>
  );
}
