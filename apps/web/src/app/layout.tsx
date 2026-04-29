import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Javascript Dojo | Master the Art of Code",
  description:
    "Join the most interactive code kata platform. Sharpen your Javascript skills with real-world challenges.",
  keywords: ["javascript", "coding", "kata", "learning", "dojo", "platform"],
  openGraph: {
    title: "Javascript Dojo",
    description: "Master the Art of Code",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
