import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SOURCE = path.join(
  ROOT,
  "src/assets/ChatGPT Image Sep 18, 2026, 10_27_56 AM.png",
);
const OUT = path.join(ROOT, "src/assets/sprites/equipments-v3.png");

const GAP = 4;
const EQUIPMENT_COUNT = 17;

/** Dark charcoal background from the ChatGPT sheet. */
function isBackground(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max < 48 && max - min < 14;
}

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

function copyRegion(src, x0, y0, x1, y1) {
  const w = x1 - x0 + 1;
  const h = y1 - y0 + 1;
  const out = emptyPng(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const [r, g, b] = getPx(src, x0 + x, y0 + y);
      if (isBackground(r, g, b)) continue;
      setPx(out, x, y, [r, g, b, 255]);
    }
  }
  return out;
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

function tightCrop(png, pad = 1) {
  const b = opaqueBounds(png);
  if (!b) return emptyPng(1, 1);
  const x0 = Math.max(0, b.minX - pad);
  const y0 = Math.max(0, b.minY - pad);
  const x1 = Math.min(png.width - 1, b.maxX + pad);
  const y1 = Math.min(png.height - 1, b.maxY + pad);
  const out = emptyPng(x1 - x0 + 1, y1 - y0 + 1);
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const px = getPx(png, x, y);
      if (px[3]) setPx(out, x - x0, y - y0, px);
    }
  }
  return out;
}

/** Soften leftover bg fringe near edges of opaque content. */
function cleanFringe(png) {
  const copy = Buffer.from(png.data);
  const alphaAt = (x, y) => {
    if (x < 0 || y < 0 || x >= png.width || y >= png.height) return 0;
    return copy[(y * png.width + x) * 4 + 3];
  };
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const i = (y * png.width + x) * 4;
      const a = copy[i + 3];
      if (!a) continue;
      const r = copy[i];
      const g = copy[i + 1];
      const b = copy[i + 2];
      if (!isBackground(r, g, b)) continue;
      // only strip dark pixels that are mostly surrounded by empty/dark
      let emptyN = 0;
      for (const [dx, dy] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        if (alphaAt(x + dx, y + dy) === 0) emptyN++;
      }
      if (emptyN >= 2) setPx(png, x, y, [0, 0, 0, 0]);
    }
  }
}

function rotate90(png, dir) {
  const w = png.width;
  const h = png.height;
  const out = emptyPng(h, w);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const px = getPx(png, x, y);
      if (!px[3]) continue;
      let nx;
      let ny;
      if (dir === "cw") {
        nx = h - 1 - y;
        ny = x;
      } else {
        nx = y;
        ny = w - 1 - x;
      }
      setPx(out, nx, ny, px);
    }
  }
  return out;
}

/**
 * Place sprite into a square cell, horizontally centered,
 * with the lowest opaque pixels sitting on the bottom edge (ground).
 */
function placeOnGround(sprite, cell) {
  const out = emptyPng(cell, cell);
  const b = opaqueBounds(sprite);
  if (!b) return out;
  const sw = b.maxX - b.minX + 1;
  const sh = b.maxY - b.minY + 1;
  const destX = Math.floor((cell - sw) / 2);
  const destY = cell - sh;
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

function mergeBands(bands, gap) {
  if (!bands.length) return [];
  const out = [bands[0].slice()];
  for (let i = 1; i < bands.length; i++) {
    const prev = out[out.length - 1];
    if (bands[i][0] - prev[1] <= gap) prev[1] = bands[i][1];
    else out.push(bands[i].slice());
  }
  return out;
}

function findContentBands(png, axis) {
  const primary = axis === "y" ? png.height : png.width;
  const secondary = axis === "y" ? png.width : png.height;
  const density = [];

  for (let a = 0; a < primary; a++) {
    let count = 0;
    for (let b = 0; b < secondary; b++) {
      const x = axis === "y" ? b : a;
      const y = axis === "y" ? a : b;
      const [r, g, bl] = getPx(png, x, y);
      if (!isBackground(r, g, bl)) count++;
    }
    density.push(count);
  }

  const thresh = secondary * 0.015;
  const bands = [];
  let inBand = false;
  let start = 0;
  for (let a = 0; a < primary; a++) {
    const content = density[a] > thresh;
    if (content && !inBand) {
      inBand = true;
      start = a;
    } else if (!content && inBand) {
      inBand = false;
      bands.push([start, a - 1]);
    }
  }
  if (inBand) bands.push([start, primary - 1]);
  return bands;
}

function extractStations(src) {
  // Equipment art bands only (skip thin label bands ~17-18px).
  const rowBands = mergeBands(findContentBands(src, "y"), 12).filter(
    ([a, b]) => b - a + 1 > 40,
  );

  if (rowBands.length !== 3) {
    throw new Error(`Expected 3 equipment rows, found ${rowBands.length}`);
  }

  const stations = [];

  for (let row = 0; row < rowBands.length; row++) {
    const [y0, y1] = rowBands[row];
    const slice = copyRegion(src, 0, y0, src.width - 1, y1);

    const colBands = mergeBands(findContentBands(slice, "x"), 20).filter(
      ([a, b]) => b - a + 1 > 40,
    );

    const expected = row === 2 ? 5 : 6;
    if (colBands.length !== expected) {
      throw new Error(
        `Row ${row}: expected ${expected} stations, found ${colBands.length}`,
      );
    }

    for (const [x0, x1] of colBands) {
      // Pad horizontally a bit using source coords
      const px0 = Math.max(0, x0 - 4);
      const px1 = Math.min(src.width - 1, x1 + 4);
      let sprite = copyRegion(src, px0, y0, px1, y1);
      cleanFringe(sprite);
      sprite = tightCrop(sprite, 2);
      stations.push(sprite);
    }
  }

  if (stations.length !== EQUIPMENT_COUNT) {
    throw new Error(`Expected ${EQUIPMENT_COUNT} stations, got ${stations.length}`);
  }

  return stations;
}

function buildSheet(stations) {
  let cell = 0;
  for (const s of stations) {
    cell = Math.max(cell, s.width, s.height);
  }
  // Square cells; never downscale — pad up to max extent.
  cell = Math.ceil(cell / 8) * 8;

  const rows = stations.length;
  const width = cell;
  const height = cell * rows + GAP * (rows - 1);
  const sheet = emptyPng(width, height);

  for (let i = 0; i < stations.length; i++) {
    const bottom = placeOnGround(stations[i], cell);
    blit(sheet, bottom, 0, i * (cell + GAP));
  }

  return { sheet, cell, width, height };
}

const source = PNG.sync.read(fs.readFileSync(SOURCE));
const stations = extractStations(source);
const { sheet, cell, width, height } = buildSheet(stations);

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, PNG.sync.write(sheet));

console.log(`Wrote ${OUT}`);
console.log(`Stations: ${stations.length}`);
console.log(`Cell: ${cell}x${cell}, gap: ${GAP}`);
console.log(`Sheet: ${width}x${height}`);
console.log(
  "Crop sizes:",
  stations.map((s) => `${s.width}x${s.height}`).join(", "),
);
