import { useState } from "react";

const categories = ["All", "Landscape", "Documentary", "Editorial"] as const;
type Category = (typeof categories)[number];

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1612441804231-77a36b284856?w=800&h=600&fit=crop&auto=format",
    alt: "Green mountains under blue sky",
    title: "High Alpine",
    location: "Dolomites, Italy",
    year: "2024",
    category: "Landscape",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1604715686140-d5bef96c8b9d?w=600&h=900&fit=crop&auto=format",
    alt: "Green grass field near lake",
    title: "Still Water",
    location: "Loch Lomond, Scotland",
    year: "2024",
    category: "Landscape",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1466133633688-187f0b492390?w=800&h=500&fit=crop&auto=format",
    alt: "Brown mountain landscape",
    title: "Dry Season",
    location: "Nevada, USA",
    year: "2023",
    category: "Documentary",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?w=800&h=600&fit=crop&auto=format",
    alt: "Grassland beside mountain",
    title: "Meadow Light",
    location: "Wyoming, USA",
    year: "2023",
    category: "Landscape",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=700&h=1050&fit=crop&auto=format",
    alt: "Palm tree near water",
    title: "Coastal Palms",
    location: "Oahu, Hawaii",
    year: "2023",
    category: "Editorial",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1422466654108-5e533f591881?w=800&h=500&fit=crop&auto=format",
    alt: "Grass plains under cloudy sky",
    title: "Overcast Plains",
    location: "Montana, USA",
    year: "2022",
    category: "Documentary",
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
