# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site: a single-page React 19 + TypeScript app built with Vite, deployed to GitHub Pages at `https://diegotriches.github.io/portfolio/`. All UI copy is in Brazilian Portuguese, and identifiers in data objects are often Portuguese too (`PROJETOS`, `titulo`, `descricao`).

## Commands

- `npm run dev`: Vite dev server (served under `/portfolio/`)
- `npm run build`: type-check (`tsc -b`), then build to `dist/`
- `npm run lint`: ESLint (flat config in `eslint.config.js`)
- `npm run preview`: serve the production build locally
- `npm run deploy`: build, then publish `dist/` to the `gh-pages` branch via `gh-pages`

There is no test suite. Run `npm run build` to type-check.

## Architecture

- **Base path `/portfolio/` is set in two places and both must match:** `base` in [vite.config.ts](vite.config.ts) and `basename` on `BrowserRouter` in [src/main.tsx](src/main.tsx). Reference files in `public/` through `import.meta.env.BASE_URL` (for example `cv.pdf` in [Hero.tsx](src/components/Hero.tsx)), not through absolute `/` paths.
- **Routes.** [App.tsx](src/App.tsx) renders the `TopBar` plus two routes: `/` ([pages/Index.tsx](src/pages/Index.tsx)), which stacks the section components from `src/components/` and scrolls to `location.hash` on load, and `/projetos/:slug` ([pages/ProjectPage.tsx](src/pages/ProjectPage.tsx)), a case-study page per project.
- **GitHub Pages deep links:** [public/404.html](public/404.html) redirects unknown paths to `/portfolio/?/<rota>`, and a script in [index.html](index.html) restores the URL before React loads (spa-github-pages pattern). Keep `pathSegmentsToKeep = 1` in sync with the base path.
- **Section navigation is coupled by DOM ids.** `SECTIONS` in [layout/TopBar.tsx](src/layout/TopBar.tsx) lists ids (`sobre`, `portfolio`, `habilidades`, `trajetoria`, `contato`) that must match the `id` on each component's `<section>`. The TopBar uses an `IntersectionObserver` to highlight the active section, and it measures link rects to position the sliding `.nav-indicator`. If you add, rename, or reorder a section, update both sides.
- **Theming.** [context/ThemeContext.tsx](src/context/ThemeContext.tsx) (provider only; the context and `useTheme` live in [context/theme.ts](src/context/theme.ts) so Fast Refresh works) stores `light`/`dark` in `localStorage` and toggles a `light`/`dark` class on `<body>`. Colors are CSS custom properties defined under `body.light` and `body.dark` in [src/index.css](src/index.css). Use those variables (`--bg-primary`, `--text-primary`, `--accent-primary`, …) instead of hard-coded colors.
- **Styling** is plain CSS, not CSS modules or Tailwind. Home styles live in [src/pages/Index.css](src/pages/Index.css), split by comment headers (`/* HERO */`, `/* TRAJETÓRIA */`, …); project pages add [ProjectPage.css](src/pages/ProjectPage.css). The TopBar has its own `TopBar.css`. Sections use a `.eyebrow` label plus a `.section-title` heading.
- **Content is hard-coded data.** Projects live in [src/data/projetos.ts](src/data/projetos.ts) and feed both the cards in `Portfolio.tsx` and the project pages (each entry has an `estudo` block). Gallery images without `src` are pending screenshots and render as placeholders only in dev (`import.meta.env.DEV`). Experience and education entries live in `Trajectory.tsx`. Project videos and posters live in `public/projetos/<slug>/`.
- [InteractiveBackground.tsx](src/components/InteractiveBackground.tsx) is a canvas particle animation that follows the mouse and respects `prefers-reduced-motion`.

## Content and privacy

- The repository is public. `CONTEXTO_CARREIRA.md` and `meu-portifolio.md` are gitignored personal notes. Never commit them, and never copy their private content into tracked files.
- When it exists locally, `CONTEXTO_CARREIRA.md` is the source of truth for portfolio copy: positioning, project descriptions, numbers, and its "O que não afirmar" list (for example: no user-base claims, no rounding numbers up, always disclose AI-assisted development). Keep the site consistent with it, and don't invent figures. If a portfolio change affects the résumé (a new project, an updated number, a new link), tell the user so they can update the CV (`public/cv.pdf`) too.

## Contexto de carreira
Antes de alterar conteúdo do portfólio (textos, projetos, experiência, currículo), leia `CONTEXTO_CARREIRA.md`. O portfólio deve ficar coerente com o currículo descrito ali.