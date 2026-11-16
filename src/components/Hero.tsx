import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import fotoperfil from "../assets/fotoperfil.jpg";

const ETIQUETAS = [
  "📍 Farroupilha · RS",
  "Remoto ou presencial",
  "Inglês B2",
  "CREA-RS ativo",
];

const REDES = [
  { href: "https://github.com/diegotriches", label: "GitHub", icon: FaGithub },
  { href: "https://linkedin.com/in/diego-triches", label: "LinkedIn", icon: FaLinkedin },
  { href: "mailto:diego.rtriches@gmail.com", label: "E-mail", icon: FaEnvelope },
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
          Disponível para trabalho remoto
        </span>

        <h1>
          Diego da Rosa
          <br />
          Triches
        </h1>

        <p className="hero-role">
          Desenvolvedor Full Stack | Engenheiro Civil (CREA ativo)
        </p>

        <p className="hero-subtitle">
          Construo aplicações completas, do modelo de dados ao deploy, com
          TypeScript, React, Next.js e PostgreSQL.
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
