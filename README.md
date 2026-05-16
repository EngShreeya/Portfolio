# Shreeya Portfolio (React + Vite + Tailwind + Framer Motion)

Animated, cinematic developer portfolio built with **React (vanilla JS)**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling.

## Setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Structure

- `src/pages/HomePage.jsx`: main cinematic scroll experience (Hero → About → Skills → Projects → Timeline → Contact)
- `src/layouts/AppShell.jsx`: global background layers + Lenis smooth scrolling
- `src/data/profile.js`: all portfolio content (edit this first)
- `src/lib/motion.js`: centralized motion curves/variants
- `src/components/motion/*`: reusable reveal/stagger primitives
- `src/components/ui/*`: grain/orb/particles, magnetic buttons, tilt cards, tabs, marquee, meters

## Content edits

Update your details/projects in:

- `src/data/profile.js`

