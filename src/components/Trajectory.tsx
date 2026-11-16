import { EXPERIENCIAS, FORMACAO } from "../data/trajetoria";

export const Trajectory = () => {
  const principais = EXPERIENCIAS.filter((e) => e.principal);
  const anteriores = EXPERIENCIAS.filter((e) => !e.principal);

  return (
    <section id="trajetoria" className="section">
      <p className="eyebrow">TRAJETÓRIA</p>
      <h2 className="section-title">Experiência e formação</h2>

      <div className="trajetoria-grid">
        <div>
          <h3 className="coluna-titulo">Experiência</h3>
          <div className="timeline">
            {principais.map((exp) => (
              <div className="timeline-item" key={exp.cargo}>
                <span className="timeline-period">{exp.periodo}</span>
                <h4>{exp.cargo}</h4>
                <p className="timeline-inst">
                  {exp.empresa} · {exp.local}
                </p>
                <p className="timeline-desc">{exp.itens.join(" ")}</p>
              </div>
            ))}

            <div className="timeline-item">
              <span className="timeline-period">2021 — 2023</span>
              <h4>Estágios e início de carreira</h4>
              <ul className="timeline-compacta">
                {anteriores.map((exp) => (
                  <li key={exp.cargo}>
                    <strong>{exp.cargo}</strong>
                    <span>
                      {exp.empresa} · {exp.periodo}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="coluna-titulo">Formação</h3>
          <div className="timeline">
            {FORMACAO.map((f) => (
              <div className="timeline-item" key={f.titulo}>
                <span className="timeline-period">{f.periodo}</span>
                <h4>{f.titulo}</h4>
                <p className="timeline-inst">{f.instituicao}</p>
                <span
                  className={`status-badge ${f.emAndamento ? "status-andamento" : "status-concluido"}`}
                >
                  <span className="status-dot" />{" "}
                  {f.emAndamento ? "Em andamento" : "Concluído"} · {f.detalhe}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
