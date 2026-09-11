import {
  TVmazeShow,
  TVmazeSearchResult,
  TVmazeEpisode,
  TVmazeCastItem,
} from "./tvmaze.types";

const TVMAZE_BASE_URL = "https://api.tvmaze.com";

/**
 * TVmaze API Client Service
 * Handles direct REST API calls to https://api.tvmaze.com
 */
export class TVmazeService {
  /**
   * Search TV shows by name
   */
  static async searchShows(query: string): Promise<TVmazeSearchResult[]> {
    if (!query.trim()) return [];
    try {
      const res = await fetch(
        `${TVMAZE_BASE_URL}/search/shows?q=${encodeURIComponent(query)}`,
        { next: { revalidate: 3600 } } // Cache for 1 hour
      );
      if (!res.ok) {
        throw new Error(`TVmaze API search error: ${res.statusText}`);
      }
      return await res.json();
    } catch (error) {
      console.error("TVmazeService.searchShows failed:", error);
      return [];
    }
  }

  /**
   * Get a single TV show by ID
   */
  static async getShowById(id: string | number): Promise<TVmazeShow | null> {
    try {
      const res = await fetch(`${TVMAZE_BASE_URL}/shows/${id}`, {
        next: { revalidate: 86400 }, // Cache for 24 hours
      });
      if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error(`TVmaze API getShowById error: ${res.statusText}`);
      }
      return await res.json();
    } catch (error) {
      console.error(`TVmazeService.getShowById failed for ID ${id}:`, error);
      return null;
    }
  }

  /**
   * Get episodes for a specific TV show
   */
  static async getShowEpisodes(id: string | number): Promise<TVmazeEpisode[]> {
    try {
      const res = await fetch(`${TVMAZE_BASE_URL}/shows/${id}/episodes`, {
        next: { revalidate: 86400 },
      });
      if (!res.ok) {
        return [];
      }
      return await res.json();
    } catch (error) {
      console.error(`TVmazeService.getShowEpisodes failed for ID ${id}:`, error);
      return [];
    }
  }

  /**
   * Get cast list for a specific TV show
   */
  static async getShowCast(id: string | number): Promise<TVmazeCastItem[]> {
    try {
      const res = await fetch(`${TVMAZE_BASE_URL}/shows/${id}/cast`, {
        next: { revalidate: 86400 },
      });
      if (!res.ok) {
        return [];
      }
      return await res.json();
    } catch (error) {
      console.error(`TVmazeService.getShowCast failed for ID ${id}:`, error);
      return [];
    }
  }

  /**
   * Fetch primary list of popular TV shows
   */
  static async getPopularShows(page = 0): Promise<TVmazeShow[]> {
    try {
      const res = await fetch(`${TVMAZE_BASE_URL}/shows?page=${page}`, {
        next: { revalidate: 86400 },
      });
      if (!res.ok) {
        return [];
      }
      const data: TVmazeShow[] = await res.json();
      return data;
    } catch (error) {
      console.error("TVmazeService.getPopularShows failed:", error);
      return [];
    }
  }
}
