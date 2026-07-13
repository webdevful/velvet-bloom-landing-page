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

The Standards of care section uses local Font Awesome Free icons from the
product dependency `@fortawesome/fontawesome-free` version `^7.3.0`.

Icon mapping:

- Hygiene / eco care: `fa-solid fa-seedling`
- Certified specialist / quality: `fa-solid fa-award`
- Comfort / spa atmosphere: `fa-solid fa-spa`

Usage:

- Imported in `src/pages/index.astro` from
  `@fortawesome/fontawesome-free/css/all.min.css`.
- Rendered as `<i>` elements in the Standards of care section.
- CSS controls only the section layout, icon size, color, and positioning; it
  does not draw or invent the icon artwork.

License:

- Font Awesome Free package license as distributed by npm. These icons replace
  the source SVG icon roles without copying source-hosted SVG files.
