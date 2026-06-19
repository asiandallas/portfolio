import { useState } from "react";

const categories = ["All", "Digital", "Film", "Portraits"] as const;
type Category = (typeof categories)[number];

const photos = [
  {
    id: 1,
    url: "/images/photos/film/bay-bridge.jpg",
    alt: "Gloomy Bay bridge with bird",
    title: "Gloomy Bay Bridge",
    location: "San Francisco, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 2,
    url: "/images/photos/film/car.jpg",
    alt: "Becky in the car",
    title: "Roadtrip to Yosmite",
    location: "Yosemite, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 3,
    url: "/images/photos/film/carmel.jpg",
    alt: "View from car",
    title: "Roadtrip to Carmel",
    location: "Carmel, CA",
    year: "2026",
    category: "Film",
  },
  {
    id: 4,
    url: "/images/photos/film/castro.jpg",
    alt: "The Castro",
    title: "The Castro",
    location: "San Francisco, CA",
    year: "2026",
    category: "Film",
  },
  {
    id: 5,
    url: "/images/photos/film/disneyland.jpg",
    alt: "Tea cup ride at Disneyland",
    title: "Mad Tea Party",
    location: "Disneyland",
    year: "2026",
    category: "Film",
  },
  {
    id: 6,
    url: "/images/photos/film/golden-gate-bridge.jpg",
    alt: "Golden Gate Bridge",
    title: "Golden Gate Bridge",
    location: "San Francisco, CA",
    year: "2026",
    category: "Film",
  },
  {
    id: 7,
    url: "/images/photos/film/park.jpg",
    alt: "Park with friends",
    title: "Park with Friends",
    location: "San Francisco, CA",
    year: "2026",
    category: "Film",
  },
  {
    id: 8,
    url: "/images/photos/film/rooftop.jpg",
    alt: "DJ at rooftop",
    title: "Rooftop Party",
    location: "San Francisco, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 9,
    url: "/images/photos/film/rooftop-2.jpg",
    alt: "Golden gate bridge from rooftop",
    title: "Golden Gate Bridge from Rooftop",
    location: "San Francisco, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 10,
    url: "/images/photos/film/santa-cruz.jpg",
    alt: "Santa Cruz Boardwalk",
    title: "Santa Cruz Boardwalk",
    location: "Santa Cruz, CA",
    year: "2026",
    category: "Film",
  },
  {
    id: 11,
    url: "/images/photos/film/sutro-baths.jpg",
    alt: "Sutro Baths",
    title: "Sutro Baths",
    location: "San Francisco, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 12,
    url: "/images/photos/film/yosemite.jpg",
    alt: "View from Glacier Point",
    title: "Glacier Point",
    location: "Yosemite, CA",
    year: "2025",
    category: "Film",
  },
    {
    id: 13,
    url: "/images/photos/film/yosemite-2.jpg",
    alt: "Hiking in Yosemite",
    title: "Hiking in Yosemite",
    location: "Yosemite, CA",
    year: "2025",
    category: "Film",
  },
    {
    id: 14,
    url: "/images/photos/film/point-reyes.jpg",
    alt: "Point Reyes",
    title: "Point Reyes",
    location: "Point Reyes, CA",
    year: "2024",
    category: "Film",
  },
  {
    id: 15,
    url: "/images/photos/film/california-st.jpg",
    alt: "View of California Street in San Francisco",
    title: "California Street",
    location: "San Francisco, CA",
    year: "2025",
    category: "Film",
  },
  {
    id: 16,
    url: "/images/photos/digital/Empire-State-Building.jpg",
    alt: "Empire State Building",
    title: "Empire State Building",
    location: "New York City, NY",
    year: "2025",
    category: "Digital",
  },
    {
    id: 17,
    url: "/images/photos/digital/iceberg.JPG",
    alt: "Iceberg",
    title: "Iceberg",
    location: "Alaska",
    year: "2022",
    category: "Digital",
  },
    {
    id: 18,
    url: "/images/photos/digital/Mt-Fuji.JPG",
    alt: "Mount Fuji",
    title: "Mount Fuji",
    location: "Japan",
    year: "2026",
    category: "Digital",
  },
    {
    id: 19,
    url: "/images/photos/digital/neon.jpg",
    alt: "Neon lights in Tokyo",
    title: "Shiinamachi Station",
    location: "Tokyo, Japan",
    year: "2026",
    category: "Digital",
  },
    {
    id: 20,
    url: "/images/photos/digital/senso-ji.JPG",
    alt: "Senso-ji Temple in Tokyo",
    title: "Senso-ji Temple",
    location: "Tokyo, Japan",
    year: "2026",
    category: "Digital",
  },
  {
    id: 21,
    url: "/images/photos/portraits/becky.jpg",
    alt: "Becky with a camera",
    title: "Becky - SF Photowalk",
    location: "San Francisco, CA",
    year: "2026",
    category: "Portraits",
  },
    {
    id: 22,
    url: "/images/photos/portraits/becky2.jpg",
    alt: "Becky at the beach",
    title: "Becky - Carmel Beach",
    location: "San Francisco, CA",
    year: "2026",
    category: "Portraits",
  },
  {
    id: 23,
    url: "/images/photos/portraits/jonnette.jpg",
    alt: "Jonnette grad shoot",
    title: "Jonnette - Grad Shoot",
    location: "San Marcos, CA",
    year: "2024",
    category: "Portraits",
  },
  {
    id: 24,
    url: "/images/photos/portraits/jonnette2.jpg",
    alt: "Jonnette grad shoot",
    title: "Jonnette - Grad Shoot",
    location: "San Marcos, CA",
    year: "2024",
    category: "Portraits",
  },
  {
    id: 25,
    url: "/images/photos/digital/train-driver.JPG",
    alt: "Train driver",
    title: "Arashiyama Station",
    location: "Kyoto, Japan",
    year: "2026",
    category: "Digital",
  },
  {
    id: 26,
    url: "/images/photos/digital/jr-train.JPG",
    alt: "JR Train",
    title: "JR Train",
    location: "Kyoto, Japan",
    year: "2026",
    category: "Digital",
  },
  {
    id: 27,
    url: "/images/photos/digital/boat-ride.JPG",
    alt: "Hozugawa River Boat Ride",
    title: "Hozugawa River Boat Ride",
    location: "Kameoka, Japan",
    year: "2026",
    category: "Digital",
  },
  {
    id: 28,
    url: "/images/photos/digital/alaska-mountains.JPG",
    alt: "Alaska Mountains",
    title: "Alaska Mountains",
    location: "Alaska",
    year: "2022",
    category: "Digital",
  },
  {
    id: 29,    
    url: "/images/photos/digital/nyc-bw.jpg",
    alt: "New York City in Black and White",
    title: "NYC B&W",
    location: "New York City, NY",
    year: "2025",
    category: "Digital",
  },
  {
    id: 30,
    url: "/images/photos/digital/sf-skyline.JPG",
    alt: "San Francisco Skyline",
    title: "SF Skyline Night",
    location: "San Francisco, CA",
    year: "2020",
    category: "Digital",
  },
  {
    id: 31,
    url: "/images/photos/film/shinjuku.jpg",
    alt: "Shinjuku, Tokyo",
    title: "Shinjuku Lights",
    location: "Tokyo, Japan",
    year: "2026", 
    category: "Film",
  },
  {
    id: 32,
    url: "/images/photos/portraits/julia.jpg",
    alt: "JF grad shoot",
    title: "Julia - Grad Shoot",
    location: "San Marcos, CA",
    year: "2024",
    category: "Portraits",
  },
  {
    id: 33,
    url: "/images/photos/portraits/michelle.jpg",
    alt: "Michelle at meta office",
    title: "Michelle - Office",
    location: "San Francisco, CA",
    year: "2026",
    category: "Portraits",
  },
  {
    id: 34,
    url: "/images/photos/portraits/sri.jpg",
    alt: "Sri",
    title: "Sri",
    location: "San Francisco, CA",
    year: "2026",
    category: "Portraits",
  },
  {
    id: 35,
    url: "/images/photos/portraits/sri2.jpg",
    alt: "Sri work headshot",
    title: "Sri - Headshot",
    location: "San Francisco, CA",
    year: "2024",
    category: "Portraits",
  },
  {
    id: 36,
    url: "/images/photos/portraits/marina-christina.jpg",
    alt: "Marina and Christina grad shoot",
    title: "Marina & Christina  - Grad Shoot",
    location: "San Diego, CA",
    year: "2024",
    category: "Portraits",
  },
];

export function Photography() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const captions: Partial<Record<Category, string>> = {
    Digital: "Cameras: Sony a6700, Canon EOS Rebel SL2\nLens: Sigma 18-50mm f/2.8, Canon 50mm f/1.8, f/2.8,Canon EF 75-300mm f/4-5.6 III",
    Film: "Cameras: Canon AE-1, Minolta P (Riva Panorama)\nFilms: Kodak Gold 200, Kodak Ultramax 400, Fujifilm 400\nSome are scanned by me :)",
    Portraits: "Mainly taken with Canon 50mm or Sigma 18-50mm",
  };

  const activeCaption = activeCategory !== "All" ? captions[activeCategory] ?? "" : "";
  const captionLines = activeCaption ? activeCaption.split("\n") : [];

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
          {activeCategory !== "All" && activeCaption && (
            <p
              style={{
                marginTop: "2rem",      
                fontFamily: "'DM Sans', sans-serif",
                color: "var(--muted-foreground)",
                fontSize: "0.95rem",
                maxWidth: "70ch",
              }}
            >
              {captionLines.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < captionLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
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
