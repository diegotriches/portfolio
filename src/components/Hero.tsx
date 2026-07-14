import { Link } from "react-router-dom";
import fotoperfil from "../assets/fotoperfil.jpg";

export const Hero = () => {
  return (
    <section id="sobre" className="hero">
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