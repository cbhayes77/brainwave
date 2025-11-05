import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button.jsx";
import { FaTimes } from "react-icons/fa";

export default function MobileMenu({ open, onClose, links }) {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Close on ESC + lock scroll while open + focus the close button + focus trap
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();

      // Simple focus trap - if tab reaches end, wrap to beginning
      if (e.key === "Tab") {
        const focusableElements = panelRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements?.[0];
        const lastElement = focusableElements?.[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    // Focus close button for accessibility
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" onClick={onClose} />

      {/* Slide-over panel */}
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="absolute right-0 top-0 h-screen w-80 max-w-[80%] bg-black shadow-xl shadow-black/30"
        style={{
          backgroundColor: "#000000",
          borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
          minHeight: "100vh",
        }}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <a href="/" className="flex items-center gap-2" onClick={onClose}>
            <span className="text-white font-semibold">Menu</span>
          </a>
          <Button
            ref={closeBtnRef}
            onClick={onClose}
            variant="secondary"
            size="sm"
            aria-label="Close menu"
            iconOnly={<FaTimes className="w-4 h-4" />}
          />
        </div>

        <nav className="p-4">
          <ul className="space-y-2" role="list">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      "block rounded px-3 py-2 text-sm transition",
                      isActive ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white",
                    ].join(" ")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Contact CTA */}
          <Button as="a" href="/contact" onClick={onClose} variant="primary" className="mt-4 w-full justify-center">
            Contact Me
          </Button>
        </nav>
      </div>
    </div>
  );
}
