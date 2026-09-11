import { SearchProvider, SearchResultItem, SearchOptions } from "./search.types";
import { TVmazeProvider } from "./providers/tvmazeProvider";

/**
 * ScreenVerse Search Engine
 * Central orchestration layer that receives search queries, queries registered search providers,
 * and returns unified, normalized ScreenVerse search results.
 */
export class SearchEngine {
  private static providers: SearchProvider[] = [new TVmazeProvider()];

  /**
   * Register a new search provider (e.g. TMDBProvider, JikanProvider in future steps)
   */
  static registerProvider(provider: SearchProvider): void {
    const exists = this.providers.some((p) => p.name === provider.name);
    if (!exists) {
      this.providers.push(provider);
    }
  }

  /**
   * Perform search across all registered providers
   */
  static async search(query: string, options?: SearchOptions): Promise<SearchResultItem[]> {
    if (!query.trim()) return [];

    try {
      // Query active providers in parallel
      const providerPromises = this.providers.map((provider) =>
        provider.search(query, options)
      );

      const resultsNested = await Promise.all(providerPromises);
      const combinedResults = resultsNested.flat();

      // Deduplicate results by ID
      const seenIds = new Set<string>();
      const deduplicatedResults: SearchResultItem[] = [];

      for (const item of combinedResults) {
        if (!seenIds.has(item.id)) {
          seenIds.add(item.id);
          deduplicatedResults.push(item);
        }
      }

      // Apply result limit if requested
      if (options?.limit && options.limit > 0) {
        return deduplicatedResults.slice(0, options.limit);
      }

      return deduplicatedResults;
    } catch (error) {
      console.error("SearchEngine.search error:", error);
      return [];
    }
  }
}
