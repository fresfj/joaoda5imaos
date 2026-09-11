# Decisions

## 2026-09-11: Next.js Replaces Static HTML

The user requested React, Next.js and Vercel readiness. Next.js App Router with TypeScript supersedes the initial static HTML decision. Server Components preserve a small client surface; next/image handles optimized image delivery.

## 2026-09-11: Campaign Identity

The initial green/yellow interpretation was superseded by the user's campaign artwork: navy #0A2463, orange #F97316, Montserrat headings and Inter body text. Keep the name and 1599 prominent, real photography and Portuguese accents. The party image is used unchanged from the attachment. Fonts are local build assets rather than browser requests to an external font service.

## 2026-09-11: Footer

Use the user's CNPJ 68.455.068/0001-07, MDB and Deputado Federal pelo Paraná. Add a local privacy page matching the implemented features. Do not carry over Deltan's coalition or legal entity.

## 2026-09-11: Progressive Scroll Effects

IntersectionObserver and Web Animations provide one-time reveals with reduced-motion support and no content-hiding dependency. A dedicated animation document now has a clear purpose and supersedes the earlier decision to keep motion only in the design document.

## 2026-09-11: Contact Fallback

Replace the generic WhatsApp namespace link with a labeled Instagram invitation request. A build-time environment variable enables the direct group link when available.

## 2026-09-11: Friendly URLs and Neighborhood SEO

Primary navigation uses `/quem-e-joao`, `/bairros`, `/acoes`, `/instagram` and `/contato` rather than homepage hashes. Neighborhood detail pages use static slugs, descriptive metadata and structured `Person.areaServed` data. The accessibility skip link remains a same-page fragment because it is an assistive-navigation mechanism, not a public content URL.

## 2026-09-11: Instagram Integration

Fetch public media server-side through the official Instagram API with a one-hour cache, using a secret token. Render Instagram's own embed markup and load its script lazily. Support curated post URLs and a profile embed as fallbacks so the section never becomes an empty block.

## 2026-09-11: Action Gallery

Use the five videos in `imgs/action` with the matching supplied campaign covers. Public copies receive lowercase, accent-free, descriptive filenames. A native dialog opens video playback; only the selected file loads. Titles and descriptions are normal HTML outside the modal so search engines can index the context.
