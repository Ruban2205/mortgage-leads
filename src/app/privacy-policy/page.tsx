import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — TrueNorth Mortgage Guide",
  description: "Privacy policy for TrueNorth Mortgage Guide.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate max-w-none">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-CA', { month: 'long', year: 'numeric' })}</p>
          
          <p>
            At TrueNorth Mortgage Guide, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our mortgage readiness assessment tool.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you voluntarily provide to us when you complete the mortgage readiness assessment, including:
          </p>
          <ul>
            <li>Personal identifiers (name, email address, phone number, city, province)</li>
            <li>Financial information (estimated income, down payment, debt levels, credit score range)</li>
            <li>Home buying goals (property type, timeline, purchase price range)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            The information you provide is used strictly for the following purposes:
          </p>
          <ul>
            <li>To help a licensed mortgage professional understand your financial situation.</li>
            <li>To contact you (via your preferred method) to discuss your assessment results and mortgage options.</li>
            <li>To improve our educational content and website experience.</li>
          </ul>

          <h2>3. Data Sharing and Disclosure</h2>
          <p>
            <strong>We do not sell your personal data.</strong> Your information is only shared with the licensed mortgage professional explicitly identified on this website (in the footer and contact page) so they can assist you. We do not share your information with third-party marketers.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. Your Consent</h2>
          <p>
            By submitting the mortgage assessment form, you explicitly consent to being contacted by the licensed mortgage professional associated with this website regarding your results.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to request the deletion of your data, please contact the licensed professional listed in the footer of this website.
          </p>
        </div>
      </div>
    </div>
  );
}
