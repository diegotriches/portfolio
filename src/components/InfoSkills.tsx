import css3 from "./../assets/css3.png";
import git from "./../assets/git.png";
import html5 from "./../assets/html5.png";
import js from "./../assets/js.png";
import react from "./../assets/react.png";
import nodejs from "./../assets/nodejs.png";

const SKILLS: [string, string][] = [
  [html5, "HTML5"],
  [css3, "CSS3"],
  [js, "JavaScript"],
  [git, "Git & Github"],
  [react, "React"],
  [nodejs, "Node.js"],
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
              <span className="valor">Análise e Desenvolvimento de Sistemas</span>
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
                <a href="https://linkedin.com/in/diego-triches" target="_blank" rel="noopener">
                  Acessar ↗
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="info-skills-col">
          <h2 className="eyebrow">HABILIDADES TÉCNICAS</h2>
          <div className="skills-grid">
            {SKILLS.map(([icon, label]) => (
              <div className="skill-item" key={label}>
                <img src={icon} alt="" width="26" height="26" loading="lazy" />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};