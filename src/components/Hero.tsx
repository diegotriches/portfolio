import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import fotoperfil from "../assets/fotoperfil.jpg";
import { PERFIL } from "../data/perfil";

const ETIQUETAS = [
  "📍 Farroupilha · RS",
  "Remoto ou presencial",
  PERFIL.idioma,
];

const REDES = [
  { href: PERFIL.links.github, label: "GitHub", icon: FaGithub },
  { href: PERFIL.links.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: `mailto:${PERFIL.email}`, label: "E-mail", icon: FaEnvelope },
];

export const Hero = () => {
  const irParaProjetos = () => {
    document
      .getElementById("portfolio")
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

        <p className="hero-role">
          {PERFIL.titulo}
        </p>

        <p className="hero-subtitle">
          Construo aplicações completas, do modelo de dados ao deploy, com
          TypeScript, React, Node.js e PostgreSQL.
        </p>

        <ul className="hero-etiquetas" aria-label="Informações rápidas">
          {ETIQUETAS.map((etiqueta) => (
            <li key={etiqueta}>{etiqueta}</li>
          ))}
        </ul>

        <div className="hero-cta">
          <button
            type="button"
            className="btn-pill btn-pill-solid"
            onClick={irParaProjetos}
          >
            Ver projetos
          </button>

          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download="Diego_da_Rosa_Triches_CV.pdf"
            className="btn-pill btn-pill-outline"
          >
            <span className="icon-download" aria-hidden="true">
              ↓
            </span>
            Download do CV
          </a>

          <div className="hero-redes">
            {REDES.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="btn-icone"
                aria-label={label}
                title={label}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
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
