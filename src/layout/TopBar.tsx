import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun, FiMoon  } from "react-icons/fi";
import "./TopBar.css";

type Section = {
  id: string;
  label: string;
};

const SECTIONS: Section[] = [
  { id: "sobre", label: "Sobre mim" },
  { id: "formacao", label: "Formação" },
  { id: "portfolio", label: "Portfólio" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
];

export const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("sobre");

  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const measureIndicator = () => {
    const navEl = navRef.current;
    const activeEl = linkRefs.current[activeSection];
    if (!navEl || !activeEl || !isHome) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const navRect = navEl.getBoundingClientRect();
    const linkRect = activeEl.getBoundingClientRect();
    setIndicator({
      x: linkRect.left - navRect.left,
      y: linkRect.top - navRect.top,
      width: linkRect.width,
      height: linkRect.height,
      opacity: 1,
    });
  };

  useEffect(() => {
    measureIndicator();
  }, [activeSection, isHome, menuOpen]);

  useEffect(() => {
    window.addEventListener("resize", measureIndicator);
    return () => window.removeEventListener("resize", measureIndicator);
  }, [activeSection, isHome]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`topbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="topbar">
        <div className="logo">
          <h2 className="logo-text">Diego Triches</h2>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`} ref={navRef}>
          <span
            className="nav-indicator"
            style={{
              transform: `translate(${indicator.x}px, ${indicator.y}px)`,
              width: `${indicator.width}px`,
              height: `${indicator.height}px`,
              opacity: indicator.opacity,
            }}
            aria-hidden="true"
          />
          {SECTIONS.map(({ id, label }) => (
            <Link
              key={id}
              to={`/#${id}`}
              ref={(el) => {
                linkRefs.current[id] = el;
              }}
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
              {theme === "light" ? <FiMoon /> : <FiSun />}
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
