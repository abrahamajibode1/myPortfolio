import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/web/navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Abraham Ajibode — Frontend Developer",
  description:
    "Self-taught frontend developer from Lagos, Nigeria. Building clean, fast, and beautiful web experiences with React & Next.js.",
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "Lagos",
    "Nigeria",
    "junior developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar />
        <main className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
