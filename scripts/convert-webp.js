/**
 * convert-webp.js  (ESM)
 * Converts all JPG/JPEG/PNG images in public/ subdirectories to WebP.
 * Run: node scripts/convert-webp.js
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "../public");
const QUALITY = 82;
const EXTENSIONS = /\.(jpg|jpeg|png)$/i;

function getAllImageFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllImageFiles(full));
    else if (EXTENSIONS.test(entry.name)) results.push(full);
  }
  return results;
}

function fmt(bytes) {
  return bytes >= 1024 * 1024
    ? (bytes / 1024 / 1024).toFixed(1) + " MB"
    : Math.round(bytes / 1024) + " KB";
}

const files = getAllImageFiles(PUBLIC_DIR);
let converted = 0, skipped = 0, totalBefore = 0, totalAfter = 0;

console.log(`\n📦  ${files.length} görsel bulundu. Dönüştürülüyor...\n`);

for (const file of files) {
  const webpPath = file.replace(EXTENSIONS, ".webp");
  if (fs.existsSync(webpPath)) { skipped++; continue; }

  try {
    const before = fs.statSync(file).size;
    await sharp(file).webp({ quality: QUALITY }).toFile(webpPath);
    const after = fs.statSync(webpPath).size;
    const pct = Math.round((1 - after / before) * 100);
    totalBefore += before;
    totalAfter  += after;
    converted++;
    const rel = path.relative(PUBLIC_DIR, file);
    console.log(`  ✓  ${rel.padEnd(60)}  ${fmt(before).padStart(7)} → ${fmt(after).padStart(7)}  (-%${pct})`);
  } catch (err) {
    console.error(`  ✗  ${file}: ${err.message}`);
  }
}

console.log(`\n✅  ${converted} dosya dönüştürüldü, ${skipped} zaten WebP vardı.`);
if (converted > 0) {
  const saved = totalBefore - totalAfter;
  console.log(`💾  Toplam tasarruf: ${fmt(saved)}  (%${Math.round((1 - totalAfter / totalBefore) * 100)} küçülme)\n`);
}
