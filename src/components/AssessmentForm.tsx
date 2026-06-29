"use client";

import { useState } from "react";
import FormProgress from "./FormProgress";
import StepNavigation from "./StepNavigation";
import SuccessMessage from "./SuccessMessage";
import {
  AssessmentFormData,
  PROVINCES,
} from "@/types/assessment";

// ─── Initial State ───────────────────────────────────────────────────────────
const initialFormData: AssessmentFormData = {
  personalInfo: { fullName: "", email: "", phone: "", city: "", province: "" },
  homeBuyingGoal: { firstTimeBuyer: "", buyingTimeline: "", priceRange: "", propertyType: "" },
  incomeEmployment: { employmentStatus: "", annualIncome: "", employmentLength: "", hasAdditionalIncome: "" },
  creditDebt: { creditScore: "", monthlyDebt: "", hasCreditIssues: "" },
  downPayment: { downPaymentAmount: "", downPaymentSource: "", needsDownPaymentHelp: "" },
  contactPreference: { preferredContact: "", bestTime: "", consentGiven: false },
};

// ─── Shared UI primitives ────────────────────────────────────────────────────
function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-slate-700 mb-1.5">
      {children}
    </label>
  );
}

function InputField({
  id, type = "text", value, onChange, placeholder, required,
}: {
  id: string; type?: string; value: string; onChange: (v: string) => void;
  placeholder?: string; required?: boolean;
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
    />
  );
}

function SelectField({
  id, value, onChange, children,
}: {
  id: string; value: string; onChange: (v: string) => void; children: React.ReactNode;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all appearance-none cursor-pointer"
    >
      {children}
    </select>
  );
}

