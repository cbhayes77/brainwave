import { NavLink } from "react-router-dom";
import Container from "../ui/Container.jsx";

const links = [
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/how-to-use", label: "How to Use" },
  { to: "/roadmap", label: "Roadmap" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Left: Logo/Brand */}
        <a href="/" className="flex items-center gap-2">
          <span
            className="inline-block h-6 w-6 rounded bg-white/80"
            aria-hidden
          />
          <span className="text-white font-semibold">Brainwave</span>
        </a>

        {/* Center: Nav Links (hide on small screens) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-white/80">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition hover:text-white ${
                      isActive ? "text-white" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* Right: Primary CTA (hide on small screens) */}
        <a
          href="/sign-up"
          className="hidden md:inline-block rounded-lg px-4 py-2 text-sm font-medium text-black bg-white hover:opacity-90 transition hover:scale-[1.05]"
        >
          Get Started
        </a>
        {/* Mobile Menu Toggle (show on small screens) */}
        <button
          className="md:hidden inline-flex items-center justify-center founded px-3 py-2 ring-1 ring-white/30 text-white/90"
          aria-label="Open menu"
        >
          ☰
        </button>
      </Container>
    </header>
  );
}
