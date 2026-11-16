const EXPERIENCIAS = [
  {
    periodo: "02/2023 — 06/2026",
    cargo: "Supervisor de Construção",
    empresa: "Construpred Construtora e Incorporadora",
    local: "Caxias do Sul · RS",
    descricao:
      "Acompanhamento de obra de grande porte: edifício residencial de 10 pavimentos. Coordenação de equipes e de múltiplas frentes de trabalho simultâneas, com controle de cronograma, qualidade e recursos. Tomada de decisão e resolução de problemas em campo, com responsabilidade direta por prazos e pela qualidade das entregas.",
  },
  {
    periodo: "Em paralelo à Construpred",
    cargo: "Engenheiro Civil · Projetos residenciais",
    empresa: "Freelance",
    local: "Serra Gaúcha · RS",
    descricao:
      "Elaboração de projetos arquitetônicos residenciais e acompanhamento de três obras, do projeto à entrega. Projetos aprovados em prefeituras de três municípios da Serra Gaúcha, com obras concluídas com sucesso.",
  },
  {
    periodo: "07/2022 — 01/2023",
    cargo: "Estagiário de Instalações",
    empresa: "Global América",
    local: "Caxias do Sul · RS",
    descricao:
      "Acompanhamento de projetos de instalação, atendimento a clientes e coordenação de atividades executadas remotamente.",
  },
  {
    periodo: "01/2022 — 07/2022",
    cargo: "Assistente de Projetos",
    empresa: "Bohm Indústria",
    local: "Caxias do Sul · RS",
    descricao:
      "Modelagem 3D em Revit, otimização de processos de montagem e colaboração entre as equipes de produção e engenharia.",
  },
  {
    periodo: "06/2021 — 12/2021",
    cargo: "Estagiário de Engenharia Civil",
    empresa: "Evolve Engenharia → Grupo Randon",
    local: "Caxias do Sul · RS",
    descricao:
      "Acompanhamento de três obras, coordenando equipes de em média seis pessoas. Acompanhamento da execução de projetos de instalações hidráulicas, elétricas, PPCI e infraestrutura de TI.",
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
          </div>
        ))}
      </div>
    </section>
  );
};
