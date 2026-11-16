import { useEffect } from "react";

/**
 * Faz as seções (.section) surgirem com um fade suave ao entrar na tela.
 * Não faz nada quando o sistema pede para reduzir movimento.
 * `chave` refaz a observação quando o conteúdo da página muda (ex.: slug).
 */
export const useRevelar = (chave?: string) => {
  useEffect(() => {
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduzir || !("IntersectionObserver" in window)) return;

    const secoes = Array.from(
      document.querySelectorAll<HTMLElement>(".index-page .section"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visivel");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    secoes.forEach((secao) => {
      secao.classList.add("revelar");
      observer.observe(secao);
    });

    return () => {
      observer.disconnect();
      secoes.forEach((secao) => secao.classList.remove("revelar", "visivel"));
    };
  }, [chave]);
};
