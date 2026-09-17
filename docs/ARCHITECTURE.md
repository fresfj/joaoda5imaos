# Architecture

The application uses Next.js 16 App Router, React 19 and TypeScript. The former root HTML, CSS and script have been removed; the Next.js application is the sole implementation.

- `app/layout.tsx`: Portuguese document language, SEO metadata and Google Analytics tag loading.
- `app/page.tsx`: statically prerendered home page (Server Component).
- `app/quem-e-joao`, `app/bairros`, `app/acoes`, `app/instagram` and `app/contato`: indexable pages with friendly URLs.
- `app/bairros/[bairro]`: statically generated neighborhood detail pages.
- `app/privacidade/page.tsx`: privacy route describing the current data handling.
- `app/sitemap.ts` and `app/robots.ts`: search-engine discovery using the production URL.
- `app/globals.css`: responsive styling and visual tokens.
- `components/scroll-effects.tsx`: small client-only enhancement using IntersectionObserver and Web Animations. No per-frame React updates.
- `components/brand-mark.tsx`: reusable server-rendered candidate wordmark.
- `components/action-gallery.tsx`: client-side dialog gallery; videos load on demand.
- `components/instagram-feed.tsx`: embeds official Instagram posts and lazily loads Instagram's embed script.
- `lib/actions.ts`: gallery metadata and neighborhood SEO content.
- `lib/instagram.ts`: server-side Instagram API request with one-hour cache and editorial fallback URLs.
- `lib/campaign.ts`: campaign identification and contact configuration.
- `imgs/`: original campaign assets; static imports provide dimensions to next/image.

Images use Next.js optimization with responsive sizes. Only the hero is preloaded. Other images are lazy-loaded. Gallery videos are served from `public/acoes` and are loaded only after a visitor opens the modal. Google Analytics loads after hydration through `next/script`. Newsletter forms are isolated Client Components; page content remains server-rendered.

Montserrat (normal and italic) and Inter variable Latin WOFF2 files are dependencies from `@fontsource-variable`, loaded with `next/font/local` in the root layout. The build bundles fonts locally; visitors do not contact Google Fonts. `display: swap` and Next's fallback adjustments limit font-related layout shifts.

## Local Development

Run `npm ci`, then `npm run dev`. Validate with `npm run lint`, `npm run typecheck`, and `npm run build`. `npm start` runs the production build.

## Vercel

Import this repository with the Next.js preset and repository root directory. Node is fixed to 22.x in package.json and .nvmrc. vercel.json requires npm ci and npm run verify (lint, typecheck, build), with the default output directory. GitHub Actions runs the same checks with Node 22. Enable the pre-push hook once with npm run hooks:install: every pushed tip is archived and checked in a temporary directory without local dependencies, .env or build cache. Any failure blocks the push; do not bypass the hook.

The supplied WhatsApp invite is the default; `NEXT_PUBLIC_WHATSAPP_GROUP_URL` can override it at build time.

Newsletter client forms post to `/api/cadastro`, which validates required fields, 11-digit mobile phone, consent and origin. It caps streamed bodies at 8 KiB, rejects the honeypot and forwards to SheetDB with RAW input mode and a timeout. Success requires exactly one created row. No personal-data logging or local filesystem storage is used. Optional server-only `SHEETDB_API_URL` overrides the supplied endpoint and `SHEETDB_AUTHORIZATION` adds authentication. Limit SheetDB to Create (POST), configure provider-side rate limits and handle unsubscribe/deletion. Never prefix these variables with `NEXT_PUBLIC_`.

Set `INSTAGRAM_ACCESS_TOKEN` as a server-only Vercel secret to fetch the six latest posts. The token is sent to the Instagram Graph API from the server and is never serialized to the browser. If no token is available, `INSTAGRAM_POST_URLS` can define comma-separated public post URLs. With neither variable, the embedded public profile and direct profile link remain visible. Embedded content loads Instagram's third-party script, which is disclosed in `/privacidade`.

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin so sitemap and metadata use the deployed domain.

All public pages have self-referencing canonicals. Sitemap includes public routes and neighborhoods without invented modification dates. Robots excludes `/api/`. Optional `GOOGLE_SITE_VERIFICATION` adds Search Console verification metadata.
