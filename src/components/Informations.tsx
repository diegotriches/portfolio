export const Informations = () => {
  return (
    <section className="section">
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
    </section>
  );
};