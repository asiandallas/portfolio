import { Outlet, NavLink } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Root() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/photography", label: "Photography" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Nav */}
      <header
        className="sticky top-0 z-50"
        style={{ background: "rgba(8,12,20,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}
      >
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <NavLink
            to="/"
            className="tracking-widest uppercase text-xs"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: "0.2em", color: "var(--foreground)", textDecoration: "none" }}
          >
            Kyrstn Hall
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className="text-sm transition-all"
                  style={({ isActive }) => ({
                    color: isActive ? "var(--primary)" : "var(--muted-foreground)",
                    textDecoration: "none",
                    fontWeight: isActive ? 500 : 400,
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", color: "var(--foreground)", cursor: "pointer" }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6 flex flex-col gap-5"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className="text-sm py-1"
                style={({ isActive }) => ({
                  color: isActive ? "var(--primary)" : "var(--muted-foreground)",
                  textDecoration: "none",
                })}
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer
        className="py-8 text-center text-xs tracking-widest uppercase"
        style={{ color: "var(--muted-foreground)", borderTop: "1px solid var(--border)" }}
      >
        © 2026 Kyrstn Hall
      </footer>
    </div>
  );
}
