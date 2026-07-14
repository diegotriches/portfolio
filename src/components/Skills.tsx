import css3 from "../assets/css3.png";
import git from "../assets/git.png";
import html5 from "../assets/html5.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";

const SKILLS = [
  [html5, "HTML5"],
  [css3, "CSS3"],
  [js, "JavaScript"],
  [git, "Git & Github"],
  [react, "React"],
  [nodejs, "Node.js"],
];

export const Skills = () => {
  return (
    <section className="section">
      <h2 className="eyebrow">HABILIDADES TÉCNICAS</h2>
      <div className="skills-grid">
        {SKILLS.map(([icon, label]) => (
          <div className="skill-item" key={label}>
            <img src={icon} alt="" width="26" height="26" loading="lazy" />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};