#!/usr/bin/env python3
"""Capture the returned service-frame defect at inspection scale."""

from __future__ import annotations

import json
from pathlib import Path

from playwright.sync_api import sync_playwright


OUT = Path(__file__).resolve().parent
TARGETS = {
    "source": "https://magnolia-template.webflow.io/",
    "public-before": "https://velvet-bloom-landing-page.pages.dev/?return=frame-before",
    "local-after": "http://127.0.0.1:4441/",
}


def inspect(page, label: str) -> dict:
    frame = page.locator("#Services .services-grid .services-item-right").first
    frame.scroll_into_view_if_needed()
    page.wait_for_timeout(1200)
    rect = frame.bounding_box()
    if not rect:
        raise RuntimeError(f"{label}: service frame is not visible")

    pad = 16
    page.screenshot(
        path=str(OUT / f"{label}-frame.png"),
        clip={
            "x": max(0, rect["x"] - pad),
            "y": max(0, rect["y"] - pad),
            "width": rect["width"] + pad * 2,
            "height": rect["height"] + pad * 2,
        },
    )

    return frame.evaluate(
        """el => {
          const image = el.querySelector('img');
          const style = image ? getComputedStyle(image) : null;
          const rect = image?.getBoundingClientRect();
          const outline = el.querySelector('.service-image-outline');
          const outlinePath = outline?.querySelector('path');
          const maskPath = el.querySelector('clipPath path');
          return {
            frameMarkup: el.outerHTML,
            image: image ? {
              currentSrc: image.currentSrc,
              naturalWidth: image.naturalWidth,
              naturalHeight: image.naturalHeight,
              rect: rect && { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
              borderRadius: style.borderRadius,
              boxShadow: style.boxShadow,
              clipPath: style.clipPath,
              objectFit: style.objectFit,
            } : null,
            contourLayers: {
              clipPaths: el.querySelectorAll('clipPath').length,
              maskPathLength: maskPath?.getAttribute('d')?.length || 0,
              independentOutlines: el.querySelectorAll('.service-image-outline').length,
              outlinePathLength: outlinePath?.getAttribute('d')?.length || 0,
            }
          };
        }"""
    )


def main() -> None:
    results = {}
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        for label, url in TARGETS.items():
            page = browser.new_page(
                viewport={"width": 2048, "height": 1062},
                device_scale_factor=2,
            )
            page.goto(url, wait_until="networkidle")
            results[label] = {"url": url, **inspect(page, label)}
            page.close()
        browser.close()

    (OUT / "frame-mechanism.json").write_text(
        json.dumps(results, indent=2), encoding="utf-8"
    )


if __name__ == "__main__":
    main()
