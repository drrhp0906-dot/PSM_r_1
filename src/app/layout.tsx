import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AppProviders } from "@/components/psm/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PSM Study Hub — Community Medicine for MBBS 3rd Year",
  description:
    "Concise K Park-aligned PSM notes, 100+ MCQs and 2-mark question practice for Concept of Health & Disease and Environment. Track your progress.",
  keywords: [
    "PSM",
    "Community Medicine",
    "MBBS",
    "K Park",
    "MCQ",
    "Preventive and Social Medicine",
  ],
  authors: [{ name: "PSM Study Hub" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AppProviders>{children}</AppProviders>
        <Toaster />
      </body>
    </html>
  );
}
