import { TOTAL_STEPS, STEP_TITLES } from "@/types/assessment";

interface FormProgressProps {
  currentStep: number;
}

export default function FormProgress({ currentStep }: FormProgressProps) {
  const progressPercent = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;

  return (
    <div className="space-y-3">
      {/* Step label */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Step {currentStep} of {TOTAL_STEPS}
          </span>
          <p className="text-sm font-bold text-foreground mt-0.5">
            {STEP_TITLES[currentStep]}
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold text-primary">
            {Math.round(progressPercent)}% Complete
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full rounded-full gradient-brand transition-all duration-500 ease-out"
          style={{ width: `${Math.max(progressPercent, 8)}%` }}
        />
      </div>

      {/* Step dots */}
      <div className="flex items-center justify-between px-0.5">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => (
          <div key={step} className="flex flex-col items-center gap-1">
            <div
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                step < currentStep
                  ? "bg-primary scale-100"
                  : step === currentStep
                  ? "bg-primary scale-125 ring-2 ring-primary/30"
                  : "bg-muted-foreground/30"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
