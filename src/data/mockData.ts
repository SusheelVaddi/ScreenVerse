export interface MediaItem {
  id: string;
  title: string;
  originalTitle?: string;
  type: "movie" | "series" | "anime" | "animation";
  year: number;
  rating: number;
  duration?: string;
  seasons?: number;
  episodes?: number;
  poster: string;
  backdrop: string;
  synopsis: string;
  genres: string[];
  director?: string;
  creators?: string[];
  cast: string[];
  voiceActors?: string[];
  characters: string[];
  franchise?: string;
  moods: string[];
  isTrending?: boolean;
  isPopular?: boolean;
  ageRating: string;
  streamingOn?: string[];
  watchOrderIndex?: number;
  chronologicalYear?: string;
  sourceMaterial?: string;
}

export interface PersonItem {
  id: string;
  name: string;
  role: "actor" | "voice_actor" | "director" | "writer" | "composer" | "creator";
  image: string;
  bio: string;
  knownFor: string[];
  charactersPlayed: Array<{ character: string; title: string; year: number }>;
  awards: string[];
  collaborations: string[];
}

export interface FranchiseItem {
  id: string;
  name: string;
  tagline: string;
  banner: string;
  description: string;
  totalTitles: number;
  charactersCount: number;
  releaseOrder: Array<{ id: string; title: string; year: number; type: string }>;
  chronologicalOrder: Array<{ id: string; title: string; timelinePeriod: string; type: string }>;
}

export const MOCK_HERO_SLIDES: MediaItem[] = [
  {
    id: "interstellar",
    title: "Interstellar",
    type: "movie",
    year: 2014,
    rating: 8.7,
    duration: "2h 49m",
    poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    synopsis: "When Earth becomes uninhabitable, a team of ex-NASA pilots embarks on a dangerous interstellar voyage through a wormhole in search of a new home for humanity.",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    characters: ["Cooper", "Brand", "Murph"],
    franchise: "Christopher Nolan Sci-Fi Collection",
    moods: ["🧠 Mind-bending", "🌌 Epic", "❤️ Emotional"],
    ageRating: "PG-13",
    streamingOn: ["Paramount+", "Prime Video"],
  },
  {
    id: "spider-verse",
    title: "Spider-Man: Into the Spider-Verse",
    type: "animation",
    year: 2018,
    rating: 8.4,
    duration: "1h 57m",
    poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
    synopsis: "Teen Miles Morales becomes the Spider-Man of his universe and must join forces with five spider-powered heroes from alternate dimensions to stop a threat to all reality.",
    genres: ["Animation", "Action", "Adventure", "Superhero"],
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld", "Mahershala Ali"],
    voiceActors: ["Shameik Moore", "Hailee Steinfeld", "Nicolas Cage"],
    characters: ["Miles Morales", "Peter B. Parker", "Gwen Stacy", "Spider-Noir"],
    franchise: "Spider-Verse Universe",
    moods: ["🔥 Adrenaline", "✨ Feel-good", "🌌 Epic"],
    ageRating: "PG",
    streamingOn: ["Disney+", "Netflix"],
  },
  {
    id: "arcane",
    title: "Arcane",
    type: "series",
    year: 2021,
    rating: 9.0,
    seasons: 2,
    episodes: 18,
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
    synopsis: "Set in the utopian city of Piltover and the oppressed underground of Zaun, two sisters fight on opposite sides of a war between rival technologies and radical convictions.",
    genres: ["Animation", "Sci-Fi", "Action", "Drama"],
    creators: ["Christian Linke", "Alex Yee"],
    cast: ["Hailee Steinfeld", "Ella Purnell", "Kevin Alejandro"],
    voiceActors: ["Hailee Steinfeld", "Ella Purnell"],
    characters: ["Vi", "Jinx", "Jayce", "Caitlyn"],
    franchise: "Runeterra Saga",
    moods: ["🔥 Adrenaline", "❤️ Emotional", "🕵️ Mystery"],
    ageRating: "TV-MA",
    streamingOn: ["Netflix"],
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    originalTitle: "Shingeki no Kyojin",
    type: "anime",
    year: 2013,
    rating: 9.1,
    seasons: 4,
    episodes: 89,
    poster: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1600&auto=format&fit=crop",
    synopsis: "After his hometown is destroyed and his mother is killed, Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    genres: ["Anime", "Action", "Dark Fantasy", "Mystery"],
    director: "Tetsuro Araki, Yuichiro Hayashi",
    cast: ["Yuki Kaji", "Yui Ishikawa", "Marina Inoue", "Hiroshi Kamiya"],
    voiceActors: ["Yuki Kaji (Eren)", "Yui Ishikawa (Mikasa)", "Hiroshi Kamiya (Levi)"],
    characters: ["Eren Yeager", "Mikasa Ackerman", "Levi Ackerman", "Armin Arlert"],
    franchise: "Attack on Titan Franchise",
    moods: ["🧠 Mind-bending", "🔥 Adrenaline", "😨 Terrifying"],
    ageRating: "TV-MA",
    streamingOn: ["Crunchyroll", "Hulu"],
    sourceMaterial: "Manga by Hajime Isayama",
  },
];

