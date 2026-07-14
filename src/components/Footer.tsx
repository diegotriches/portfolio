import { FaChevronUp } from "react-icons/fa";

export const Footer = () => {
  const scrollToTop = () => {
    document
      .getElementById("sobre")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer>
      <p>
        &copy; 2026 <strong>Diego da Rosa Triches</strong> · Desenvolvido em
        React + TypeScript ·{" "}
        <a
          href="https://github.com/diegotriches"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
      </p>
      <button
        className="btn-pill btn-pill-outline btn-scroll-top"
        onClick={scrollToTop}
        aria-label="Voltar ao topo da página"
      >
        <FaChevronUp />
      </button>
    </footer>
  );
};
