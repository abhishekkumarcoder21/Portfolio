import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Kumar — Systems Engineer",
  description:
    "Software engineer building distributed systems, fault-tolerant infrastructure, and AI-powered developer tools. IIIT Guwahati '26.",
  keywords: [
    "Abhishek Kumar",
    "Software Engineer",
    "Distributed Systems",
    "Backend Engineer",
    "Go",
    "Python",
    "Systems Engineering",
    "IIIT Guwahati",
  ],
  authors: [{ name: "Abhishek Kumar" }],
  creator: "Abhishek Kumar",
  openGraph: {
    title: "Abhishek Kumar — Systems Engineer",
    description:
      "Building distributed systems, fault-tolerant infrastructure, and AI-powered developer tools.",
    url: "https://abhishek.zybytee.in",
    siteName: "Abhishek Kumar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kumar — Systems Engineer",
    description:
      "Building distributed systems, fault-tolerant infrastructure, and AI-powered developer tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-ink text-text-secondary antialiased">
        {children}
      </body>
    </html>
  );
}
