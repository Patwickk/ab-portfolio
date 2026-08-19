import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border-b border-yellow-400/20 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl font-bold text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            My Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden gap-6 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-yellow-400 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-yellow-400/20 pt-4 md:hidden">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;