# Face By You — Web

> AI-powered makeup assistant that analyzes your face, skin tone, and style to deliver personalized beauty guidance.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Page Sections](#page-sections)
- [UI Components](#ui-components)
- [Styling & Theming](#styling--theming)
- [Configuration](#configuration)

---

## Overview

**Face By You** is a landing page for an AI-driven makeup companion app. The site showcases the product's core value — scanning a user's face, identifying skin tone, and providing personalised makeup guidance — through rich animations, a responsive layout, and a modern single-page design.

---

## Tech Stack

| Layer         | Technology                                                  |
| ------------- | ----------------------------------------------------------- |
| Framework     | [Next.js](https://nextjs.org/) (App Router)                 |
| Language      | TypeScript                                                  |
| UI Library    | React                                                       |
| Styling       | Tailwind CSS + custom CSS animations                        |
| Component Kit | [Shadcn UI](https://ui.shadcn.com/) (New York style)        |
| Animations    | [Framer Motion](https://www.framer.com/motion/)             |
| Icons         | [Lucide React](https://lucide.dev/)                         |
| Fonts         | Geist (sans + mono), Inter, Abhaya Libre (via Google Fonts) |
| Compiler      | React Compiler (`babel-plugin-react-compiler`)              |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (bundled with Node)

### Installation

```bash
# Clone the repository
git clone <repo-url> face-by-you-web
cd face-by-you-web

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
The page hot-reloads as you edit source files.

---

## Available Scripts

| Script  | Command         | Description                          |
| ------- | --------------- | ------------------------------------ |
| `dev`   | `npm run dev`   | Start the development server         |
| `build` | `npm run build` | Create an optimised production build |
| `start` | `npm run start` | Serve the production build           |

---

## Page Sections

The landing page (`src/app/page.tsx`) composes the following sections in order. Each section is wrapped in a `motion.section` from Framer Motion for scroll-triggered fade-in animations.

| #   | Component                   | Anchor ID   | Description                                                               |
| --- | --------------------------- | ----------- | ------------------------------------------------------------------------- |
| 1   | `HeaderSection`             | `#home`     | Full-width hero header with makeup imagery                                |
| 2   | _(inline text)_             | —           | Tagline introducing how Face By You works                                 |
| 3   | `FeaturesSection`           | `#features` | Bento grid showcasing core product features                               |
| 4   | `GuidanceSection`           | —           | Accordion-style "how it works" walkthrough with iPhone mockups            |
| 5   | `AboutUsSection`            | `#about`    | Team / mission statement with imagery                                     |
| 6   | `FeaturesComingSoonSection` | —           | Preview of upcoming features with makeup thumbnails                       |
| 7   | `CareerExploreSection`      | `#business` | Career opportunities and explore-positions CTA                            |
| 8   | `FooterSection`             | —           | Partner-with-us details and links                                         |
| 9   | `HeroSection`               | —           | Final CTA ("Be first to try"), social icons (Instagram, TikTok, LinkedIn) |

### Navigation

- **Desktop**: Pill-style navbar with smooth-scroll anchors (`Home`, `About`, `Features`, `Business`).
- **Mobile**: Full-screen animated overlay with icon-labelled nav items. Toggled via a hamburger button.

---

## Styling & Theming

### Tailwind CSS 4

Configured via `postcss.config.mjs` with the `@tailwindcss/postcss` plugin. Global styles and theme tokens are defined in `src/app/globals.css`.

### Fonts

| Font         | Usage                        |
| ------------ | ---------------------------- |
| Geist Sans   | Body text (via `next/font`)  |
| Geist Mono   | Code / monospace             |
| Inter        | Navigation, UI labels        |
| Abhaya Libre | Headings, CTAs, display text |

---

## Configuration

| File                 | Purpose                                                 |
| -------------------- | ------------------------------------------------------- |
| `next.config.ts`     | Next.js config — React Compiler enabled                 |
| `tsconfig.json`      | TypeScript — `@/*` path alias maps to `./src/*`         |
| `components.json`    | Shadcn UI — New York style, Lucide icons, CSS variables |
| `eslint.config.mjs`  | ESLint — extends `eslint-config-next`                   |
| `postcss.config.mjs` | PostCSS — Tailwind CSS plugin                           |

---

## License

This project is private and proprietary.
