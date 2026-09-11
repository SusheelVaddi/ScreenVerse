export type ContentType =
  | "movie"
  | "series"
  | "anime"
  | "animation"
  | "person"
  | "character"
  | "franchise";

export interface SearchResultItem {
  id: string; // Unique global ID e.g. "tvmaze-169"
  title: string;
  type: ContentType;
  year?: number;
  rating?: number;
  image: string;
  overview: string;
  source: string; // Provider name e.g. "TVmaze"
  sourceId: string | number;
  url: string; // Local navigation route e.g. "/series/tvmaze-169"
  genres?: string[];
  streamingOn?: string[];
}

export interface SearchOptions {
  types?: ContentType[];
  limit?: number;
}

export interface SearchProvider {
  /**
   * Unique name of the provider (e.g. "tvmaze", "tmdb", "jikan")
   */
  readonly name: string;

  /**
   * Content types supported by this provider
   */
  readonly supportedTypes: ContentType[];

  /**
   * Execute search query and return unified SearchResultItem array
   */
  search(query: string, options?: SearchOptions): Promise<SearchResultItem[]>;
}
