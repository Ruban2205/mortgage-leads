export default function CanadianTrustStrip() {
  return (
    <div
      className="w-full bg-slate-900 text-white py-2 overflow-hidden"
      role="banner"
      aria-label="Site notice"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-slate-300">
          {/* Maple leaf + brand */}
          <span className="flex items-center gap-1.5 font-semibold text-white">
            <svg
              className="h-3.5 w-3.5 text-[#D52B1E]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
            </svg>
            Proudly Canadian Mortgage Education
          </span>

          <span className="hidden sm:block text-slate-600" aria-hidden="true">·</span>

          <span className="hidden sm:flex items-center gap-1">
            <svg className="h-3 w-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Educational &amp; Informational Only
          </span>

          <span className="hidden sm:block text-slate-600" aria-hidden="true">·</span>

          <span className="hidden md:flex items-center gap-1">
            <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Speak with a Licensed Mortgage Professional
          </span>

          <span className="hidden md:block text-slate-600" aria-hidden="true">·</span>

          <span className="hidden md:flex items-center gap-1 text-slate-400">
            Not financial, legal, or mortgage approval advice
          </span>
        </div>
      </div>
    </div>
  );
}
