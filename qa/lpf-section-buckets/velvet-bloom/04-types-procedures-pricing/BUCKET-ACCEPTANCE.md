# Bucket Acceptance - Velvet Bloom 04 Types of Procedures & Pricing

Status: pass — local production preview
Date: 2026-07-13
Workflow lane: LPF
Production cell: Design & UX Repair
Repair mode: Section Bucket Repair
Defect class: section-implementation / responsive-breakpoint-gap

## Evidence Pair

- Original owner reference:
  `/Users/webdevful/Desktop/Screenshot 2026-07-13 at 9.55.04 PM.png`
- Owner current reference:
  `/Users/webdevful/Desktop/Screenshot 2026-07-13 at 9.55.15 PM.png`
- Live original: `https://magnolia-template.webflow.io/`
- Public before: `current-before-public-desktop.png`, captured from
  `https://velvet-bloom-landing-page.pages.dev/` at 1440×1100.
- Local after desktop: `current-after-desktop.png`, 1440×1100.
- Local after tablet: `current-after-tablet.png`, 991×1100.
- Local after mobile: `current-after-mobile.png`, 390×1000.
- Mobile accordion state: `accordion-open-mobile.png`.
- Measured geometry and interaction state: `browser-metrics.json`.

The Desktop folder could not be copied through the shell because macOS denied
terminal access to Desktop; the owner-supplied image paths remain the original
evidence references in this acceptance record and ticket.

## Defect Diagnosis

Magnolia's source media is one transparent `547×814` WebP composite. Visually,
it contains a full-width upper photograph plus a smaller photograph anchored
to the bottom-right. Velvet Bloom had approximated the composite with a narrow
`88%` upper image aligned right, stretched to 760px tall, and a square image
anchored bottom-left. This reversed the source composition, made the upper image
too tall, moved the secondary image to the wrong side, and retained a mobile
image that the source hides below 768px.

## Repair

- Preserved the source `.7fr 1fr` desktop grid, 50px gutter, right-hand pricing
  table, four-row accordion, heading typography, and bottom-aligned CTA.
- Rebuilt the left media as a `547 / 814` composite canvas using approved local
  Pexels-backed `pricing-flatlay.jpg` and `popup-spa.jpg` assets.
- Upper image now spans `100% × 83.8%` from the top-left.
- Secondary image now spans `48.8% × 29.5%` from the bottom-right.
- Tablet preserves the two-column composite; mobile removes the media canvas and
  keeps the centered heading, accordion, and CTA with zero horizontal overflow.
- Tightened `qa/lpf-source-design-contracts/velvet-bloom.json` and documented
  the owned composite reconstruction in `docs/ASSET-SOURCES.md`.

## Browser Acceptance

Desktop 1440px:

- Composite canvas: `551.76×821.08`, matching the `547 / 814` source ratio.
- Upper image: `551.76×688.06`, full column width.
- Secondary image: `269.26×242.21`, bottom-right at `x=307.5`.
- Pricing table: `788.24×821.08`; heading and CTA remain top/bottom aligned.

Tablet 991px:

- Two equal columns remain with the 50px source gutter.
- Composite canvas: `430.5×640.63`; secondary image stays bottom-right.

Mobile 390px:

- Media wrapper: `display:none`, matching source mobile behavior.
- Section width: 390px; document horizontal overflow: 0px.
- Heading, rows, and CTA stack without overlap.

Accordion runtime:

- Mouse click opens Cosmetology and closes all other rows.
- Clicking Massage closes Cosmetology and opens Massage.
- Keyboard Enter reopens Cosmetology and closes Massage.
- Final state: Cosmetology `aria-expanded=true`, 303px content height; all
  other rows `aria-expanded=false`, 0px height.

## Validation

- `npm run design:lint`: pass, 0 findings.
- `npm run build`: pass, 1 static page built.
- Local Playwright desktop/tablet/mobile visual QA: pass.
- Local Playwright click and keyboard single-open accordion test: pass.
- `qa:lpl-rendered-output`: pass at desktop/tablet/mobile; Swiper visited 4/4
  slides at tablet and mobile widths.
- `qa:lpl-tech-stack`: pass.
- `qa:lpl-interactions`: pass with the extracted Magnolia interaction manifest.
- `qa:lpl-source-media`: pass; no local product image matches the 33 recorded
  source hashes or 15 perceptual source hashes.
- `qa:lpl-frozen-snapshot`: pass.
- `qa:lpl-asset-format`: pass.
- `qa:asset-deletions`: pass.
- The generic full-page `qa:lpl-source-contract --strict` reports historical,
  out-of-bucket differences in the popup, hero, services, standards, gallery,
  reviews, form, and footer. Its result is stored under `source-contract/` for
  transparency. Section 4 acceptance is enforced by the product's measured
  `velvet-bloom.json` source-design contract plus the attached section-level
  browser evidence; this ticket does not widen into unrelated page rebuilds.
- Public release, strict LPF gates, storefront funnel sync, and clean-repo proof:
  pending Release Engineering.

## Codify-Back

The failure was repeatable: flattening one transparent source composite into
multiple local images can preserve the correct media family while reversing the
source composition. The product source-design contract now pins the composite
canvas aspect, primary width/height, and secondary bottom-right anchoring. No
global workflow change is needed unless this defect repeats on another slug.

## Boundary Check

- Previous bucket (Standards of care): production files untouched.
- Next bucket (Gallery): production files untouched.
- Runtime libraries: unchanged; existing jQuery accordion preserved.
- Source media: not copied; approved local provider-backed photos preserved.
