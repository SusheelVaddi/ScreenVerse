import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  const sectionsData = [
    {
      id: "movies",
      title: "Movies",
      description: "Feature films, blockbusters, independent cinema, and classics.",
      badge: "Feature Films",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      items: [
        {
          title: "Feature Films Directory",
          subtitle: "Cast, Directors, Box Office & Media",
          tag: "Cinema",
          description:
            "Exploration pages for movies with cast lists, synopses, trailers, crew profiles, and streaming availability.",
        },
        {
          title: "Cinematic Universes",
          subtitle: "Connected Movie Collections",
          tag: "Franchises",
          description:
            "Track multi-movie sagas, prequels, sequels, spin-offs, and interconnected storylines.",
        },
        {
          title: "Curated Recommendations",
          subtitle: "Genre & Director Spotlights",
          tag: "Discovery",
          description:
            "Discover movies by decade, country, mood, awards, runtime, and critical reception.",
        },
      ],
    },
    {
      id: "series",
      title: "TV & Web Series",
      description: "Episodic shows, web series, miniseries, and seasonal storylines.",
      badge: "Episodic Content",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      items: [
        {
          title: "Series & Season Guide",
          subtitle: "Episodes, Air Dates & Descriptions",
          tag: "Shows",
          description:
            "Detailed breakdowns of seasons, episode guides, guest appearances, and creator details.",
        },
        {
          title: "Web Series & Specials",
          subtitle: "Digital & Streaming Exclusives",
          tag: "Digital",
          description:
            "Track standalone specials, limited web series, and streaming original productions.",
        },
        {
          title: "Episode Watch Trackers",
          subtitle: "Progress & Viewing Status",
          tag: "Tracking",
          description:
            "Keep track of watched episodes, season progress, and upcoming episode releases.",
        },
      ],
    },
    {
      id: "anime",
      title: "Anime",
      description: "Anime series, movies, OVAs, ONAs, arcs, and source material.",
      badge: "Japanese Animation",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      items: [
        {
          title: "Arcs & Sagas Exploration",
          subtitle: "Original vs English Titles & Voice Actors",
          tag: "Anime Guide",
          description:
            "Dedicated support for story arcs, filler identification, OVAs, ONAs, and voice actor filmographies.",
        },
        {
          title: "Voice Cast & Characters",
          subtitle: "Seiyuu Mappings & Character Lore",
          tag: "Seiyuu Mappings",
          description:
            "Connect characters with their original Japanese voice actors and localized voice artists.",
        },
        {
          title: "Manga & Source Context",
          subtitle: "Adaptation Information",
          tag: "Source Material",
          description:
            "Understand adaptation timelines, light novel origins, and canon storylines.",
        },
      ],
    },
    {
      id: "animation",
      title: "Animation & Cartoons",
      description: "Animated features, classic cartoons, family series, and shorts.",
      badge: "Cartoons & Features",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      items: [
        {
          title: "Animated Classics & Shorts",
          subtitle: "Studio Collections & Short Films",
          tag: "Animation",
          description:
            "Explore timeless animated works, studio catalogs, short films, and groundbreaking techniques.",
        },
        {
          title: "Family & Cartoon Series",
          subtitle: "Age-Appropriate Entertainment",
          tag: "Cartoons",
          description:
            "Browse animated television shows, cartoon universes, and character-driven stories.",
        },
        {
          title: "Kids Visual Mode",
          subtitle: "Safe & Friendly Interface",
          tag: "Kids Mode",
          description:
            "Visual discovery experience tailored for younger audiences with strong privacy controls.",
        },
      ],
    },
    {
      id: "people",
      title: "Popular People",
      description: "Actors, voice actors, directors, writers, creators, and composers.",
      badge: "Cast & Crew Profiles",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      items: [
        {
          title: "Comprehensive Filmographies",
          subtitle: "Career Timelines & Roles",
          tag: "Filmography",
          description:
            "Detailed career histories, characters played across live-action and voice roles, awards, and upcoming projects.",
        },
        {
          title: "Voice Actors & Creators",
          subtitle: "Behind the Scenes Talent",
          tag: "Creators",
          description:
            "Spotlight directors, showrunners, seiyuu, writers, composers, and studio visionaries.",
        },
        {
          title: "Collaborations & Achievements",
          subtitle: "Industry Connections",
          tag: "Insights",
          description:
            "Discover frequent director-actor collaborations, franchise participation, and career milestones.",
        },
      ],
    },
    {
      id: "franchises",
      title: "Franchises & Universes",
      description: "Interactive universes, chronological timelines, and watch orders.",
      badge: "Watch Orders & Timelines",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      items: [
        {
          title: "Interactive Universe Maps",
          subtitle: "Marvel, Star Wars, Anime Universes & More",
          tag: "Universes",
          description:
            "Visualize complex story universes, spin-offs, side stories, and interconnected character webs.",
        },
        {
          title: "Custom Viewing Guides",
          subtitle: "Release vs Chronological Order",
          tag: "Watch Orders",
          description:
            "Follow community and expert-recommended watch orders tailored for new and veteran fans.",
        },
        {
          title: "Character Connection Trees",
          subtitle: "Entity Graphing",
          tag: "Relationships",
          description:
            "Explore how characters relate to actors, titles, spin-offs, and overarching franchise sagas.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      {/* Hero Section with Search Bar Placeholder */}
      <HeroSection />

      {/* Main Category Sections */}
      <div className="space-y-12 mt-8">
        {sectionsData.map((section) => (
          <CategorySection
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            badge={section.badge}
            badgeColor={section.badgeColor}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
}
