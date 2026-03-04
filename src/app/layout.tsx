import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Instrument_Sans, Syne } from "next/font/google";
import { LoadingScreen } from "@/components/ui/loading-screen";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Javad's Portfolio",
  description:
    "Portfolio of Javad Baghirov - Passionate about Cloud Architecture and Machine Learning, specializing in NLP and Computer Vision",
  keywords:
    "Javad Baghirov, Full-Stack Developer, Software Engineer, Python, Django, React, Flutter, Java, AWS, PostgreSQL, MySQL",
  authors: [{ name: "Javad Baghirov" }],
  creator: "Javad Baghirov",
  openGraph: {
    title: "Javad Baghirov - Full-Stack Developer",
    description: "Portfolio showcasing innovative web and mobile applications",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${syne.variable}`}>
        <LoadingScreen />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
