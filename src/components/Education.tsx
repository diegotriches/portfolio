const CURSOS = [
  { titulo: "Introdução ao HTML e CSS", plataforma: "Udemy", carga: "20h · 2025" },
  { titulo: "Lógica de Programação com JavaScript", plataforma: "Udemy", carga: "30h · 2025" },
  { titulo: "Git e GitHub para Iniciantes", plataforma: "Udemy", carga: "12h · 2025" },
  { titulo: "Introdução ao React e TypeScript", plataforma: "Udemy", carga: "20h · 2025" },
];

const IDIOMAS = [
  { nome: "Inglês", nivel: "Intermediário", progresso: 60 },
  { nome: "Espanhol", nivel: "Básico", progresso: 30 },
];

export const Education = () => {
  return (
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
              <div className="idioma-progresso" style={{ width: `${idioma.progresso}%` }} />
            </div>
            <span className="idioma-nivel">{idioma.nivel}</span>
          </div>
        ))}
      </div>
    </section>
  );
};