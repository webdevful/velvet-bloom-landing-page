# Velvet Bloom Asset Sources

## LPF Identity

The header/footer logo and browser favicon bundle are WLFS assets generated from
the canonical Webdevful source mark with:

```bash
python3 tools/generate_logos.py --template-name "Velvet Bloom" --allow-name-override --output-dir public
```

Local files:

- `public/logo.png`
- `public/logo_white.png`
- `public/favicon-tab.png`
- `public/favicon-tab_white.png`
- `public/favicon.png`
- `public/favicon-32x32.png`
- `public/favicon-16x16.png`

Usage:

- Header and footer use `logo.png`, the dark `web | Velvet Bloom` lockup on the
  light page background.
- Browser head links use the square PNG favicon files.
- `favicon-tab.png` and `favicon-tab_white.png` are the horizontal `W | Velvet
  Bloom` tab identity proof assets.

Ownership and license:

- Webdevful-owned WLFS identity assets generated from the local Webdevful source
  mark. These assets are only for LPF page identity slots and are not used as
  section icons, proof marks, partner logos, decorative art, or gallery media.

## Photography

Photographic section assets live in `public/assets/img/`. Each image has a
neighboring `.provenance.json` file with its Pexels provider URL, author,
license note, local path, and downloaded width.

### Replacement shape contract

- Source format: Magnolia's service visuals are transparent WebP composites;
  each file bakes an irregular photograph alpha edge, transparent spacing, and
  a separate differently shaped outer hairline into one raster. The approved
  Pexels replacements remain local JPEG photographs with no source alpha, so
  the equivalent two-contour transparency is applied at render time by the
  `ServiceImageFrame.astro` clip-path and independent outline layers.
- Dimensions and aspect ratio: source files retain their downloaded pixel
  dimensions. In the Our Services section, CSS usage renders each photograph
  at 398 × 449px on desktop and 233 × 263px on mobile, an aspect ratio of
  `398 / 449`, with `object-fit: cover` inside the source-measured organic
  contour. Per-service frame ratios preserve the source composites at
  `405×457`, `406×458`, `405×452`, and `405×454`.
- Section context and content relevance: the four service slots use distinct
  cosmetology, massage, manicure, and makeup photographs that directly match
  each card's service topic.
- Reused status: each service photograph is used once in the visible desktop
  grid; the mobile slider reuses that same approved service set as the
  responsive representation of the same content, not as new decorative slots.
- Slider media dimensions: mobile service slider media render at 233 × 263px;
  tablet and desktop sizing follows the same CSS aspect-ratio contract.
- Replacement contract: preserve local provider-backed media, the independent
  inner and outer contours, transparent inter-contour spacing, rendered width
  and rendered height, and content-role mapping. A regular
  `border-radius: 50%` ellipse or concentric box-shadow ring is not
  source-compatible. Do not copy source media or substitute generated, cutout,
  logo, or interface artwork into these photo slots.

## Standards Of Care Icons

The Standards of care section uses Lucide's outlined Astro components from the
approved product dependency `@lucide/astro` version `^1.24.0`.

Icon mapping:

- Hygiene / eco care: outlined `Droplet` plus `Sparkles`
- Certified specialist / quality: outlined `BadgeCheck`
- Comfort / spa atmosphere: outlined `Sofa` plus `Sparkles`

Usage:

- Imported by `src/components/StandardCareIcon.astro` from `@lucide/astro`.
- Rendered as route-local inline Lucide SVG components in the Standards of care
  section.
- CSS controls only the section layout, icon size, color, and positioning; it
  does not draw or invent the icon artwork.

License:

- Lucide package license as distributed by npm. These outlined icons replace
  the source SVG icon roles without copying source-hosted SVG files. Lucide was
  selected because the previous locally installed Font Awesome solid glyphs
  could not preserve the source's outlined hygiene/certification/comfort visual
  family.

## Standards Of Care Decorative Outline

- Source role: one independent pale hairline contour behind each peach icon
  disk, with transparent separation and per-card rotation/offset.
- Final mechanism: route CSS renders a separate irregular border layer at the
  source-measured 212×225 aspect family; it remains independent of the inner
  disk and icon components and uses no copied source SVG.
- Contract: the outline must remain non-concentric, differently offset per
  card, behind the disk, unclipped, and visually subordinate at `#f8e8da`.
