import { MOCK_HERO_SLIDES } from "@/data/mockData";
import { PosterCard } from "@/components/ContentCard";

export default function AnimationPage() {
  const animationList = MOCK_HERO_SLIDES.filter((m) => m.type === "animation");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white">
            Animation & Cartoons
          </h1>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Animated Features & Shorts
          </span>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          Discover animated feature films, classic cartoons, studio catalogs, and short films.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {animationList.map((item) => (
          <PosterCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
