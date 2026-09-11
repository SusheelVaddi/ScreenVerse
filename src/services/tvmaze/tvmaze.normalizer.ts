import { MediaItem } from "@/data/mockData";
import { TVmazeShow, TVmazeEpisode, TVmazeCastItem } from "./tvmaze.types";

const FALLBACK_POSTER =
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop";
const FALLBACK_BACKDROP =
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop";

/**
 * Utility to strip HTML tags from API strings (like TVmaze summaries)
 */
export function stripHtmlTags(html: string | null | undefined): string {
  if (!html) return "No description available for this title.";
  return html.replace(/<[^>]*>?/gm, "").trim();
}

/**
 * Formats an individual episode's runtime directly from TVmaze's raw `episode.runtime` field (in minutes).
 * DATA ACCURACY RULE: ScreenVerse NEVER invents, estimates, calculates, or hardcodes episode runtimes.
 * If TVmaze returns null, undefined, or 0, this returns "Runtime unavailable".
 */
export function formatEpisodeRuntime(runtime: number | null | undefined): string {
  if (typeof runtime === "number" && runtime > 0) {
    return `${runtime} min`;
  }
  return "Runtime unavailable";
}

/**
 * Normalizes a raw TVmazeShow into ScreenVerse's unified MediaItem model
 */
export function normalizeTVmazeShow(
  show: TVmazeShow,
  castItems: TVmazeCastItem[] = [],
  episodes: TVmazeEpisode[] = []
): MediaItem {
  const isAnimation =
    show.type === "Animation" || show.genres.includes("Anime");
  const isAnime =
    show.genres.includes("Anime") ||
    (show.network?.country?.code === "JP" && isAnimation);

  const year = show.premiered
    ? parseInt(show.premiered.slice(0, 4), 10)
    : 2020;

  const poster = show.image?.original || show.image?.medium || FALLBACK_POSTER;
  const backdrop = show.image?.original || FALLBACK_BACKDROP;

  // Determine seasons count from episodes or estimation
  const seasonsCount = episodes.length
    ? Math.max(...episodes.map((e) => e.season))
    : 1;

  const castNames = castItems.length
    ? castItems.slice(0, 6).map((c) => c.person.name)
    : ["Cast details arriving soon"];

  const characterNames = castItems.length
    ? castItems.slice(0, 6).map((c) => c.character.name)
    : ["Main Role"];

  const streamingProvider =
    show.webChannel?.name || show.network?.name || "TV Network";

  return {
    id: `tvmaze-${show.id}`,
    title: show.name,
    type: isAnime ? "anime" : isAnimation ? "animation" : "series",
    year: isNaN(year) ? 2020 : year,
    rating: show.rating?.average ? Math.round(show.rating.average * 10) / 10 : 7.5,
    // Note: show.averageRuntime is the show's overall average episode duration for show metadata, NOT individual episode runtime.
    duration: show.averageRuntime ? `~${show.averageRuntime}m avg / ep` : undefined,
    seasons: seasonsCount,
    episodes: episodes.length || undefined,
    poster,
    backdrop,
    synopsis: stripHtmlTags(show.summary),
    genres: show.genres.length ? show.genres : ["Drama", "Series"],
    creators: show.network?.name ? [show.network.name] : undefined,
    cast: castNames,
    characters: characterNames,
    franchise: show.network ? `${show.network.name} Series` : "Television Saga",
    moods: ["🔥 Adrenaline", "🕵️ Mystery"],
    ageRating: show.rating?.average && show.rating.average >= 8 ? "TV-MA" : "TV-14",
    streamingOn: [streamingProvider],
  };
}
