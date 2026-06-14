import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const links = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Kyrstn Hall",
    href: "https://www.linkedin.com/in/kyrstnhall/",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "asiandallas",
    href: "https://github.com/asiandallas",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@kyrstn.jpeg",
    href: "https://instagram.com/kyrstn.jpeg",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "kyrstn.hall@gmail.com",
    href: "mailto:kyrstn.hall@gmail.com",
  },
];

export function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
      <div className="mb-16">
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
          Contact
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
          Get in touch
        </h1>
      </div>

      <div className="flex flex-col" style={{ borderTop: "1px solid var(--border)" }}>
        {links.map(({ icon: Icon, label, handle, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-7 transition-all"
            style={{
              borderBottom: "1px solid var(--border)",
              textDecoration: "none",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.paddingLeft = "12px";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.paddingLeft = "0px";
            }}
          >
            <div className="flex items-center gap-5">
              <div
                className="w-9 h-9 flex items-center justify-center rounded"
                style={{
                  background: "linear-gradient(135deg, rgba(94,174,255,0.15), rgba(56,189,248,0.15))",
                  border: "1px solid rgba(94,174,255,0.2)",
                }}
              >
                <Icon size={16} style={{ color: "var(--primary)" }} />
              </div>
              <span
                className="tracking-widest uppercase text-xs"
                style={{ color: "var(--muted-foreground)", fontFamily: "inherit", fontWeight: 600 }}
              >
                {label}
              </span>
            </div>
            <span
              style={{
                fontFamily: "inherit",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--foreground)",
                transition: "color 0.2s",
              }}
              className="group-hover:text-primary"
            >
              {handle}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
