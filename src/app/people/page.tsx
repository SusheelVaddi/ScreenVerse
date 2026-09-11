import { MOCK_PEOPLE } from "@/data/mockData";
import { PersonCard } from "@/components/ContentCard";

export default function PeoplePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white">
            People & Talent Directory
          </h1>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Cast & Crew Profiles
          </span>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          Actors, voice actors (Seiyuu), directors, writers, creators, and composers behind your favorite titles.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {MOCK_PEOPLE.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}