export const MOCK_MOVIES: MediaItem[] = [
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    type: "movie",
    year: 2023,
    rating: 8.9,
    duration: "3h 00m",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop",
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    genres: ["Biography", "Drama", "History"],
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    characters: ["J. Robert Oppenheimer", "Katherine Oppenheimer", "Leslie Groves", "Lewis Strauss"],
    franchise: "Historical Cinema",
    moods: ["🧠 Mind-bending", "🌌 Epic"],
    ageRating: "R",
    streamingOn: ["Peacock"],
  },
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    type: "movie",
    year: 2024,
    rating: 8.6,
    duration: "2h 46m",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1600&auto=format&fit=crop",
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem"],
    characters: ["Paul Atreides", "Chani", "Lady Jessica", "Stilgar"],
    franchise: "Dune Universe",
    moods: ["🌌 Epic", "🔥 Adrenaline"],
    ageRating: "PG-13",
    streamingOn: ["Max"],
  },
  {
    id: "the-dark-knight",
    title: "The Dark Knight",
    type: "movie",
    year: 2008,
    rating: 9.0,
    duration: "2h 32m",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1600&auto=format&fit=crop",
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genres: ["Action", "Crime", "Drama", "Superhero"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Gary Oldman"],
    characters: ["Bruce Wayne / Batman", "The Joker", "Harvey Dent", "Jim Gordon"],
    franchise: "The Dark Knight Trilogy",
    moods: ["🧠 Mind-bending", "🔥 Adrenaline", "🕵️ Mystery"],
    ageRating: "PG-13",
    streamingOn: ["Max"],
  },
];

export const MOCK_SERIES: MediaItem[] = [
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    type: "series",
    year: 2008,
    rating: 9.5,
    seasons: 5,
    episodes: 62,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop",
    synopsis: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's financial future.",
    genres: ["Crime", "Drama", "Thriller"],
    creators: ["Vince Gilligan"],
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Giancarlo Esposito"],
    characters: ["Walter White", "Jesse Pinkman", "Skyler White", "Gus Fring"],
    franchise: "Breaking Bad Universe",
    moods: ["🧠 Mind-bending", "🔥 Adrenaline"],
    ageRating: "TV-MA",
    streamingOn: ["Netflix"],
  },
  {
    id: "stranger-things",
    title: "Stranger Things",
    type: "series",
    year: 2016,
    rating: 8.7,
    seasons: 4,
    episodes: 34,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
    synopsis: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    genres: ["Drama", "Fantasy", "Horror", "Sci-Fi"],
    creators: ["The Duffer Brothers"],
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"],
    characters: ["Eleven", "Mike Wheeler", "Joyce Byers", "Jim Hopper"],
    franchise: "Stranger Things Universe",
    moods: ["🕵️ Mystery", "😨 Terrifying", "✨ Feel-good"],
    ageRating: "TV-14",
    streamingOn: ["Netflix"],
  },
];

