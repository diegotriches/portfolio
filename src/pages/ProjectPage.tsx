import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { buscarProjeto, type Imagem } from "../data/projetos";
import { Footer } from "../components/Footer";
import { useRevelar } from "../hooks/useRevelar";
import "./Index.css";
import "./ProjectPage.css";

export const ProjectPage = () => {
  const { slug } = useParams();
  const projeto = buscarProjeto(slug);

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [ampliada, setAmpliada] = useState<Imagem | null>(null);
  useRevelar(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (projeto) document.title = `${projeto.titulo} | Diego Triches`;
    return () => {
      document.title = "Portfólio | Diego Triches";
    };
  }, [projeto]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (ampliada && !dialog.open) dialog.showModal();
    if (!ampliada && dialog.open) dialog.close();
  }, [ampliada]);

  if (!projeto) return <Navigate to="/" replace />;

  const { estudo } = projeto;
  // Capturas ainda não feitas só aparecem (como espaço reservado) em desenvolvimento.
  const galeria = estudo.galeria.filter((img) => img.src || import.meta.env.DEV);

  return (
    <div className="index-page projeto-pagina">
      <main>
        <header className="section projeto-cabecalho">
          <Link to="/#portfolio" className="voltar">
            ← Voltar ao portfólio
          </Link>
          <span className="projeto-tag">{projeto.tag}</span>
          <h1>{projeto.titulo}</h1>
          <p className="projeto-periodo">{estudo.periodo}</p>
          <p className="projeto-resumo">{projeto.descricao}</p>

          {projeto.numeros && (
            <ul className="projeto-numeros" aria-label="Números do projeto">
              {projeto.numeros.map((numero) => (
                <li key={numero}>{numero}</li>
              ))}
            </ul>
          )}

          <div className="projeto-links">
            {projeto.demo && (
              <a
                href={projeto.demo}
                className="btn-projeto btn-demo"
                target="_blank"
                rel="noopener"
              >
                🔗 Acesse o app
              </a>
            )}
            {projeto.codigo && (
              <a
                href={projeto.codigo}
                className="btn-projeto btn-codigo"
                target="_blank"
                rel="noopener"
              >
                💻 Código no GitHub
              </a>
            )}
          </div>
        </header>

        <section className="section">
          <h2 className="eyebrow">O PROJETO</h2>
          {estudo.contexto.map((paragrafo) => (
            <p className="bio" key={paragrafo}>
              {paragrafo}
            </p>
          ))}
          <ul className="lista-check">
            {estudo.funcionalidades.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {(estudo.videos?.length || galeria.length > 0) && (
          <section className="section">
            <h2 className="eyebrow">TELAS</h2>

            {estudo.videos && (
              <div className="projeto-videos">
                {estudo.videos.map((video) => (
                  <figure key={video.src}>
                    <video
                      src={video.src}
                      poster={video.poster}
                      controls
                      muted
                      playsInline
                      preload="none"
                    />
                    <figcaption>{video.legenda}</figcaption>
                  </figure>
                ))}
              </div>
            )}

            {galeria.length > 0 && (
              <div className="projeto-galeria">
                {galeria.map((img) =>
                  img.src ? (
                    <figure key={img.legenda}>
                      <button
                        type="button"
                        className="galeria-item"
                        onClick={() => setAmpliada(img)}
                        aria-label={`Ampliar: ${img.legenda}`}
                      >
                        <img src={img.src} alt={img.legenda} loading="lazy" />
                      </button>
                      <figcaption>{img.legenda}</figcaption>
                    </figure>
                  ) : (
                    <figure key={img.legenda}>
                      <div className="galeria-pendente">Captura pendente</div>
                      <figcaption>{img.legenda}</figcaption>
                    </figure>
                  ),
                )}
              </div>
            )}
          </section>
        )}

        <section className="section">
          <h2 className="eyebrow">ARQUITETURA</h2>
          <div className="camadas">
            {estudo.arquitetura.map((camada) => (
              <div className="camada" key={camada.nome}>
                <h3>{camada.nome}</h3>
                <p>{camada.descricao}</p>
              </div>
            ))}
          </div>
          <div className="projeto-techs">
            {projeto.techs.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="eyebrow">DESAFIOS TÉCNICOS</h2>
          <div className="desafios">
            {estudo.desafios.map((desafio, i) => (
              <article className="desafio" key={desafio.titulo}>
                <h3>
                  <span className="desafio-numero">{i + 1}</span>
                  {desafio.titulo}
                </h3>
                <dl>
                  <dt>Problema</dt>
                  <dd>{desafio.problema}</dd>
                  <dt>Solução</dt>
                  <dd>{desafio.solucao}</dd>
                  <dt>Resultado</dt>
                  <dd>{desafio.resultado}</dd>
                </dl>
                {desafio.codigo && (
                  <div className="codigo">
                    <div className="codigo-cabecalho">
                      <span>{desafio.codigo.arquivo}</span>
                      {desafio.codigo.link && (
                        <a href={desafio.codigo.link} target="_blank" rel="noopener">
                          Ver arquivo completo ↗
                        </a>
                      )}
                    </div>
                    <pre>
                      <code>{desafio.codigo.trecho}</code>
                    </pre>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="projeto-duas-colunas">
            <div>
              <h2 className="eyebrow">OUTRAS DECISÕES</h2>
              <ul className="lista-check">
                {estudo.outrasDecisoes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">QUALIDADE</h2>
              <ul className="lista-check">
                {estudo.qualidade.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="eyebrow">USO DE IA</h2>
          <p className="bio">
            Desenvolvido com apoio de IA (Claude Code). Eu defini os requisitos e
            as decisões de produto e arquitetura, revisei e integrei cada
            mudança, executei as migrations e validei tudo com testes
            automatizados e testes manuais.
          </p>
        </section>

        <section className="section">
          <h2 className="eyebrow">LIMITAÇÕES E PRÓXIMOS PASSOS</h2>
          <ul className="lista-simples">
            {estudo.limitacoes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to="/#portfolio" className="voltar voltar-rodape">
            ← Voltar ao portfólio
          </Link>
        </section>
      </main>
      <Footer />

      <dialog
        ref={dialogRef}
        className="galeria-dialog"
        onClose={() => setAmpliada(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setAmpliada(null);
        }}
      >
        {ampliada?.src && (
          <figure>
            <img src={ampliada.src} alt={ampliada.legenda} />
            <figcaption>{ampliada.legenda}</figcaption>
          </figure>
        )}
        <button
          type="button"
          className="galeria-fechar"
          onClick={() => setAmpliada(null)}
          aria-label="Fechar"
        >
          ✕
        </button>
      </dialog>
    </div>
  );
};
