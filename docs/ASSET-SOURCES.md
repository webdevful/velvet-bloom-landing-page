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
