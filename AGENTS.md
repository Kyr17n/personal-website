# AGENTS.md

## Project overview
This repository is a static personal portfolio website. The site is built from standalone HTML pages at the repo root, with styling and behavior split into shared assets under `assets/css/` and `assets/js/`.

## Working conventions
- Keep changes small and targeted. This is a static site, so prefer editing the existing HTML/CSS/JS files over introducing frameworks or build tooling.
- Preserve the current visual language: warm editorial typography, strong contrast, and the existing dark/light theme tokens.
- Reuse shared classes and CSS variables instead of duplicating layout styles in unrelated pages.
- Favor semantic HTML and accessible patterns: descriptive headings, alt text for meaningful images, and keyboard-friendly navigation.

## Repository layout
- Root: individual portfolio pages such as `index.html`, `website.html`, `sendit.html`, and project-specific HTML files.
- `assets/css/`: site-wide styling, including the main theme and reusable shared styles.
- `assets/js/`: front-end behavior such as navigation, theme toggling, and interactive effects.
- `assets/img/`: project and hero imagery.
- `assets/video/`: video assets used by the site.

## Validation
- There is no package.json or build pipeline in this project.
- Validate changes by serving the folder locally and checking the page in a browser.
- Typical local check:
  - `cd <repo-root>`
  - `python3 -m http.server 8000`
  - Open `http://localhost:8000` in a browser

## Modification guidance
- For content updates, edit the relevant HTML page and keep the surrounding structure intact.
- For design tweaks, inspect the closest matching stylesheet before creating new selectors.
- For site-wide changes, prefer shared CSS and shared JS rather than page-specific overrides.
- Do not add package managers, frameworks, or build steps unless the task explicitly requires them.
- Keep the portfolio tone consistent: polished, minimal, and professional.
