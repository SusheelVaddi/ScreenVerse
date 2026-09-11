import SearchBarPlaceholder from "./SearchBarPlaceholder";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-14 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Subtle Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-purple-600/10 to-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300">
          <span>Unified Entertainment Platform</span>
        </div>

        {/* Main Title & Tagline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            ScreenVerse
          </h1>
          <p className="text-xl sm:text-2xl font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            Explore Every Story.
          </p>
        </div>

        {/* Short Introduction Paragraph */}
        <p className="max-w-2xl text-gray-300 text-sm sm:text-base leading-relaxed">
          Welcome to ScreenVerse — your ultimate destination for exploring movies, TV series, anime, cartoons, and animated stories. Discover rich profiles for actors, voice actors, characters, universes, and watch orders in one place.
        </p>

        {/* Search Bar Container */}
        <div className="w-full pt-4">
          <SearchBarPlaceholder />
        </div>
      </div>
    </section>
  );
}
