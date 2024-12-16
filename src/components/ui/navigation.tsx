import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for Hamburger and Close

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About The Coaching Program!" },
    { to: "/agents/list", label: "Discover Agents" },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <Link to="/">The AI Agents Coaching.</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-gray-600 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`absolute md:relative top-16 left-0 w-full md:w-auto bg-white md:flex space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block text-gray-600 hover:text-blue-600 transition duration-300 text-lg font-medium ${
                    location.pathname === link.to
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Call-to-Action Button for Mobile */}
            <li className="block md:hidden">
              <a
                href="https://wa.me/+201288493425"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg block text-center hover:bg-blue-700 transition duration-300"
              >
                Let's Talk!
              </a>
            </li>
          </ul>

          {/* Call-to-Action Button (Visible only on larger screens) */}
          <a
            href="https://wa.me/+201288493425"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Let's Talk!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
