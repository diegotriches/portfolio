// Experiência e formação: usadas pela seção Trajetória do site e pelo CV.

export type Experiencia = {
  /** Período como aparece no site e no CV. */
  periodo: string;
  cargo: string;
  empresa: string;
  /** Local mostrado no site (o CV não mostra local). */
  local: string;
  /** Tópicos do CV. No site, as experiências `principal` mostram os tópicos como parágrafo. */
  itens: string[];
  /** Principal: aparece completa no site; as demais vão para a lista compacta. */
  principal: boolean;
};

export const EXPERIENCIAS: Experiencia[] = [
  {
    periodo: "02/2023 — 06/2026",
    cargo: "Supervisor de Construção",
    empresa: "Construpred Construtora e Incorporadora",
    local: "Caxias do Sul · RS",
    principal: true,
    itens: [
      "Acompanhamento de obra de grande porte: edifício residencial de 10 pavimentos.",
      "Coordenação de equipes e de múltiplas frentes de trabalho simultâneas, com controle de cronograma, qualidade e recursos.",
      "Tomada de decisão e resolução de problemas em campo, com responsabilidade direta por prazos e pela qualidade das entregas.",
    ],
  },
  {
    periodo: "Em paralelo à Construpred",
    cargo: "Engenheiro Civil · Projetos residenciais",
    empresa: "Freelance",
    local: "Serra Gaúcha · RS",
    principal: true,
    itens: [
      "Elaboração de projetos arquitetônicos residenciais e acompanhamento de três obras, do projeto à entrega.",
      "Projetos aprovados em prefeituras de três municípios da Serra Gaúcha, com obras concluídas com sucesso.",
    ],
  },
  {
    periodo: "07/2022 — 01/2023",
    cargo: "Estagiário de Instalações",
    empresa: "Global América",
    local: "Caxias do Sul · RS",
    principal: false,
    itens: [
      "Acompanhamento de projetos de instalação, atendimento a clientes e coordenação de atividades executadas remotamente.",
    ],
  },
  {
    periodo: "01/2022 — 07/2022",
    cargo: "Assistente de Projetos",
    empresa: "Bohm Indústria",
    local: "Caxias do Sul · RS",
    principal: false,
    itens: [
      "Modelagem 3D em Revit, otimização de processos de montagem e colaboração entre as equipes de produção e engenharia.",
    ],
  },
  {
    periodo: "06/2021 — 12/2021",
    cargo: "Estagiário de Engenharia Civil",
    empresa: "Evolve Engenharia → Grupo Randon",
    local: "Caxias do Sul · RS",
    principal: false,
    itens: [
      "Acompanhamento de três obras, coordenando equipes de em média seis pessoas.",
      "Acompanhamento da execução de projetos de instalações hidráulicas, elétricas, PPCI e infraestrutura de TI.",
    ],
  },
];

export type Formacao = {
  periodo: string;
  titulo: string;
  instituicao: string;
  /** Detalhe curto do site (ex.: "3º semestre"). */
  detalhe: string;
  /** Linha completa do CV. */
  linhaCV: string;
  emAndamento: boolean;
};

export const FORMACAO: Formacao[] = [
  {
    periodo: "2025 — 2027 (previsão)",
    titulo: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Uninter · EAD",
    detalhe: "3º semestre",
    linhaCV: "Uninter | 2025 – em andamento (3º semestre, conclusão prevista para 2027)",
    emAndamento: true,
  },
  {
    periodo: "2015 — 2022",
    titulo: "Bacharel em Engenharia Civil",
    instituicao: "Centro Universitário UNIFTEC · Caxias do Sul",
    detalhe: "Registro ativo no CREA-RS",
    linhaCV: "Centro Universitário UNIFTEC | Concluído em 2022 · Registro ativo no CREA-RS",
    emAndamento: false,
  },
];
