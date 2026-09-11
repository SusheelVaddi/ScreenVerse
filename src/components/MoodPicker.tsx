"use client";

import { useState } from "react";
import { MOCK_HERO_SLIDES, MOCK_MOVIES, MOCK_ANIME, MOCK_SERIES, MediaItem } from "@/data/mockData";
import { PosterCard } from "./ContentCard";

export default function MoodPicker() {
  const [selectedMood, setSelectedMood] = useState("🧠 Mind-bending");

  const moods = [
    "🧠 Mind-bending",
    "🔥 Adrenaline",
    "🌌 Epic",
    "🕵️ Mystery",
    "✨ Feel-good",
    "❤️ Emotional",
    "😂 Fun",
    "😨 Terrifying",
  ];

  const allItems: MediaItem[] = [
    ...MOCK_HERO_SLIDES,
    ...MOCK_MOVIES,
    ...MOCK_ANIME,
    ...MOCK_SERIES,
  ];

  // Unique by ID
  const uniqueItems = Array.from(
    new Map(allItems.map((item) => [item.id, item])).values()
  );

  const filteredItems = uniqueItems.filter((item) =>
    item.moods.includes(selectedMood)
  );

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0c12] border-y border-gray-800/80 rounded-3xl my-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#f5f3ef]">
                Discover By Mood
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Emotional Vibe
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Select how you want to feel right now to unlock curated stories.
            </p>
          </div>
          <span className="text-xs text-gray-400 font-mono">
            {filteredItems.length} Stories Matched
          </span>
        </div>

        {/* Mood Selection Pills */}
        <div className="flex flex-wrap gap-2.5">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedMood === mood
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-[#121522] text-gray-300 hover:text-amber-300 hover:bg-[#181d2e] border border-gray-800"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        {/* Grid of Matched Titles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pt-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <PosterCard key={item.id} item={item} />)
          ) : (
            <div className="col-span-full py-8 text-center text-gray-400 text-sm">
              Explore more titles in this vibe coming soon!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
