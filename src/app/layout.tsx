import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MortgagePath AI — Understand Your Mortgage Readiness",
    template: "%s | MortgagePath AI",
  },
  description:
    "MortgagePath AI helps Canadians understand mortgage readiness, learn financial basics, and connect with licensed mortgage professionals through a simple guided assessment.",
  keywords: [
    "mortgage readiness",
    "first time home buyer Canada",
    "mortgage assessment",
    "mortgage education",
    "Canadian mortgage",
    "home buying guide",
  ],
  openGraph: {
    title: "MortgagePath AI — Understand Your Mortgage Readiness",
    description:
      "Learn the basics, check your readiness, and take the next step with simple, guided mortgage support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
