import { NavLink } from "react-router-dom";
import Container from "../ui/Container.jsx";

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
      </Container>
    </header>
  );
}
