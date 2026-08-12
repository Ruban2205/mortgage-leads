import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — TrueNorth Mortgage Guide",
  description: "Important compliance and legal disclaimers for TrueNorth Mortgage Guide.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
          Important Disclaimer
        </h1>
        
        <div className="prose prose-slate max-w-none">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 text-amber-900">
            <p className="font-bold uppercase tracking-wider text-sm mb-2 text-amber-800">Please Read Carefully</p>
            <p className="mb-0">
              The information provided on <strong>TrueNorth Mortgage Guide</strong> (the "Website") is for general educational and informational purposes only. It is not intended to be, and should not be construed as, financial, legal, tax, or mortgage approval advice.
            </p>
          </div>

          <h2>No Guarantee of Approval</h2>
          <p>
            Completing the mortgage readiness assessment on this Website does not constitute a mortgage application. Submitting your information does not guarantee mortgage approval, pre-approval, or any specific interest rate. Mortgage eligibility is determined exclusively by lenders based on a comprehensive review of your verified income, credit history, debt obligations, down payment, property details, and applicable federal and provincial regulations.
          </p>

          <h2>Independent Licensed Professional</h2>
          <p>
            This Website serves as an educational resource and lead-generation platform. Any contact information submitted will be routed to the independent, licensed mortgage professional identified in the footer and contact page of this Website. This Website itself is not a lender, brokerage, or financial institution.
          </p>

          <h2>No Endorsements</h2>
          <p>
            TrueNorth Mortgage Guide is an independent educational platform. We do not claim any official partnership, approval, or endorsement by the Real Estate Council of Alberta (RECA), the Canada Mortgage and Housing Corporation (CMHC), or any government body or regulatory authority.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            While we make every effort to ensure the educational content on this Website is accurate and current, Canadian mortgage rules, interest rates, and government programs change frequently. We make no representations or warranties regarding the completeness, accuracy, or reliability of any information provided. You should always verify current regulations and requirements with a licensed professional.
          </p>

          <h2>Seek Professional Advice</h2>
          <p>
            A mortgage is one of the largest financial commitments you will make. We strongly recommend speaking with a licensed mortgage professional, real estate lawyer, and/or financial advisor to discuss your specific situation before making any financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
