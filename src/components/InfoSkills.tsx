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

export const InfoSkills = () => {
  return (
    <section className="section">
      <div className="info-skills-grid">
        <div className="info-skills-col">
          <h2 className="eyebrow">INFORMAÇÕES</h2>
          <ul className="info-lista">
            <li>
              <span className="label">Nome</span>
              <span className="valor">Diego da Rosa Triches</span>
            </li>
            <li>
              <span className="label">Cidade</span>
              <span className="valor">Farroupilha — RS</span>
            </li>
            <li>
              <span className="label">Formação</span>
              <span className="valor">Engenheiro Civil · CREA-RS ativo</span>
            </li>
            <li>
              <span className="label">Cursando</span>
              <span className="valor">
                Análise e Desenvolvimento de Sistemas · Uninter (3º semestre)
              </span>
            </li>
            <li>
              <span className="label">Idioma</span>
              <span className="valor">Inglês B2</span>
            </li>
            <li>
              <span className="label">Disponibilidade</span>
              <span className="valor">
                Remoto · presencial em Farroupilha · presencial ou híbrido em
                Caxias do Sul e Bento Gonçalves
              </span>
            </li>
            <li>
              <span className="label">E-mail</span>
              <span className="valor">diego.rtriches@gmail.com</span>
            </li>
            <li>
              <span className="label">LinkedIn</span>
              <span className="valor">
                <a
                  href="https://linkedin.com/in/diego-triches"
                  target="_blank"
                  rel="noopener"
                >
                  Acessar ↗
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="info-skills-col">
          <h2 className="eyebrow">HABILIDADES TÉCNICAS</h2>
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
        </div>
      </div>
    </section>
  );
};
