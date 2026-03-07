# Face By You — Web

> AI-powered makeup assistant that analyzes your face, skin tone, and style to deliver personalized beauty guidance.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Page Sections](#page-sections)
- [UI Components](#ui-components)
- [Assets](#assets)
- [Styling & Theming](#styling--theming)
- [Configuration](#configuration)
- [Deployment](#deployment)

---

## Overview

**Face By You** is a landing page for an AI-driven makeup companion app. The site showcases the product's core value — scanning a user's face, identifying skin tone, and providing personalised makeup guidance — through rich animations, a responsive layout, and a modern single-page design.

---

## Tech Stack

| Layer         | Technology                                                  |
| ------------- | ----------------------------------------------------------- |
| Framework     | [Next.js 16](https://nextjs.org/) (App Router)              |
| Language      | TypeScript 5                                                |
| UI Library    | React 19                                                    |
| Styling       | Tailwind CSS 4 + custom CSS animations                      |
| Component Kit | [Shadcn UI](https://ui.shadcn.com/) (New York style)        |
| Animations    | [Framer Motion](https://www.framer.com/motion/)             |
| Icons         | [Lucide React](https://lucide.dev/)                         |
| Fonts         | Geist (sans + mono), Inter, Abhaya Libre (via Google Fonts) |
| Compiler      | React Compiler (`babel-plugin-react-compiler`)              |

---

## Project Structure

```
face-by-you-web/
├── public/                     # Static files (SVGs, favicon)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout — fonts, metadata, global CSS
│   │   ├── page.tsx            # Main landing page — navigation + section composition
│   │   ├── globals.css         # Tailwind imports, CSS variables, keyframe animations
│   │   └── favicon.ico
│   ├── assets/                 # Image assets (WebP)
│   │   ├── fby-header-logo.webp
│   │   ├── fby-logo.webp
│   │   ├── diverse-faces.webp
│   │   ├── makeup-faces.webp
│   │   ├── makeup-{1..5}.webp
│   │   ├── image-{29,30,33,35}.webp
│   │   ├── iphone-16-pro.webp
│   │   ├── iphone-16-pro-1.webp
│   │   ├── Group-2067.webp
│   │   ├── Group-460-2.webp
│   │   ├── Line-13.webp
│   │   └── social-{insta,linkedin,tiktok}.webp
│   ├── components/
│   │   ├── sections/           # Page section components
│   │   │   ├── HeaderSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── FeaturesComingSoonSection.tsx
│   │   │   ├── GuidanceSection.tsx
│   │   │   ├── AboutUsSection.tsx
│   │   │   ├── CareerExploreSection.tsx
│   │   │   └── FooterSection.tsx
│   │   └── ui/                 # Reusable Shadcn UI primitives
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── input.tsx
│   └── lib/
│       └── utils.ts            # Utility helpers (cn, etc.)
├── components.json             # Shadcn UI configuration
├── eslint.config.mjs           # ESLint config
├── next.config.ts              # Next.js config (React Compiler enabled)
├── postcss.config.mjs          # PostCSS config
├── tailwind.css                # Tailwind entrypoint
├── tsconfig.json               # TypeScript config (path alias @/* → ./src/*)
└── package.json
```

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
| `lint`  | `npm run lint`  | Run ESLint across the project        |

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

## UI Components

Located in `src/components/ui/`, these are [Shadcn UI](https://ui.shadcn.com/) primitives configured with [class-variance-authority](https://cva.style/):

| Component | File         | Usage                           |
| --------- | ------------ | ------------------------------- |
| Badge     | `badge.tsx`  | Section labels and tags         |
| Button    | `button.tsx` | CTAs, navigation toggle         |
| Card      | `card.tsx`   | Feature cards in the bento grid |
| Input     | `input.tsx`  | Email / waitlist form input     |

---

## Assets

All image assets live in `src/assets/` and are served as **WebP** for optimal performance. Key assets include:

- **Logos**: `fby-header-logo.webp`, `fby-logo.webp`
- **Hero imagery**: `diverse-faces.webp`, `makeup-faces.webp`
- **Feature previews**: `image-29.webp` – `image-35.webp`
- **Makeup thumbnails**: `makeup-1.webp` – `makeup-5.webp`
- **Device mockups**: `iphone-16-pro.webp`, `iphone-16-pro-1.webp`
- **Social icons**: `social-insta.webp`, `social-linkedin.webp`, `social-tiktok.webp`
- **Decorative**: `Group-2067.webp`, `Group-460-2.webp`, `Line-13.webp`

---

## Styling & Theming

### Tailwind CSS 4

Configured via `postcss.config.mjs` with the `@tailwindcss/postcss` plugin. Global styles and theme tokens are defined in `src/app/globals.css`.

### Design Tokens

The project uses CSS custom properties (OKLCH colour space) for full light / dark mode support:

- **Brand colours**: warm browns (`#8d5241`, `#a67b5b`), cream (`#fff2da`, `#fff7ec`)
- **Radius scale**: `--radius` base of `0.625rem` with sm → 4xl variants

### Custom Animations

Defined as `@keyframes` in `globals.css`:

| Animation          | Description                   |
| ------------------ | ----------------------------- |
| `fade-in`          | Fade in + slide down on mount |
| `fade-up`          | Fade in + slide up on scroll  |
| `image-glow`       | Subtle glow effect for images |
| `shimmer`          | Shimmer sweep effect          |
| `marquee`          | Horizontal infinite scroll    |
| `marquee-vertical` | Vertical infinite scroll      |

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

## Deployment

### Vercel (Recommended)

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new):

```bash
npm run build   # Verify the build succeeds locally
```

Then connect the repository on Vercel — it will auto-detect Next.js and configure the build.

### Other Platforms

Any platform that supports Node.js can host this app:

```bash
npm run build
npm run start
```

The production server runs on port `3000` by default.

---

## License

This project is private and proprietary.
