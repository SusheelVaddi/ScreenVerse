export default function Footer() {
  return (
    <footer className="bg-[#04060c] border-t border-gray-800/60 py-12 mt-20 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-bold text-white tracking-tight">
              ScreenVerse
            </span>
            <p className="text-xs text-gray-400">Explore Every Story.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
            <span>Movies</span>
            <span>Series</span>
            <span>Anime</span>
            <span>Cartoons</span>
            <span>People</span>
            <span>Franchises</span>
          </div>

          <div className="text-xs text-gray-400 text-center md:text-right">
            <p>© {new Date().getFullYear()} ScreenVerse.</p>
            <p className="mt-0.5 text-gray-400">
              Unified Entertainment Discovery Platform
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
