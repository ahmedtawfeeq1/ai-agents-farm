import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    // { to: "/about", label: "About The Coaching Program!" },
    { to: "/agents/list", label: "Discover Agents" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">The AI Agents Coaching.</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 md:flex md:items-center md:space-x-6 p-6 md:p-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex md:space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.to} className="mb-4 md:mb-0">
                <Link
                  to={link.to}
                  className={`text-gray-600 hover:text-blue-600 transition duration-300 text-lg font-medium ${
                    location.pathname === link.to
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Call-to-Action Button */}
          <div className="text-center md:inline-block">
            <a
              href="https://wa.me/+201288493425"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
            >
              Let's Talk!
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
