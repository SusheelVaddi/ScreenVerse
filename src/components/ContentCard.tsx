import Link from "next/link";
import { MediaItem, PersonItem } from "@/data/mockData";

interface ContentCardProps {
  item: MediaItem;
  variant?: "poster" | "horizontal" | "spotlight";
}

export function PosterCard({ item }: { item: MediaItem }) {
  return (
    <Link href={`/${item.type}/${item.id}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden bg-[#0d0f17] border border-gray-800/80 group-hover:border-amber-500/50 transition-all duration-300 shadow-lg group-hover:shadow-amber-500/10 group-hover:-translate-y-1">
        {/* Poster Image */}
        <div className="aspect-[2/3] w-full relative overflow-hidden bg-gray-900">
          <img
            src={item.poster}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Type Badge */}
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-400 border border-amber-500/30">
            {item.type}
          </span>

          {/* Rating Badge */}
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-xs font-bold bg-amber-500 text-black shadow-sm">
            ★ {item.rating}
          </span>
        </div>

        {/* Info Content */}
        <div className="p-4 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>{item.year}</span>
            <span>{item.duration || `${item.seasons} Seasons`}</span>
          </div>
          <h3 className="text-base font-bold text-[#f5f3ef] group-hover:text-amber-300 transition-colors line-clamp-1">
            {item.title}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-1">
            {item.genres.join(" • ")}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function HorizontalCard({ item }: { item: MediaItem }) {
  return (
    <Link href={`/${item.type}/${item.id}`} className="group block">
      <div className="flex gap-4 p-3 rounded-2xl bg-[#0d0f17] border border-gray-800/80 group-hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl">
        <div className="w-24 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-gray-900 relative">
          <img
            src={item.poster}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex flex-col justify-center space-y-1 min-w-0 flex-grow">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {item.type}
            </span>
            <span className="text-xs text-gray-400">{item.year}</span>
            <span className="text-xs font-bold text-amber-400">★ {item.rating}</span>
          </div>
          <h4 className="text-base font-bold text-[#f5f3ef] group-hover:text-amber-300 transition-colors truncate">
            {item.title}
          </h4>
          <p className="text-xs text-gray-400 line-clamp-2">{item.synopsis}</p>
          <div className="text-[11px] text-amber-400/80 font-mono pt-1">
            Roles: {item.characters.slice(0, 2).join(", ")}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function PersonCard({ person }: { person: PersonItem }) {
  return (
    <Link href={`/person/${person.id}`} className="group block text-center">
      <div className="bg-[#0e111a] border border-gray-800/80 group-hover:border-amber-500/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-amber-500/5">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3 border-2 border-gray-700 group-hover:border-amber-400 transition-colors shadow-lg">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <h4 className="text-base font-bold text-[#f5f3ef] group-hover:text-amber-300 transition-colors">
          {person.name}
        </h4>
        <p className="text-xs text-amber-400/90 font-medium capitalize mt-0.5">
          {person.role.replace("_", " ")}
        </p>
        <p className="text-xs text-gray-400 line-clamp-1 mt-2">
          Known for: {person.knownFor.slice(0, 2).join(", ")}
        </p>
      </div>
    </Link>
  );
}
