export const Contact = () => {
  return (
    <section id="contato" className="section contato-section">
      <h2 className="eyebrow">CONTATO</h2>
      <h3 className="contato-heading">Vamos conversar?</h3>
      <p className="bio">
        Estou em busca de oportunidades como desenvolvedor de sistemas. Se
        você tem um projeto, uma vaga ou só quer trocar uma ideia sobre
        tecnologia, ficarei feliz em conversar.
      </p>
      <div className="contato-links">
        <a href="mailto:diego.rtriches@gmail.com" className="btn-pill btn-pill-solid">
          ✉️ Enviar e-mail
        </a>
        <a
          href="https://linkedin.com/in/diego-triches"
          target="_blank"
          rel="noopener"
          className="btn-pill btn-pill-outline"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/diegotriches"
          target="_blank"
          rel="noopener"
          className="btn-pill btn-pill-outline"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
};