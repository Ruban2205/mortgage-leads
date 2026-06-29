import LinkButton from "@/components/LinkButton";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-brand p-10 sm:p-14 text-center shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          </div>

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-4 py-1.5 mb-6">
              <svg
                className="h-3.5 w-3.5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L9.5 7.5H4L8.5 11L6.5 17L12 13.5L17.5 17L15.5 11L20 7.5H14.5L12 2Z" />
              </svg>
              <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">
                Free Mortgage Readiness Assessment
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-balance">
              Are You Mortgage Ready?
            </h2>
            <p className="text-white/85 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Complete our free 5-minute assessment to help a licensed mortgage professional
              understand your situation and explain your possible next steps.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-8 text-sm text-white/80">
              {[
                "No credit check",
                "Takes about 5 minutes",
                "No commitment required",
                "Canadian-focused guidance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <LinkButton
              href="/assessment"
              size="lg"
              id="cta-section-assessment"
              className="bg-white text-primary hover:bg-white/90 border-0 shadow-lg font-semibold px-10 py-6 text-base rounded-xl"
            >
              Start Free Assessment
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </LinkButton>

            <p className="mt-5 text-xs text-white/60">
              General educational information only. Not financial, legal, tax, or mortgage approval advice.
              Submitting this assessment is not a mortgage application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
