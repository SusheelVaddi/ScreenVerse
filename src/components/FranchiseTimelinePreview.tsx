"use client";

import { useState } from "react";
import { MOCK_FRANCHISES } from "@/data/mockData";

export default function FranchiseTimelinePreview() {
  const [selectedFranchiseId, setSelectedFranchiseId] = useState(MOCK_FRANCHISES[0].id);
  const [orderType, setOrderType] = useState<"chronological" | "release">("chronological");

  const franchise = MOCK_FRANCHISES.find((f) => f.id === selectedFranchiseId) || MOCK_FRANCHISES[0];
  const orderList = orderType === "chronological" ? franchise.chronologicalOrder : franchise.releaseOrder;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0c12] border border-gray-800/80 rounded-3xl my-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#f5f3ef]">
                Enter a Universe & Franchise Explorer
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Signature Feature
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Navigate interconnected stories, release order vs chronological watch guides, and character maps.
            </p>
          </div>

          {/* Franchise Select Buttons */}
          <div className="flex items-center gap-2">
            {MOCK_FRANCHISES.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFranchiseId(f.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedFranchiseId === f.id
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                    : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* Franchise Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-800 p-6 sm:p-8 bg-gradient-to-r from-[#0d101a] via-[#121624] to-[#0d101a]">
          <div className="max-w-2xl space-y-3 relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              FRANCHISE OVERVIEW
            </span>
            <h3 className="text-3xl font-extrabold font-serif text-white">
              {franchise.name}
            </h3>
            <p className="text-amber-300/90 text-sm font-medium italic">
              "{franchise.tagline}"
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {franchise.description}
            </p>

            <div className="flex items-center gap-6 pt-2 text-xs text-gray-400">
              <div>
                <span className="text-amber-400 font-bold text-base">{franchise.totalTitles}</span> Titles
              </div>
              <div>
                <span className="text-amber-400 font-bold text-base">{franchise.charactersCount}+</span> Characters
              </div>
              <div className="text-gray-400">
                Status: <span className="text-emerald-400 font-semibold">Active Universe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Watch Order Switcher Controls */}
        <div className="flex items-center justify-between pt-2">
          <h4 className="text-lg font-bold text-white font-serif">
            Watch Order Guide Timeline
          </h4>

          <div className="inline-flex rounded-xl bg-gray-900/90 p-1 border border-gray-800 text-xs">
            <button
              onClick={() => setOrderType("chronological")}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
                orderType === "chronological"
                  ? "bg-amber-500 text-black shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Chronological Order
            </button>
            <button
              onClick={() => setOrderType("release")}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
                orderType === "release"
                  ? "bg-amber-500 text-black shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Release Order
            </button>
          </div>
        </div>

        {/* Interactive Timeline Sequence Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative pt-2">
          {orderList.map((item, idx) => (
            <div
              key={item.id}
              className="relative bg-[#111420] border border-gray-800 hover:border-amber-500/40 rounded-2xl p-4 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs font-bold flex items-center justify-center border border-amber-500/30">
                  {idx + 1}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                  {item.type}
                </span>
              </div>

              <h5 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
                {item.title}
              </h5>

              <p className="text-xs text-amber-400/90 font-mono">
                {"timelinePeriod" in item ? `Timeline: ${item.timelinePeriod}` : `Released: ${item.year}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
