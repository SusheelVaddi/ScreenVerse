import Link from "next/link";
import {
  TVmazeService,
  normalizeTVmazeShow,
  stripHtmlTags,
} from "@/services/tvmaze";
import { MOCK_SERIES, MediaItem } from "@/data/mockData";

export default async function SeriesDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  // Extract raw numerical ID if prefixed with "tvmaze-"
  const cleanId = id.replace("tvmaze-", "");
  
  let seriesItem: MediaItem | null = null;
  let rawEpisodes: Array<{
    id: number;
    name: string;
    season: number;
    number: number;
    runtime: number | null;
    summary: string | null;
    airdate: string;
  }> = [];
  let rawCast: Array<{ person: { name: string }; character: { name: string } }> = [];

  // Check if ID is a valid number for TVmaze API
  if (!isNaN(Number(cleanId))) {
    const [rawShow, episodesData, castData] = await Promise.all([
      TVmazeService.getShowById(cleanId),
      TVmazeService.getShowEpisodes(cleanId),
      TVmazeService.getShowCast(cleanId),
    ]);

    if (rawShow) {
      seriesItem = normalizeTVmazeShow(rawShow, castData, episodesData);
      rawEpisodes = episodesData;
      rawCast = castData;
    }
  }

  // Fallback to mock data if TVmaze lookup fails or non-numeric ID
  if (!seriesItem) {
    seriesItem = MOCK_SERIES.find((s) => s.id === id) || MOCK_SERIES[0];
  }

  // Group COMPLETE list of episodes by season number
  const episodesBySeason = rawEpisodes.reduce<
    Record<number, typeof rawEpisodes>
  >((acc, ep) => {
    const s = ep.season ?? 1;
    if (!acc[s]) acc[s] = [];
    acc[s].push(ep);
    return acc;
  }, {});

  // Sort season numbers in ascending order (0 = Specials if present, 1, 2, 3...)
  const seasonNumbers = Object.keys(episodesBySeason)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f5f3ef]">
      {/* Header Backdrop */}
      <div className="relative w-full h-[460px] lg:h-[500px] overflow-hidden">
        <img
          src={seriesItem.backdrop}
          alt={seriesItem.title}
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
                src={seriesItem.poster}
                alt={seriesItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#0e111a] border border-gray-800/80 rounded-2xl p-4 space-y-2 text-xs text-gray-300">
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Total Seasons</span>
                <span className="font-semibold text-white">
                  {seasonNumbers.filter((s) => s > 0).length || seriesItem.seasons || 1} Seasons
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Total Episodes</span>
                <span className="font-semibold text-white">
                  {rawEpisodes.length || seriesItem.episodes || "N/A"} Episodes
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Rating</span>
                <span className="font-bold text-amber-400">★ {seriesItem.rating} / 10</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Source API</span>
                <span className="font-semibold text-emerald-400 font-mono">TVmaze REST API</span>
              </div>
            </div>
          </div>

          {/* Series Overview & Complete Season-by-Season Episode Guide */}
          <div className="md:col-span-2 lg:col-span-3 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {seriesItem.type}
                </span>
                {seriesItem.streamingOn && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 text-gray-300">
                    {seriesItem.streamingOn.join(", ")}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mt-2">
                {seriesItem.title}
              </h1>
              <p className="text-sm font-mono text-gray-400 mt-1">
                {seriesItem.genres.join(" • ")} {seriesItem.year ? `(${seriesItem.year})` : ""}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-serif text-white">Series Synopsis</h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                {seriesItem.synopsis}
              </p>
            </div>

            {/* Real Cast Members */}
            {rawCast.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold font-serif text-white">Cast & Characters</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {rawCast.slice(0, 6).map((c, idx) => (
                    <div key={idx} className="bg-[#0d1018] border border-gray-800 p-3 rounded-xl">
                      <p className="text-xs font-bold text-white truncate">{c.person.name}</p>
                      <p className="text-[11px] text-amber-400/90 font-mono truncate mt-0.5">
                        as {c.character.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* COMPLETE EPISODE GUIDE GROUPED BY SEASON */}
            <div className="space-y-6 pt-6 border-t border-gray-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-bold font-serif text-white">
                  Episode Guide ({rawEpisodes.length} Total Episodes)
                </h3>
                <span className="text-xs text-amber-400 font-mono">
                  Full Series Season Breakdown
                </span>
              </div>

              {/* Season Jump Shortcuts */}
              {seasonNumbers.length > 1 && (
                <div className="flex flex-wrap gap-2 pt-1 pb-2">
                  {seasonNumbers.map((seasonNum) => (
                    <a
                      key={seasonNum}
                      href={`#season-${seasonNum}`}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#121624] text-gray-300 border border-gray-800 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                    >
                      {seasonNum === 0 ? "Specials" : `Season ${seasonNum}`}
                    </a>
                  ))}
                </div>
              )}

              {/* Render Season Groups in Ascending Order */}
              {seasonNumbers.length > 0 ? (
                <div className="space-y-8">
                  {seasonNumbers.map((seasonNum) => {
                    const seasonEpisodes = episodesBySeason[seasonNum].sort(
                      (a, b) => a.number - b.number
                    );
                    const seasonTitle =
                      seasonNum === 0 ? "Specials & Extras" : `Season ${seasonNum}`;

                    return (
                      <div
                        key={seasonNum}
                        id={`season-${seasonNum}`}
                        className="space-y-3 scroll-mt-24"
                      >
                        {/* Season Visual Heading */}
                        <div className="flex items-center justify-between bg-[#0e121d] px-4 py-3 rounded-xl border border-gray-800/80">
                          <h4 className="text-base font-bold font-serif text-white flex items-center gap-2">
                            <span>{seasonTitle}</span>
                          </h4>
                          <span className="text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded border border-amber-500/20">
                            {seasonEpisodes.length} {seasonEpisodes.length === 1 ? "Episode" : "Episodes"}
                          </span>
                        </div>

                        {/* Season Episode List */}
                        <div className="space-y-3 pl-1 sm:pl-2">
                          {seasonEpisodes.map((ep, idx) => (
                            <div
                              key={ep.id}
                              className="p-4 rounded-xl bg-[#0b0e17] border border-gray-800/80 hover:border-amber-500/40 transition-colors"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                <div className="space-y-1 min-w-0">
                                  <div className="flex items-center gap-2.5">
                                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 flex-shrink-0">
                                      S{ep.season} E{ep.number || idx + 1}
                                    </span>
                                    <h5 className="text-sm font-bold text-white">
                                      {ep.name}
                                    </h5>
                                  </div>
                                  <p className="text-xs text-gray-300 leading-relaxed pt-1 font-light">
                                    {stripHtmlTags(ep.summary)}
                                  </p>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-400 font-mono flex-shrink-0 pt-0.5">
                                  {ep.airdate && <span>📅 {ep.airdate}</span>}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 text-xs text-gray-400 bg-[#0e111a] rounded-xl border border-gray-800">
                  Episode guide details loading or unavailable for this show.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
