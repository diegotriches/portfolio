import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiGit,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiDrizzle,
  SiExpo,
  SiVitest,
  SiGithubactions,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  icon: IconType;
  label: string;
  color: string;
  /** Onde a tecnologia foi usada: dá contexto sem precisar declarar nível. */
  usadoEm: string;
};

const ME = "My Expenses";
const HT = "My Habits Tracker";

// Nivelamento combinado com o Diego (ver COMPETENCIAS em data/perfil.ts):
// só passa para SEGURAS o que ele confirmar que usa com segurança.
// color: "currentColor" segue o tema (ícones pretos somem no modo escuro)
const SEGURAS: Skill[] = [
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E", usadoEm: "Base de todos os projetos" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6", usadoEm: `${ME} · ${HT}` },
  { icon: SiReact, label: "React", color: "#61DAFB", usadoEm: `${ME} · este portfólio` },
  { icon: SiNodedotjs, label: "Node.js / APIs REST", color: "#339933", usadoEm: `${ME} (API)` },
  { icon: SiPostgresql, label: "SQL / PostgreSQL", color: "#4169E1", usadoEm: `${ME} · ${HT}` },
  { icon: SiHtml5, label: "HTML", color: "#E34F26", usadoEm: "Todos os projetos web" },
  { icon: SiCss, label: "CSS", color: "#1572B6", usadoEm: "Este portfólio" },
  { icon: SiGit, label: "Git / GitHub", color: "#F05032", usadoEm: "Todos os projetos" },
];

const BASICAS: Skill[] = [
  { icon: SiNextdotjs, label: "Next.js", color: "currentColor", usadoEm: ME },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4", usadoEm: ME },
  { icon: SiSupabase, label: "Supabase", color: "#3FCF8E", usadoEm: HT },
  { icon: SiDrizzle, label: "Drizzle ORM", color: "#84CC16", usadoEm: ME },
  { icon: SiExpo, label: "React Native / Expo", color: "currentColor", usadoEm: HT },
  { icon: SiVitest, label: "Vitest / Jest", color: "#6E9F18", usadoEm: `${ME} · ${HT}` },
  { icon: SiGithubactions, label: "GitHub Actions", color: "#2088FF", usadoEm: `${ME} · ${HT}` },
];

const Grade = ({ skills }: { skills: Skill[] }) => (
  <div className="skills-grid">
    {skills.map(({ icon: Icon, label, color, usadoEm }) => (
      <div className="skill-item" key={label}>
        <span className="skill-icon-wrap">
          <Icon color={color} aria-hidden="true" />
        </span>
        <div className="skill-texto">
          <p>{label}</p>
          <span className="skill-uso">{usadoEm}</span>
        </div>
      </div>
    ))}
  </div>
);

export const Skills = () => {
  return (
    <section id="habilidades" className="section">
      <p className="eyebrow">HABILIDADES</p>
      <h2 className="section-title">Tecnologias</h2>

      <h3 className="coluna-titulo">Uso com segurança</h3>
      <Grade skills={SEGURAS} />

      <h3 className="coluna-titulo skills-subtitulo">Usei nos projetos e estou aprofundando</h3>
      <Grade skills={BASICAS} />
    </section>
  );
};
