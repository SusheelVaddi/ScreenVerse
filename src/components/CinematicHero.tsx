"use client";

import { useState } from "react";
import { MOCK_HERO_SLIDES } from "@/data/mockData";

export default function CinematicHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slide = MOCK_HERO_SLIDES[currentIndex];

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] rounded-3xl overflow-hidden border border-gray-800/80 my-4 shadow-2xl bg-[#090b10]">
      {/* Backdrop Image with Parallax / Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.backdrop}
          alt={slide.title}
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-all duration-1000 ease-out"
        />
        {/* Layered Cinema Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080b] via-[#07080b]/80 to-transparent"></div>
        <div className="absolute inset-0 cinema-vignette pointer-events-none"></div>
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 lg:py-24 flex flex-col justify-end min-h-[580px] lg:min-h-[640px]">
        <div className="max-w-3xl space-y-5">
          {/* Category Tag & Rating */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-black shadow-md shadow-amber-500/20">
              Spotlight Story
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80 text-gray-300 border border-gray-700">
              {slide.type.toUpperCase()}
            </span>
            <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-black/60 px-2.5 py-1 rounded-md border border-amber-500/30">
              ★ {slide.rating} / 10
            </span>
            <span className="text-xs text-gray-300 font-medium">
              {slide.year} • {slide.duration || `${slide.seasons} Seasons`}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#f5f3ef] font-serif tracking-tight drop-shadow-lg leading-none">
            {slide.title}
          </h1>

          {/* Original Japanese Title if available */}
          {slide.originalTitle && (
            <p className="text-sm font-mono text-amber-400/90 -mt-2">
              Original: {slide.originalTitle}
            </p>
          )}

          {/* Synopsis */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 max-w-2xl font-light">
            {slide.synopsis}
          </p>

          {/* Cast & Crew Highlights */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 border-t border-gray-800/80 pt-3">
            {slide.director && (
              <div>
                <span className="text-gray-400 font-medium">Director: </span>
                <span className="text-gray-200">{slide.director}</span>
              </div>
            )}
            <div>
              <span className="text-gray-400 font-medium">Key Roles: </span>
              <span className="text-amber-300">{slide.characters.join(", ")}</span>
            </div>
            {slide.franchise && (
              <div>
                <span className="text-gray-400 font-medium">Universe: </span>
                <span className="text-gray-200 font-semibold">{slide.franchise}</span>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-xl shadow-amber-500/20 hover:scale-105">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Preview
            </button>

            <button className="flex items-center gap-2 bg-gray-900/90 hover:bg-gray-800 text-gray-200 font-semibold px-5 py-3 rounded-xl text-sm border border-gray-700/80 hover:border-amber-500/40 transition-all">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore Universe Details
            </button>
          </div>
        </div>

        {/* Carousel Slide Switcher */}
        <div className="absolute bottom-6 right-6 lg:right-10 flex items-center gap-2 z-20">
          {MOCK_HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-amber-400 shadow-md shadow-amber-400/50"
                  : "w-2.5 bg-gray-700 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
