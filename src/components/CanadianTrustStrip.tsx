const TRUST_SIGNALS = [
  {
    icon: (
      <svg className="h-3.5 w-3.5 text-[#D52B1E]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
      </svg>
    ),
    label: "Proudly Canadian Education",
    highlight: true,
  },
  {
    icon: (
      <svg className="h-3 w-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    label: "Educational & Informational Only",
  },
  {
    icon: (
      <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    label: "Private & Secure",
  },
  {
    icon: (
      <svg className="h-3 w-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: "Speak with a Licensed Professional",
  },
  {
    icon: (
      <svg className="h-3 w-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Not financial, legal, or mortgage approval advice",
  },
];

export default function CanadianTrustStrip() {
  // Build the marquee content twice for seamless loop
  const marqueeContent = (
    <>
      {TRUST_SIGNALS.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5 flex-shrink-0 px-3">
          {i > 0 && (
            <span className="h-1 w-1 rounded-full bg-slate-700 mr-2 flex-shrink-0" aria-hidden="true" />
          )}
          {item.icon}
          <span className={`font-medium whitespace-nowrap ${item.highlight ? "text-white" : "text-slate-400"}`}>
            {item.label}
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div
      className="w-full bg-[#040D1A] border-b border-slate-800/60 overflow-hidden"
      role="banner"
      aria-label="Site notice"
    >
      {/* Top accent line — finance blue */}
      <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, #0A4D9B, #2B7FFF, #0EA76A, #2B7FFF, #0A4D9B)" }} />

      {/* Desktop: static centered layout */}
      <div className="hidden sm:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs">
          {TRUST_SIGNALS.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="h-1 w-1 rounded-full bg-slate-600 mr-1" aria-hidden="true" />
              )}
              {item.icon}
              <span className={`font-medium ${item.highlight ? "text-white" : "text-slate-400"}`}>
                {item.label}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Mobile: scrolling marquee */}
      <div className="sm:hidden py-2.5 text-xs">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeContent}
          {/* Duplicate for seamless loop */}
          {marqueeContent}
        </div>
      </div>
    </div>
  );
}
