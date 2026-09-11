# Design System

The identity centers on João's name, original portrait and a large, legible 1599. The latest user-supplied campaign pieces supersede the previous green/yellow design. Their visual references are heavy italic uppercase headlines, navy/orange contrast, short rules, arcs and subtle dot patterns.

## Tokens

- Navy: #0A2463, header, hero and contact sections.
- Royal blue: #1E3A8A, supporting arcs.
- Orange: #F97316, number, wordmark emphasis, CTAs and rules.
- Burnt orange: #EA580C, hover states and supporting icons.
- Text: #1E293B.
- White: #ffffff.
- Off-white: #F8FAFC.
- Community green: #2E7D32, only the social-project icon.

Montserrat is used for headings (700-900), wordmarks, digits and CTAs. Inter is used for body text (400-600). The original typeface cannot be confirmed from screenshots; these are the user's selected implementation families, not a forensic identification. Variable Latin WOFF2 files from Fontsource are self-hosted with next/font/local. Montserrat includes a genuine italic face. Fixed breakpoint type sizes and zero letter spacing keep headings stable and legible.

`components/brand-mark.tsx` is a typographic interpretation of the candidate name, not a supplied official vector logo. `imgs/mdb-referencia.png` is the unedited user-supplied MDB image, displayed at its original aspect ratio in the footer. Do not redraw or distort the party mark.

The full-width photo hero uses a navy readability overlay and unframed content. The orange identity band carries the user-supplied tone, “Fé. Família. Trabalho.” White and off-white sections provide contrast. Curved photographic edges and the contact section's dotted pattern reference the campaign pieces. Buttons have 6px corners and navy text on orange for contrast; no nested cards or perpetual decorative animations.

Desktop uses a 1200px inner width. Mobile rearranges the portrait and content, stacks sections, preserves contact access in the header, and wraps legal content. Contrast, visible focus, a skip link and semantic headings support keyboard and screen-reader use.

## Motion

Scroll effects have a dedicated source of truth in `docs/ANIMATION_SYSTEM.md`.
