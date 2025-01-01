import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { [key: string]: { to: string; label: string }[] } = {
    en: [
      { to: "/en", label: "Home" },
      { to: "/en/about", label: "About The Coaching Program!" },
      { to: "/en/agents/list", label: "Discover Agents" },
    ],
    ar: [
      { to: "/ar", label: "الرئيسية" },
      { to: "/ar/about", label: "برنامج التدريب" },
      { to: "/ar/agents/list", label: "اكتشف الوكلاء" },
    ],
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLanguageSwitch = (newLang: string) => {
    const currentPath = location.pathname.split("/").slice(2).join("/") || "";
    setLang(newLang);
    navigate(`/${newLang}/${currentPath}`);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to={`/${lang}`}>{lang === "en" ? "The AI Agents Coaching" : "تدريب وكلاء الذكاء الاصطناعي"}</Link>
        </div>

        {/* Language Switcher */}
        <div>
          <select
            value={lang}
            onChange={(e) => handleLanguageSwitch(e.target.value)}
            className="border px-2 py-1 rounded-lg"
          >
            <option value="en">EN</option>
            <option value="ar">العربية</option>
          </select>
        </div>

        {/* Hamburger Menu */}
        <button onClick={toggleMenu} className="md:hidden text-gray-600">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 md:flex md:space-x-6 p-6 md:p-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex md:space-x-6">
            {navLinks[lang].map((link: { to: string; label: string }) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`text-gray-600 hover:text-blue-600 text-lg ${
                    location.pathname === link.to ? "border-b-2 border-blue-600" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;