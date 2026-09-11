import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070a11]/80 border-b border-gray-800/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400 group-hover:to-blue-400 transition-colors">
              ScreenVerse
            </span>
          </div>
        </Link>

        {/* Navigation Categories Placeholder */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-300">
          <a
            href="#movies"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-800/50 transition-colors"
          >
            Movies
          </a>
          <a
            href="#series"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-800/50 transition-colors"
          >
            Series
          </a>
          <a
            href="#anime"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-800/50 transition-colors"
          >
            Anime
          </a>
          <a
            href="#animation"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-800/50 transition-colors"
          >
            Animation
          </a>
          <a
            href="#people"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-800/50 transition-colors"
          >
            People
          </a>
          <a
            href="#franchises"
            className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-800/50 transition-colors"
          >
            Franchises
          </a>
        </nav>

        {/* Development Status Badge */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Step 1 Setup
          </span>
        </div>
      </div>
    </header>
  );
}
