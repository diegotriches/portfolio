import myexpenses from "../assets/myexpenses.png";
import myhabitstracker from "../assets/myhabitstracker.jpeg";

const base = import.meta.env.BASE_URL;

export type Imagem = {
  /** Sem `src`, a captura ainda não foi feita: aparece só em desenvolvimento. */
  src?: string;
  legenda: string;
};

export type Video = {
  src: string;
  poster: string;
  legenda: string;
};

export type Desafio = {
  titulo: string;
  problema: string;
  solucao: string;
  resultado: string;
  codigo?: {
    arquivo: string;
    trecho: string;
    /** Link para o arquivo no GitHub (só quando o repositório é público). */
    link?: string;
  };
};

export type Camada = {
  nome: string;
  descricao: string;
};

export type Projeto = {
  slug: string;
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
  estudo: {
    periodo: string;
    contexto: string[];
    funcionalidades: string[];
    videos?: Video[];
    galeria: Imagem[];
    arquitetura: Camada[];
    desafios: Desafio[];
    outrasDecisoes: string[];
    qualidade: string[];
    limitacoes: string[];
  };
};

export const PROJETOS: Projeto[] = [
  {
    slug: "my-expenses",
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
    // Repositório ainda privado: adicionar `codigo` (e os `link` dos trechos) quando ficar público.
    estudo: {
      periodo: "nov/2025 – nov/2026 · 324 commits",
      contexto: [
        "O My Expenses reúne num só lugar contas, cartões de crédito, lançamentos, investimentos e o imposto de renda sobre renda variável. A interface é em português e os valores, em reais.",
        "É um projeto pessoal, de uso próprio, e está em produção na Vercel. O desafio não foi a tela de cadastro, e sim as regras de dinheiro: faturas que fecham e viram o mês, aportes com alíquotas diferentes e planilhas da B3 que podem ser importadas mais de uma vez.",
      ],
      funcionalidades: [
        "Contas e extrato com saldo após cada lançamento, ajustes e transferências",
        "Lançamentos à vista, parcelados ou recorrentes (gerados automaticamente todo mês)",
        "Cartões e faturas: fechamento, limite, pagamento, adiantamento, estorno e antecipação de parcelas",
        "Renda fixa atrelada ao CDI ou à Selic, com rendimento diário e IR regressivo por aporte",
        "Renda variável (ações, FIIs, ETFs e BDRs) com preço médio, proventos, cotações e apuração mensal do IR",
        "Dashboard, resumo anual com exportação em PDF, backup automático e tema claro e escuro",
      ],
      videos: [
        {
          src: `${base}projetos/my-expenses/demo-dashboard.mp4`,
          poster: `${base}projetos/my-expenses/demo-dashboard-poster.jpg`,
          legenda: "Dashboard: resumo do mês, limite do cartão e evolução do patrimônio",
        },
        {
          src: `${base}projetos/my-expenses/demo-movimentacao.mp4`,
          poster: `${base}projetos/my-expenses/demo-movimentacao-poster.jpg`,
          legenda: "Cadastro de uma nova movimentação",
        },
      ],
      galeria: [
        { legenda: "Fatura do cartão com compra parcelada e crédito vindo da fatura anterior" },
        { legenda: "Aplicação de renda fixa com rendimento acumulado e IR regressivo" },
        { legenda: "Apuração mensal do IR de renda variável, com isenção e DARF" },
        { legenda: "Extrato da conta com o saldo após cada lançamento" },
        { legenda: "Resumo anual comparado ao ano anterior" },
        { legenda: "Layout no celular" },
      ],
      arquitetura: [
        {
          nome: "Interface",
          descricao:
            "Next.js 16 (App Router) e React 19, com React Query para os dados no navegador, Tailwind CSS e shadcn/ui. 15 páginas autenticadas.",
        },
        {
          nome: "API",
          descricao:
            "89 rotas no próprio Next.js, com validação com Zod e verificação de dono em todo id que vem do cliente. Login com Google ou e-mail e senha (NextAuth.js).",
        },
        {
          nome: "Dados",
          descricao:
            "PostgreSQL serverless (Neon) com Drizzle ORM, 32 tabelas. Operações financeiras rodam em transações.",
        },
        {
          nome: "Rotinas agendadas",
          descricao:
            "5 crons na Vercel: backup, lançamentos recorrentes, fechamento de faturas, rendimento das aplicações e cotações.",
        },
        {
          nome: "Integrações",
          descricao:
            "Taxas do Banco Central (CDI e Selic), cotações da brapi.dev e planilhas da Área do Investidor da B3.",
        },
      ],
      desafios: [
        {
          titulo: "Pagar a fatura uma vez só",
          problema:
            "Um clique duplo no botão de pagar, ou a mesma fatura aberta em duas abas, dispara duas requisições ao mesmo tempo. Sem cuidado, as duas leem a fatura como “não paga” e a conta é debitada duas vezes.",
          solucao:
            "O pagamento roda numa transação que começa travando a linha da fatura (SELECT … FOR UPDATE). A segunda requisição espera a primeira terminar e, quando consegue ler, a fatura já está paga. A transação também confere se o valor mudou desde que a tela foi aberta.",
          resultado:
            "Débito na conta, liberação do limite e baixa da fatura acontecem juntos ou não acontecem. O mesmo padrão protege estornos, adiantamentos e antecipações.",
          codigo: {
            arquivo: "app/api/cartoes/[id]/fatura/route.ts (simplificado)",
            trecho: `await db.transaction(async (tx) => {
  // Trava a fatura: um segundo clique espera aqui e recebe "já foi paga"
  const [atual] = await tx.select().from(faturas)
    .where(eq(faturas.id, fatura.id)).limit(1)
    .for("update");

  if (!atual || atual.paga) throw new ErroFinanceiro("Fatura já foi paga");
  if (Number(atual.total) !== valorAPagar)
    throw new ErroFinanceiro("A fatura foi alterada. Recarregue a página.", 409);

  await movimentarConta(tx, { contaId, tipo: "saida", valor: valorAPagar });
  await tx.update(cartoes).set({ limiteDisponivel: /* + valor pago */ });
  await tx.update(faturas).set({ paga: true, dataPagamento });
});`,
          },
        },
        {
          titulo: "IR regressivo por aporte (FIFO por lotes)",
          problema:
            "Numa aplicação de renda fixa, cada aporte tem a própria data, e a alíquota do IR cai com o tempo (de 22,5% até 15%). Num resgate parcial, não dá para aplicar uma alíquota única sobre o saldo todo.",
          solucao:
            "Cada aporte vira um lote. O resgate consome os lotes do mais antigo para o mais novo, separa o que é principal e o que é rendimento em cada um e calcula o imposto com a alíquota daquele lote. O rendimento diário é recalculado a partir dos lotes e das taxas do Banco Central, de forma idempotente.",
          resultado:
            "O valor líquido do resgate segue a regra da Receita para cada aporte, e rodar o cálculo de novo sempre dá o mesmo resultado. As regras têm testes automatizados.",
          codigo: {
            arquivo: "utils/aplicacaoSimulacao.ts (simplificado)",
            trecho: `for (const lote of lotesDoMaisAntigo) {
  if (restante <= 0) break;

  const retirado = Math.min(lote.valorAtual, restante);
  const proporcao = retirado / lote.valorAtual;
  const rendimento = retirado - lote.principal * proporcao;

  const aliquota = calcularAliquotaIR(diasEntre(lote.data, dataResgate));
  impostoRetido += Math.max(0, rendimento) * (aliquota / 100);

  restante -= retirado;
}`,
          },
        },
        {
          titulo: "Importar a planilha da B3 sem duplicar",
          problema:
            "A planilha de movimentações da B3 cobre um período escolhido pelo usuário. É natural importar arquivos que se sobrepõem, ou o mesmo arquivo duas vezes, e cada operação repetida distorceria o preço médio e o IR.",
          solucao:
            "A leitura gera uma chave para cada movimento da planilha (com sufixo quando o mesmo movimento aparece duas vezes no arquivo). O servidor grava só as chaves que ainda não existem e valida o histórico completo de cada ativo afetado, recusando, por exemplo, venda sem saldo.",
          resultado:
            "Importar de novo é seguro: o que já existe é contado como duplicado e ignorado, e o usuário vê o resumo do que entrou.",
          codigo: {
            arquivo: "app/api/renda-variavel/operacoes/importar/route.ts (simplificado)",
            trecho: `const chavesExistentes = new Set(
  existentes.map((e) => e.origemImportacao).filter(Boolean),
);

for (const linha of entrada) {
  if (!linhaValida(linha)) { invalidos++; continue; }

  if (chavesExistentes.has(linha.chave) || novas.has(linha.chave)) {
    duplicados++;
    continue;
  }
  novas.set(linha.chave, linha);
}`,
          },
        },
      ],
      outrasDecisoes: [
        "Saldo do extrato derivado na leitura: lançamentos retroativos, edições e exclusões não deixam o saldo histórico inconsistente.",
        "Isolamento de dados por usuário: toda rota confere se a conta, o cartão ou o estabelecimento recebido pertence a quem está logado.",
        "Backup e restauração em uma única transação: um arquivo recusado não altera nenhum dado.",
        "Interface responsiva com contraste WCAG AA e respeito à opção de reduzir movimento.",
      ],
      qualidade: [
        "TypeScript estrito: 246 usos de any eliminados, com lint que bloqueia novos",
        "160 testes automatizados com Vitest nas regras de cálculo",
        "CI no GitHub Actions",
      ],
      limitacoes: [
        "Renda fixa suporta só aplicações atreladas ao CDI e à Selic (sem IPCA+ ou prefixados).",
        "O IR de renda variável ainda não trata o IRRF “dedo-duro” nem restituição de capital.",
        "Notas de corretagem em PDF não são lidas; a importação usa as planilhas da B3.",
        "É um projeto de uso próprio, sem base de usuários.",
      ],
    },
  },
  {
    slug: "my-habits-tracker",
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
    estudo: {
      periodo: "jan – nov/2026 · 138 commits",
      contexto: [
        "O My Habits Tracker é um app de hábitos para Android e iOS: marcar o dia, acompanhar streaks, receber lembretes e ver o ano inteiro num mapa de calor.",
        "Fiz o projeto de ponta a ponta, do banco de dados à build. O foco técnico foi o que um app de uso diário precisa fazer bem: funcionar sem internet, lembrar na hora certa mesmo depois de reiniciar o celular e manter os dados de cada usuário protegidos.",
      ],
      funcionalidades: [
        "Hábitos positivos e negativos, diários, em dias da semana ou com meta por semana ou mês, inclusive com metas numéricas",
        "Marcação do dia direto na home ou no calendário, com streaks",
        "Lembretes com som e botão “Feito” na própria notificação",
        "Estatísticas do ano em mapa de calor",
        "Arquivamento de hábitos, backup e importação",
        "Login com Google, tema claro e escuro e suporte ao TalkBack",
      ],
      galeria: [
        { legenda: "Home com os hábitos do dia e a semana" },
        { legenda: "Detalhes do hábito: streak, calendário e consistência" },
        { legenda: "Criação de hábito: tipo, frequência e meta" },
        { legenda: "Lembrete com o botão “Feito” na notificação" },
        { legenda: "Estatísticas do ano em mapa de calor" },
      ],
      arquitetura: [
        {
          nome: "App",
          descricao:
            "React Native 0.81 com Expo SDK 54 e Expo Router 6. As telas só exibem; a lógica de negócio fica em hooks, e as regras puras em utils com testes.",
        },
        {
          nome: "Back-end",
          descricao:
            "Supabase: PostgreSQL com Row Level Security, Auth com Google OAuth, Storage para avatares e Edge Functions em Deno.",
        },
        {
          nome: "Módulo nativo",
          descricao:
            "Módulo em Java sobre o AlarmManager do Android, integrado por um config plugin do Expo.",
        },
        {
          nome: "Build e distribuição",
          descricao:
            "EAS Build para os binários e EAS Update para atualizações OTA, com runtimeVersion por fingerprint para não enviar JS incompatível com o nativo.",
        },
      ],
      desafios: [
        {
          titulo: "Marcar o hábito sem internet",
          problema:
            "Quem marca um hábito no metrô ou com sinal ruim não pode ver a marcação sumir, nem duplicar quando a conexão volta. E respostas de rede podem chegar fora de ordem.",
          solucao:
            "Toda marcação atualiza a tela na hora e entra numa fila de saída persistida no aparelho. A fila guarda uma operação por hábito e dia (vale a última), e metas numéricas guardam o valor final, não um incremento, então reenviar nunca duplica. Erros de rede mantêm a operação na fila; só erros definitivos, como hábito excluído, revertem a tela. Respostas de buscas antigas são descartadas.",
          resultado:
            "O app abre e funciona sem conexão, mostra quantas alterações aguardam envio e sincroniza sozinho ao reconectar, sem perda nem duplicação.",
          codigo: {
            arquivo: "services/completionOutbox.ts",
            trecho: `/**
 * - Uma operação por hábito + dia: a nova substitui a anterior
 *   ("vale a última"), então marcar e desmarcar offline não gera
 *   idas e vindas.
 * - Envio idempotente: reenviar uma operação já gravada não duplica nada.
 * - Metas numéricas guardam o valor final, não um incremento.
 */
export type OutboxResult = 'synced' | 'superseded' | 'dropped';`,
            link: "https://github.com/diegotriches/my-habits-tracker/blob/main/services/completionOutbox.ts",
          },
        },
        {
          titulo: "Lembretes que sobrevivem ao reinício",
          problema:
            "No Android, os alarmes agendados se perdem quando o celular reinicia ou o app é atualizado. A otimização de bateria também atrasa disparos, e esses atrasos se acumulariam semana após semana.",
          solucao:
            "Um módulo nativo em Java agenda os lembretes no AlarmManager e persiste cada alarme. Um receptor de boot reagenda tudo após reinício ou atualização, e a próxima ocorrência é calculada pelo dia da semana e horário do lembrete, não por “agora + 7 dias”. O botão “Feito” funciona com o app fechado: a marcação vai para uma fila nativa e é enviada ao banco quando o app abre, sem duplicar.",
          resultado:
            "Lembretes pontuais e persistentes, validados em aparelho real (Galaxy S23), inclusive depois de reiniciar o celular.",
          codigo: {
            arquivo: "plugins/java/BootReceiver.java",
            trecho: `// Escuta BOOT_COMPLETED e MY_PACKAGE_REPLACED e reagenda
// todos os alarmes salvos. Sem isso, o AlarmManager perde os
// alarmes pendentes num reboot ou atualização do app.`,
            link: "https://github.com/diegotriches/my-habits-tracker/blob/main/plugins/java/BootReceiver.java",
          },
        },
        {
          titulo: "Excluir a conta sem expor a chave administrativa",
          problema:
            "Apagar a conta exige permissões de administrador no Supabase, mas a chave administrativa não pode ir para dentro do app, onde qualquer pessoa conseguiria extraí-la.",
          solucao:
            "A exclusão roda numa Edge Function em Deno: o app envia o token do usuário, a função confirma quem ele é e só então usa a chave administrativa, que fica apenas no servidor. No resto do app, o acesso aos dados é controlado por Row Level Security no próprio banco.",
          resultado:
            "Nenhum segredo no binário do app, e cada usuário só lê e altera os próprios dados, mesmo que alguém chame a API diretamente.",
          codigo: {
            arquivo: "supabase/functions/delete-account/index.ts",
            trecho: `// Edge Function (Deno): valida o token do usuário e só então
// usa a chave administrativa, que nunca sai do servidor.`,
            link: "https://github.com/diegotriches/my-habits-tracker/blob/main/supabase/functions/delete-account/index.ts",
          },
        },
      ],
      outrasDecisoes: [
        "Fuso horário tratado no cálculo dos streaks (UTC × America/Sao_Paulo).",
        "Paginação estável para contornar o limite de 1.000 linhas por consulta do Supabase.",
        "Migrations transacionais e tipos TypeScript gerados a partir do schema do banco.",
        "Acessibilidade com suporte ao TalkBack.",
      ],
      qualidade: [
        "TypeScript strict",
        "87 testes automatizados (Jest) nas regras de negócio",
        "ESLint, Prettier e CI no GitHub Actions",
      ],
      limitacoes: [
        "Ainda não está publicado na Play Store.",
        "As funcionalidades mais recentes (offline completo, arquivamento, estatísticas do ano e backup) ainda aguardam o roteiro completo de testes manuais na build de produção.",
        "Criar, editar e excluir hábitos ainda exige conexão; o modo offline cobre as marcações.",
        "O módulo nativo de lembretes é específico do Android.",
      ],
    },
  },
];

export const buscarProjeto = (slug: string | undefined) =>
  PROJETOS.find((p) => p.slug === slug);
