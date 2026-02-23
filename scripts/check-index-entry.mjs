import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const indexPath = resolve(process.cwd(), "index.html");
const html = readFileSync(indexPath, "utf8");

const hasSourceEntry = /<script\s+type=["']module["']\s+src=["']\/src\/main\.tsx["']\s*>\s*<\/script>/i.test(html);
const hasBuiltAssetsEntry = /<script[^>]*src=["']\/assets\//i.test(html) || /<link[^>]*href=["']\/assets\//i.test(html);

if (!hasSourceEntry || hasBuiltAssetsEntry) {
  console.error("\n[entry-check] index.html has an invalid app entry.");
  console.error("[entry-check] Expected: <script type=\"module\" src=\"/src/main.tsx\"></script>");
  console.error("[entry-check] Remove any hardcoded /assets/* script/link tags from index.html.\n");
  process.exit(1);
}

console.log("[entry-check] index.html entry is valid.");
