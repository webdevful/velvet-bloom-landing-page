# Velvet Bloom Section 2 Repair — 2026-07-13

Ticket: `LPF_REPAIR-velvet-bloom-02-our-services-2026-07-13`

## Outcome

Repaired the Our Services section against the live Magnolia source and deployed
it to `https://velvet-bloom-landing-page.pages.dev/`.

The source 2×2 desktop grid, card proportions, text/photo split, oval photo
frame, copy rhythm, and responsive mobile card are restored while retaining
approved local Pexels photography and Webdevful-owned Velvet Bloom copy. The
Swiper runtime now exists only at the source tablet/mobile breakpoint, so no
hidden duplicate carousel remains on desktop.

## Evidence

- Bucket packet: `qa/lpf-section-buckets/velvet-bloom/02-our-services/`
- Desktop card: source `687 × 509.09`; deployed `687 × 509`.
- Desktop photo: source `397.98 × 449.09`; deployed `398 × 449`.
- Mobile card: source `342 × 557.41`; deployed `342 × 557.34`.
- Mobile photo: source `233 × 262.91`; deployed `233 × 262.84`.
- Section visual diff: PASS, height ratio `1.00`, band correlation `0.82`,
  SSIM `0.71`.
- Public rendered output: PASS at desktop/tablet/mobile; tablet/mobile slider
  visited `4/4` slides and changed state.
- Storefront funnel: PASS; hero/preview parity MAE `0.02`, RMS `0.79`.

## Validation

- `npm run build`
- `npm run design:lint`
- source-design and asset-shape conversion contracts
- tech-stack implementation, interactions, original-content, source-media,
  frozen-snapshot, asset-format, asset-deletion
- scoped visual diff and rendered-output interaction gate
- deployed storefront funnel sync

## Release

- Product change: `dc8f5b6`
- Product PR: `https://github.com/webdevful/velvet-bloom-landing-page/pull/8`
- Merge: `bddc360`
- Cloudflare immutable deployment:
  `https://e462dd95.velvet-bloom-landing-page.pages.dev`
- Stable deployment: `https://velvet-bloom-landing-page.pages.dev/`

Codify-back: the Velvet Bloom source-design contract now pins the service grid,
card split/padding, copy leading, photo aspect ratio, and hidden desktop slider.
