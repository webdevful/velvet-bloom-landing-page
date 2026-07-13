# Velvet Bloom Our Services — Frame Contour Return

Ticket: `LPF_REPAIR-velvet-bloom-02-our-services-2026-07-13`

Return: `01-frame-contour`

Status: `local-pass / public-release-pending`

## Owner return

The prior repair retained a regular CSS ellipse and concentric outline. The
source uses an organic photograph contour plus a separate outer hairline whose
shape and spacing are not concentric with the photograph.

Owner evidence:

- `/Users/webdevful/Desktop/Screenshot 2026-07-13 at 5.07.00 PM.png`
- `/Users/webdevful/Desktop/Screenshot 2026-07-13 at 5.07.08 PM.png`

## Source mechanism

- Live source element: `.services-item-right > img.image`.
- No frame library is involved.
- Computed source image styles: `border-radius: 0px`, `box-shadow: none`,
  `clip-path: none`, `mask-image: none`; there are no frame pseudo-elements.
- The source file is a transparent WebP composite. The first service asset is
  intrinsically `405 × 457`, has alpha range `0–255`, and contains 65,568 fully
  transparent pixels.
- The raster asset itself contains two different contours: an inner photograph
  alpha edge and a separate outer hairline, with transparent spacing between.

## Repair contract

- Keep the four approved local Pexels photographs.
- Remove `border-radius: 50%` and the concentric box-shadow rings.
- Clip each local photograph with the measured source inner contour.
- Render the measured outer contour as an independent scalable hairline.
- Preserve per-service source composite ratios: `405×457`, `406×458`,
  `405×452`, and `405×454`.
- Preserve the existing responsive Swiper behavior.

## Evidence

- `source-frame.png`
- `public-before-frame.png`
- `local-after-frame.png`
- `frame-mechanism.json`
- `original-{desktop,tablet,mobile}.png`
- `return-before-{desktop,tablet,mobile}.png`
- `return-after-{desktop,tablet,mobile}.png`

## Acceptance

- [x] Source mechanism recorded from live DOM, computed CSS, and asset alpha.
- [x] Inner photo contour is visibly irregular rather than a regular ellipse.
- [x] Outer hairline is a separate, differently shaped contour.
- [x] Transparent spacing between the two contours matches the source pattern.
- [x] Desktop and mobile screenshots visibly differ from the returned build.
- [x] Build, design lint, source-design, and local rendered-output gates pass.
- [ ] Public deployment and storefront funnel verified.

Defect class: `visual-slot / transparent-composite-flattened-to-css-ellipse`.

## Local comparison

- Desktop section: source and repaired `2048 × 1163.23`.
- Desktop grid: source and repaired `1390 × 1031.23`.
- Four card heights: source and repaired `509.09`, `508.97`, `504.19`,
  `506.14`.
- Mobile section: source and repaired `390 × 650.41`.
- Mobile card: source and repaired `342 × 557.41`.
- Structural visual diff improved from the returned pass's band/SSIM
  `0.82 / 0.71` to `0.87 / 0.80`.
- Rendered output: desktop has zero Swipers; tablet/mobile visit `4/4` slides.

Codify-back: source-design checks now forbid the false radius/shadow treatment
and require the organic clip-path plus independent outline layer. The return
packet records source alpha and contour structure so future acceptance cannot
pass from bounding boxes alone.