function OptionGroup({
  label, options, value, onChange, id,
}: {
  label: string; options: { value: string; label: string }[];
  value: string; onChange: (v: string) => void; id: string;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            id={`${id}-${opt.value}`}
            onClick={() => onChange(opt.value)}
            className={`flex items-center justify-start gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium text-left transition-all ${
              value === opt.value
                ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20"
                : "border-input bg-background text-foreground hover:border-primary/40 hover:bg-muted/50"
            }`}
          >
            <span className={`h-4 w-4 rounded-full border-2 flex-shrink-0 transition-all ${
              value === opt.value
                ? "border-primary bg-primary"
                : "border-slate-300"
            }`} />
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Step Components ─────────────────────────────────────────────────────────

function Step1({ data, onChange }: {
  data: AssessmentFormData["personalInfo"];
  onChange: (d: AssessmentFormData["personalInfo"]) => void;
}) {
  const set = (k: keyof typeof data) => (v: string) => onChange({ ...data, [k]: v });
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <InputField id="fullName" value={data.fullName} onChange={set("fullName")} placeholder="Jane Smith" required />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <InputField id="email" type="email" value={data.email} onChange={set("email")} placeholder="jane@example.com" required />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <InputField id="phone" type="tel" value={data.phone} onChange={set("phone")} placeholder="(604) 555-0123" />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <InputField id="city" value={data.city} onChange={set("city")} placeholder="Vancouver" />
        </div>
      </div>
      <div>
        <Label htmlFor="province">Province / Territory</Label>
        <SelectField id="province" value={data.province} onChange={set("province")}>
          <option value="">Select province…</option>
          {PROVINCES.map((p) => (<option key={p} value={p}>{p}</option>))}
        </SelectField>
      </div>
    </div>
  );
}

function Step2({ data, onChange }: {
  data: AssessmentFormData["homeBuyingGoal"];
  onChange: (d: AssessmentFormData["homeBuyingGoal"]) => void;
}) {
  const set = (k: keyof typeof data) => (v: string) => onChange({ ...data, [k]: v as never });
  return (
    <div className="space-y-5">
      <OptionGroup
        id="firstTimeBuyer"
        label="Are you a first-time home buyer?"
        value={data.firstTimeBuyer}
        onChange={set("firstTimeBuyer")}
        options={[{ value: "yes", label: "Yes, first time" }, { value: "no", label: "No, I've owned before" }]}
      />
      <div>
        <Label htmlFor="buyingTimeline">When are you planning to buy?</Label>
        <SelectField id="buyingTimeline" value={data.buyingTimeline} onChange={set("buyingTimeline")}>
          <option value="">Select timeline…</option>
          <option value="immediately">As soon as possible</option>
          <option value="3months">Within 3 months</option>
          <option value="6months">Within 6 months</option>
          <option value="1year">Within 1 year</option>
          <option value="1yearplus">More than 1 year away</option>
        </SelectField>
      </div>
      <div>
        <Label htmlFor="priceRange">Desired property price range</Label>
        <SelectField id="priceRange" value={data.priceRange} onChange={set("priceRange")}>
          <option value="">Select price range…</option>
          <option value="under300k">Under $300,000</option>
          <option value="300k-500k">$300,000 – $500,000</option>
          <option value="500k-750k">$500,000 – $750,000</option>
          <option value="750k-1m">$750,000 – $1,000,000</option>
          <option value="over1m">Over $1,000,000</option>
        </SelectField>
      </div>
      <div>
        <Label htmlFor="propertyType">Property type</Label>
        <SelectField id="propertyType" value={data.propertyType} onChange={set("propertyType")}>
          <option value="">Select property type…</option>
          <option value="detached">Detached House</option>
          <option value="semi-detached">Semi-Detached</option>
          <option value="townhouse">Townhouse</option>
          <option value="condo">Condominium</option>
          <option value="other">Other</option>
        </SelectField>
      </div>
    </div>
  );
}

function Step3({ data, onChange }: {
  data: AssessmentFormData["incomeEmployment"];
  onChange: (d: AssessmentFormData["incomeEmployment"]) => void;
}) {
  const set = (k: keyof typeof data) => (v: string) => onChange({ ...data, [k]: v as never });
  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="employmentStatus">Employment status</Label>
        <SelectField id="employmentStatus" value={data.employmentStatus} onChange={set("employmentStatus")}>
          <option value="">Select status…</option>
          <option value="fulltime">Full-Time Employed</option>
          <option value="parttime">Part-Time Employed</option>
          <option value="selfemployed">Self-Employed</option>
          <option value="contract">Contract / Freelance</option>
          <option value="retired">Retired</option>
          <option value="unemployed">Currently Unemployed</option>
        </SelectField>
      </div>
      <div>
        <Label htmlFor="annualIncome">Annual household income range</Label>
        <SelectField id="annualIncome" value={data.annualIncome} onChange={set("annualIncome")}>
          <option value="">Select income range…</option>
          <option value="under40k">Under $40,000</option>
          <option value="40k-60k">$40,000 – $60,000</option>
          <option value="60k-80k">$60,000 – $80,000</option>
          <option value="80k-100k">$80,000 – $100,000</option>
          <option value="100k-150k">$100,000 – $150,000</option>
          <option value="over150k">Over $150,000</option>
        </SelectField>
      </div>
      <div>
        <Label htmlFor="employmentLength">How long have you been employed?</Label>
        <SelectField id="employmentLength" value={data.employmentLength} onChange={set("employmentLength")}>
          <option value="">Select duration…</option>
          <option value="under1year">Less than 1 year</option>
          <option value="1-2years">1 – 2 years</option>
          <option value="2-5years">2 – 5 years</option>
          <option value="over5years">More than 5 years</option>
        </SelectField>
      </div>
      <OptionGroup
        id="hasAdditionalIncome"
        label="Do you have additional income sources? (rental, investments, etc.)"
        value={data.hasAdditionalIncome}
        onChange={set("hasAdditionalIncome")}
        options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
      />
    </div>
  );
}

