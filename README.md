# Astralaxy: an atlas of the observable universe

A dark, cinematic, single-page space atlas built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run typecheck
npm run build
npm run check:images # confirms every image URL resolves (needs internet)
```

Requires Node 18.18 or newer.

## Before launch

1. **Name.** "Astralaxy" is a working name. Change `SITE` in `src/lib/site.ts`.
2. **Social links.** Paste your real URLs in `SOCIAL_LINKS` in `src/lib/site.ts` or set the `NEXT_PUBLIC_SOCIAL_*` variables (see `.env.example`). Anything left as `#` shows as an inactive placeholder.
3. **Contact.** Set `NEXT_PUBLIC_CONTACT_EMAIL`. Until then the footer shows a neutral "coming soon" line.
4. **Site URL.** Set `NEXT_PUBLIC_SITE_URL` to the deployed address.
5. **Images.** Run `npm run check:images`. Fix any entry it reports.

## Where things live

```
src/app                  layout, page, global styles, layered starfield and effects
src/components/layout    Navbar (with index menu), Footer
src/components/sections  one file per page section
src/components/ui        SpaceImage, Tabs, Section, Reveal, Glyph, Icons
src/data                 all educational copy, typed, one file per topic
src/lib/image-data.json  every image: file name, alt text, caption, credit
src/lib/images.ts        builds image URLs from that file
src/lib/site.ts          name, navigation, social and contact config
```

Editing copy or adding an object means editing a file in `src/data`; no component changes are needed.

## Images

Images come from Wikimedia Commons (NASA, ESA, ESO and Event Horizon Telescope material, plus a few other contributors) through `Special:FilePath`, which serves resized thumbnails. Each image has a descriptive `alt`, a lazy-loading skeleton and a built-in fallback if it fails to load.

- Credits shown on the page are summaries. The "Source and licence" link in the gallery viewer opens the Commons page, which is the authoritative credit. Check each one before launch, especially for images that require attribution.
- Hot-linking is fine for development. For production, download the images and self-host them (change `imageSrc` in `src/lib/images.ts`), which avoids depending on Wikimedia's availability and rate limits.

## Performance and accessibility notes

- No 3D engine. Atmosphere is layered static CSS star tiles with scroll parallax (motion values, no re-renders), a CSS twinkle on two sparse layers, an occasional WAAPI shooting star and a few dust motes in the hero. Decorative motion pauses when the tab is hidden or the hero is off-screen and is removed under `prefers-reduced-motion`.
- A desktop-only cursor glow and short star trail runs only for `(hover:hover) and (pointer:fine)`. It never replaces the native cursor, ignores pointer events and stops its animation loop when settled.
- Animation is limited to transform and opacity. `backdrop-filter` is used only on the navbar, small controls and the image viewer; large panels use a tinted gradient instead. Framer Motion uses `LazyMotion` with the small `domAnimation` set for one-time reveals and image parallax.
- `prefers-reduced-motion` is honoured by CSS (entrances, smooth scroll, transitions) and by `MotionConfig reducedMotion="user"`.
- Tabs follow the ARIA tab pattern with arrow-key, Home and End support. The index menu and image viewer use native `<dialog>`, which provides focus trapping and Escape-to-close.
- A skip link, visible focus rings, semantic landmarks and live result counts are included.

## Performance and accessibility notes

- Moving background layers carry `will-change: transform`; image parallax frames only while near the viewport.
- `backdrop-filter` is limited to the navbar and small controls at 768px and wider. Phones use a tinted surface.
- Interactive controls reach 44px on touch devices (`pointer-coarse`). Focus rings are visible and not clipped in scrolling tab rows.
- The footer shows only social profiles that are configured (see `.env.example`); nothing is rendered as a placeholder link.
- With JavaScript disabled, reveal animations fall back to fully visible content.
