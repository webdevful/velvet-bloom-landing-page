#!/usr/bin/env python3
"""Capture the Velvet Bloom Our Services bucket and measured geometry."""

from __future__ import annotations

import argparse
import asyncio
import json
from pathlib import Path

from playwright.async_api import async_playwright


VIEWPORTS = {
    "desktop": {"width": 2048, "height": 1062},
    "tablet": {"width": 1024, "height": 1366},
    "mobile": {"width": 390, "height": 844},
}


async def collect(page, url: str, output: Path, prefix: str) -> dict:
    result = {"url": url, "viewports": {}}
    for name, viewport in VIEWPORTS.items():
        await page.set_viewport_size(viewport)
        await page.goto(url, wait_until="networkidle", timeout=120_000)
        section = page.locator("#Services")
        await section.scroll_into_view_if_needed()
        await page.wait_for_timeout(1500)
        await section.screenshot(path=str(output / f"{prefix}-{name}.png"))
        result["viewports"][name] = await page.evaluate(
            """
            () => {
              const rect = (el) => {
                if (!el) return null;
                const r = el.getBoundingClientRect();
                const s = getComputedStyle(el);
                return {
                  x: Math.round(r.x * 100) / 100,
                  y: Math.round(r.y * 100) / 100,
                  width: Math.round(r.width * 100) / 100,
                  height: Math.round(r.height * 100) / 100,
                  display: s.display,
                  gridTemplateColumns: s.gridTemplateColumns,
                  gap: s.gap,
                  padding: s.padding,
                  marginTop: s.marginTop,
                  borderRadius: s.borderRadius,
                  objectFit: s.objectFit,
                  objectPosition: s.objectPosition,
                };
              };
              const section = document.querySelector('#Services');
              const grid = section?.querySelector('.services-grid');
              const slider = section?.querySelector('.services-slider');
              const sliderCard = slider?.querySelector('.services-item');
              const cards = [...(grid?.querySelectorAll(':scope > .service-item') || [])];
              return {
                section: rect(section),
                heading: rect(section?.querySelector('h2')),
                grid: rect(grid),
                slider: rect(slider),
                sliderCard: sliderCard ? {
                  inner: rect(sliderCard),
                  left: rect(sliderCard.querySelector('.services-item-left')),
                  imageWrap: rect(sliderCard.querySelector('.services-item-right')),
                  image: rect(sliderCard.querySelector('.image')),
                  title: rect(sliderCard.querySelector('.services-item-head')),
                  description: rect(sliderCard.querySelector('.service-item-description')),
                } : null,
                cards: cards.map((card) => ({
                  wrapper: rect(card),
                  inner: rect(card.querySelector('.services-item')),
                  left: rect(card.querySelector('.services-item-left')),
                  imageWrap: rect(card.querySelector('.services-item-right')),
                  image: rect(card.querySelector('.image')),
                  title: rect(card.querySelector('.services-item-head')),
                  description: rect(card.querySelector('.service-item-description')),
                })),
              };
            }
            """
        )
    return result


async def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-url", default="https://magnolia-template.webflow.io/")
    parser.add_argument("--target-url", required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--target-prefix", default="current-before")
    args = parser.parse_args()
    args.output_dir.mkdir(parents=True, exist_ok=True)

    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch()
        page = await browser.new_page()
        source = await collect(page, args.source_url, args.output_dir, "original")
        target = await collect(page, args.target_url, args.output_dir, args.target_prefix)
        await browser.close()

    (args.output_dir / f"metrics-{args.target_prefix}.json").write_text(
        json.dumps({"source": source, "target": target}, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    asyncio.run(main())
