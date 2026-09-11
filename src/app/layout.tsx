import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScreenVerse — Explore Every Story",
  description:
    "Unified entertainment discovery and exploration platform for movies, TV series, anime, cartoons, animation, characters, people, and franchises.",
  keywords: [
    "ScreenVerse",
    "Entertainment Discovery",
    "Movies",
    "TV Series",
    "Anime",
    "Cartoons",
    "Franchises",
    "Watch Order",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070a11] text-gray-100 selection:bg-blue-500 selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
