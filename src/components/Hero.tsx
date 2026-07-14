import { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import fotoperfil from "../assets/fotoperfil.jpg";

export const Hero = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setContactOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContactOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const goToContactSection = () => {
    setContactOpen(false);
    document
      .getElementById("contato")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="sobre" className="hero">
      <div className="hero-content">
        <span className="badge">
          <span className="badge-dot">
            <span className="badge-dot-ping" />
          </span>
          Disponível para trabalho
        </span>

        <h1>
          Diego da Rosa
          <br />
          Triches
        </h1>

        <p className="hero-subtitle">
          Desenvolvedor de Sistemas com foco em aplicações web, APIs e soluções
          práticas com JavaScript, Node.js e React.
        </p>

        <div className="hero-cta">
          <a href="/cv.pdf" className="btn-pill btn-pill-solid">
            <span className="icon-download" aria-hidden="true">
              ↓
            </span>
            Download do CV
          </a>

          <div className="contact-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className="btn-pill btn-pill-outline"
              onClick={() => setContactOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={contactOpen}
            >
              Contato
            </button>

            {contactOpen && (
              <div className="contact-dropdown-menu" role="menu">
                <a
                  href="mailto:diego.rtriches@gmail.com"
                  className="contact-dropdown-item"
                  role="menuitem"
                >
                  <FaEnvelope aria-hidden="true" />
                  E-mail
                </a>
                <a
                  href="https://linkedin.com/in/diego-triches"
                  target="_blank"
                  rel="noopener"
                  className="contact-dropdown-item"
                  role="menuitem"
                >
                  <FaLinkedin aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/diegotriches"
                  target="_blank"
                  rel="noopener"
                  className="contact-dropdown-item"
                  role="menuitem"
                >
                  <FaGithub aria-hidden="true" />
                  GitHub
                </a>
                <button
                  type="button"
                  className="contact-dropdown-item contact-dropdown-item-ghost"
                  role="menuitem"
                  onClick={goToContactSection}
                >
                  Ver seção completa ↓
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hero-foto-wrap">
        <img
          src={fotoperfil}
          alt="Foto de perfil de Diego da Rosa Triches"
          className="hero-foto"
          width="200"
          height="200"
        />
      </div>
    </section>
  );
};
