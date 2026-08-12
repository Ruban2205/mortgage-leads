import { TOTAL_STEPS, STEP_TITLES } from "@/types/assessment";

interface FormProgressProps {
  currentStep: number;
}

export default function FormProgress({ currentStep }: FormProgressProps) {
  const progressPercent = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;

  return (
    <div className="space-y-4">
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
          <span className="text-xs font-bold text-primary">
            {Math.round(progressPercent)}% Complete
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-2.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full rounded-full gradient-brand transition-all duration-700 ease-out"
          style={{ width: `${Math.max(progressPercent, 6)}%` }}
        />
        {/* Shimmer overlay on bar */}
        <div
          className="absolute left-0 top-0 h-full rounded-full animate-shimmer"
          style={{ width: `${Math.max(progressPercent, 6)}%` }}
        />
      </div>

      {/* Segmented step pills */}
      <div className="flex items-center justify-between gap-1.5">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => {
          const isDone = step < currentStep;
          const isCurrent = step === currentStep;
          return (
            <div key={step} className="flex flex-col items-center gap-1 flex-1">
              <div
                className={`h-1.5 w-full rounded-full transition-all duration-500 ${
                  isDone
                    ? "gradient-brand"
                    : isCurrent
                    ? "bg-primary/40"
                    : "bg-muted-foreground/20"
                }`}
              />
              <span
                className={`text-[9px] font-bold tabular-nums transition-colors duration-300 ${
                  isCurrent ? "text-primary" : isDone ? "text-primary/60" : "text-muted-foreground/40"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
