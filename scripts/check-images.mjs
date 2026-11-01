#!/usr/bin/env node
/**
 * Verifies that every image in src/lib/image-data.json resolves on Wikimedia
 * Commons at the thumbnail widths the site requests.
 *
 *   npm run check:images
 *
 * Exits with a non-zero code if any image fails and prints which ones, so a
 * wrong file name is easy to find and fix in image-data.json.
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(await readFile(path.join(root, "src/lib/image-data.json"), "utf8"));

const WIDTHS = [500, 1280];
const BASE = "https://commons.wikimedia.org/wiki/Special:FilePath/";
const UA = "AstralaxyImageCheck/1.0 (local build check; replace with your contact URL)";

const slug = (file) => encodeURIComponent(file.replace(/ /g, "_"));

async function check(key, file, width) {
  const url = `${BASE}${slug(file)}?width=${width}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
    const type = res.headers.get("content-type") ?? "";
    const ok = res.ok && type.startsWith("image/");
    await res.body?.cancel();
    return { key, width, ok, detail: `${res.status} ${type}` };
  } catch (err) {
    return { key, width, ok: false, detail: String(err?.cause?.code ?? err?.message ?? err) };
  }
}

const jobs = Object.entries(data).flatMap(([key, meta]) =>
  WIDTHS.map((w) => () => check(key, meta.file, w)),
);

const results = [];
const queue = [...jobs];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const job = queue.shift();
      if (job) results.push(await job());
    }
  }),
);

const failed = results.filter((r) => !r.ok).sort((a, b) => a.key.localeCompare(b.key));
console.log(`${results.length - failed.length}/${results.length} requests succeeded.`);
if (failed.length) {
  console.log("\nFailed:");
  for (const f of failed) console.log(`  ${f.key} @${f.width}px  ->  ${f.detail}`);
  console.log("\nFix the matching entry's \"file\" in src/lib/image-data.json (the name after \"File:\" on Commons).");
  process.exit(1);
}
