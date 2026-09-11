import CinematicHero from "@/components/CinematicHero";
import MoodPicker from "@/components/MoodPicker";
import FranchiseTimelinePreview from "@/components/FranchiseTimelinePreview";
import { PosterCard, PersonCard, HorizontalCard } from "@/components/ContentCard";
import { MOCK_MOVIES, MOCK_SERIES, MOCK_ANIME, MOCK_PEOPLE, MOCK_HERO_SLIDES } from "@/data/mockData";

export default function Home() {
  const trendingMovies = [...MOCK_HERO_SLIDES.filter((m) => m.type === "movie"), ...MOCK_MOVIES];
  const trendingSeries = MOCK_SERIES;
  const trendingAnime = [...MOCK_HERO_SLIDES.filter((m) => m.type === "anime"), ...MOCK_ANIME];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
      {/* 1. HERO / FEATURED SPOTLIGHT STORY */}
      <CinematicHero />

      {/* 2. TRENDING & CURRENTLY WATCHED SPOTLIGHT */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#f5f3ef]">
                Trending Across ScreenVerse
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Popular Now
              </span>
            </div>
            <p className="text-sm text-gray-400">
              The most explored movies, series, and anime titles right now.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {MOCK_HERO_SLIDES.map((item) => (
            <PosterCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 3. DISCOVER BY MOOD */}
      <MoodPicker />

      {/* 4. EXPLORE MOVIES */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#f5f3ef]">
              Explore Movies
            </h2>
            <p className="text-sm text-gray-400">
              Feature films, blockbusters, and award-winning cinema.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trendingMovies.slice(0, 2).map((item) => (
            <HorizontalCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 5. EXPLORE SERIES */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#f5f3ef]">
              Explore TV & Web Series
            </h2>
            <p className="text-sm text-gray-400">
              Binge-worthy shows, seasonal sagas, and digital originals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {trendingSeries.map((item) => (
            <PosterCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 6. ANIME & ANIMATION SPOTLIGHT */}
      <section className="space-y-6 bg-[#090b12] border border-purple-500/20 p-6 sm:p-8 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#f5f3ef]">
                Anime & Animation Universe
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Seiyuu & Arc Support
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Japanese anime series, movies, OVAs, ONAs, and animated masterpieces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {trendingAnime.map((item) => (
            <PosterCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 7. ENTER A UNIVERSE / FRANCHISE EXPLORER */}
      <FranchiseTimelinePreview />

      {/* 8. POPULAR PEOPLE */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#f5f3ef]">
              Popular Actors, Directors & Creators
            </h2>
            <p className="text-sm text-gray-400">
              Explore talent filmographies, roles, and creative masterminds.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {MOCK_PEOPLE.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </section>

      {/* 9. DISCOVER SOMETHING NEW SPOTLIGHT BANNER */}
      <section className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-gradient-to-r from-amber-950/40 via-[#131624] to-[#0a0c12] border border-amber-500/30 text-center space-y-4">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            CINEMATIC DISCOVERY ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
            Uncover Stories You Never Knew Existed
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light">
            Whether you are following a 20-year franchise timeline, searching for voice actor filmographies, or discovering mind-bending sci-fi movies, ScreenVerse connects every detail.
          </p>
        </div>
      </section>
    </div>
  );
}
