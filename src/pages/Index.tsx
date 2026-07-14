import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fotoperfil from "../assets/fotoperfil.jpg";
import css3 from "../assets/css3.png";
import git from "../assets/git.png";
import html5 from "../assets/html5.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import myexpenses from "../assets/myexpenses.png";
import myhabitstracker from "../assets/myhabitstracker.jpeg";
import "./Index.css";

const CURSOS = [
  {
    titulo: "Introdução ao HTML e CSS",
    plataforma: "Udemy",
    carga: "20h · 2025",
  },
  {
    titulo: "Lógica de Programação com JavaScript",
    plataforma: "Udemy",
    carga: "30h · 2025",
  },
  {
    titulo: "Git e GitHub para Iniciantes",
    plataforma: "Udemy",
    carga: "12h · 2025",
  },
  {
    titulo: "Introdução ao React e TypeScript",
    plataforma: "Udemy",
    carga: "20h · 2025",
  },
];

const IDIOMAS = [
  { nome: "Português", nivel: "Nativo", progresso: 100 },
  { nome: "Inglês", nivel: "Intermediário", progresso: 60 },
  { nome: "Espanhol", nivel: "Básico", progresso: 30 },
];

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
    descricao:
      "Estou trabalhando em algo novo. Em breve haverá mais novidades por aqui!",
    techs: ["???"],
    demo: "#",
    codigo: "#",
  },
];

