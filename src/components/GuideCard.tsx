import Link from "next/link";

export interface GuideCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  readTime?: string;
  accentColor: string;
  accentBg: string;
}

export default function GuideCard({
  id,
  icon,
  title,
  description,
  href,
  readTime = "5 min read",
  accentColor,
  accentBg,
}: GuideCardProps) {
  return (
    <Link
      href={href}
      id={id}
      className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 guide-card-hover"
    >
      {/* Icon */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${accentBg} transition-transform group-hover:scale-110`}
      >
        <span className={accentColor}>{icon}</span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed flex-1">{description}</p>

      {/* Footer row */}
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">{readTime}</span>
        <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
          Read Guide
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl ${accentBg} opacity-0 group-hover:opacity-100 transition-opacity`}
      />
    </Link>
  );
}
