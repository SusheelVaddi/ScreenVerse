"use client";

import { useState } from "react";
import Link from "next/link";
import UniversalSearchModal from "./UniversalSearchModal";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isKidsMode, setIsKidsMode] = useState(false);

  const navLinks = [
    { name: "Discover", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "Series", href: "/series" },
    { name: "Anime", href: "/anime" },
    { name: "Animation", href: "/animation" },
    { name: "Universes", href: "/universes" },
    { name: "People", href: "/people" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07080b]/85 border-b border-gray-800/80 transition-all">
        {/* Kids Mode Announcement Banner if active */}
        {isKidsMode && (
          <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-black text-xs font-bold px-4 py-1.5 text-center flex items-center justify-center gap-2">
            <span>✨ Kids Mode Active — Family Friendly & Visual Discovery</span>
            <button
              onClick={() => setIsKidsMode(false)}
              className="underline text-xs font-black ml-2 hover:opacity-80"
            >
              Exit
            </button>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
              <svg
                className="w-5 h-5 text-black font-extrabold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#f5f3ef] font-serif group-hover:text-amber-400 transition-colors">
                ScreenVerse
              </span>
              <span className="text-[10px] tracking-wider text-amber-500/90 font-mono uppercase">
                Cinema Experience
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg hover:text-amber-300 hover:bg-gray-800/60 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Trigger Button & Kids Mode Toggle */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2.5 bg-[#121520] hover:bg-[#1a1f2e] border border-gray-800 hover:border-amber-500/40 text-gray-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shadow-inner group"
            >
              <svg
                className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="hidden sm:inline">Search stories, universe, cast...</span>
              <span className="sm:hidden">Search</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-gray-800 text-gray-400 rounded border border-gray-700">
                ⌘K
              </kbd>
            </button>

            {/* Kids Mode Toggle Pill */}
            <button
              onClick={() => setIsKidsMode(!isKidsMode)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                isKidsMode
                  ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/30"
                  : "bg-gray-900/90 text-gray-400 border-gray-800 hover:text-amber-300 hover:border-amber-500/30"
              }`}
            >
              {isKidsMode ? "✨ Kids On" : "🎈 Kids Mode"}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0c12] border-b border-gray-800 px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-gray-800 hover:text-amber-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Universal Natural Language Search Modal */}
      <UniversalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
