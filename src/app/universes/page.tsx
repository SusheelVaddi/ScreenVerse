import FranchiseTimelinePreview from "@/components/FranchiseTimelinePreview";

export default function UniversesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white">
            Universes & Franchises
          </h1>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Timeline Hub
          </span>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          Interactive franchise timelines, release order vs. chronological watch guides, and entity connections.
        </p>
      </div>

      <FranchiseTimelinePreview />
    </div>
  );
}
