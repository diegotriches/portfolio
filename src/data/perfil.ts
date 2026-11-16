// Fonte oficial dos dados pessoais e do currículo. O site e o CV (cv.html →
// public/cv.pdf) leem daqui: mudou aqui, rode `npm run cv`.

export const PERFIL = {
  nome: "Diego da Rosa Triches",
  titulo: "Desenvolvedor Full Stack | Engenheiro Civil (CREA ativo)",
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
    "Desenvolvedor full stack em formação (Análise e Desenvolvimento de Sistemas, Uninter) e engenheiro civil com mais de três anos liderando obras. Construo e mantenho aplicações completas, web e mobile, com TypeScript, React, Next.js, React Native e PostgreSQL, do modelo de dados ao deploy.",
    "Da engenharia, trago gestão de equipes e cronogramas, responsabilidade técnica e o hábito de resolver problemas reais sob pressão. Busco minha primeira posição como desenvolvedor, com interesse especial em produtos para construção civil, arquitetura e engenharia.",
  ],
  /** Como o uso de IA é apresentado (site e CV usam o mesmo texto). */
  notaIA:
    "Os dois projetos foram desenvolvidos com apoio de IA (Claude Code). Eu defini os requisitos e as decisões de produto e arquitetura, revisei e integrei cada mudança, executei as migrations e validei tudo com testes automatizados e testes manuais.",
};

/** Competências como aparecem no CV (o site mostra a grade de ícones em Skills.tsx). */
export const COMPETENCIAS: { grupo: string; itens: string }[] = [
  { grupo: "Linguagens", itens: "JavaScript (ES6+), TypeScript, SQL, Java (módulos nativos Android), Python (básico)" },
  { grupo: "Frontend", itens: "React 19, Next.js 16 (App Router), Tailwind CSS, shadcn/ui, React Query" },
  {
    grupo: "Backend e dados",
    itens:
      "Node.js, APIs REST, PostgreSQL, Drizzle ORM, Supabase (Auth, RLS, Edge Functions), NextAuth.js, Zod, migrations, jobs agendados (cron)",
  },
  { grupo: "Qualidade e DevOps", itens: "Vitest, Jest, ESLint, Prettier, GitHub Actions (CI), Vercel" },
  { grupo: "Mobile", itens: "React Native, Expo, EAS Build e EAS Update" },
  {
    grupo: "Ferramentas",
    itens: "Git (branches por tipo e commits semânticos), desenvolvimento assistido por IA (Claude Code)",
  },
  { grupo: "Engenharia e projeto", itens: "Revit (modelagem 3D), projetos arquitetônicos residenciais" },
];
