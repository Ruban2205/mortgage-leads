import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <p className="text-lg text-slate-700 font-medium">
          Your assessment has been submitted.
        </p>
        <p className="text-sm text-slate-500 leading-relaxed">
          Based on your answers, a mortgage professional can review your
          situation and help you understand your next steps. You will be
          contacted using your preferred method.
        </p>
      </div>

      {/* What happens next */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 text-left max-w-md mx-auto space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">What Happens Next</p>
        {[
          { icon: "📋", text: "Your responses are reviewed by a licensed professional" },
          { icon: "📞", text: "We'll reach out via your preferred contact method" },
          { icon: "🏡", text: "Get personalized guidance for your mortgage journey" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-lg leading-none mt-0.5">{item.icon}</span>
            <p className="text-sm text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <Button asChild className="gradient-brand border-0 hover:opacity-90 font-semibold">
          <Link href="/">Return to Dashboard</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/coming-soon">Explore More Resources</Link>
        </Button>
      </div>

      <p className="text-xs text-slate-400">
        No commitment required. We respect your privacy.
      </p>
    </div>
  );
}
