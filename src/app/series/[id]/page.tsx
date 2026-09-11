import Link from "next/link";
import { MOCK_SERIES, MOCK_HERO_SLIDES } from "@/data/mockData";

export default async function SeriesDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const series =
    [...MOCK_SERIES, ...MOCK_HERO_SLIDES].find((s) => s.id === id && (s.type === "series" || s.type === "anime")) ||
    MOCK_SERIES[0];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f5f3ef]">
      {/* Header Backdrop */}
      <div className="relative w-full h-[460px] lg:h-[500px] overflow-hidden">
        <img
          src={series.backdrop}
          alt={series.title}
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/60 to-transparent" />
        <div className="absolute inset-0 cinema-vignette pointer-events-none" />

        <div className="absolute top-6 left-6 z-20">
          <Link
            href="/series"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-xs font-semibold text-gray-200 border border-gray-700 transition-colors"
          >
            ← Back to Series Hub
          </Link>
        </div>
      </div>

      {/* Main Series Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-36 relative z-20 pb-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Poster & Quick Info */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl bg-gray-900 aspect-[2/3]">
              <img
                src={series.poster}
                alt={series.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#0e111a] border border-gray-800/80 rounded-2xl p-4 space-y-2 text-xs text-gray-300">
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Total Seasons</span>
                <span className="font-semibold text-white">{series.seasons || 1} Seasons</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Total Episodes</span>
                <span className="font-semibold text-white">{series.episodes || "TBA"} Episodes</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Rating</span>
                <span className="font-bold text-amber-400">★ {series.rating} / 10</span>
              </div>
            </div>
          </div>

          {/* Series Overview & Seasons Selector */}
          <div className="md:col-span-2 lg:col-span-3 space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {series.type} Guide
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mt-2">
                {series.title}
              </h1>
              <p className="text-sm font-mono text-gray-400 mt-1">
                {series.genres.join(" • ")} {series.creators ? `| Created by ${series.creators.join(", ")}` : ""}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-serif text-white">Series Synopsis</h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                {series.synopsis}
              </p>
            </div>

            {/* Seasons & Episode Guide Placeholder */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold font-serif text-white">Season & Episode Guide</h3>
                <span className="text-xs text-amber-400 font-mono">Season 1 Selected</span>
              </div>

              <div className="space-y-2">
                {[1, 2, 3].map((epNum) => (
                  <div
                    key={epNum}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#0e111a] border border-gray-800 hover:border-amber-500/40 transition-colors"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-amber-400">
                          EP {epNum}
                        </span>
                        <h4 className="text-sm font-bold text-white">
                          Episode Title Placeholder #{epNum}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400">
                        Episode storyline overview placeholder for episode {epNum}.
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">45m</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
