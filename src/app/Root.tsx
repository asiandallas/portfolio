import { Outlet, NavLink } from "react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastY = useRef(0);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/photography", label: "Photography" },
  ];

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      const delta = y - lastY.current;
      // hide when scrolling down beyond small threshold, show when scrolling up
      if (y > 80 && delta > 8) setHeaderHidden(true);
      else if (delta < -8) setHeaderHidden(false);
      lastY.current = y;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Nav */}
      <header
        className={`sticky top-0 z-50 header-translate ${headerHidden ? 'header-hidden' : ''}`}
        style={{ background: "rgba(8,12,20,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}
      >
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <NavLink
            to="/"
            className="tracking-widest uppercase text-xs"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: "0.2em", color: "var(--foreground)", textDecoration: "none" }}
          >
            KH
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                {to.includes('#') ? (
                  <a href={to} className="text-sm transition-all nav-link">
                    {label}
                  </a>
                ) : (
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) => `text-sm transition-all nav-link ${isActive ? 'active' : ''}`}
                  >
                    {label}
                  </NavLink>
                )}
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
              to.includes('#') ? (
                <a key={to} href={to} onClick={() => setMenuOpen(false)} className="text-sm py-1 nav-link">
                  {label}
                </a>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `text-sm py-1 nav-link ${isActive ? 'active' : ''}`}
                >
                  {label}
                </NavLink>
              )
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
