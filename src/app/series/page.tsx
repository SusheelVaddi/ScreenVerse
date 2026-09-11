import { MOCK_SERIES, MOCK_HERO_SLIDES } from "@/data/mockData";
import { PosterCard } from "@/components/ContentCard";

export default function SeriesPage() {
  const seriesList = [...MOCK_HERO_SLIDES.filter((m) => m.type === "series"), ...MOCK_SERIES];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white">
            TV & Web Series Hub
          </h1>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Episodic Shows
          </span>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          Explore multi-season television shows, web series, and miniseries.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {seriesList.map((item) => (
          <PosterCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
