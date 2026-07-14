# Bucket Acceptance - Standards of Care Source Structure Return

Ticket: `LPL-SECTION-REPAIR-2026-07-13-VELVET-BLOOM-03-STANDARDS-SOURCE-STRUCTURE-RETURN`

Status: local acceptance passed; public release evidence pending

## Source Comparison

The repaired `#Standarts` section restores the Magnolia composition while
keeping Velvet Bloom-owned content and library-backed icons:

- centered Forum heading and source heading-to-grid rhythm;
- three 169px peach disks in the desktop grid;
- three independently offset irregular hairline outlines;
- outlined hygiene, certification, and comfort icons from Lucide;
- centered Cormorant copy with source-like width and 1.5 line height;
- source-matched responsive section heights: 493px desktop, 361px tablet,
  and 924px mobile.

The owner screenshots, automated source/current-before/local-after captures,
and computed geometry are stored beside this file.

## Scoped QA

- `npm run design:lint`: pass
- `npm run build`: pass
- `qa:lpl-tech-stack`: pass
- `qa:lpl-rendered-output`: pass at desktop, tablet, and mobile
- `qa:lpl-original-content`: pass; no source phrase reuse
- `qa:lpl-frozen-snapshot`: pass
- `qa:lpl-interactions`: pass
- `qa:lpl-source-media`: pass; no source asset copied
- full-page visual comparison: pass at desktop, tablet, and mobile
- strict source contract, Section 5 (`Standards of care`): pass (`0.10 ok`)

The broader strict full-page source/conversion gates still report pre-existing
defects outside this bucket: missing images/form fields in other sections,
unregistered background/logo-strip contracts, missing slider specification,
and legacy remote media. Those findings are not introduced by this repair and
remain outside its bounded acceptance.

## Release Proof

Pending product/catalog merge, Cloudflare deployment, public responsive
captures, and category-to-detail-to-demo funnel verification.
