interface DisclaimerBoxProps {
  className?: string;
}

export default function DisclaimerBox({ className = "" }: DisclaimerBoxProps) {
  return (
    <div className={`rounded-xl border border-amber-200 bg-amber-50 p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <svg
            className="h-5 w-5 text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
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
            This website provides general educational information only. It does
            not provide financial, legal, tax, or mortgage approval advice.
            Mortgage eligibility depends on lender review, credit history,
            income verification, debt obligations, down payment, property
            details, and applicable regulations. Please speak with a licensed
            mortgage professional before making financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
