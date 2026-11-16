import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiDrizzle,
  SiTailwindcss,
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

// color: "currentColor" segue o tema (ícones pretos somem no modo escuro)
const SKILLS: Skill[] = [
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6", usadoEm: `${ME} · ${HT}` },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E", usadoEm: "Base de todos os projetos" },
  { icon: SiReact, label: "React", color: "#61DAFB", usadoEm: `${ME} · este portfólio` },
  { icon: SiNextdotjs, label: "Next.js", color: "currentColor", usadoEm: ME },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933", usadoEm: `${ME} (API)` },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1", usadoEm: `${ME} · ${HT}` },
  { icon: SiSupabase, label: "Supabase", color: "#3FCF8E", usadoEm: HT },
  { icon: SiDrizzle, label: "Drizzle ORM", color: "#84CC16", usadoEm: ME },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4", usadoEm: ME },
  { icon: SiExpo, label: "React Native / Expo", color: "currentColor", usadoEm: HT },
  { icon: SiVitest, label: "Vitest / Jest", color: "#6E9F18", usadoEm: `${ME} · ${HT}` },
  { icon: SiGithubactions, label: "Git / GitHub Actions", color: "#2088FF", usadoEm: "Todos os projetos" },
];

export const Skills = () => {
  return (
    <section id="habilidades" className="section">
      <p className="eyebrow">HABILIDADES</p>
      <h2 className="section-title">Tecnologias que usei nos meus projetos</h2>
      <div className="skills-grid">
        {SKILLS.map(({ icon: Icon, label, color, usadoEm }) => (
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
    </section>
  );
};
