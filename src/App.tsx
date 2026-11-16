import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { ProjectPage } from "./pages/ProjectPage";
import { TopBar } from "./layout/TopBar";

import "./App.css";

function App() {
  return (
    <div className="main-wrapper">
      <TopBar />
      <main className="content">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projetos/:slug" element={<ProjectPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
