import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transcode Network | Open-source tech for trans survival",
  description: "We're building digital infrastructure for mutual aid, privacy, and care — by and for trans people.",
  keywords: ["trans", "transgender", "open-source", "mutual aid", "privacy", "community"],
  authors: [{ name: "Transcode Network" }],
  openGraph: {
    title: "Transcode Network | Open-source tech for trans survival",
    description: "We're building digital infrastructure for mutual aid, privacy, and care — by and for trans people.",
    siteName: "Transcode Network",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
