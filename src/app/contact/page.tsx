import type { Metadata } from "next";
import ContactProfessionalCard from "@/components/ContactProfessionalCard";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Contact a Mortgage Professional — TrueNorth",
  description:
    "Connect with a licensed Canadian mortgage professional to discuss your mortgage readiness, pre-approval options, and home-buying goals.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Connect With a Professional
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to take the next step? Speak with a licensed mortgage professional to get personalized guidance for your Canadian mortgage journey.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4">How We Can Help</h2>
              <ul className="space-y-4">
                {[
                  "Review your mortgage readiness assessment",
                  "Explain the pre-approval process and requirements",
                  "Discuss strategies to improve your credit or down payment",
                  "Compare mortgage options and rates across different lenders",
                  "Answer questions about First-Time Buyer programs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <svg className="h-5 w-5 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>Fastest way to get started:</strong> Complete the free assessment first. It takes 5 minutes and gives the professional the baseline information they need to provide you with the most relevant guidance during your call.
              </p>
            </div>
          </div>

          {/* Right: Contact Card */}
          <div className="sticky top-24">
            <ContactProfessionalCard />
          </div>

        </div>

        {/* Disclaimer */}
        <DisclaimerBox variant="page" />

      </div>
    </div>
  );
}
