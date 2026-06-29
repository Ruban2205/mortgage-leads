interface DisclaimerBoxProps {
  className?: string;
  variant?: "inline" | "page";
}

export default function DisclaimerBox({
  className = "",
  variant = "inline",
}: DisclaimerBoxProps) {
  if (variant === "page") {
    return (
      <div className={`rounded-2xl border border-amber-200 bg-amber-50 p-6 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-0.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-amber-900 mb-2 uppercase tracking-wide">
              Important Disclaimer
            </p>
            <div className="space-y-2 text-sm text-amber-800 leading-relaxed">
              <p>
                This website provides <strong>general educational information only</strong>. It does
                not provide financial, legal, tax, or mortgage approval advice.
              </p>
              <p>
                Mortgage eligibility depends on lender review, verified income, credit history,
                debt obligations, down payment, property details, and applicable regulations.
              </p>
              <p>
                <strong>
                  Please speak with a licensed mortgage professional before making any financial
                  decisions.
                </strong>{" "}
                This content is not a substitute for professional mortgage advice.
              </p>
              <p>
                TrueNorth Mortgage Guide does not guarantee mortgage approval, claim official
                partnership or endorsement with any government body or regulatory authority, or
                guarantee interest rates of any kind.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl border border-amber-200 bg-amber-50 p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-amber-800 mb-1 uppercase tracking-wide">
            Important Disclaimer
          </p>
          <p className="text-xs text-amber-700 leading-relaxed">
            This website provides general educational information only. It does not provide
            financial, legal, tax, or mortgage approval advice. Mortgage eligibility depends on
            lender review, credit history, income verification, debt obligations, down payment,
            property details, and applicable regulations.{" "}
            <strong>
              Please speak with a licensed mortgage professional before making financial decisions.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
