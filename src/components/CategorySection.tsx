interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeColor?: string;
  items: Array<{
    title: string;
    subtitle: string;
    tag: string;
    description: string;
  }>;
}

export default function CategorySection({
  id,
  title,
  description,
  badge,
  badgeColor = "bg-blue-500/10 text-blue-400 border-blue-500/20",
  items,
}: CategorySectionProps) {
  return (
    <section id={id} className="py-10 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-3 border-b border-gray-800/80 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {title}
            </h2>
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeColor}`}
            >
              {badge}
            </span>
          </div>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <span className="text-xs text-gray-400 font-mono">
          Data Integration: Step 3+
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-[#0e1424] border border-gray-800/80 rounded-xl p-5 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  {item.tag}
                </span>
                <span className="text-[11px] text-gray-400 font-mono">
                  Placeholder
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 mb-3 font-medium">
                {item.subtitle}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-800/50 flex items-center justify-between text-xs text-gray-400">
              <span>View details</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
