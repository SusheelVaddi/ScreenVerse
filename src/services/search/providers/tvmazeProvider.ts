import { SearchProvider, SearchResultItem, ContentType, SearchOptions } from "../search.types";
import { TVmazeService, normalizeTVmazeShow, stripHtmlTags } from "../../tvmaze";

const FALLBACK_POSTER =
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop";

export class TVmazeProvider implements SearchProvider {
  readonly name = "tvmaze";
  readonly supportedTypes: ContentType[] = ["series", "anime", "animation"];

  async search(query: string, options?: SearchOptions): Promise<SearchResultItem[]> {
    if (!query.trim()) return [];

    try {
      const rawResults = await TVmazeService.searchShows(query);
      
      const normalizedResults: SearchResultItem[] = rawResults
        .filter((res) => res.show && res.show.id)
        .map((res) => {
          const normalizedMedia = normalizeTVmazeShow(res.show);
          const rawShow = res.show;

          const year = rawShow.premiered
            ? parseInt(rawShow.premiered.slice(0, 4), 10)
            : undefined;

          return {
            id: `tvmaze-${rawShow.id}`,
            title: rawShow.name,
            type: normalizedMedia.type,
            year: isNaN(year!) ? undefined : year,
            rating: rawShow.rating?.average
              ? Math.round(rawShow.rating.average * 10) / 10
              : undefined,
            image: rawShow.image?.medium || rawShow.image?.original || FALLBACK_POSTER,
            overview: stripHtmlTags(rawShow.summary),
            source: "TVmaze",
            sourceId: rawShow.id,
            url: `/${normalizedMedia.type}/tvmaze-${rawShow.id}`,
            genres: rawShow.genres,
            streamingOn: normalizedMedia.streamingOn,
          };
        });

      // Filter by requested types if specified in options
      if (options?.types && options.types.length > 0) {
        return normalizedResults.filter((item) => options.types!.includes(item.type));
      }

      return normalizedResults;
    } catch (error) {
      console.error("TVmazeProvider search error:", error);
      return [];
    }
  }
}
