import Link from "next/link";
import { Button } from "@/components/ui/button";
import ComingSoonBadge from "./ComingSoonBadge";
import LinkButton from "@/components/LinkButton";

export interface LearningCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  isActive: boolean;
  accentColor: string;
}

export default function LearningCard({
  id,
  icon,
  title,
  description,
  ctaLabel,
  href,
  isActive,
  accentColor,
}: LearningCardProps) {
  return (
    <div
      className={`relative rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-300 ${
        isActive
          ? "bg-white border-primary/20 shadow-md card-hover"
          : "bg-slate-50/60 border-slate-200/60 opacity-80"
      }`}
    >
      {/* Coming Soon badge */}
      {!isActive && (
        <div className="absolute top-4 right-4">
          <ComingSoonBadge />
        </div>
      )}

      {/* Icon */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
          isActive ? accentColor : "bg-slate-100"
        }`}
      >
        <span className={isActive ? "text-white" : "text-slate-400"}>
          {icon}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        <h3
          className={`text-lg font-bold ${
            isActive ? "text-slate-900" : "text-slate-500"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            isActive ? "text-slate-600" : "text-slate-400"
          }`}
        >
          {description}
        </p>
      </div>

      {/* CTA */}
      {isActive ? (
        <LinkButton
          href={href}
          id={id}
          className="gradient-brand border-0 hover:opacity-90 font-semibold mt-2"
        >
          {ctaLabel}
        </LinkButton>
      ) : (
        <Button
          disabled
          id={id}
          variant="outline"
          className="mt-2 text-slate-400 border-slate-200 cursor-not-allowed"
        >
          <svg className="mr-2 h-4 w-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}
