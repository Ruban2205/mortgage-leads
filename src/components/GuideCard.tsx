"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <Link
        href={href}
        id={id}
        className="group relative flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
      >
        {/* Glass sheen on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(43,127,255,0.04) 0%, transparent 60%)",
          }}
        />

        {/* Top gradient accent bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${accentBg.replace("bg-", "from-").replace("-50", "-400")} to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

        <div className="p-6 flex flex-col flex-1">
          {/* Icon + Read time row */}
          <div className="flex items-start justify-between mb-5">
            <motion.div
              whileHover={{ scale: 1.12, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center justify-center rounded-2xl ${accentBg} transition-all duration-300`}
              style={{ width: "52px", height: "52px" }}
            >
              <span className={`${accentColor} flex`}>{icon}</span>
            </motion.div>
            <span className={`text-xs font-semibold ${accentColor} ${accentBg} rounded-full px-2.5 py-1`}>
              {readTime}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-foreground mb-2.5 leading-snug group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>

          {/* Footer row */}
          <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
            <div className={`flex items-center gap-1.5 text-sm font-semibold ${accentColor} group-hover:gap-2.5 transition-all duration-200`}>
              Read Guide
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className={`h-7 w-7 rounded-full ${accentBg} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0`}>
              <svg className={`h-3.5 w-3.5 ${accentColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