export const MOCK_ANIME: MediaItem[] = [
  {
    id: "demonslayer",
    title: "Demon Slayer: Kimetsu no Yaiba",
    originalTitle: "Kimetsu no Yaiba",
    type: "anime",
    year: 2019,
    rating: 8.6,
    seasons: 4,
    episodes: 55,
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1600&auto=format&fit=crop",
    synopsis: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    genres: ["Anime", "Action", "Supernatural", "Historical"],
    director: "Haruo Sotozaki",
    cast: ["Natsuki Hanae", "Akari Kito", "Hiro Shimono", "Yoshitsugu Matsuoka"],
    voiceActors: ["Natsuki Hanae (Tanjiro)", "Akari Kito (Nezuko)"],
    characters: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"],
    franchise: "Demon Slayer Universe",
    moods: ["🔥 Adrenaline", "❤️ Emotional", "✨ Feel-good"],
    ageRating: "TV-14",
    streamingOn: ["Crunchyroll", "Netflix"],
    sourceMaterial: "Manga by Koyoharu Gotouge",
  },
  {
    id: "jujutsukaisen",
    title: "Jujutsu Kaisen",
    originalTitle: "Jujutsu Kaisen",
    type: "anime",
    year: 2020,
    rating: 8.5,
    seasons: 2,
    episodes: 47,
    poster: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
    synopsis: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
    genres: ["Anime", "Action", "Supernatural", "Dark Fantasy"],
    director: "Sunghoo Park, Shota Goshozono",
    cast: ["Junya Enoki", "Yuma Uchida", "Asami Seto", "Yuichi Nakamura"],
    voiceActors: ["Junya Enoki (Itadori)", "Yuichi Nakamura (Gojo)"],
    characters: ["Yuji Itadori", "Satoru Gojo", "Megumi Fushiguro", "Nobara Kugisaki"],
    franchise: "Jujutsu Kaisen Universe",
    moods: ["🔥 Adrenaline", "🧠 Mind-bending"],
    ageRating: "TV-MA",
    streamingOn: ["Crunchyroll"],
  },
];

export const MOCK_PEOPLE: PersonItem[] = [
  {
    id: "christopher-nolan",
    name: "Christopher Nolan",
    role: "director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    bio: "Christopher Nolan is a British-American filmmaker known for his Hollywood blockbusters with complex storytelling, non-linear narrative structures, and practical visual effects.",
    knownFor: ["Interstellar", "Oppenheimer", "Inception", "The Dark Knight"],
    charactersPlayed: [],
    awards: ["2 Academy Awards", "2 Golden Globes", "2 BAFTA Awards"],
    collaborations: ["Cillian Murphy (6 films)", "Michael Caine (8 films)", "Hans Zimmer (Composer)"],
  },
  {
    id: "cillian-murphy",
    name: "Cillian Murphy",
    role: "actor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "Cillian Murphy is an Irish actor celebrated for his intense performances across film, television, and theatre. Winner of the Academy Award for Best Actor for Oppenheimer.",
    knownFor: ["Oppenheimer", "Peaky Blinders", "Inception", "Dunkirk"],
    charactersPlayed: [
      { character: "J. Robert Oppenheimer", title: "Oppenheimer", year: 2023 },
      { character: "Thomas Shelby", title: "Peaky Blinders", year: 2013 },
      { character: "Scarecrow / Dr. Jonathan Crane", title: "The Dark Knight", year: 2008 },
    ],
    awards: ["Academy Award - Best Actor", "Golden Globe - Best Actor"],
    collaborations: ["Christopher Nolan", "Steven Knight"],
  },
  {
    id: "yuki-kaji",
    name: "Yuki Kaji",
    role: "voice_actor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    bio: "Yuki Kaji is one of Japan's most acclaimed voice actors (Seiyuu), known for delivering iconic, emotionally powerful lead performances in anime.",
    knownFor: ["Attack on Titan", "My Hero Academia", "Seven Deadly Sins", "Demon Slayer"],
    charactersPlayed: [
      { character: "Eren Yeager", title: "Attack on Titan", year: 2013 },
      { character: "Shoto Todoroki", title: "My Hero Academia", year: 2016 },
      { character: "Sabito", title: "Demon Slayer", year: 2019 },
    ],
    awards: ["Seiyu Awards - Best Lead Actor"],
    collaborations: ["MAPPA", "WIT Studio", "Ufotable"],
  },
];

