# Velvet Bloom Design Contract

Webdevful-owned beauty-salon & day-spa landing page. Source/inspiration only —
all final copy, brand marks, and media must be Webdevful-owned or
approved/licensed/open-source. Do not ship the Magnolia template name, copy, or
mirrored vendor markup.

## Source Baseline

- Source URL: `https://magnolia-template.webflow.io/`
- Source/inspiration label: Magnolia (Webflow hosted template)
- Capture: `/Volumes/WDF-NAS-01/04-Projects/Internal-Projects/Codebases/webdevful-astro-main/captures/magnolia-template-webflow-io/desktop/screenshot-fullpage.png`
- Source intake manifest: `/Volumes/WDF-NAS-01/04-Projects/Internal-Projects/Codebases/webdevful-astro-main/captures/magnolia-template-webflow-io/source-intake/SOURCE-INTAKE-MANIFEST.md`
- Rebuild guide: `/Volumes/WDF-NAS-01/04-Projects/Internal-Projects/Codebases/webdevful-astro-main/captures/magnolia-template-webflow-io/desktop/REBUILD-GUIDE.md`
- Structure (from capture): sticky nav with dropdowns + booking CTA, hero with
  booking CTA, four-service overview, care-standards band (safety / expertise /
  comfort), expandable pricing menu, salon photo gallery, five-star testimonials,
  contact form, and location/contact footer.
- Runtime: confirm the source's scroll behavior (including any
  `background-attachment` parallax) and reproduce it — do not substitute a
  decorative effect for a missing source background.

## Tokens

> Build worker: replace these starter values with tokens read from the source
> capture before first build. Keep the elegant, sophisticated beauty-salon feel.

```json
{
  "color": {
    "ink": "#221b1d",
    "paper": "#fbf6f3",
    "white": "#ffffff",
    "muted": "#7a6d6f",
    "line": "#ece0dc",
    "accent": "#b8867a",
    "accentDark": "#8f5f55"
  },
  "typography": {
    "heading": "TBD-from-source",
    "body": "TBD-from-source"
  }
}
```

## Visual Slot Contract

Classify every source visual slot through `docs/VISUAL-ASSET-CATALOG.md` and
preserve each family with approved owned/licensed/open-source media. Beauty-salon
photography slots (hero, gallery, service cards, testimonials) must use approved
licensed/open-source imagery, not flattened stills or dead embeds.

## Category

- Primary: `beauty-spas` (Beauty, Spas & Personal Care)
- Secondary: `salons-barbers`
