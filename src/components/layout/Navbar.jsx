import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  { to: "/about", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
      <Container className="flex h-16 items-center">
        {/* Left: Logo/Brand */}
        <div className="flex-1 flex justify-start">
          <a href="/" aria-label="Home - CB Hayes" className="flex items-center gap-2">
            <span className="text-white font-semibold">CB Hayes</span>
          </a>
        </div>

        {/* Center: Nav Links (hide on small screens) */}
        <nav className="flex justify-center flex-none text-center">
          <ul className="hidden md:flex items-center gap-6 body-small">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `transition hover:text-white ${isActive ? "text-white" : ""}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Primary CTA (hide on small screens) */}
        <div className="flex-1 flex justify-end">
          {/* Desktop CTA */}
          <Button as="a" href="/contact" variant="primary" size="sm" className="hidden md:inline-flex">
            Contact Me
          </Button>
          {/* Mobile menu button */}
          <Button
            variant="secondary"
            size="sm"
            className="md:hidden ml-2"
            aria-label="Open menu"
            aria-expanded={open ? "true" : "false"}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            iconOnly={<GiHamburgerMenu className="w-6 h-4" />}
          ></Button>
        </div>
      </Container>

      {/* Mobile slide-over */}
      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </header>
  );
}
