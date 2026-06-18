// src/components/Home.tsx
import { Linkedin, Github, Instagram, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

export function Home() {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const connectorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const els: Element[] = [];
    if (imgRef.current) els.push(imgRef.current);
    if (textRef.current) els.push(textRef.current);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => {
      el.classList.add("reveal");
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;

    function update() {
      if (!heroRef.current || !connectorRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const windowH = window.innerHeight || document.documentElement.clientHeight;
      const progress = Math.min(Math.max((windowH - heroRect.bottom) / windowH, 0), 1);
      const translate = progress * 18;
      const blur = progress * 6;
      const opacity = Math.max(0, Math.min(1, progress * 1.2));

      connectorRef.current.style.transform = `translateY(-${translate}px)`;
      connectorRef.current.style.filter = `blur(${blur}px)`;
      connectorRef.current.style.opacity = `${opacity}`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <section ref={heroRef} className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-36 w-full">
          <div className="grid md:grid-cols-[auto_15rem] gap-20 md:gap-30 items-center justify-center">
            <div>
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
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                  color: "var(--foreground)",
                }}
              >
                Kyrstn{" "}
                <span
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
                style={{
                  color: "var(--muted-foreground)",
                  fontSize: "1.05rem",
                  maxWidth: "38ch",
                }}
              >
                Software Engineer based in San Francisco
              </p>

              <div className="mt-6 flex items-center gap-6">
                <a
                  href="https://www.linkedin.com/in/kyrstnhall/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(94,174,255,0.15), rgba(56,189,248,0.15))",
                      border: "1px solid rgba(94,174,255,0.2)",
                    }}
                  >
                    <Linkedin size={16} />
                  </div>
                </a>

                <a
                  href="https://github.com/asiandallas"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(94,174,255,0.15), rgba(56,189,248,0.15))",
                      border: "1px solid rgba(94,174,255,0.2)",
                    }}
                  >
                    <Github size={16} />
                  </div>
                </a>

                <a
                  href="https://instagram.com/kyrstn.jpeg"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(94,174,255,0.15), rgba(56,189,248,0.15))",
                      border: "1px solid rgba(94,174,255,0.2)",
                    }}
                  >
                    <Instagram size={16} />
                  </div>
                </a>

                <a
                  href="mailto:kyrstn.hall@gmail.com"
                  className="social-icon"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(94,174,255,0.15), rgba(56,189,248,0.15))",
                      border: "1px solid rgba(94,174,255,0.2)",
                    }}
                  >
                    <Mail size={16} />
                  </div>
                </a>
              </div>
            </div>

            <div className="order-2 md:order-2 flex md:justify-start md:-ml-10 justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{
                    background: "radial-gradient(ellipse, #5eaeff 0%, #38bdf8 40%, transparent 70%)",
                    transform: "scale(1.2)",
                  }}
                />
                <div
                  className="relative w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-full"
                  style={{
                    border: "1px solid rgba(94, 174, 255, 0.2)",
                  }}
                >
                  <img
                    src="/images/photos/homepage/homepage.jpeg"
                    alt="Kyrstn Hall portrait"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(to bottom, transparent 50%, rgba(8,12,20,0.6) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={connectorRef} className="connector" />

      <section
        id="about"
        className="mt-12 md:mt-20 min-h-screen flex items-center"
        style={{ scrollMarginTop: "5rem" }}
      >
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <p
              className="tracking-widest uppercase text-xs mb-0"
              style={{ color: "#38bdf8", fontWeight: 700, fontFamily: "inherit" }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-start md:-ml-8">
              <div
                ref={imgRef}
                className="w-64 h-64 md:w-96 md:h-96 overflow-hidden bg-muted rounded-md"
              >
                <img
                  src="/images/photos/homepage/about-me.jpeg"
                  alt="About - Kyrstn Hall"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div ref={textRef}>
              <p
                className="tracking-widest uppercase text-xs mb-5 text-left"
                style={{
                  fontFamily: "inherit",
                  color: "#38bdf8",
                  fontWeight: 700,
                }}
              >
                ABOUT ME
              </p>

              <div className="space-y-6">
                <p
                  className="leading-relaxed"
                  style={{
                    color: "var(--foreground)",
                    fontSize: "1.05rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  I graduated from CSUSM in 2024 with a degree in Computer Information Systems and
                  now work at Wells Fargo, where I build and maintain backend services, APIs, and
                  cloud-native applications 👩🏻‍💻
                </p>

                <p
                  className="leading-relaxed"
                  style={{
                    color: "var(--foreground)",
                    fontSize: "1.05rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Outside of work, you’ll usually find me exploring San Francisco with a film or
                  digital camera, documenting city life, travel, and the small moments that often go
                  unnoticed. You can also see me searching for a new food spot, walking, practicing
                  Japanese, speedcubing, or planning my next trip (Iceland and Taiwan is next!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}