# Hyperion Takeoff — Landing Page

Marketing landing page for Hyperion Takeoff, built with **Next.js (App Router) + TypeScript**.
Dark / futuristic design with a bronze-gold accent matching the logo.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/page.tsx` — landing page (server component): header, hero, product, features, integrations, footer
- `components/LoginCard.tsx` — interactive sign-in card (client component)
- `app/globals.css` — all styles; the accent color lives in the `--accent` CSS variable at the top
- `app/layout.tsx` — fonts (Space Grotesk, IBM Plex Sans/Mono, Playfair Display) and metadata
- `public/assets/` — logo and product workspace image

## Deploy

Any Next.js host works. The simplest is [Vercel](https://vercel.com): import this
repo and deploy — no configuration needed.
