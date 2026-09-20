import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SOURCE = path.join(ROOT, "src/assets/sprites/equipments.png");
const OUT = path.join(ROOT, "src/assets/sprites/equipments.png");
const BACKUP = path.join(ROOT, "src/assets/sprites/equipments-before-pack.png");

const PAD = 1;
const GAP = 2;
const SRC_CELL = 216;
const SRC_GAP = 4;
const ROWS = 17;

function getPx(png, x, y) {
  const i = (png.width * y + x) << 2;
  return [png.data[i], png.data[i + 1], png.data[i + 2], png.data[i + 3]];
}

function setPx(png, x, y, rgba) {
  if (x < 0 || y < 0 || x >= png.width || y >= png.height) return;
  const i = (png.width * y + x) << 2;
  png.data[i] = rgba[0];
  png.data[i + 1] = rgba[1];
  png.data[i + 2] = rgba[2];
  png.data[i + 3] = rgba[3];
}

function emptyPng(w, h) {
  const png = new PNG({ width: w, height: h, colorType: 6 });
  png.data.fill(0);
  return png;
}

function opaqueBounds(png) {
  let minX = png.width;
  let minY = png.height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      if (getPx(png, x, y)[3] === 0) continue;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
  if (maxX < 0) return null;
  return { minX, minY, maxX, maxY };
}

function extractCell(src, row) {
  const y0 = row * (SRC_CELL + SRC_GAP);
  const out = emptyPng(SRC_CELL, SRC_CELL);
  for (let y = 0; y < SRC_CELL; y++) {
    for (let x = 0; x < SRC_CELL; x++) {
      const px = getPx(src, x, y0 + y);
      if (px[3]) setPx(out, x, y, px);
    }
  }
  return out;
}

function tightCrop(png) {
  const b = opaqueBounds(png);
  if (!b) return emptyPng(1, 1);
  const out = emptyPng(b.maxX - b.minX + 1, b.maxY - b.minY + 1);
  for (let y = b.minY; y <= b.maxY; y++) {
    for (let x = b.minX; x <= b.maxX; x++) {
      const px = getPx(png, x, y);
      if (px[3]) setPx(out, x - b.minX, y - b.minY, px);
    }
  }
  return out;
}

function placeInCell(sprite, cellW, cellH) {
  const out = emptyPng(cellW, cellH);
  const b = opaqueBounds(sprite);
  if (!b) return out;

  const sw = b.maxX - b.minX + 1;
  const sh = b.maxY - b.minY + 1;
  const innerW = cellW - PAD * 2;
  const innerH = cellH - PAD * 2;
  const destX = PAD + Math.floor((innerW - sw) / 2);
  const destY = PAD + (innerH - sh);

  for (let y = b.minY; y <= b.maxY; y++) {
    for (let x = b.minX; x <= b.maxX; x++) {
      const px = getPx(sprite, x, y);
      if (!px[3]) continue;
      setPx(out, destX + (x - b.minX), destY + (y - b.minY), px);
    }
  }
  return out;
}

function blit(dest, src, ox, oy) {
  for (let y = 0; y < src.height; y++) {
    for (let x = 0; x < src.width; x++) {
      const px = getPx(src, x, y);
      if (!px[3]) continue;
      setPx(dest, ox + x, oy + y, px);
    }
  }
}

const source = PNG.sync.read(fs.readFileSync(SOURCE));

if (source.width !== SRC_CELL || source.height !== SRC_CELL * ROWS + SRC_GAP * (ROWS - 1)) {
  console.warn(
    `Unexpected source size ${source.width}x${source.height}; expected ${SRC_CELL}x${SRC_CELL * ROWS + SRC_GAP * (ROWS - 1)}`,
  );
}

fs.copyFileSync(SOURCE, BACKUP);

const stations = [];
for (let row = 0; row < ROWS; row++) {
  stations.push(tightCrop(extractCell(source, row)));
}

let maxW = 0;
let maxH = 0;
for (const s of stations) {
  maxW = Math.max(maxW, s.width);
  maxH = Math.max(maxH, s.height);
}

const cellW = maxW + PAD * 2;
// Bake GAP into each cell so the sheet is a clean uniform grid
// (SpriteImage assumes equal row strides with no separate gaps).
const cellH = maxH + PAD * 2 + GAP;
const width = cellW;
const height = cellH * ROWS;
const sheet = emptyPng(width, height);

for (let i = 0; i < ROWS; i++) {
  // Place into a temporary cell without the trailing gap, then blit
  const contentCell = placeInCell(stations[i], cellW, maxH + PAD * 2);
  blit(sheet, contentCell, 0, i * cellH);
}

fs.writeFileSync(OUT, PNG.sync.write(sheet));

console.log(`Backup: ${BACKUP}`);
console.log(`Wrote ${OUT}`);
console.log(`Content max: ${maxW}x${maxH}`);
console.log(`Cell: ${cellW}x${cellH} (pad ${PAD}px)`);
console.log(`Gap: ${GAP}px`);
console.log(`Sheet: ${width}x${height} (was ${source.width}x${source.height})`);
console.log("Crops:", stations.map((s) => `${s.width}x${s.height}`).join(", "));
