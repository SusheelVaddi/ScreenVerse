import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScreenVerse — Explore Every Story",
  description:
    "A unified, cinematic entertainment discovery platform for movies, TV series, anime, animation, characters, creators, and universes.",
  keywords: [
    "ScreenVerse",
    "Cinematic Entertainment",
    "Movie Discovery",
    "TV Series",
    "Anime Watch Order",
    "Universe Timelines",
    "Characters",
    "Voice Actors",
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
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07080b] text-[#f5f3ef] selection:bg-amber-500 selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
