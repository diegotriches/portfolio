type Experiencia = {
  periodo: string;
  cargo: string;
  empresa: string;
  local: string;
  /** Sem descrição, a experiência aparece na versão compacta (uma linha). */
  descricao?: string;
};

const EXPERIENCIAS: Experiencia[] = [
  {
    periodo: "02/2023 — 06/2026",
    cargo: "Supervisor de Construção",
    empresa: "Construpred Construtora e Incorporadora",
    local: "Caxias do Sul · RS",
    descricao:
      "Acompanhamento de obra de grande porte: edifício residencial de 10 pavimentos. Coordenação de equipes e de múltiplas frentes de trabalho simultâneas, com controle de cronograma, qualidade e recursos, e responsabilidade direta por prazos e pela qualidade das entregas.",
  },
  {
    periodo: "Em paralelo à Construpred",
    cargo: "Engenheiro Civil · Projetos residenciais",
    empresa: "Freelance",
    local: "Serra Gaúcha · RS",
    descricao:
      "Elaboração de projetos arquitetônicos residenciais e acompanhamento de três obras, do projeto à entrega. Projetos aprovados em prefeituras de três municípios da Serra Gaúcha.",
  },
  {
    periodo: "07/2022 — 01/2023",
    cargo: "Estagiário de Instalações",
    empresa: "Global América",
    local: "Caxias do Sul · RS",
  },
  {
    periodo: "01/2022 — 07/2022",
    cargo: "Assistente de Projetos",
    empresa: "Bohm Indústria",
    local: "Caxias do Sul · RS",
  },
  {
    periodo: "06/2021 — 12/2021",
    cargo: "Estagiário de Engenharia Civil",
    empresa: "Evolve Engenharia → Grupo Randon",
    local: "Caxias do Sul · RS",
  },
];

const FORMACAO = [
  {
    periodo: "2025 — 2027 (previsão)",
    titulo: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Uninter · EAD",
    detalhe: "3º semestre",
    emAndamento: true,
  },
  {
    periodo: "2015 — 2022",
    titulo: "Bacharel em Engenharia Civil",
    instituicao: "Centro Universitário UNIFTEC · Caxias do Sul",
    detalhe: "Registro ativo no CREA-RS",
    emAndamento: false,
  },
];

export const Trajectory = () => {
  const principais = EXPERIENCIAS.filter((e) => e.descricao);
  const anteriores = EXPERIENCIAS.filter((e) => !e.descricao);

  return (
    <section id="trajetoria" className="section">
      <p className="eyebrow">TRAJETÓRIA</p>
      <h2 className="section-title">Experiência e formação</h2>

      <div className="trajetoria-grid">
        <div>
          <h3 className="coluna-titulo">Experiência</h3>
          <div className="timeline">
            {principais.map((exp) => (
              <div className="timeline-item" key={exp.cargo}>
                <span className="timeline-period">{exp.periodo}</span>
                <h4>{exp.cargo}</h4>
                <p className="timeline-inst">
                  {exp.empresa} · {exp.local}
                </p>
                <p className="timeline-desc">{exp.descricao}</p>
              </div>
            ))}

            <div className="timeline-item">
              <span className="timeline-period">2021 — 2023</span>
              <h4>Estágios e início de carreira</h4>
              <ul className="timeline-compacta">
                {anteriores.map((exp) => (
                  <li key={exp.cargo}>
                    <strong>{exp.cargo}</strong>
                    <span>
                      {exp.empresa} · {exp.periodo}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="coluna-titulo">Formação</h3>
          <div className="timeline">
            {FORMACAO.map((f) => (
              <div className="timeline-item" key={f.titulo}>
                <span className="timeline-period">{f.periodo}</span>
                <h4>{f.titulo}</h4>
                <p className="timeline-inst">{f.instituicao}</p>
                <span
                  className={`status-badge ${f.emAndamento ? "status-andamento" : "status-concluido"}`}
                >
                  <span className="status-dot" /> {f.emAndamento ? `Em andamento · ${f.detalhe}` : `Concluído · ${f.detalhe}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
