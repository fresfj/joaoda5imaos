# Project Instructions

This repository contains the Next.js App Router landing page for João da 5 Irmãos, candidate for Deputado Federal pelo Paraná, MDB 1599.

## Authoritative Docs

- `docs/CONTENT.md` owns verified facts, messaging, links, and source notes.
- `docs/DESIGN_SYSTEM.md` owns visual language, layout rules, and component behavior.
- `docs/ANIMATION_SYSTEM.md` owns scroll effects and reduced-motion behavior.
- `docs/ARCHITECTURE.md` owns implementation structure and performance expectations.
- `docs/DECISIONS.md` records product and documentation decisions.

There is no `RTK.md` in this repository. If one is added later, reconcile it with the docs above instead of creating a competing source of truth.

## Build Rules

- Keep the site fast, static, accessible, and mobile-first.
- Use the local `imgs/` campaign assets before adding outside media.
- Do not publish unverified claims about electoral status, policy positions, endorsements, polls, or legal matters.
- Centralize campaign identity and contact configuration in `lib/campaign.ts` and document changes in `docs/CONTENT.md`.
- Keep gallery and neighborhood facts in `lib/actions.ts`; filenames exposed to the web must use descriptive, accent-free slugs.
- Keep primary navigation on friendly routes. The only permitted hash link is the accessibility skip link.
- Never expose `INSTAGRAM_ACCESS_TOKEN` to Client Components or variables prefixed with `NEXT_PUBLIC_`.
- Keep page content in Server Components. Isolate browser interactions in small Client Components.
- Use `next/image`, explicit responsive sizes, and preload only the hero image. Avoid third-party scripts without a concrete need.
- Use UTF-8 Portuguese with correct accents, including João, Irmãos and Paraná.
- Preserve the current campaign identity: navy/orange, Montserrat headings, Inter body. Use the attached MDB artwork without distortion. See `docs/DESIGN_SYSTEM.md` for authoritative tokens.
- Run `npm run lint`, `npm run typecheck` and `npm run build` before delivery. Verify desktop and mobile views.
- Before every push, require a successful clean `npm ci` and `npm run verify` for the committed revision. Run `npm run hooks:install` once to enable the pre-push hook. Never bypass the hook or push when a check is blocked or failing.
- Follow Vercel React practices: minimize client serialization, avoid request waterfalls, clean up subscriptions, and avoid React state updates for each scroll event.
- Prefer direct Portuguese copy. Avoid generic political filler.
- Preserve the premium but approachable tone: neighborhood presence, social action, family commerce, and clear contact channels.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
