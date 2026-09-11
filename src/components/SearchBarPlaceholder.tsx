"use client";

import { useState } from "react";

export default function SearchBarPlaceholder() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Movies",
    "TV Series",
    "Anime",
    "Animation",
    "People",
    "Franchises",
  ];

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-4">
      {/* Search Input Box Container */}
      <div className="relative w-full group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>

        <div className="relative flex items-center bg-[#0d1322] border border-gray-700/80 rounded-2xl px-5 py-4 shadow-2xl backdrop-blur-xl">
          {/* Search Icon */}
          <svg
            className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0 group-hover:text-blue-400 transition-colors"
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

          {/* Input field (disabled/placeholder only at Step 1) */}
          <input
            type="text"
            readOnly
            placeholder="Search movies, series, anime, actors, voice actors, characters, franchises..."
            className="w-full bg-transparent text-gray-200 placeholder-gray-400 text-sm sm:text-base focus:outline-none cursor-default"
          />

          {/* Step 4 Indicator Badge */}
          <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-800 text-gray-400 border border-gray-700 ml-2 whitespace-nowrap">
            Placeholder
          </span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 pt-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeCategory === category
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
