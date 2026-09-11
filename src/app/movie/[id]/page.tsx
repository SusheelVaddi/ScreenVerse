import Link from "next/link";
import { MOCK_HERO_SLIDES, MOCK_MOVIES } from "@/data/mockData";

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie =
    [...MOCK_HERO_SLIDES, ...MOCK_MOVIES].find((m) => m.id === id) ||
    MOCK_HERO_SLIDES[0];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f5f3ef]">
      {/* Backdrop Header */}
      <div className="relative w-full h-[480px] lg:h-[540px] overflow-hidden">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/60 to-transparent" />
        <div className="absolute inset-0 cinema-vignette pointer-events-none" />

        {/* Back Link */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            href="/"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-xs font-semibold text-gray-200 border border-gray-700 transition-colors"
          >
            ← Back to ScreenVerse
          </Link>
        </div>
      </div>

      {/* Main Movie Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Poster Column */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl bg-gray-900 aspect-[2/3]">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Metadata Box */}
            <div className="bg-[#0e111a] border border-gray-800/80 rounded-2xl p-4 space-y-2 text-xs text-gray-300">
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Release Year</span>
                <span className="font-semibold text-white">{movie.year}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Rating</span>
                <span className="font-bold text-amber-400">★ {movie.rating} / 10</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Runtime</span>
                <span className="font-semibold text-white">{movie.duration || "N/A"}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Age Rating</span>
                <span className="font-semibold text-white">{movie.ageRating}</span>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-2 lg:col-span-3 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {movie.type}
                </span>
                {movie.franchise && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 text-gray-300">
                    {movie.franchise}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
                {movie.title}
              </h1>
              <p className="text-sm font-mono text-gray-400 mt-1">
                {movie.genres.join(" • ")}
              </p>
            </div>

            {/* Synopsis */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-serif text-white">Overview</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {movie.synopsis}
              </p>
            </div>

            {/* Cast & Crew Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold font-serif text-white">Top Cast & Characters</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {movie.cast.map((actor, idx) => (
                  <div key={idx} className="bg-[#0d1018] border border-gray-800 p-3 rounded-xl">
                    <p className="text-xs font-bold text-white">{actor}</p>
                    <p className="text-[11px] text-amber-400/90 font-mono mt-0.5">
                      as {movie.characters[idx] || "Character"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Streaming Availability Placeholder */}
            <div className="bg-[#0c0e15] border border-amber-500/20 rounded-2xl p-5 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>📺 Streaming Availability</span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Country-Specific
                  </span>
                </h4>
                <span className="text-xs text-gray-400">Step 16 Integration</span>
              </div>
              <p className="text-xs text-gray-400">
                Currently available on: {movie.streamingOn?.join(", ") || "Streaming data placeholder"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
