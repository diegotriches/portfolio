import { Link } from "react-router-dom";
import fotoperfil from "../assets/fotoperfil.jpg";

export const Hero = () => {
  return (
    <section id="sobre" className="hero">
      <svg
        className="hero-constellation"
        viewBox="0 0 1000 600"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="var(--border-color)" strokeWidth="1" fill="var(--border-color)">
          <line x1="620" y1="60" x2="720" y2="140" />
          <line x1="720" y1="140" x2="680" y2="240" />
          <line x1="680" y1="240" x2="800" y2="280" />
          <line x1="800" y1="280" x2="900" y2="200" />
          <line x1="60" y1="380" x2="160" y2="420" />
          <line x1="160" y1="420" x2="140" y2="500" />
          <line x1="140" y1="500" x2="240" y2="540" />
          <line x1="500" y1="500" x2="600" y2="460" />
          <line x1="600" y1="460" x2="700" y2="520" />
          <circle cx="620" cy="60" r="3" />
          <circle cx="720" cy="140" r="3" />
          <circle cx="680" cy="240" r="3" />
          <circle cx="800" cy="280" r="3" />
          <circle cx="900" cy="200" r="3" />
          <circle cx="60" cy="380" r="3" />
          <circle cx="160" cy="420" r="3" />
          <circle cx="140" cy="500" r="3" />
          <circle cx="240" cy="540" r="3" />
          <circle cx="500" cy="500" r="3" />
          <circle cx="600" cy="460" r="3" />
          <circle cx="700" cy="520" r="3" />
          <circle cx="380" cy="90" r="2.5" />
          <circle cx="450" cy="200" r="2.5" />
          <circle cx="920" cy="420" r="2.5" />
          <circle cx="80" cy="150" r="2.5" />
        </g>
      </svg>

      <div className="hero-content">
        <span className="badge">
          <span className="badge-dot" />
          Disponível para trabalho
        </span>

        <h1>
          Diego da Rosa
          <br />
          Triches
        </h1>

        <p className="hero-subtitle">
          Desenvolvedor de Sistemas com foco em aplicações web, APIs e
          soluções práticas com JavaScript, Node.js e React.
        </p>

        <div className="hero-cta">
          <a href="/cv.pdf" className="btn-pill btn-pill-solid">
            <span className="icon-download" aria-hidden="true">↓</span>
            Download do CV
          </a>
          <Link to="/#contato" className="btn-pill btn-pill-outline">
            Contato
          </Link>
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