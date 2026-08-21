const EXPERIENCIAS = [
  {
    periodo: "2023 — 2026",
    cargo: "Supervisor de Construção",
    empresa: "Construpred Construtora e Incorporadora",
    local: "Caxias do Sul · RS",
    descricao:
      "Responsável pelo acompanhamento e gestão de obra de edifício residencial de 10 pavimentos, atuando no gerenciamento de equipes, controle de cronograma, qualidade, estoque e múltiplas frentes de trabalho.",
    status: "Concluído",
    statusClass: "status-concluido",
  },
  {
    periodo: "2022 — 2023",
    cargo: "Estagiário de Instalações",
    empresa: "Global América",
    local: "Caxias do Sul · RS",
    descricao:
      "Atuação em projetos de sistemas de proteção contra incêndio, acompanhando instalações e execução de projetos para grandes clientes. Experiência com comunicação, coordenação e acompanhamento remoto de projetos.",
    status: "Concluído",
    statusClass: "status-concluido",
  },
  {
    periodo: "2022 — 2022",
    cargo: "Assistente de Projetos",
    empresa: "Bohm Indústria",
    local: "Caxias do Sul · RS",
    descricao:
      "Atuação no desenvolvimento e otimização de processos de montagem de estruturas de aço. Utilização de modelagem 3D com Revit para criação de projetos detalhados, facilitando a compreensão e execução dos processos produtivos.",
    status: "Concluído",
    statusClass: "status-concluido",
  },
  {
    periodo: "2021 — 2022",
    cargo: "Estagiário de Engenharia Civil",
    empresa: "Evolve Engenharia → Grupo Randon",
    local: "Caxias do Sul · RS",
    descricao:
      "Acompanhamento de obras e gerenciamento de equipes em campo. Participação em reforma de pavilhões e outras instalações no Grupo Randon, envolvendo serviços como: instalações hidráulicas, elétricas, PPCI e infraestrutura de TI.",
    status: "Concluído",
    statusClass: "status-concluido",
  },
];

export const Experience = () => {
  return (
    <section id="experiencia" className="section">
      <h2 className="eyebrow">EXPERIÊNCIA</h2>

      <div className="timeline">
        {EXPERIENCIAS.map((experiencia) => (
          <div className="timeline-item" key={`${experiencia.empresa}-${experiencia.periodo}`}>
            <span className="timeline-period">{experiencia.periodo}</span>

            <h3>{experiencia.cargo}</h3>

            <p className="timeline-inst">
              {experiencia.empresa} · {experiencia.local}
            </p>

            <p className="timeline-desc">{experiencia.descricao}</p>

            <span className={`status-badge ${experiencia.statusClass}`}>
              <span className="status-dot" /> {experiencia.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};