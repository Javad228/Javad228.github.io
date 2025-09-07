import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javad's Portfolio",
  description: "Portfolio of Javad Baghirov - Passionate about Cloud Architecture and Machine Learning, specializing in NLP and Computer Vision",
  keywords: "Javad Baghirov, Full-Stack Developer, Software Engineer, Python, Django, React, Flutter, Java, AWS, PostgreSQL, MySQL",
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
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
