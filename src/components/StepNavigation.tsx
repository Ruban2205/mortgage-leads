import { Button } from "@/components/ui/button";
import { TOTAL_STEPS } from "@/types/assessment";

interface StepNavigationProps {
  currentStep: number;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export default function StepNavigation({
  currentStep,
  onBack,
  onNext,
  onSubmit,
  isSubmitting = false,
}: StepNavigationProps) {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === TOTAL_STEPS;

  return (
    <div className="flex items-center justify-between pt-2 mt-6 border-t border-border/50">
      {/* Back button */}
      <Button
        type="button"
        variant="ghost"
        onClick={onBack}
        disabled={isFirstStep}
        id={`step-back-${currentStep}`}
        className={`gap-2 ${isFirstStep ? "invisible" : ""}`}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </Button>

      {/* Next / Submit button */}
      {isLastStep ? (
        <Button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          id="assessment-submit"
          className="gradient-brand border-0 hover:opacity-90 font-semibold gap-2 px-8"
        >
          {isSubmitting ? (
            <>
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </>
          ) : (
            <>
              Submit Assessment
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </>
          )}
        </Button>
      ) : (
        <Button
          type="button"
          onClick={onNext}
          id={`step-next-${currentStep}`}
          className="gradient-brand border-0 hover:opacity-90 font-semibold gap-2 px-8"
        >
          Continue
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      )}
    </div>
  );
}
