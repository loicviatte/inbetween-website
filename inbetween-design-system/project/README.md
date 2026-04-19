# InBetween — Design System

> The design foundation for **InBetween**. Black, gold, geometric, quietly premium.

---

## About the brand

**InBetween** reads as a modern, premium brand built around a single striking idea: an infinity-like monogram cleaved by a diagonal slash, rendered in two tones of gold against deep black. The mark itself is the message — a thing that loops forever, caught mid-step, split but still whole. "In between" states, transitions, thresholds, the space between two points.

The visual system follows suit:
- **Color**: near-exclusively black + gold. Two tones of gold (one warm amber, one paler cream) echo the logo's split.
- **Type**: *TT Travels Next* throughout — a contemporary geometric sans with a slight mechanical edge. DemiBold for the wordmark and display, Regular/Light for body.
- **Surface**: matte black with subtle film grain and warm radial gradients. Premium, editorial, almost cinematic.
- **Mood**: confident, understated, slightly mysterious. Not loud, not busy. High-contrast with room to breathe.

*Note:* No codebase, website, product screenshots, Figma files, decks, or product copy were provided — only the logo suite and typeface. The brand positioning, voice, and UI patterns documented here are **inferred from the visual identity**. Treat them as a thoughtful starting point, not canonical truth. Flag anything that doesn't match your mental model and we'll rework.

---

## Sources provided

- **Logo set** (11 PNGs) — icon-only and icon+wordmark, across 4 backgrounds: pure black, pure white, dark grainy gradient, light grainy gradient. Plus a LinkedIn banner variant.
- **Typeface** — *TT Travels Next Trial* (full family: Thin → Black, plus italics, outline variants, and a variable TTF). Note: "Trial" in the filename — confirm license before shipping to production.

No Figma link, no codebase, no website URL, no existing slides, no written copy were provided.

---

## Index

| File | Purpose |
|---|---|
| `README.md` | This file — brand context, voice, visual foundations, iconography |
| `SKILL.md` | Skill manifest for Claude Code / Agent Skills |
| `colors_and_type.css` | Core tokens (CSS custom properties + element styles) |
| `assets/` | Logo suite — icon, wordmark, on all four backgrounds |
| `fonts/` | TT Travels Next Trial — the full weight range |
| `preview/` | Small HTML cards that populate the Design System tab |

No UI kits or slide templates are included in this pass — see **Open questions** at the end.

---

## Content fundamentals

**Tone.** Short, deliberate, slightly editorial. Lean into pauses and white space. The brand isn't chatty. It doesn't explain itself twice. It trusts the reader.

**Person.** "We" when speaking as the company; "you" when addressing the reader directly. Avoid "I". Never "us vs. them".

**Casing.** Sentence case for almost everything — headlines, buttons, nav. Title Case reserved for proper nouns and the wordmark ("InBetween" — capital I, capital B, one word). ALL-CAPS only for small eyebrow tags (≥11px, tracked wide) and key CTAs when they stand alone.

**The wordmark.** Always one word, camel-cased: **InBetween**. Never "In Between", "Inbetween", or "IN BETWEEN".

**Voice traits.**
- *Quiet confidence over hype.* "Built for transitions." > "🚀 Revolutionize your workflow!"
- *Space over density.* Short sentences. Paragraphs that earn their length.
- *Concrete over abstract.* "Four frames per second" > "Blazing fast".
- *Specifics over superlatives.* Skip "best-in-class", "cutting-edge", "world-class".

**Punctuation.** Em-dashes for asides. No exclamation marks. Semicolons are fine; colons are better. Periods optional on single-line UI labels.

**Emoji.** None. The brand's personality is its mark and its typography.

**Numerals.** Spell out zero through nine in running prose. Use figures (10+, measurements, prices, data).

