# tgo-payal · project skin

Source of truth for the SKIN (since 2026-11-18): `/workspace/GUT AVATAR_GUIDELINES.pdf`
(Studio Rusk), Payal's full brand guideline. The LAYOUT still follows the website mock on
page 06 of `Payal Kothari Branding 3.pdf`; the brain (`~/.claude/system/design-system.base.md`)
applies, this file only sets the skin.

## Tokens (the guideline's three hexes only; softer tones are alphas of these)
- Crimson Red `#7A0D13` (`--crimson`): headlines, primary pills, links, the one accent
- Cream Taupe `#D6D4C7` (`--cream`): page ground, header, cards, footer, text on dark
- Hickory Brown `#3E1B0B` (`--hickory`): body ink, the one dark band (Watch & Learn), the
  book panel; its alphas are the tinted bands, washes and hairlines
- The guideline's RGB for Cream Taupe (214/212/119) is a typo; the hex is used.

## Voices
- Bogue (headlines and titles, medium / semibold) and Halyard Display (body, book /
  regular) per the guideline. Self-hosted from app/fonts via next/font/local in
  app/layout.tsx. Bogue has only the Medium cut; Halyard ships Regular, Italic, Medium,
  SemiBold and Bold.
- No script face: the guideline has none, so the old Allura notes now set in the serif italic.

## Page-06 motifs
Solid ivory header with tracked serif wordmark and an oxblood pill CTA; full-bleed photo
hero faded into ivory on the copy side; 4-up focus strip with sand icon circles; image/text
split blocks; photo-top cards with "ARROW LINK" footers; sand quote band with leaf shadow
and a vertical rule; one olive band; slim ivory footer. No dark bands, arches or rings.

## Choices
- Press logos sit grayscale on ivory tiles until hover (quiet wall), never recoloured.
- Proof (media clippings, before/afters) shown at native ratio, never cropped.
