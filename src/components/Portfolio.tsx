import myexpenses from "../assets/myexpenses.png";
import myhabitstracker from "../assets/myhabitstracker.jpeg";

type Projeto = {
  id: string;
  imagem: string;
  imagemAlt: string;
  tag: string;
  titulo: string;
  descricao: string;
  numeros?: string[];
  destaques: string[];
  techs: string[];
  demo?: string;
  codigo?: string;
};

const PROJETOS: Projeto[] = [
  {
    id: "myexpenses",
    imagem: myexpenses,
    imagemAlt: "Tela do My Expenses",
    tag: "Web · Full stack · Em produção",
    titulo: "My Expenses",
    descricao:
      "Aplicação web de finanças pessoais em produção, desenvolvida ao longo de um ano, com controle de contas, cartões de crédito e investimentos.",
    numeros: [
      "32 tabelas",
      "89 rotas de API",
      "5 rotinas agendadas",
      "160 testes automatizados",
    ],
    destaques: [
      "Ciclo de cartão de crédito: parcelamento, antecipação de parcelas e estornos com crédito transferido entre faturas. Pagamentos e estornos rodam em transações atômicas com a fatura travada, então um clique duplo não repete a operação.",
      "Investimentos: rendimento diário de renda fixa com taxas do Banco Central e IR regressivo por aporte (resgate FIFO por lotes), apuração mensal do IR de renda variável e importação idempotente das planilhas da B3.",
      "Qualidade de código: TypeScript estrito (246 usos de any eliminados, com lint que bloqueia novos), testes com Vitest nas regras de cálculo e CI no GitHub Actions.",
    ],
    techs: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "NextAuth.js",
      "React Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Vitest",
      "GitHub Actions",
      "Vercel",
    ],
    demo: "https://myexpenses-app-ten.vercel.app/",
    // Repositório ainda privado: adicionar `codigo` quando ficar público.
  },
  {
    id: "my-habits-tracker",
    imagem: myhabitstracker,
    imagemAlt: "Tela do My Habits Tracker",
    tag: "Mobile · Android/iOS",
    titulo: "My Habits Tracker",
    descricao:
      "Aplicativo de hábitos desenvolvido de ponta a ponta: banco de dados, back-end serverless, módulo nativo, build e distribuição.",
    numeros: ["87 testes automatizados"],
    destaques: [
      "Arquitetura offline-first: fila de operações persistida, interface otimista e sincronização automática ao reconectar, sem perda nem duplicação, mesmo com respostas de rede fora de ordem.",
      "Lembretes confiáveis com módulo nativo em Java (AlarmManager), com persistência e reagendamento após reinício ou atualização do app, validados em aparelho real.",
      "Back-end seguro: Row Level Security, migrations transacionais, tipos gerados do schema e exclusão de conta por Edge Function sem expor a chave administrativa.",
    ],
    techs: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Edge Functions (Deno)",
      "Java",
      "Jest",
      "GitHub Actions",
      "EAS Build e Update",
    ],
    codigo: "https://github.com/diegotriches/my-habits-tracker",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <p className="eyebrow">PROJETOS</p>
      <h2 className="section-title">Projetos em destaque</h2>

      <p className="projetos-nota">
        Os dois projetos foram desenvolvidos com apoio de IA (Claude Code). Eu
        defini os requisitos e as decisões de produto e arquitetura, revisei e
        integrei cada mudança, executei as migrations e validei tudo com testes
        automatizados e testes manuais.
      </p>

      <div className="projetos-lista">
        {PROJETOS.map((projeto) => (
          <article className="projeto-card" key={projeto.id}>
            <div className="projeto-thumb">
              <img src={projeto.imagem} alt={projeto.imagemAlt} />
            </div>
            <div className="projeto-corpo">
              <span className="projeto-tag">{projeto.tag}</span>
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>

              {projeto.numeros && (
                <ul className="projeto-numeros" aria-label="Números do projeto">
                  {projeto.numeros.map((numero) => (
                    <li key={numero}>{numero}</li>
                  ))}
                </ul>
              )}

              <ul className="projeto-destaques">
                {projeto.destaques.map((destaque) => (
                  <li key={destaque}>{destaque}</li>
                ))}
              </ul>

              <div className="projeto-techs">
                {projeto.techs.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="projeto-links">
                {projeto.demo && (
                  <a
                    href={projeto.demo}
                    className="btn-projeto btn-demo"
                    target="_blank"
                    rel="noopener"
                  >
                    🔗 Acesse
                  </a>
                )}
                {projeto.codigo && (
                  <a
                    href={projeto.codigo}
                    className="btn-projeto btn-codigo"
                    target="_blank"
                    rel="noopener"
                  >
                    💻 Código
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
