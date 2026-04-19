---
name: inbetween-design
description: Use this skill to generate well-branded interfaces and assets for InBetween, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand**: InBetween. Black + gold. Geometric sans (TT Travels Next). Confident, quiet, editorial.
- **Primary surface**: pure black (`#000`). Cream (`#F7F6F3`) for the rare light surface.
- **Gold palette**: `#E8B530` (deep), `#F0C24A` (primary), `#F6D27A` (light). Used sparingly — one gold moment per view.
- **Type**: TT Travels Next (full family in `fonts/`). DemiBold (600) for display/headers, Regular (400) for body, Medium (500) + uppercase + wide tracking for eyebrows.
- **Icons**: Lucide CDN. 1.75px stroke. Currents-color. No emoji.
- **Motion**: 120–220ms, `cubic-bezier(.2, .7, .2, 1)`. No spring bounces in UI.
- **Corners**: mostly sharp. 4–8px on small controls. Pills allowed for badges only.

## Files

- `README.md` — full brand guidelines, voice, visual foundations
- `colors_and_type.css` — all tokens (CSS custom properties) + semantic element styles
- `assets/` — logo suite (icon, wordmark, all backgrounds)
- `fonts/` — TT Travels Next (Trial)
- `preview/` — small HTML cards showing tokens in use

## Using the tokens

Just link `colors_and_type.css` and you get the full variable set plus sensible defaults for `h1–h4`, `body`, `.lead`, `.eyebrow`, `.mono`, links, and selection.
