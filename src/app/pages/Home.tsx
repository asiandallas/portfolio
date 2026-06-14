export function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <p
            className="tracking-widest uppercase text-xs mb-6"
            style={{
              fontFamily: "inherit",
              background: "linear-gradient(90deg, #5eaeff, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Hi! My name is
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "inherit",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "0.02em",
              color: "var(--foreground)",
            }}
          >
            Kyrstn <span
              style={{
                background: "linear-gradient(135deg, #5eaeff 0%, #38bdf8 50%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hall
            </span>
          </h1>
          <p
            className="leading-relaxed"
            style={{ color: "var(--muted-foreground)", fontSize: "1.05rem", maxWidth: "38ch" }}
          >
            Software Engineer based in San Francisco
          </p>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Glow behind photo */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{
                background: "radial-gradient(ellipse, #5eaeff 0%, #38bdf8 40%, transparent 70%)",
                transform: "scale(1.2)",
              }}
            />
            <div
              className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden"
              style={{
                borderRadius: "4px",
                border: "1px solid rgba(94, 174, 255, 0.2)",
              }}
            >
              <img
                src="public/images/photos/homepage.jpeg"
                alt="Kyrstn Hall portrait"
                className="w-full h-full object-cover"
              />
              {/* Blue tint overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 50%, rgba(8,12,20,0.6) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
