# ajishal-electrical-portfolio

Portfolio website for Ajishal R, Electrical Design & BIM Engineer. Built from his resume and LinkedIn profile. The design borrows from engineering drawings: a title block in the hero, a self-drawing single-line diagram, and a switchable "Paper" (drafting sheet) and "Blueprint" theme.

## Technology stack

- Next.js 14 (App Router) and React 18
- Tailwind CSS 3 with CSS-variable theming
- TypeScript
- No API keys, environment variables or external fonts required

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build: `npm run build && npm start`.

## Project structure

```
app/            layout, page, global styles and theme variables
components/     one component per section, plus Section, ThemeToggle, SingleLineDiagram
data/content.ts all portfolio text and data
public/         resume PDF
```

## Customize

- **Content:** edit `data/content.ts` only. Profile, title block, about text, projects, experience, skills, education and certifications all live there.
- **Resume:** replace `public/Ajishal_R_Resume.pdf` and keep the filename, or change `profile.resume` in `data/content.ts`.
- **Colors:** edit the CSS variables at the top of `app/globals.css` (`:root` is the Paper theme, `.dark` is the Blueprint theme).
- **Sections:** add or remove components in `app/page.tsx` and the links in `components/Navbar.tsx`.
- **Deploy:** push to GitHub and import the repo in Vercel. No configuration needed.
