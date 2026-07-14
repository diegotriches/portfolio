import { useState } from "react";
import myexpenses from "../assets/myexpenses.png";
import myhabitstracker from "../assets/myhabitstracker.jpeg";

const FILTROS = [
  { id: "todos", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "pessoal", label: "Pessoal" },
];

const PROJETOS = [
  {
    id: "myexpenses",
    categorias: ["web", "pessoal"],
    imagem: myexpenses,
    tag: "Web · Pessoal",
    titulo: "Minhas Despesas",
    descricao:
      "Aplicativo web de gestão financeira pessoal construído para permitir que o usuário gerencie toda a sua vida financeira em um único lugar.",
    techs: ["Next.js 14", "TailwindCSS", "PostgreSQL"],
    demo: "https://myexpenses-app-ten.vercel.app/",
    codigo: "https://github.com/diegotriches/myexpenses-app",
  },
  {
    id: "my-habits-tracker",
    categorias: ["mobile", "pessoal"],
    imagem: myhabitstracker,
    tag: "Mobile · Pessoal",
    titulo: "My Habits Tracker",
    descricao:
      "Aplicativo mobile de rastreamento de hábitos que permite criar e gerenciar hábitos positivos e negativos, com suporte a diferentes tipos de frequência.",
    techs: ["React", "Expo", "Supabase"],
    demo: "https://expo.dev/accounts/d.triches/projects/my-habits-tracker/builds",
    codigo: "https://github.com/diegotriches/my-habits-tracker",
  },
  {
    id: "em-breve",
    categorias: ["pessoal"],
    emBreve: true,
    tag: "Em breve",
    titulo: "Próximo Projeto",
    descricao: "Estou trabalhando em algo novo. Em breve haverá mais novidades por aqui!",
    techs: ["???"],
    demo: "#",
    codigo: "#",
  },
];

export const Portfolio = () => {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const projetosFiltrados =
    filtroAtivo === "todos"
      ? PROJETOS
      : PROJETOS.filter((p) => p.categorias.includes(filtroAtivo));

  return (
    <section id="portfolio" className="section">
      <h2 className="eyebrow">PORTFÓLIO</h2>

      <div className="filtros" role="group" aria-label="Filtrar projetos por categoria">
        {FILTROS.map((f) => (
          <button
            key={f.id}
            className={`btn-filtro ${filtroAtivo === f.id ? "ativo" : ""}`}
            onClick={() => setFiltroAtivo(f.id)}
            aria-pressed={filtroAtivo === f.id}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projetos-grade">
        {projetosFiltrados.map((projeto) => (
          <article className={`projeto-card ${projeto.emBreve ? "em-breve" : ""}`} key={projeto.id}>
            <div className="projeto-thumb">
              {projeto.imagem ? <img src={projeto.imagem} alt="" /> : "🚀"}
            </div>
            <div className="projeto-corpo">
              <span className="projeto-tag">{projeto.tag}</span>
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <div className="projeto-techs">
                {projeto.techs.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="projeto-links">
                <a
                  href={projeto.demo}
                  className="btn-projeto btn-demo"
                  target={projeto.emBreve ? undefined : "_blank"}
                  rel="noopener"
                  aria-disabled={projeto.emBreve}
                >
                  🔗 Acesse
                </a>
                <a
                  href={projeto.codigo}
                  className="btn-projeto btn-codigo"
                  target={projeto.emBreve ? undefined : "_blank"}
                  rel="noopener"
                  aria-disabled={projeto.emBreve}
                >
                  💻 Código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};