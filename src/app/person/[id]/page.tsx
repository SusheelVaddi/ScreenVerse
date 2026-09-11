import Link from "next/link";
import { MOCK_PEOPLE } from "@/data/mockData";

export default async function PersonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const person = MOCK_PEOPLE.find((p) => p.id === id) || MOCK_PEOPLE[0];

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f5f3ef] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Navigation back */}
        <Link
          href="/people"
          className="inline-flex items-center gap-2 text-xs text-amber-400 hover:underline font-mono"
        >
          ← Back to People Directory
        </Link>

        {/* Person Hero Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start bg-[#0e111a] border border-gray-800 rounded-3xl p-6 sm:p-8">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-amber-500/30 flex-shrink-0 shadow-2xl">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 flex-grow">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 capitalize">
                {person.role.replace("_", " ")}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white">
              {person.name}
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl font-light">
              {person.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-400 border-t border-gray-800">
              <div>
                <span className="text-gray-400">Awards: </span>
                <span className="text-amber-300">{person.awards.join(" • ")}</span>
              </div>
              <div>
                <span className="text-gray-400">Collaborations: </span>
                <span className="text-gray-200">{person.collaborations.join(" • ")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Roles & Characters Played */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-serif text-white">
            Characters Played & Major Roles
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {person.charactersPlayed.length > 0 ? (
              person.charactersPlayed.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0e111a] border border-gray-800 hover:border-amber-500/40 transition-all"
                >
                  <span className="text-xs font-mono text-amber-400">{item.year}</span>
                  <h4 className="text-base font-bold text-white mt-1">
                    {item.character}
                  </h4>
                  <p className="text-xs text-gray-400">in {item.title}</p>
                </div>
              ))
            ) : (
              <div className="p-4 rounded-2xl bg-[#0e111a] border border-gray-800 text-xs text-gray-400">
                Directorial / Creator filmography details listed below.
              </div>
            )}
          </div>
        </div>

        {/* Known For Works */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-serif text-white">Notable Filmography</h3>
          <div className="flex flex-wrap gap-2">
            {person.knownFor.map((title) => (
              <span
                key={title}
                className="px-4 py-2 rounded-xl bg-[#121624] text-xs font-semibold text-gray-200 border border-gray-800"
              >
                🎬 {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
