import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const links = [
    { to: "/about", label: "About Me" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
          <div className="flex-1 text-center md:text-left">
            <a href="/" className="text-white font-semibold text-lg">
              CB Hayes
            </a>
          </div>
          <nav className="flex-none">
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
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
        </div>
      </Container>
    </footer>
  );
}
