#!/usr/bin/env node
// Renders the link preview image and the PNG icons from their sources.
//
//   node tools/render-images.mjs
//
// Needs Playwright (npm install -g playwright, then npx playwright install chromium).
// Writes og-image.png, assets/favicon-32.png and assets/apple-touch-icon.png.

import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});

const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await og.goto(pathToFileURL(join(root, "tools", "og-image.html")).href);
await og.evaluate(() => document.fonts.ready);
await og.screenshot({ path: join(root, "og-image.png") });

// iOS rounds the home screen icon itself, so the touch icon is drawn full bleed.
const svg = readFileSync(join(root, "assets", "favicon.svg"), "utf8");
const icons = [
  [32, "favicon-32.png", svg],
  [180, "apple-touch-icon.png", svg.replace(/rx="\d+"/, 'rx="0"')],
];
for (const [size, file, markup] of icons) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.setContent(`<style>html,body{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${markup}`);
  await page.screenshot({ path: join(root, "assets", file), omitBackground: true });
}

await browser.close();
console.log("Wrote og-image.png, assets/favicon-32.png, assets/apple-touch-icon.png");
