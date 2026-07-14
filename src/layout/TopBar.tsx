import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./../context/ThemeContext";
import { FaRegSun, FaRegMoon, FaBars, FaTimes } from "react-icons/fa";
import "./TopBar.css";

const SECTIONS = [
  { id: "sobre", label: "Sobre mim" },
  { id: "formacao", label: "Formação" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contato", label: "Contato" },
];

export const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`topbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="topbar">
        <div className="logo">
          <h2 className="logo-text">Diego Triches</h2>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {SECTIONS.map(({ id, label }) => (
            <Link
              key={id}
              to={`/#${id}`}
              className={`navlink ${isHome && activeSection === id ? "active" : ""}`}
              onClick={(e) => {
                closeMenu();
                if (isHome) {
                  e.preventDefault();
                  scrollToSection(id);
                }
              }}
            >
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title="Alternar tema"
            aria-label="Alternar tema"
          >
            <span key={theme} className="icon-swap">
              {theme === "light" ? <FaRegMoon /> : <FaRegSun />}
            </span>
          </button>

          <button
            className="menu-toggle-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};