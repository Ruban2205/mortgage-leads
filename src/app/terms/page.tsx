import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — TrueNorth Mortgage Guide",
  description: "Terms of use for TrueNorth Mortgage Guide.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
          Terms of Use
        </h1>
        
        <div className="prose prose-slate max-w-none">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-CA', { month: 'long', year: 'numeric' })}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using TrueNorth Mortgage Guide (the "Website"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Website.
          </p>

          <h2>2. Educational Purposes Only</h2>
          <p>
            The content on this Website is provided for general educational and informational purposes only. It does not constitute financial, legal, tax, or mortgage approval advice. You should always consult with a licensed professional regarding your specific situation before making any financial decisions.
          </p>

          <h2>3. No Guarantee of Approval</h2>
          <p>
            Completing the mortgage readiness assessment does not constitute a mortgage application and does not guarantee mortgage approval. Mortgage eligibility is subject to lender review, verified income, credit history, property details, and applicable regulations.
          </p>

          <h2>4. Accuracy of Information</h2>
          <p>
            While we strive to keep the educational information on this Website accurate and up-to-date, mortgage rules and regulations in Canada change frequently. We make no representations or warranties of any kind regarding the completeness, accuracy, or reliability of the information provided.
          </p>

          <h2>5. User Information</h2>
          <p>
            Any information you submit through the assessment tool must be accurate to the best of your knowledge. We handle this information in accordance with our Privacy Policy.
          </p>

          <h2>6. Independent Professional</h2>
          <p>
            This Website serves as an educational tool and lead-generation platform for the independent licensed mortgage professional identified in the Website footer and contact page. This Website is not a lender or a financial institution.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Under no circumstances shall TrueNorth Mortgage Guide, its creators, or the associated licensed mortgage professional be liable for any direct, indirect, incidental, or consequential damages arising out of your use of, or inability to use, this Website or the information contained herein.
          </p>
        </div>
      </div>
    </div>
  );
}
