import { useState, useContext, createContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Language Context
interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

// Language Provider Component
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

const Navigation = () => {
  const location = useLocation();
  const { lang, setLang } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: {
    [key: string]: { to: string; label: string }[];
  } = {
    en: [
      { to: "/", label: "Home" },
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

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">{lang === "en" ? "The AI Agents Coaching." : "تدريب وكلاء الذكاء الاصطناعي"}</Link>
        </div>

        {/* Language Switcher */}
        <div className="md:inline-block">
          <select
            className="text-gray-600 border px-2 py-1 rounded-lg"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="ar">العربية</option>
          </select>
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
            {navLinks[lang].map((link) => (
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
              {lang === "en" ? "Let's Talk!" : "تواصل معنا!"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;