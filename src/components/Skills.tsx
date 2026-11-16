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
};

// color: "currentColor" segue o tema (ícones pretos somem no modo escuro)
const SKILLS: Skill[] = [
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "currentColor" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiSupabase, label: "Supabase", color: "#3FCF8E" },
  { icon: SiDrizzle, label: "Drizzle ORM", color: "#84CC16" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiExpo, label: "React Native / Expo", color: "currentColor" },
  { icon: SiVitest, label: "Vitest / Jest", color: "#6E9F18" },
  { icon: SiGithubactions, label: "Git / GitHub Actions", color: "#2088FF" },
];

export const Skills = () => {
  return (
    <section id="habilidades" className="section">
      <p className="eyebrow">HABILIDADES</p>
      <h2 className="section-title">Tecnologias com que trabalho</h2>
      <div className="skills-grid">
        {SKILLS.map(({ icon: Icon, label, color }) => (
          <div className="skill-item" key={label}>
            <span className="skill-icon-wrap">
              <Icon color={color} aria-hidden="true" />
            </span>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