function Step4({ data, onChange }: {
  data: AssessmentFormData["creditDebt"];
  onChange: (d: AssessmentFormData["creditDebt"]) => void;
}) {
  const set = (k: keyof typeof data) => (v: string) => onChange({ ...data, [k]: v as never });

  const creditOptions = [
    { value: "below600", label: "Below 600 (Needs Work)" },
    { value: "600-649", label: "600 – 649 (Fair)" },
    { value: "650-699", label: "650 – 699 (Good)" },
    { value: "700-749", label: "700 – 749 (Very Good)" },
    { value: "750-799", label: "750 – 799 (Excellent)" },
    { value: "800plus", label: "800+ (Exceptional)" },
  ];

  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="creditScore">Estimated credit score range</Label>
        <p className="text-xs text-muted-foreground mb-2">If unsure, pick your best estimate — it helps us give better guidance.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {creditOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              id={`creditScore-${opt.value}`}
              onClick={() => set("creditScore")(opt.value)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium text-left transition-all ${
                data.creditScore === opt.value
                  ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20"
                  : "border-input bg-background text-foreground hover:border-primary/40 hover:bg-muted/50"
              }`}
            >
              <span className={`h-4 w-4 rounded-full border-2 flex-shrink-0 ${
                data.creditScore === opt.value ? "border-primary bg-primary" : "border-slate-300"
              }`} />
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <Label htmlFor="monthlyDebt">Monthly debt payments (car, student loans, etc.)</Label>
        <SelectField id="monthlyDebt" value={data.monthlyDebt} onChange={set("monthlyDebt")}>
          <option value="">Select monthly debt range…</option>
          <option value="none">No monthly debt payments</option>
          <option value="under500">Under $500/month</option>
          <option value="500-1000">$500 – $1,000/month</option>
          <option value="1000-2000">$1,000 – $2,000/month</option>
          <option value="over2000">Over $2,000/month</option>
        </SelectField>
      </div>
      <OptionGroup
        id="hasCreditIssues"
        label="Any missed payments, collections, bankruptcy, or consumer proposal history?"
        value={data.hasCreditIssues}
        onChange={set("hasCreditIssues")}
        options={[
          { value: "yes", label: "Yes, I have some history" },
          { value: "no", label: "No, my credit history is clean" },
        ]}
      />
    </div>
  );
}

function Step5({ data, onChange }: {
  data: AssessmentFormData["downPayment"];
  onChange: (d: AssessmentFormData["downPayment"]) => void;
}) {
  const set = (k: keyof typeof data) => (v: string) => onChange({ ...data, [k]: v as never });
  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="downPaymentAmount">Estimated down payment amount</Label>
        <p className="text-xs text-muted-foreground mb-2">In Canada, 5% is the minimum for properties under $500K.</p>
        <SelectField id="downPaymentAmount" value={data.downPaymentAmount} onChange={set("downPaymentAmount")}>
          <option value="">Select down payment…</option>
          <option value="under5pct">Less than 5%</option>
          <option value="5pct">5% (minimum)</option>
          <option value="10pct">10%</option>
          <option value="15-19pct">15 – 19%</option>
          <option value="20pct+">20% or more</option>
        </SelectField>
      </div>
      <div>
        <Label htmlFor="downPaymentSource">Source of down payment</Label>
        <SelectField id="downPaymentSource" value={data.downPaymentSource} onChange={set("downPaymentSource")}>
          <option value="">Select source…</option>
          <option value="savings">Personal savings</option>
          <option value="gifted">Gift from family</option>
          <option value="rrsp">RRSP Home Buyer&apos;s Plan</option>
          <option value="investments">Investments / TFSA</option>
          <option value="mixed">Combination of sources</option>
        </SelectField>
      </div>
      <OptionGroup
        id="needsDownPaymentHelp"
        label="Would you like help understanding down payment requirements?"
        value={data.needsDownPaymentHelp}
        onChange={set("needsDownPaymentHelp")}
        options={[
          { value: "yes", label: "Yes, I'd like more info" },
          { value: "no", label: "No, I understand it well" },
        ]}
      />
    </div>
  );
}

function Step6({ data, onChange }: {
  data: AssessmentFormData["contactPreference"];
  onChange: (d: AssessmentFormData["contactPreference"]) => void;
}) {
  const set = (k: keyof typeof data) => (v: string) => onChange({ ...data, [k]: v as never });
  return (
    <div className="space-y-5">
      <OptionGroup
        id="preferredContact"
        label="Preferred contact method"
        value={data.preferredContact}
        onChange={set("preferredContact")}
        options={[
          { value: "phone", label: "📞 Phone Call" },
          { value: "email", label: "✉️ Email" },
          { value: "text", label: "💬 Text Message" },
        ]}
      />
      <OptionGroup
        id="bestTime"
        label="Best time to contact you"
        value={data.bestTime}
        onChange={set("bestTime")}
        options={[
          { value: "morning", label: "Morning (9am – 12pm)" },
          { value: "afternoon", label: "Afternoon (12pm – 5pm)" },
          { value: "evening", label: "Evening (5pm – 8pm)" },
        ]}
      />

      {/* Consent */}
      <div className="rounded-xl border border-border bg-muted/30 p-4">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="mt-0.5 flex-shrink-0">
            <input
              id="consentGiven"
              type="checkbox"
              checked={data.consentGiven}
              onChange={(e) => onChange({ ...data, consentGiven: e.target.checked })}
              className="sr-only peer"
            />
            <div
              onClick={() => onChange({ ...data, consentGiven: !data.consentGiven })}
              className={`h-5 w-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${
                data.consentGiven
                  ? "border-primary bg-primary"
                  : "border-slate-300 bg-white group-hover:border-primary/50"
              }`}
            >
              {data.consentGiven && (
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            I consent to being contacted by a licensed mortgage professional regarding my assessment results. I understand this is for informational purposes only and does not constitute a mortgage application or guarantee of approval.{" "}
            <span className="text-primary font-medium">*Required</span>
          </p>
        </label>
      </div>

      <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
        <div className="flex items-center gap-2 text-sm text-blue-700">
          <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Your information is kept private and secure. We do not sell your data.</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function AssessmentForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<AssessmentFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateSection = <K extends keyof AssessmentFormData>(
    section: K,
    data: AssessmentFormData[K]
  ) => setFormData((prev) => ({ ...prev, [section]: data }));

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep((s) => s + 1);
  };
  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };
  const handleSubmit = () => {
    if (!formData.contactPreference.consentGiven) {
      alert("Please provide your consent before submitting.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("📋 TrueNorth Mortgage Guide — Assessment Submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return <SuccessMessage />;
  }

  const stepDescriptions: Record<number, string> = {
    1: "Let's start with some basic information so we can personalize your assessment.",
    2: "Tell us about your home buying goals and what you're looking for.",
    3: "Understanding your income helps us assess your mortgage readiness.",
    4: "Your credit profile is a key factor in mortgage qualification.",
    5: "Your down payment amount affects your mortgage options significantly.",
    6: "Almost done! Let us know the best way to reach you.",
  };

  return (
    <div className="animate-in fade-in duration-300">
      <FormProgress currentStep={currentStep} />

      <div className="mt-6 mb-4">
        <p className="text-sm text-muted-foreground">{stepDescriptions[currentStep]}</p>
      </div>

      <div className="min-h-[340px]">
        {currentStep === 1 && (
          <Step1 data={formData.personalInfo} onChange={(d) => updateSection("personalInfo", d)} />
        )}
        {currentStep === 2 && (
          <Step2 data={formData.homeBuyingGoal} onChange={(d) => updateSection("homeBuyingGoal", d)} />
        )}
        {currentStep === 3 && (
          <Step3 data={formData.incomeEmployment} onChange={(d) => updateSection("incomeEmployment", d)} />
        )}
        {currentStep === 4 && (
          <Step4 data={formData.creditDebt} onChange={(d) => updateSection("creditDebt", d)} />
        )}
        {currentStep === 5 && (
          <Step5 data={formData.downPayment} onChange={(d) => updateSection("downPayment", d)} />
        )}
        {currentStep === 6 && (
          <Step6 data={formData.contactPreference} onChange={(d) => updateSection("contactPreference", d)} />
        )}
      </div>

      <StepNavigation
        currentStep={currentStep}
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