export const MOCK_FRANCHISES: FranchiseItem[] = [
  {
    id: "mcu",
    name: "Marvel Cinematic Universe",
    tagline: "An interconnected universe of heroes, cosmic sagas, and multiversal legends.",
    banner: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1600&auto=format&fit=crop",
    description: "The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe centered on a series of superhero films and series produced by Marvel Studios.",
    totalTitles: 34,
    charactersCount: 150,
    releaseOrder: [
      { id: "ironman", title: "Iron Man", year: 2008, type: "Movie" },
      { id: "avengers", title: "The Avengers", year: 2012, type: "Movie" },
      { id: "endgame", title: "Avengers: Endgame", year: 2019, type: "Movie" },
      { id: "wandavision", title: "WandaVision", year: 2021, type: "Series" },
    ],
    chronologicalOrder: [
      { id: "cap1", title: "Captain America: The First Avenger", timelinePeriod: "1942-1945", type: "Movie" },
      { id: "capmarv", title: "Captain Marvel", timelinePeriod: "1995", type: "Movie" },
      { id: "ironman", title: "Iron Man", timelinePeriod: "2010", type: "Movie" },
      { id: "endgame", title: "Avengers: Endgame", timelinePeriod: "2023", type: "Movie" },
    ],
  },
  {
    id: "aot-universe",
    name: "Attack on Titan Universe",
    tagline: "The battle for human survival behind three concentric walls.",
    banner: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1600&auto=format&fit=crop",
    description: "The complete Attack on Titan saga including television seasons, side OVAs, compilation movies, and spin-off stories.",
    totalTitles: 8,
    charactersCount: 45,
    releaseOrder: [
      { id: "aot-s1", title: "Attack on Titan Season 1", year: 2013, type: "Anime Series" },
      { id: "aot-ova1", title: "Ilse's Notebook (OVA)", year: 2013, type: "OVA" },
      { id: "aot-s2", title: "Attack on Titan Season 2", year: 2017, type: "Anime Series" },
      { id: "aot-final", title: "The Final Chapters", year: 2023, type: "Anime Special" },
    ],
    chronologicalOrder: [
      { id: "aot-no-regrets", title: "A Choice with No Regrets (Levi OVA)", timelinePeriod: "Before Wall Fall", type: "OVA" },
      { id: "aot-s1", title: "Attack on Titan Season 1", timelinePeriod: "Year 845-850", type: "Anime Series" },
      { id: "aot-s2", title: "Attack on Titan Season 2", timelinePeriod: "Year 850", type: "Anime Series" },
      { id: "aot-final", title: "The Final Chapters", timelinePeriod: "Year 854", type: "Anime Special" },
    ],
  },
];

export const NATURAL_LANGUAGE_SEARCH_SUGGESTIONS = [
  "Marvel movies in chronological order",
  "Movies starring Cillian Murphy",
  "Anime under 25 episodes",
  "Movies like Interstellar",
  "Christopher Nolan sci-fi films",
  "Voice actors behind Eren Yeager",
  "Best animated movies for families",
  "Crime series similar to Breaking Bad",
];
