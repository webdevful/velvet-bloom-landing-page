# Velvet Bloom - Header Nav Link Weight Bucket Acceptance

Ticket id: LPL-SECTION-REPAIR-2026-07-13-VELVET-BLOOM-00-HEADER-NAV-LINK-WEIGHT
Bucket id: 00-header-nav-link-weight
Status: pass, public release verified

## Defect

The owner returned the header navigation links because the current product
looked semi-bold while the original Magnolia source reads as bold.

Fresh browser measurements showed both pages reported `font-weight: 700`, but
the product inherited global `-webkit-font-smoothing: antialiased`. The source
uses `-webkit-font-smoothing: auto`, which makes the same Cormorant 700 face
render heavier on macOS.

## Source Contract

Source `.header-nav-link` at 1440px:

- `font-family: Cormorant, sans-serif`
- `font-size: 16px`
- `line-height: 19px`
- `font-weight: 700`
- `font-style: normal`
- `color: rgb(34, 34, 34)`
- `-webkit-font-smoothing: auto`

## Repair

Updated `src/styles/velvet-bloom.css` so `.header-nav-link` explicitly declares
the source ink and smoothing instead of inheriting the product body's
anti-aliased smoothing:

- `color: #222`
- `-webkit-font-smoothing: auto`

The prior source font contract remains explicit:

- `font-family: var(--body)`
- `font-size: 16px`
- `font-style: normal`
- `font-weight: 700`
- `line-height: 1.1875`

No layout, logo, hero, section, JavaScript, image, or catalog record was changed.

## Evidence

- Source desktop header screenshot: `source-desktop-header.png`
- Current-before public header screenshot: `currentBeforePublic-desktop-header.png`
- Current-after local header screenshot: `currentAfterLocal-desktop-header.png`
- Current-after local mobile closed: `currentAfterLocal-mobile-closed.png`
- Current-after local mobile open: `currentAfterLocal-mobile-open.png`
- Public-after deployed desktop header: `public-after-deploy-desktop-header.png`
- Metrics: `header-nav-link-weight-metrics.json`
- Public-after deployed metrics: `public-after-deploy-metrics.json`

Key metric for `Services`:

```json
{
  "source": {
    "fontWeight": "700",
    "color": "rgb(34, 34, 34)",
    "webkitFontSmoothing": "auto"
  },
  "before": {
    "fontWeight": "700",
    "color": "rgb(0, 0, 0)",
    "webkitFontSmoothing": "antialiased"
  },
  "after": {
    "fontWeight": "700",
    "color": "rgb(34, 34, 34)",
    "webkitFontSmoothing": "auto"
  }
}
```

## Validation

- Product `npm run design:lint`: pass
- Product `npm run build`: pass
- Local Playwright source/current-after computed-style comparison: pass
- Local mobile menu open/closed screenshot regression: pass
- Product Cloudflare deployment: pass, `https://81186d1c.velvet-bloom-landing-page.pages.dev`
- Public Playwright computed-style verification: pass, canonical URL with cache bust reports `Cormorant`, `16px`, `19px`, `700`, `#222`, and `-webkit-font-smoothing: auto`
- Public rendered-output slider regression: pass, Swiper visited `4/4` slides on desktop, tablet, and mobile

## Codify-Back

Defect class: `header-source / typography-rendering`.

No reusable checker change in this pass. The repeatable lesson is recorded in
this bucket: when an owner says a copied font weight still looks lighter,
compare inherited font smoothing and rendered font loading, not just
`font-weight`.
