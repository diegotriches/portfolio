import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Curriculo } from "./Curriculo";
import "./cv.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Curriculo />
  </StrictMode>,
);
