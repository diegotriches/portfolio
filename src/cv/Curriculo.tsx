import type { ReactNode } from "react";
import { COMPETENCIAS, PERFIL } from "../data/perfil";
import { PROJETOS } from "../data/projetos";
import { EXPERIENCIAS, FORMACAO } from "../data/trajetoria";

/** Mostra a URL sem "https://" e sem barra final, como no CV impresso. */
const semProtocolo = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const Link = ({ href, children }: { href: string; children?: ReactNode }) => (
  <a href={href}>{children ?? semProtocolo(href)}</a>
);

export const Curriculo = () => {
  return (
    <main className="cv">
      <header className="cv-cabecalho">
        <h1>{PERFIL.nome}</h1>
        <p className="cv-titulo">{PERFIL.titulo}</p>
        <p className="cv-contato">
          <span>{PERFIL.cidade}</span>
          <span>{PERFIL.telefone}</span>
          <Link href={`mailto:${PERFIL.email}`}>{PERFIL.email}</Link>
        </p>
        <p className="cv-contato">
          <span>{PERFIL.idioma}</span>
          <span>{PERFIL.disponibilidadeCurta}</span>
        </p>
        <p className="cv-contato">
          <Link href={PERFIL.links.linkedin} />
          <Link href={PERFIL.links.github} />
          <Link href={PERFIL.links.portfolio} />
        </p>
      </header>

      <section>
        <h2>Sobre</h2>
        <p>{PERFIL.sobre.join(" ")}</p>
      </section>

      <section>
        <h2>Competências técnicas</h2>
        <ul className="cv-competencias">
          {COMPETENCIAS.map(({ grupo, itens }) => (
            <li key={grupo}>
              <strong>{grupo}:</strong> {itens}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projetos pessoais</h2>
        <p className="cv-nota">{PERFIL.notaIA}</p>
        {PROJETOS.map((projeto) => (
          <article className="cv-entrada" key={projeto.slug}>
            <h3>
              {projeto.titulo}
              <span className="cv-subtitulo"> · {projeto.curriculo.subtitulo}</span>
            </h3>
            <ul>
              {projeto.curriculo.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="cv-meta">
              <strong>Stack:</strong> {projeto.curriculo.stack}
            </p>
            <p className="cv-meta cv-links">
              {projeto.demo && (
                <span>
                  <strong>Deploy:</strong> <Link href={projeto.demo} />
                </span>
              )}
              {projeto.codigo && (
                <span>
                  <strong>GitHub:</strong> <Link href={projeto.codigo} />
                </span>
              )}
              <span>
                <strong>Estudo de caso:</strong>{" "}
                <Link href={`${PERFIL.links.portfolio}projetos/${projeto.slug}`} />
              </span>
            </p>
          </article>
        ))}
      </section>

      <section>
        <h2>Experiência profissional</h2>
        {EXPERIENCIAS.map((exp) => (
          <article className="cv-entrada" key={exp.cargo}>
            <div className="cv-linha">
              <h3>
                {exp.cargo} <span className="cv-subtitulo">· {exp.empresa}</span>
              </h3>
              <span className="cv-periodo">{exp.periodo}</span>
            </div>
            <ul>
              {exp.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <h2>Formação acadêmica</h2>
        {FORMACAO.map((f) => (
          <article className="cv-entrada cv-formacao" key={f.titulo}>
            <h3>{f.titulo}</h3>
            <p>{f.linhaCV}</p>
          </article>
        ))}
      </section>
    </main>
  );
};
