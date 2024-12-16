import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation(); // To highlight the active link

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About The Coaching Program!" },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <Link to="/">The AI Agents Coaching.</Link>
          </div>

          {/* Navigation Links + Button (Right-aligned) */}
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.to}>
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
            <a
              href="https://icancoachyou.online/en/coaches/ahmed-tawfeeq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
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