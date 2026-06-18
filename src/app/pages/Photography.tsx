import { useState } from "react";

const categories = ["All", "Digital", "Film", "Portraits"] as const;
type Category = (typeof categories)[number];

const photos = [
  {
    id: 1,
    url: "public/images/photos/film/bay-bridge.jpg",
    alt: "Bay bridge with bird",
    title: "Gloomy Bay Bridge with Bird",
    location: "San Francisco, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 2,
    url: "public/images/photos/film/car.jpg",
    alt: "Becky in the car",
    title: "Roadtrip to Yosmite",
    location: "Yosemite, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 3,
    url: "public/images/photos/film/carmel.jpg",
    alt: "View from car",
    title: "Roadtrip to Carmel",
    location: "Carmel, CA",
    year: "2026",
    category: "Film",
  },
  {
    id: 4,
    url: "public/images/photos/film/castro.jpg",
    alt: "Castro Street in San Francisco",
    title: "Castro Street",
    location: "San Francisco, CA",
    year: "2026",
    category: "Film",
  },
  {
    id: 5,
    url: "public/images/photos/film/disneyland.jpg",
    alt: "Tea cup ride at Disneyland",
    title: "Tea Cup Ride",
    location: "Disneyland, CA",
    year: "2026",
    category: "Film",
  },
  {
    id: 6,
    url: "public/images/photos/film/golden-gate-bridge.jpg",
    alt: "Golden Gate Bridge",
    title: "Golden Gate Bridge",
    location: "San Francisco, CA",
    year: "2026",
    category: "Film",
  },
  {
    id: 7,
    url: "public/images/photos/film/park.jpg",
    alt: "Park with friends",
    title: "Park with Friends",
    location: "San Francisco, CA",
    year: "2026",
    category: "Documentary",
  },
  {
    id: 8,
    url: "public/images/photos/film/rooftop.jpg",
    alt: "DJ at rooftop",
    title: "Rooftop Party with DJ",
    location: "San Francisco, CAA",
    year: "2025",
    category: "Film",
  },
  {
    id: 9,
    url: "public/images/photos/film/rooftop-2.jpg",
    alt: "Golden gate bridge from rooftop",
    title: "Rooftop Party with Bridge View",
    location: "San Francisco, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 10,
    url: "public/images/photos/film/santa-cruz.jpg",
    alt: "Santa Cruz Boardwalk",
    title: "Santa Cruz Boardwalk",
    location: "Santa Cruz, CA",
    year: "2026",
    category: "Film",
  },
  {
    id: 11,
    url: "public/images/photos/film/sutro-baths.jpg",
    alt: "Sutro Baths",
    title: "Sutro Baths",
    location: "San Francisco, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 12,
    url: "public/images/photos/film/yosemite.jpg",
    alt: "View from Glacier Point",
    title: "Glacier Point",
    location: "Yosemite, CA",
    year: "2025",
    category: "Film",
  },
    {
    id: 13,
    url: "public/images/photos/film/yosemite-2.jpg",
    alt: "Hiking in Yosemite",
    title: "Hiking in Yosemite",
    location: "Yosemite, CA",
    year: "2025",
    category: "Film",
  },
    {
    id: 14,
    url: "public/images/photos/film/point-reyes.jpg",
    alt: "Point Reyes",
    title: "Point Reyes",
    location: "Point Reyes, CA",
    year: "2024",
    category: "Film",
  },
  {
    id: 15,
    url: "public/images/photos/film/california-st.jpg",
    alt: "View of California Street in San Francisco",
    title: "California Street",
    location: "San Francisco, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 16,
    url: "public/images/photos/digital/Empire-State-Building.jpg",
    alt: "Empire State Building",
    title: "Empire State Building",
    location: "New York City, NY",
    year: "2025",
    category: "Digital",
  },
    {
    id: 17,
    url: "public/images/photos/digital/iceberg.jpg",
    alt: "Iceberg",
    title: "Iceberg",
    location: "Juneau, AK",
    year: "2022",
    category: "Digital",
  },
    {
    id: 18,
    url: "public/images/photos/digital/Mt-Fuji.jpg",
    alt: "Mount Fuji",
    title: "Mount Fuji",
    location: "Japan",
    year: "2026",
    category: "Digital",
  },
    {
    id: 19,
    url: "public/images/photos/digital/neon.jpg",
    alt: "Neon lights in Tokyo",
    title: "Tokyo Neon",
    location: "Tokyo, Japan",
    year: "2026",
    category: "Digital",
  },
    {
    id: 20,
    url: "public/images/photos/digital/senso-ji.jpg",
    alt: "Senso-ji Temple in Tokyo",
    title: "Senso-ji Temple",
    location: "Tokyo, Japan",
    year: "2026",
    category: "Digital",
  },
];

export function Photography() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p
            className="tracking-widest uppercase text-xs mb-5"
            style={{
              fontFamily: "inherit",
              background: "linear-gradient(90deg, #5eaeff, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Portfolio
          </p>
          <h1
            style={{
              fontFamily: "inherit",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "0.02em",
              color: "var(--foreground)",
            }}
          >
            Photography
          </h1>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 text-xs tracking-widest uppercase transition-all"
              style={{
                fontFamily: "inherit",
                background: activeCategory === cat
                  ? "linear-gradient(135deg, #5eaeff, #38bdf8)"
                  : "transparent",
                color: activeCategory === cat ? "#080c14" : "var(--muted-foreground)",
                border: activeCategory === cat ? "1px solid transparent" : "1px solid var(--border)",
                borderRadius: "2px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-3">
        {filtered.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid mb-3 relative overflow-hidden cursor-pointer group"
            style={{
              borderRadius: "4px",
              border: "1px solid rgba(94,174,255,0.08)",
            }}
            onMouseEnter={() => setHovered(photo.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full block transition-transform duration-500"
              style={{ transform: hovered === photo.id ? "scale(1.04)" : "scale(1)" }}
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300"
              style={{
                background: "linear-gradient(to top, rgba(8,12,20,0.85) 0%, transparent 60%)",
                opacity: hovered === photo.id ? 1 : 0,
              }}
            >
              <p
                style={{
                  fontFamily: "inherit",
                  color: "#eef2ff",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}
              >
                {photo.title}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(94,174,255,0.8)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {photo.location} · {photo.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
