import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  icon: IconType;
  label: string;
  color: string;
};

const SKILLS: Skill[] = [
  { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { icon: SiCss, label: "CSS3", color: "#1572B6" },
  { icon: SiJavascript, label: "Java Script", color: "#F7DF1E" },
  { icon: SiTypescript, label: "Type Script", color: "#3178C6" },
  { icon: SiGit, label: "Git & Github", color: "#F05032" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
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
              <span className="label">Curso</span>
              <span className="valor">
                Análise e Desenvolvimento de Sistemas
              </span>
            </li>
            <li>
              <span className="label">Faculdade</span>
              <span className="valor">Uninter</span>
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
