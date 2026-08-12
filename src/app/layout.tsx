import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CanadianTrustStrip from "@/components/CanadianTrustStrip";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en-CA" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground">
        <Providers>
          <Header />
          <CanadianTrustStrip />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
