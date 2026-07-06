# Civitas Atlas Technologies — Landing Page

Production-ready marketing site for **Civitas Atlas Technologies**, built
around the flagship product **MahaAtlas**, the Maharashtra Land Intelligence
Platform.

## Stack

- Next.js 15 (App Router, React Server Components)
- TypeScript (strict mode)
- Tailwind CSS + `tailwindcss-animate`
- shadcn/ui primitives (Button, Card, Badge)
- Framer Motion for scroll and load animations
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm run start   # production build
```

## Fonts

- **Body** — Inter, and **Code/mono** — JetBrains Mono are loaded via
  `next/font/google` in `app/layout.tsx` (self-hosted automatically by Next.js,
  no runtime request to Google Fonts).
- **Display** — Clash Display (with Satoshi as fallback) is loaded via the
  free [Fontshare](https://www.fontshare.com/) CDN in `app/globals.css`:
  ```css
  @import url("https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap");
  ```
  If you prefer fully self-hosted fonts (recommended for production), download
  the Clash Display and Satoshi font files from Fontshare, place them in
  `public/fonts`, and swap the `@import` for `@font-face` declarations plus
  `next/font/local`.

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, SEO metadata
  page.tsx           # Assembles all sections + JSON-LD
  globals.css         # Tailwind layers, font imports, base styles
  robots.ts / sitemap.ts
components/
  navbar.tsx
  footer.tsx
  reveal.tsx          # Scroll-reveal motion wrapper
  section-heading.tsx # Reusable eyebrow/title/description block
  gis-grid-background.tsx  # Signature animated cadastral-field canvas
  sections/           # One component per landing page section
  ui/                  # shadcn-style primitives (button, card, badge)
lib/
  data.ts              # All site copy & content, typed and centralized
  utils.ts              # `cn()` class-merging helper
```

## Design notes

- **Signature visual** — `CadastralField` renders an irregular, jittered
  parcel grid (not a uniform lattice) that draws itself in over time with a
  slow scan sweep, evoking real cadastral survey maps rather than a generic
  particle background. It respects `prefers-reduced-motion`.
- **Color system** — Black (`#09090B`) base, Royal Purple (`#5B21B6`) and Deep
  Indigo (`#312E81`) for structure and depth, Gold (`#D4AF37`) reserved for
  emphasis, verification states, and calls to action.
- All content lives in `lib/data.ts` — update copy, stats, roadmap phases, and
  product details there without touching component markup.

## Accessibility

- Skip-to-content link, visible focus rings (gold, 2px offset).
- Semantic landmarks (`header`, `nav`, `main`, `footer`), heading hierarchy
  preserved section to section.
- Decorative canvas/SVG graphics are `aria-hidden`.
- Reduced-motion users get a static single frame of the background field and
  all Tailwind transition/animation durations collapse to near-zero.

## Deployment

Optimized for [Vercel](https://vercel.com). Update `siteUrl` in
`app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` to your production
domain before deploying, and add a real `public/og-image.png` (1200×630) for
social sharing previews.
