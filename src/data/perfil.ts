// Fonte oficial dos dados pessoais e do currículo. O site e o CV (cv.html →
// public/cv.pdf) leem daqui: mudou aqui, rode `npm run cv`.

export const PERFIL = {
  nome: "Diego da Rosa Triches",
  titulo: "Desenvolvedor Full Stack | Engenheiro Civil",
  cidade: "Farroupilha, RS",
  telefone: "(54) 9 9904-0694",
  email: "diego.rtriches@gmail.com",
  idioma: "Inglês B2",
  disponibilidadeCurta: "Disponível para trabalho remoto ou presencial",
  disponibilidade:
    "Remoto · presencial em Farroupilha · presencial ou híbrido em Caxias do Sul e Bento Gonçalves",
  links: {
    linkedin: "https://linkedin.com/in/diego-triches",
    github: "https://github.com/diegotriches",
    portfolio: "https://diegotriches.github.io/portfolio/",
  },
  /** Parágrafos do "Sobre": no site viram dois parágrafos, no CV um só. */
  sobre: [
    "Desenvolvedor full stack em formação (Análise e Desenvolvimento de Sistemas, Uninter) e engenheiro civil com mais de três anos liderando obras. Trabalho com JavaScript, TypeScript, React, Node.js e SQL, e desenvolvi duas aplicações completas, uma web e uma mobile, do modelo de dados ao deploy.",
    "Da engenharia, trago gestão de equipes e cronogramas, responsabilidade técnica e o hábito de resolver problemas reais sob pressão. Busco minha primeira posição como desenvolvedor. Em produtos ligados à construção civil, arquitetura e engenharia, essa experiência de campo me permite agregar ainda mais.",
  ],
  /** Como o uso de IA é apresentado (site e CV usam o mesmo texto). */
  notaIA:
    "Os dois projetos foram desenvolvidos com apoio de IA (Claude Code). Eu defini os requisitos e as decisões de produto e arquitetura, revisei e integrei cada mudança, executei as migrations e validei tudo com testes automatizados e testes manuais.",
};

/**
 * Competências como aparecem no CV (o site mostra a grade de ícones em Skills.tsx).
 * Nivelamento definido com o Diego (17/11/2026): só o que ele usa com segurança vai
 * em título, apresentação e competências principais; o resto aparece como
 * "usei nos projetos, nível básico". Não promover itens de nível sem ele confirmar.
 */
export const COMPETENCIAS: { grupo: string; itens: string }[] = [
  { grupo: "Linguagens", itens: "JavaScript (ES6+), TypeScript, SQL, HTML e CSS" },
  { grupo: "Frontend e back-end", itens: "React, Node.js, APIs REST, PostgreSQL" },
  {
    grupo: "Ferramentas",
    itens: "Git e GitHub (branches por tipo e commits semânticos), desenvolvimento assistido por IA (Claude Code)",
  },
  {
    grupo: "Usei nos projetos (nível básico)",
    itens:
      "Next.js, Tailwind CSS, Supabase, Drizzle ORM, React Native e Expo, Vitest e Jest, GitHub Actions, Java (módulo nativo Android), Python",
  },
  { grupo: "Engenharia e projeto", itens: "Revit (modelagem 3D), projetos arquitetônicos residenciais" },
];
