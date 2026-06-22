// Step 1: Personal Information
export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  province: string;
}

// Step 2: Home Buying Goal
export type YesNo = "yes" | "no" | "";
export type PropertyType = "detached" | "semi-detached" | "townhouse" | "condo" | "other" | "";
export type BuyingTimeline = "immediately" | "3months" | "6months" | "1year" | "1yearplus" | "";
export type PriceRange =
  | "under300k"
  | "300k-500k"
  | "500k-750k"
  | "750k-1m"
  | "over1m"
  | "";

export interface HomeBuyingGoal {
  firstTimeBuyer: YesNo;
  buyingTimeline: BuyingTimeline;
  priceRange: PriceRange;
  propertyType: PropertyType;
}

// Step 3: Income & Employment
export type EmploymentStatus =
  | "fulltime"
  | "parttime"
  | "selfemployed"
  | "contract"
  | "retired"
  | "unemployed"
  | "";

export type IncomeRange =
  | "under40k"
  | "40k-60k"
  | "60k-80k"
  | "80k-100k"
  | "100k-150k"
  | "over150k"
  | "";

export type EmploymentLength =
  | "under1year"
  | "1-2years"
  | "2-5years"
  | "over5years"
  | "";

export interface IncomeEmployment {
  employmentStatus: EmploymentStatus;
  annualIncome: IncomeRange;
  employmentLength: EmploymentLength;
  hasAdditionalIncome: YesNo;
}

// Step 4: Credit & Debt
export type CreditScoreRange =
  | "below600"
  | "600-649"
  | "650-699"
  | "700-749"
  | "750-799"
  | "800plus"
  | "";

export type MonthlyDebtRange =
  | "none"
  | "under500"
  | "500-1000"
  | "1000-2000"
  | "over2000"
  | "";

export interface CreditDebt {
  creditScore: CreditScoreRange;
  monthlyDebt: MonthlyDebtRange;
  hasCreditIssues: YesNo;
}

// Step 5: Down Payment
export type DownPaymentAmount =
  | "under5pct"
  | "5pct"
  | "10pct"
  | "15-19pct"
  | "20pct+"
  | "";

export type DownPaymentSource =
  | "savings"
  | "gifted"
  | "rrsp"
  | "investments"
  | "mixed"
  | "";

export interface DownPayment {
  downPaymentAmount: DownPaymentAmount;
  downPaymentSource: DownPaymentSource;
  needsDownPaymentHelp: YesNo;
}

// Step 6: Contact Preference
export type ContactMethod = "phone" | "email" | "text" | "";
export type ContactTime = "morning" | "afternoon" | "evening" | "";

export interface ContactPreference {
  preferredContact: ContactMethod;
  bestTime: ContactTime;
  consentGiven: boolean;
}

// Full assessment form state
export interface AssessmentFormData {
  personalInfo: PersonalInfo;
  homeBuyingGoal: HomeBuyingGoal;
  incomeEmployment: IncomeEmployment;
  creditDebt: CreditDebt;
  downPayment: DownPayment;
  contactPreference: ContactPreference;
}

export const TOTAL_STEPS = 6;

export const STEP_TITLES: Record<number, string> = {
  1: "Personal Information",
  2: "Home Buying Goal",
  3: "Income & Employment",
  4: "Credit & Debt",
  5: "Down Payment",
  6: "Contact Preference",
};

export const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];
