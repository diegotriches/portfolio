export const Education = () => {
  return (
    <section id="formacao" className="section">
      <h2 className="eyebrow">FORMAÇÃO</h2>

      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-period">2025 — Presente</span>
          <h3>Análise e Desenvolvimento de Sistemas</h3>
          <p className="timeline-inst">UNINTER · EAD</p>
          <p className="timeline-desc">
            3º semestre, com conclusão prevista para 2027. Disciplinas
            relevantes: Algoritmos e Estruturas de Dados, Banco de Dados,
            Programação Web, Programação Orientada a Objetos e Engenharia de
            Software.
          </p>
          <span className="status-badge status-andamento">
            <span className="status-dot" /> Em andamento
          </span>
        </div>

        <div className="timeline-item">
          <span className="timeline-period">2015 — 2022</span>
          <h3>Bacharel em Engenharia Civil</h3>
          <p className="timeline-inst">Centro Universitário UNIFTEC · Caxias do Sul</p>
          <p className="timeline-desc">
            Formação em planejamento, projeto e execução de obras, com cálculo
            estrutural, materiais de construção, gestão de projetos e
            ferramentas como CAD e BIM. Registro ativo no CREA-RS.
          </p>
          <span className="status-badge status-concluido">
            <span className="status-dot" /> Concluído
          </span>
        </div>
      </div>
    </section>
  );
};
