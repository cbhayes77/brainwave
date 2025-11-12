import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-white/70">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <FaChevronRight className="w-3 h-3 mx-2 text-white/40" />}
            {item.href ? (
              <Link
                to={item.href}
                className="text-white/70 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