export const Index = () => {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: "smooth", block: "start" }),
        );
      }
    }
  }, []);

  const projetosFiltrados =
    filtroAtivo === "todos"
      ? PROJETOS
      : PROJETOS.filter((p) => p.categorias.includes(filtroAtivo));

  return (
    <div className="index-page">
      <div>
        {/* HERO / SOBRE */}
        <section id="sobre" className="hero">
          <svg
            className="hero-constellation"
            viewBox="0 0 1000 600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g stroke="var(--line)" strokeWidth="1" fill="var(--dot)">
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
                <span className="icon-download" aria-hidden="true">
                  ↓
                </span>
                Download do CV
              </a>
              <Link to="/contact" className="btn-pill btn-pill-outline">
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

        <section className="section">
          <h2 className="eyebrow">SOBRE MIM</h2>
          <p className="bio">
            Estudante de Análise e Desenvolvimento de Sistemas na Uninter,
            possuo experiência prática no desenvolvimento de aplicações
            utilizando JavaScript, TypeScript, Node.js e React. Atualmente
            residindo no interior do Rio Grande do Sul, Brasil. Tenho projetos
            próprios desenvolvidos desde o protótipo até a implementação, com
            foco em resolver problemas reais e fortalecer meu conhecimento em
            lógica, APIs e banco de dados.
          </p>
          <p className="bio">
            Gosto de criar soluções eficientes, explorar novas tecnologias e
            evoluir de forma gradativa minhas habilidades com o mercado
            tecnológico. Com uma postura proativa e foco em resolução de
            problemas, busco uma oportunidade para demonstrar meu potencial,
            contribuir com projetos relevantes e crescer como desenvolvedor de
            sistemas.
          </p>
        </section>

        <section className="section">
          <h2 className="eyebrow">INFORMAÇÕES</h2>
          <ul className="info-lista">
            <li>
              <span className="label">Nome</span>
              <span className="valor">Diego da Rosa Triches</span>
            </li>
            <li>
              <span className="label">Cidade</span>
              <span className="valor">Farroupilha — RS</span>
            </li>
            <li>
              <span className="label">Curso</span>
              <span className="valor">
                Análise e Desenvolvimento de Sistemas
              </span>
            </li>
            <li>
              <span className="label">Faculdade</span>
              <span className="valor">Uninter</span>
            </li>
            <li>
              <span className="label">E-mail</span>
              <span className="valor">diego.rtriches@gmail.com</span>
            </li>
            <li>
              <span className="label">LinkedIn</span>
              <span className="valor">
                <a
                  href="https://linkedin.com/in/diego-triches"
                  target="_blank"
                  rel="noopener"
                >
                  Acessar ↗
                </a>
              </span>
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="eyebrow">HABILIDADES TÉCNICAS</h2>
          <div className="skills-grid">
            {[
              [html5, "HTML5"],
              [css3, "CSS3"],
              [js, "JavaScript"],
              [git, "Git & Github"],
              [react, "React"],
              [nodejs, "Node.js"],
            ].map(([icon, label]) => (
              <div className="skill-item" key={label}>
                <img src={icon} alt="" width="26" height="26" loading="lazy" />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FORMAÇÃO */}
        <section id="formacao" className="section">
          <h2 className="eyebrow">FORMAÇÃO</h2>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-period">2025 — Presente</span>
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p className="timeline-inst">UNINTER · EAD</p>
              <p className="timeline-desc">
                Curso de graduação com foco em tecnologias da informação e
                desenvolvimento de software, abrangendo desde fundamentos da
                programação até práticas avançadas de engenharia de sistemas.
                Disciplinas relevantes: Algoritmos e Estruturas de Dados, Banco
                de Dados, Fundamentos da Programação Web, Engenharia de
                Software, Redes de Computadores, Sistemas Operacionais,
                Programação Orientada a Objetos e Gestão de Projetos de TI.
              </p>
              <span className="status-badge status-andamento">
                <span className="status-dot" /> Em andamento
              </span>
            </div>

            <div className="timeline-item">
              <span className="timeline-period">2015 — 2022</span>
              <h3>Bacharel em Engenharia Civil</h3>
              <p className="timeline-inst">UNIFTEC · Caxias do Sul</p>
              <p className="timeline-desc">
                Curso de graduação em Engenharia Civil com foco no planejamento,
                projeto e execução de obras e infraestrutura, integrando
                conhecimentos de cálculo estrutural, materiais de construção e
                gestão de projetos, além de ferramentas como CAD, BIM e
                metodologias ágeis de gestão.
              </p>
              <span className="status-badge status-concluido">
                <span className="status-dot" /> Concluído
              </span>
            </div>
          </div>

          <h3 className="subsection-title">Cursos & Certificações</h3>
          <div className="cursos-grid">
            {CURSOS.map((curso) => (
              <div className="curso-card" key={curso.titulo}>
                <h4>{curso.titulo}</h4>
                <p className="curso-meta">📱 Plataforma: {curso.plataforma}</p>
                <p className="curso-meta">⏱ Carga horária: {curso.carga}</p>
              </div>
            ))}
          </div>

          <h3 className="subsection-title">Idiomas</h3>
          <div className="idiomas-lista">
            {IDIOMAS.map((idioma) => (
              <div className="idioma-item" key={idioma.nome}>
                <span className="idioma-nome">{idioma.nome}</span>
                <div className="idioma-barra">
                  <div
                    className="idioma-progresso"
                    style={{ width: `${idioma.progresso}%` }}
                  />
                </div>
                <span className="idioma-nivel">{idioma.nivel}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFÓLIO */}
        <section id="portfolio" className="section">
          <h2 className="eyebrow">PORTFÓLIO</h2>

          <div
            className="filtros"
            role="group"
            aria-label="Filtrar projetos por categoria"
          >
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
              <article
                className={`projeto-card ${projeto.emBreve ? "em-breve" : ""}`}
                key={projeto.id}
              >
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
        {/* CONTATO */}
        <section id="contato" className="section contato-section">
          <h2 className="eyebrow">CONTATO</h2>
          <h3 className="contato-heading">Vamos conversar?</h3>
          <p className="bio">
            Estou em busca de oportunidades como desenvolvedor de sistemas. Se
            você tem um projeto, uma vaga ou só quer trocar uma ideia sobre
            tecnologia, ficarei feliz em conversar.
          </p>
          <div className="contato-links">
            <a
              href="mailto:diego.rtriches@gmail.com"
              className="btn-pill btn-pill-solid"
            >
              ✉️ Enviar e-mail
            </a>
            <a
              href="https://linkedin.com/in/diego-triches"
              target="_blank"
              rel="noopener"
              className="btn-pill btn-pill-outline"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/diegotriches"
              target="_blank"
              rel="noopener"
              className="btn-pill btn-pill-outline"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </div>

      <footer>
        <p>
          &copy; 2025 <strong>Diego da Rosa Triches</strong> · Desenvolvido com
          HTML5, CSS3 e JavaScript ·{" "}
          <a
            href="https://github.com/diegotriches"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};
