"use client";

import { useState, useEffect } from "react";
import { NATURAL_LANGUAGE_SEARCH_SUGGESTIONS, MOCK_HERO_SLIDES, MOCK_MOVIES, MOCK_ANIME } from "@/data/mockData";

interface UniversalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UniversalSearchModal({
  isOpen,
  onClose,
}: UniversalSearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal
          const btn = document.querySelector('button[aria-label="Search"]');
          if (btn) (btn as HTMLElement).click();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const allItems = [...MOCK_HERO_SLIDES, ...MOCK_MOVIES, ...MOCK_ANIME];
  const filteredItems = query
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.genres.some((g) => g.toLowerCase().includes(query.toLowerCase())) ||
          item.cast.some((c) => c.toLowerCase().includes(query.toLowerCase()))
      )
    : allItems.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="relative w-full max-w-3xl bg-[#0d1017] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col">
        {/* Input Bar Header */}
        <div className="flex items-center px-5 py-4 border-b border-gray-800 bg-[#121622]/90">
          <svg
            className="w-6 h-6 text-amber-400 mr-3 flex-shrink-0"
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
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a movie, series, anime, actor, character, watch order..."
            className="w-full bg-transparent text-white placeholder-gray-400 text-base focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="ml-3 px-2 py-1 text-xs text-gray-400 hover:text-white bg-gray-800/80 rounded border border-gray-700"
          >
            ESC
          </button>
        </div>

        {/* Natural Language Prompt Suggestions */}
        <div className="p-4 bg-[#0a0c12] border-b border-gray-800/60">
          <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider font-mono">
            💡 Try Natural Language Queries
          </p>
          <div className="flex flex-wrap gap-2">
            {NATURAL_LANGUAGE_SEARCH_SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setQuery(suggestion)}
                className="text-xs bg-[#161a26] hover:bg-amber-500/20 hover:text-amber-300 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-800 transition-all text-left"
              >
                "{suggestion}"
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Preview Container */}
        <div className="max-h-[380px] overflow-y-auto p-4 space-y-3">
          <div className="flex justify-between items-center text-xs text-gray-400 mb-1 px-1">
            <span>{query ? `Results for "${query}"` : "Featured Discovery Preview"}</span>
            <span className="text-[11px] text-amber-400 font-mono">UI Preview (Step 4 integration)</span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-sm">
              No matching titles found for "{query}". Try one of the suggested prompts above!
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-3 rounded-xl bg-[#121520] hover:bg-[#181c2b] border border-gray-800/80 hover:border-amber-500/40 transition-all group cursor-pointer"
              >
                <div className="w-12 h-16 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0 relative">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-400">{item.year}</span>
                    <span className="text-xs text-amber-400 font-semibold">★ {item.rating}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 truncate">
                    {item.genres.join(" • ")} {item.director ? `| Dir: ${item.director}` : ""}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            ))
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-2.5 bg-[#080a0e] border-t border-gray-800 text-[11px] text-gray-400 flex items-center justify-between">
          <span>ScreenVerse Universal Entertainment Discovery</span>
          <span className="font-mono text-amber-500/80">Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
