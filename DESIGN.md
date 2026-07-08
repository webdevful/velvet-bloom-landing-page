---
designmd: 0.3.0
name: Velvet Bloom
slug: velvet-bloom
status: live
type: landing-page
---

## Source Baseline

- Source URL: `https://magnolia-template.webflow.io/`
- Source/inspiration label: Magnolia (Webflow hosted template)
- Primary category: beauty-spas
- Secondary categories: salons-barbers

## Tokens

```json
{
  "color": {
    "ink": "#000000",
    "paper": "#fdfaf7",
    "white": "#ffffff",
    "warmBeige": "#f8e8da",
    "peach": "#f8c497",
    "accentHover": "#f4d2b5",
    "dark": "#1f2024",
    "muted": "#7a6d6f",
    "line": "#ece0dc"
  },
  "typography": {
    "heading": "Forum, serif",
    "body": "Cormorant, serif",
    "accent": "Open Sans, sans-serif",
    "heroSize": "clamp(44px, 6vw, 96px)",
    "h2Size": "clamp(28px, 3vw, 36px)",
    "bodySize": "16px",
    "bodyLineHeight": "1.5"
  },
  "spacing": {
    "sectionMargin": "120px",
    "containerMax": "1390px",
    "containerPad": "25px"
  }
}
```

## Structure

1. Popup booking modal (overlay)
2. Top Webflow-style header section with logo image, nav links (Services, Standards, Pricing, Gallery), Contact CTA
3. Hero: split layout (heading left, image right, subtitle + CTA below heading)
4. Services: 4-card grid (Cosmetology, Massage, Nails, Makeup) with image + description; mobile Webflow-style slider
5. Standards of care: 3-icon cards (Safety, Expertise, Comfort) with decorative ellipses
6. Pricing: split layout (image left, accordion dropdown pricing menus right)
7. Gallery: 5-image masonry grid with lightbox
8. Reviews: 3 testimonial cards with star ratings on warm background
9. Contact form: centered peach callback band with phone form and decor images
10. Footer: logo image slot, address/email/phone, social links, footer menu, bottom CTA band
11. Powered by WebDevful signature inside the footer

## Interactions

- Top header section and mobile hamburger menu
- Pricing accordion dropdowns (single open at a time)
- Gallery lightbox overlay
- Booking popup modal via `data-open-popup` triggers
- Services Webflow-style mobile slider behavior implemented with local jQuery 3.7.x
- Smooth scroll for anchor links

## Source Dependency Map

- Source runtime: Webflow runtime on jQuery 3.5.1, WebFont loader, Webflow CSS slider/nav/lightbox patterns.
- Product runtime: Astro static build, Google Fonts CSS loading for the same Forum/Cormorant families, jQuery 3.7.1 for the interaction layer, and local Webflow-style slider/accordion/modal/lightbox behavior.
- Removed non-source dependencies: Swiper and FontAwesome are not part of the Magnolia source stack and are intentionally not used.
