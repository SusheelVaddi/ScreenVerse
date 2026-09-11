export interface TVmazeImage {
  medium: string;
  original: string;
}

export interface TVmazeRating {
  average: number | null;
}

export interface TVmazeNetwork {
  id: number;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  } | null;
}

export interface TVmazeShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: TVmazeRating;
  weight: number;
  network: TVmazeNetwork | null;
  webChannel: {
    id: number;
    name: string;
  } | null;
  image: TVmazeImage | null;
  summary: string | null;
  updated: number;
}

export interface TVmazeSearchResult {
  score: number;
  show: TVmazeShow;
}

export interface TVmazeEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number | null;
  rating: TVmazeRating;
  image: TVmazeImage | null;
  summary: string | null;
}

export interface TVmazeCastItem {
  person: {
    id: number;
    url: string;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
    birthday: string | null;
    deathday: string | null;
    gender: string | null;
    image: TVmazeImage | null;
  };
  character: {
    id: number;
    url: string;
    name: string;
    image: TVmazeImage | null;
  };
  self: boolean;
  voice: boolean;
}
