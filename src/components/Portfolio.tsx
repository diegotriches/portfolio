import { Link } from "react-router-dom";
import { PROJETOS } from "../data/projetos";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <p className="eyebrow">PROJETOS</p>
      <h2 className="section-title">Projetos em destaque</h2>

      <p className="projetos-nota">
        Os dois projetos foram desenvolvidos com apoio de IA (Claude Code). Eu
        defini os requisitos e as decisões de produto e arquitetura, revisei e
        integrei cada mudança, executei as migrations e validei tudo com testes
        automatizados e testes manuais.
      </p>

      <div className="projetos-lista">
        {PROJETOS.map((projeto) => (
          <article className="projeto-card" key={projeto.slug}>
            <div className={`projeto-thumb ${projeto.imagemAjuste === "contain" ? "thumb-contain" : ""}`}>
              <img src={projeto.imagem} alt={projeto.imagemAlt} />
            </div>
            <div className="projeto-corpo">
              <span className="projeto-tag">{projeto.tag}</span>
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>

              {projeto.numeros && (
                <ul className="projeto-numeros" aria-label="Números do projeto">
                  {projeto.numeros.map((numero) => (
                    <li key={numero}>{numero}</li>
                  ))}
                </ul>
              )}


              <div className="projeto-techs">
                {projeto.techs.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="projeto-links">
                <Link
                  to={`/projetos/${projeto.slug}`}
                  className="btn-projeto btn-demo"
                >
                  Ver detalhes
                </Link>
                {projeto.demo && (
                  <a
                    href={projeto.demo}
                    className="btn-projeto btn-codigo"
                    target="_blank"
                    rel="noopener"
                  >
                    🔗 Acesse
                  </a>
                )}
                {projeto.codigo && (
                  <a
                    href={projeto.codigo}
                    className="btn-projeto btn-codigo"
                    target="_blank"
                    rel="noopener"
                  >
                    💻 Código
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
