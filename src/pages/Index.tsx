import { useEffect } from "react";
import { InteractiveBackground } from "../components/InteractiveBackground";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { Informations } from "../components/Informations";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import "./Index.css";

export const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: "smooth", block: "start" }),
        );
      }
    }
  }, []);

  return (
    <div className="index-page">
      <InteractiveBackground />
      <main>
        <Hero />
        <AboutMe />
        <Informations />
        <Skills />
        <Education />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
