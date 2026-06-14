export function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
      {/* Header removed as requested */}

      <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">
        {/* Photo */}
        <div className="md:col-span-2">
          <div className="relative">
            <div
              className="absolute inset-0 blur-2xl opacity-20"
              style={{
                background: "linear-gradient(135deg, #5eaeff, #38bdf8)",
                borderRadius: "4px",
                transform: "scale(0.95) translateY(8px)",
              }}
            />
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "4px",
                border: "1px solid rgba(94, 174, 255, 0.15)",
                aspectRatio: "3/4",
              }}
            >
              <img
                src="public/images/photos/about-me.jpeg"
                alt="Kyrstn Hall"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(8,12,20,0.5) 100%)" }}
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="md:col-span-3 space-y-6">
          <p
            className="leading-relaxed"
            style={{ color: "var(--foreground)", fontSize: "1.05rem", fontFamily: "'DM Sans', sans-serif" }}
          >
            I’m Kyrstn Hall — a software engineer based in San Francisco, California.
            I graduated from CSUSM in 2024 with a degree in Computer Information Systems and moved to San Francisco shortly after to begin my career at Wells Fargo. My interest in programming started in high school, where I discovered how rewarding it was to turn ideas into real products and solve complex problems through code.
            During college, I worked as a Computer Science tutor for three years, helping students build confidence in programming and problem-solving. It was one of the experiences that strengthened both my technical and communication skills while inspiring me to build more full-stack projects of my own.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--muted-foreground)", fontFamily: "'DM Sans', sans-serif" }}>
            Today, I work on the Branch Attributes team within Consumer Technology, supporting the systems that power branch and ATM information across the bank. My work spans backend development, APIs, cloud-native applications, automated testing, CI/CD pipelines, and observability. I’ve worked with technologies including Java/Spring, C#/.NET, MongoDB, SQL, OpenShift to build and maintain reliable services at scale.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--muted-foreground)", fontFamily: "'DM Sans', sans-serif" }}>
          Outside of software engineering, photography has been my favorite hobby. You’ll usually find me exploring San Francisco with a film or digital camera, documenting city life, travel, and the small moments that often go unnoticed. You can also see me searching for a new food spot, trying a new recipe, walking, practicing Japanese, speedcubing, or planning my next trip.          </p>
        </div>
      </div>
    </div>
  );
}
