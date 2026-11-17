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
- **Content is hard-coded data.** Projects live in [src/data/projetos.ts](src/data/projetos.ts) and feed both the cards in `Portfolio.tsx` and the project pages (each entry has an `estudo` block). Gallery images without `src` are pending screenshots and render as placeholders only in dev (`import.meta.env.DEV`). Profile, "about" text and experience/education live in `src/data/perfil.ts` and `src/data/trajetoria.ts` (shared with the CV). Project videos and posters live in `public/projetos/<slug>/`.
- [InteractiveBackground.tsx](src/components/InteractiveBackground.tsx) is a canvas particle animation that follows the mouse and respects `prefers-reduced-motion`.

## Résumé (CV)

- The repository is the source of truth for the résumé. Data lives in `src/data/` ([perfil.ts](src/data/perfil.ts), [projetos.ts](src/data/projetos.ts), [trajetoria.ts](src/data/trajetoria.ts)) and feeds both the site and the CV.
- The CV is a separate page, [cv.html](cv.html) → [src/cv/Curriculo.tsx](src/cv/Curriculo.tsx) with its own A4 print styles in [src/cv/cv.css](src/cv/cv.css). It is not part of the site build; it is only served by Vite while generating the PDF.
- `npm run cv` ([scripts/gerar-cv.mjs](scripts/gerar-cv.mjs)) starts a Vite server, prints `cv.html` with headless Edge/Chrome (`CV_BROWSER` overrides the path) and writes `public/cv.pdf`. `npm run deploy` runs it automatically.
- `public/cv.pdf` is a generated file and is gitignored (each generation embeds a new timestamp, so tracking it left the tree dirty after every deploy). Run `npm run cv` once to make the "Download do CV" button work in `npm run dev`.
## Keeping everything in sync

**Whenever content changes (projects, numbers, title, "about", experience, skills, availability, contact), update every place that shows it, in this order:**

1. **Data in `src/data/`** (site and CV read from it).
2. **CV PDF:** run `npm run cv` and check it still fits on 2 pages. The download on the site only updates after `npm run deploy`, so remind the user to deploy.
3. **GitHub profile README** (repo `diegotriches/diegotriches`; local clone path in `NOTAS_CARREIRA.md`): same title, intro sentence and skill icons as the site. Work on a branch there too.
4. **GitHub settings** (only the user can change them, on github.com): profile bio, repository descriptions and websites, pinned repositories. Give the user ready-to-paste text, then verify through the public API (`api.github.com/users/diegotriches` and `/repos`).
5. **LinkedIn** (only the user can change it): headline, "About", experience and skills. Give ready-to-paste text in Portuguese.

At the end, list which of these were updated and which are still pending.

## Content and privacy

- The repository is public. `NOTAS_CARREIRA.md` is a gitignored personal file (career strategy, interview prep, pending items). Read it before changing content, never commit it, and never copy its private content into tracked files.
- Content rules: don't invent or round up numbers (they were verified in the project repos; recheck before changing); no user-base or traffic claims (both projects are personal use); avoid lines of code as a metric; always disclose AI-assisted development (text in `PERFIL.notaIA`); keep the project limitations listed in `projetos.ts` honest (My Expenses: fixed income only CDI/Selic, no IRRF "dedo-duro" or capital refunds, no brokerage-note PDF import; Habits Tracker: not on the Play Store).
- Skill claims follow two levels: "uso com segurança" (JavaScript, TypeScript, SQL/PostgreSQL, React, Node.js/APIs REST, HTML/CSS, Git/GitHub) and "usei nos projetos, nível básico" (Next.js, Tailwind, Supabase, Drizzle, React Native/Expo, Vitest/Jest, GitHub Actions, Java, Python). Only the first group may appear in titles, headlines, intro sentences, bios or "top skills"; the second appears only as facts about the projects or explicitly labeled as basic. The levels live in `SEGURAS`/`BASICAS` in `Skills.tsx` and in `COMPETENCIAS` in `perfil.ts`; never promote an item without the user confirming.
- Present the mobile app through transferable concepts (offline-first, secure back end, tests), since the target is web/full-stack roles.
