import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CanadianTrustStrip from "@/components/CanadianTrustStrip";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TrueNorth Mortgage Guide — Canadian Mortgage Education",
    template: "%s | TrueNorth Mortgage Guide",
  },
  description:
    "TrueNorth Mortgage Guide helps Canadians understand mortgages, improve their readiness, and connect with licensed mortgage professionals through clear, trustworthy educational content.",
  keywords: [
    "Canadian mortgage education",
    "mortgage readiness",
    "first time home buyer Canada",
    "mortgage assessment Canada",
    "how mortgages work Canada",
    "down payment Canada",
    "credit score mortgage Canada",
    "home buying guide Canada",
    "mortgage glossary Canada",
    "Canadian mortgage guide",
  ],
  openGraph: {
    title: "TrueNorth Mortgage Guide — Proudly Canadian Mortgage Education",
    description:
      "Learn the basics, understand your readiness, and take the next step with clear mortgage education built for Canadians.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <Header />
        <CanadianTrustStrip />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