**Sample voice**
- Eyebrow: `THE INFINITE / INTERRUPTED`
- Headline: `Built for the space between.`
- Lead: `A platform for work that lives between systems — where handoffs happen, where context is lost, where the interesting stuff actually is.`
- Button: `Get started` · `See how it works` · `Request access`
- Error: `That didn't go through. Try again, or we can resend the code.`
- Empty state: `Nothing here yet. When there is, it'll show up.`

---

## Visual foundations

### Color

Two colors do almost all the work: **black** and **gold**. Everything else is supporting cast.

| Role | Token | Hex |
|---|---|---|
| Canvas (primary surface) | `--bg` | `#000000` |
| Primary accent | `--accent` / `--gold-400` | `#F0C24A` |
| Deep gold (logo's darker half) | `--gold-500` | `#E8B530` |
| Light gold (logo's lighter half) | `--gold-300` | `#F6D27A` |
| Primary text on dark | `--fg-1` | `#FFFFFF` |
| Secondary text | `--fg-2` | `#B5B5B5` |
| Cream / warm paper | `--ink-50` | `#F7F6F3` |

Gold is earned, not sprinkled. One gold element per hierarchy level: the accent on a CTA, the highlight in a headline, a single divider or indicator. Don't fill whole cards in gold unless the card is the CTA itself.

### Type

- **One family everywhere.** TT Travels Next. No serif pairing, no secondary sans.
- **Display & headings**: DemiBold (600). Slight negative tracking. Tight leading (1.02–1.14).
- **Body**: Regular (400), Light (300) for long-form lead paragraphs.
- **Micro / eyebrows**: Medium (500), uppercase, wide tracking (0.14em).
- **Italic** is rare and editorial — for pull-quotes or single-word emphasis. Not for UI labels.
- **Never** use the Outline or Black weights for body or UI. They're reserved for hero type and posters.

### Backgrounds & texture

- **Primary**: flat pure black (`#000`).
- **Hero**: warm dark radial gradient (`--grad-dark`) — brightens toward the lower-right, falls to black top-left. Echoes the ambient grainy product shots.
- **Texture**: a fine **film-grain overlay** (`--grain-url`) on hero surfaces. Subtle — you notice it on close inspection, not at a glance.
- **No repeating patterns, no blueprint grids, no glassmorphism, no mesh gradients.**
- When a light surface is needed, it's **warm cream** (`#F7F6F3`) — never pure white except inside dense data contexts.

### Layout

- Generous top-level padding: 64–128px around hero content.
- Left-aligned by default. Centered layouts only for single-sentence hero statements.
- Fixed-width container (`--container-max: 1240px`). Content respects it; background doesn't.
- 8pt grid. Spacing tokens scale 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 96 / 128.
- Rules (`hr`) are a single hairline at 10% white. They do a lot of work.

### Corners & borders

- Mostly **sharp**. Default radius is 0 for surfaces, 4–8px for small controls.
- Pills (`--radius-pill`) allowed for status badges and floating CTAs only.
- Borders are usually `rgba(255,255,255,0.10)` — hairline, almost-there.
- Gold borders are a statement — use only on the single primary element in a view.

### Elevation & shadow

- Dark-on-dark elevation reads as **a thin lifted border plus a warm glow**, not a soft grey drop shadow.
- `--shadow-gold` wraps a subtle gold ring + gold-tinted blur around the primary CTA on hover.
- `--shadow-inset` (1px top highlight, 6% white) adds metallic lift to cards.

### Motion

- **Short & confident.** 120–220ms for UI. 400ms+ reserved for page transitions.
- Easing: custom `--ease-out` (`cubic-bezier(.2, .7, .2, 1)`) — a soft landing, no bounce.
- **No spring bounces** in production UI. `--ease-spring` exists for playful moments (onboarding, empty-state reveals), use sparingly.
- Fades and small translates (4–8px). No flips, no parallax, no scroll-jacking.
- The logo's diagonal slash can be used as a scene-transition wipe in video/motion contexts.

### Hover & press states

- **Hover on dark**: lift foreground opacity slightly, warm any non-gold accent toward gold-300 (lighter), or lift borders to 20% white.
- **Hover on gold CTA**: step to `--gold-300` (lighter) — not darker. Gold brightens on hover, doesn't darken.
- **Press/active**: 97% scale + step to `--gold-500` (darker). ~120ms.
- **Disabled**: 40% opacity. No other color change.
- **Focus**: 2px gold outline with 2px offset. Never remove.

### Imagery

No product photography was supplied, but the gradient treatments give the cue:
- **Warm-toned, low-saturation, high-contrast.** Think golden hour, matte black subjects, sodium-vapor light.
- **Never cool, never pastel, never neon.**
- **Grain is encouraged**, either in-camera or as a light post overlay.
- B&W photography works, especially with a warm duotone pushing shadows slightly amber.
- Illustrations, if used, should feel editorial — line work, minimal fill, gold single-tone accents.

### Transparency & blur

- Blur is used **sparingly** — usually for a sticky nav becoming translucent over content (`backdrop-filter: blur(24px)`) or for a modal scrim.
- `rgba(0,0,0,.55)` + 24px blur is the standard modal backdrop.
- Avoid glass panels. They dilute the brand's flat, confident surface treatment.

### Cards

- Default card: `background: var(--bg-elev-1)` (`#141414`), 1px hairline border (10% white), radius `--radius-lg` (14px), no drop shadow. Optional 1px top inner highlight for metallic lift.
- Gold-bordered card: for the single primary card in a view. `border-color: var(--gold-400)`, otherwise identical.
- **Never**: colored left-border accents, rounded + shadow + gradient combos, icon-in-top-left-with-title AI-slop card layouts.

---

## Iconography

**No icon set was provided by the brand.** This is a deliberate gap we're flagging to fill.

### Recommendation

Use **Lucide** (https://lucide.dev) — 1.5–2px stroked line icons, generous proportions, modern geometric feel. It pairs cleanly with TT Travels Next and doesn't fight the brand's flat-surface aesthetic.

Pull via CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="arrow-right"></i>
<script>lucide.createIcons();</script>
```

**Usage rules**
- Default stroke: 1.75px.
- Default size: 20px in dense UI, 24px in marketing, 16px for inline label icons.
- Default color: `currentColor` — icons inherit text color.
- **Never fill** unless the icon is itself the brand mark.
- One icon per label, always to the **left** at 8px gap.
- Don't stack multiple icons in a row — it reads as decoration, not function.

**The brand mark as icon**
The InBetween monogram (`assets/logo-icon-white.png` / `-black.png` / etc.) is itself a primary graphic element. Use at 32px+; anything smaller loses the split-tone detail. For sub-32px favicons, simplify to a solid-gold glyph — do **not** try to render the split-tone detail at small sizes.

**Emoji & unicode**
- **No emoji.** Full stop. They break the tone.
- **Unicode arrows & symbols allowed** for inline editorial use: `→ ← ↗ · — ∞`. The infinity symbol `∞` is fair game — it echoes the mark.

---

## Open questions / things to confirm

1. **Body font confirmation.** The brief mentioned "I don't know which font for the body text." I chose to keep TT Travels Next throughout — it has enough weight range to cover body duty without a second family. If you'd prefer a separate body face, Google-Fonts options that pair well: **Manrope** (geometric, close match) or **Instrument Sans** (slightly warmer). Say the word and I'll swap.
2. **License.** The fonts provided are the *Trial* versions. Swap to licensed files before any production ship.
3. **No product context.** No codebase, website, app, Figma, or slides supplied. **What is InBetween actually for?** Once I know, I can build out UI kits and slide templates that match real use.
4. **Icon system.** No official icon set — I've recommended Lucide. If there's a preferred set (Phosphor, Heroicons, something custom), point me at it.
5. **Imagery direction.** The gradient backgrounds suggest a warm-grain-cinematic mood. Do you have reference photography or a moodboard? Happy to incorporate.
