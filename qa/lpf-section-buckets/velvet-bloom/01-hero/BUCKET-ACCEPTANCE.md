# Velvet Bloom Hero Bucket Acceptance

Ticket id: LPL-SECTION-REPAIR-2026-07-13-VELVET-BLOOM-01-HERO
Bucket id: 01-hero
Bucket name: Hero
Source URL: https://magnolia-template.webflow.io/
Target URL: https://velvet-bloom-landing-page.pages.dev/
Local production preview: http://127.0.0.1:4328/

## Defect

The product hero did not preserve the source Webflow structure. The image was
implemented as a grid item with a `123px` top margin instead of an absolutely
positioned right-side media slot. The subhead copy and `500px` max width forced
extra wrapping, and the `991px` breakpoint kept the desktop `96px` H1 scale.

## Repair

- Restored the source hero grid: `3fr 1fr`, source row contract, hero image
  positioned absolute at desktop, and static image flow below `991px`.
- Restored source hero heading margins and `48px` tablet/mobile H1 scale.
- Restored source subhead line-height, bottom spacing, and full-width grid span.
- Shortened owned Velvet Bloom hero copy so desktop/tablet/mobile wrapping
  matches the source structure while keeping the landing-page business brand.
- Matched the source button line-height so the CTA row height aligns.
- Cleared the paired release gate by promoting the existing mobile services
  slider to Swiper 12 with source-compatible arrows; this was outside the hero
  pixels but required for the LPF tech-stack guard to pass.

## Evidence

- Source/current before metrics: `before-metrics.json`
- Source/local after metrics: `after-final-metrics.json`
- Source/production-preview after metrics: `preview-final-metrics.json`
- Mobile Swiper runtime screenshot:
  - `preview-after-final-mobile-services-swiper.png`
- Original screenshots:
  - `original-desktop.png`
  - `original-tablet.png`
  - `original-mobile.png`
- Current-before public screenshots:
  - `current-public-before-desktop.png`
  - `current-public-before-tablet.png`
  - `current-public-before-mobile.png`
- Current-after production preview screenshots:
  - `preview-after-final-desktop.png`
  - `preview-after-final-tablet.png`
  - `preview-after-final-mobile.png`

## Measured Acceptance

Production preview matches the original rendered source coordinates for the
hero grid/content:

| Viewport | Source wrap / heading / image / subhead / button | Preview wrap / heading / image / subhead / button | Result |
|---|---:|---:|---|
| Desktop 1440 | `187 / 267 / 187 / 504 / 591` | `187 / 267 / 187 / 504 / 591` | pass |
| Tablet 991 | `133 / 153 / 252 / 627 / 720` | `133 / 153 / 252 / 627 / 720` | pass |
| Mobile 390 | `133 / 153 / 349 / 674 / 803` | `133 / 153 / 349 / 674 / 803` | pass |

Hero H1 font size now matches the source: `96px` desktop and `48px` at
tablet/mobile. Mobile subhead height matches the source two-line rhythm at
`72px`.

## Validation

- `npm run design:lint`: pass
- `npm run build`: pass
- Root `npm run qa:lpl-tech-stack -- --slug velvet-bloom --product-repo ... --capture-dir captures/magnolia-template-webflow-io/desktop`: pass
- Root `npm run qa:lpl-rendered-output -- --url http://127.0.0.1:4328/ --require-slider-interaction`: pass, Swiper visited `4/4` slides on desktop, tablet, and mobile
- Playwright source-vs-production-preview hero metrics: pass
- Playwright mobile Swiper proof: `Cosmetology -> Massage -> Cosmetology`
- Browser evidence captured at desktop, tablet, and mobile widths: pass

## Status

Bucket status: accepted locally, pending public deployment verification
Defect class: hero-source-structure / responsive-typography-contract
Runtime proof: n/a, static hero section
Remaining blocker: public Cloudflare deployment and storefront sync still need
to run after merge
Next bucket: owner-directed next section
