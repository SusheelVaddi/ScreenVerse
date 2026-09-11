import { TVmazeService, normalizeTVmazeShow } from "@/services/tvmaze";
import { PosterCard } from "@/components/ContentCard";
import { MediaItem, MOCK_SERIES } from "@/data/mockData";

export const revalidate = 3600; // Revalidate page every hour

export default async function SeriesPage() {
  let shows: MediaItem[] = [];

  try {
    const rawShows = await TVmazeService.getPopularShows(0);
    if (rawShows && rawShows.length > 0) {
      shows = rawShows.slice(0, 16).map((show) => normalizeTVmazeShow(show));
    } else {
      shows = MOCK_SERIES;
    }
  } catch (error) {
    console.error("Failed to fetch TVmaze series:", error);
    shows = MOCK_SERIES;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white">
              TV & Web Series Hub
            </h1>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Live TVmaze Integration
            </span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            Real-time episodic shows, seasonal sagas, and network broadcasts powered by TVmaze.
          </p>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
          ● Live API Data Active
        </span>
      </div>

      {shows.length === 0 ? (
        <div className="text-center py-16 text-gray-400 text-sm">
          Unable to load TV series at the moment. Please try again shortly.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {shows.map((item) => (
            <PosterCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
