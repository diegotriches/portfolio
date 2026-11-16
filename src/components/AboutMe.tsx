import { PERFIL } from "../data/perfil";

export const AboutMe = () => {
  return (
    <section className="section">
      <p className="eyebrow">SOBRE MIM</p>
      <h2 className="section-title">Da engenharia ao código</h2>
      {PERFIL.sobre.map((paragrafo) => (
        <p className="bio" key={paragrafo}>
          {paragrafo}
        </p>
      ))}
    </section>
  );
};
