# El Taco Veloz · demo site

Sales demo for El Taco Veloz in Midtown (inside Marcus Market) and on Toledo St in Southwest Detroit. Mobile first, no backend.

- Next.js 15 (App Router), React 19, hand-written CSS (Tailwind v4 is only the reset)
- Fonts: Big Shoulders, DM Sans, Space Mono (next/font/google)
- Everything editable lives in `src/lib/content.ts`
- Notable bits: an SVG taco van that drives in, live "Taco Tuesday" and breakfast pills (`Now.tsx`), the protein picker with vegan / seafood filters (`Menu.tsx`)

```bash
npm install
npm run dev -- -p 3130        # http://localhost:3130
PAGES=1 npm run build         # static export for GitHub Pages into .next-pages
```

Do not run `npm run build` while the dev server is running; it corrupts `.next`. Stop dev, delete `.next`, restart.

See `PLACEHOLDERS.md` for what is verified and what still needs the owner.
