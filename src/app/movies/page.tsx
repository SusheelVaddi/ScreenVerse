import { MOCK_MOVIES, MOCK_HERO_SLIDES } from "@/data/mockData";
import { PosterCard } from "@/components/ContentCard";

export default function MoviesPage() {
  const movies = [...MOCK_HERO_SLIDES.filter((m) => m.type === "movie"), ...MOCK_MOVIES];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white">
            Movies Explorer
          </h1>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Cinema Hub
          </span>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          Browse blockbusters, classics, independent films, and cinematic sagas.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <PosterCard key={movie.id} item={movie} />
        ))}
      </div>
    </div>
  );
}
