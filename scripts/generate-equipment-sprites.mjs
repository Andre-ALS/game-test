import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../src/assets/sprites/equipments.png");

// 4× of the original 14px base — readable hero props + exact pixels
const CELL = 56;
const GAP = 4;
const COLS = 3;
const WIDTH = CELL * COLS + GAP * (COLS - 1);
const ROWS = 17;
const HEIGHT = CELL * ROWS + GAP * (ROWS - 1);

const C = {
  wood: [186, 132, 82, 255],
  woodDark: [138, 90, 48, 255],
  woodLight: [220, 172, 120, 255],
  woodMid: [168, 114, 68, 255],
  metal: [158, 164, 172, 255],
  metalDark: [100, 106, 116, 255],
  metalLight: [210, 216, 224, 255],
  metalMid: [130, 136, 144, 255],
  black: [36, 36, 40, 255],
  dark: [56, 56, 62, 255],
  gray: [88, 92, 98, 255],
  white: [248, 248, 250, 255],
  cream: [236, 230, 220, 255],
  outline: [28, 24, 22, 255],
  red: [210, 58, 52, 255],
  redHot: [255, 70, 40, 255],
  orange: [236, 140, 42, 255],
  yellow: [236, 204, 64, 255],
  green: [64, 168, 78, 255],
  blue: [64, 140, 214, 255],
  lightBlue: [150, 210, 236, 255],
  ice: [210, 236, 250, 255],
  iceDark: [170, 210, 230, 255],
  brown: [120, 72, 40, 255],
  coffee: [92, 52, 28, 255],
  choc: [118, 68, 38, 255],
  chocLight: [150, 92, 54, 255],
  pink: [230, 110, 140, 255],
};

function setPx(png, x, y, rgba) {
  if (x < 0 || y < 0 || x >= png.width || y >= png.height) return;
  const i = (png.width * y + x) << 2;
  png.data[i] = rgba[0];
  png.data[i + 1] = rgba[1];
  png.data[i + 2] = rgba[2];
  png.data[i + 3] = rgba[3];
}

function rotateCell(src, dir) {
  const out = new Array(CELL * CELL * 4).fill(0);
  for (let y = 0; y < CELL; y++) {
    for (let x = 0; x < CELL; x++) {
      let nx = x;
      let ny = y;
      if (dir === "cw") {
        nx = CELL - 1 - y;
        ny = x;
      } else if (dir === "ccw") {
        nx = y;
        ny = CELL - 1 - x;
      }
      const si = (y * CELL + x) * 4;
      const di = (ny * CELL + nx) * 4;
      out[di] = src[si];
      out[di + 1] = src[si + 1];
      out[di + 2] = src[si + 2];
      out[di + 3] = src[si + 3];
    }
  }
  return out;
}

function makeCell(draw) {
  const buf = new Array(CELL * CELL * 4).fill(0);

  const px = (x, y, rgba) => {
    if (x < 0 || y < 0 || x >= CELL || y >= CELL) return;
    const i = (y * CELL + x) * 4;
    buf[i] = rgba[0];
    buf[i + 1] = rgba[1];
    buf[i + 2] = rgba[2];
    buf[i + 3] = rgba[3];
  };

  const rect = (x, y, w, h, rgba) => {
    for (let yy = 0; yy < h; yy++) for (let xx = 0; xx < w; xx++) px(x + xx, y + yy, rgba);
  };

  const oval = (cx, cy, rx, ry, rgba) => {
    for (let y = -ry; y <= ry; y++) {
      for (let x = -rx; x <= rx; x++) {
        if ((x * x) / (rx * rx) + (y * y) / (ry * ry) <= 1) px(cx + x, cy + y, rgba);
      }
    }
  };

  /** Filled rect with 1px dark outline (reads better on map tiles). */
  const box = (x, y, w, h, fill, outline = C.outline) => {
    rect(x, y, w, h, outline);
    if (w > 2 && h > 2) rect(x + 1, y + 1, w - 2, h - 2, fill);
  };

  const hLine = (x, y, w, rgba) => rect(x, y, w, 1, rgba);
  const vLine = (x, y, h, rgba) => rect(x, y, 1, h, rgba);

  draw({ px, rect, oval, box, hLine, vLine, C });

  // outer silhouette outline pass — darken any transparent neighbor of opaque pixels
  const copy = buf.slice();
  const isOpaque = (x, y) => {
    if (x < 0 || y < 0 || x >= CELL || y >= CELL) return false;
    return copy[(y * CELL + x) * 4 + 3] > 0;
  };
  for (let y = 0; y < CELL; y++) {
    for (let x = 0; x < CELL; x++) {
      if (isOpaque(x, y)) continue;
      if (
        isOpaque(x - 1, y) ||
        isOpaque(x + 1, y) ||
        isOpaque(x, y - 1) ||
        isOpaque(x, y + 1)
      ) {
        px(x, y, C.outline);
      }
    }
  }

  return buf;
}

/** Bottom-facing wooden/metal counter with legs + bright top edge. */
function drawCounter(g, { metal = false, wide = false } = {}) {
  const top = metal ? C.metal : C.wood;
  const mid = metal ? C.metalMid : C.woodMid;
  const side = metal ? C.metalDark : C.woodDark;
  const edge = metal ? C.metalLight : C.woodLight;
  const x = wide ? 3 : 5;
  const w = wide ? 50 : 46;

  // tabletop
  g.box(x, 22, w, 20, top);
  g.hLine(x + 1, 23, w - 2, edge);
  g.rect(x + 1, 24, w - 2, 3, mid);
  // front face
  g.rect(x + 1, 38, w - 2, 6, side);
  g.hLine(x + 1, 38, w - 2, mid);
  // legs
  g.rect(x + 3, 44, 4, 8, side);
  g.rect(x + w - 7, 44, 4, 8, side);
  g.rect(x + 4, 44, 2, 7, mid);
  g.rect(x + w - 6, 44, 2, 7, mid);
}

function drawCup(g, x, y) {
  g.box(x, y, 8, 10, C.white);
  g.hLine(x + 1, y + 1, 6, C.cream);
  g.hLine(x + 1, y + 4, 6, C.cream);
  g.hLine(x + 1, y + 7, 6, C.cream);
  g.rect(x + 1, y + 9, 6, 1, C.cream);
}

function drawCupStacks(g) {
  drawCounter(g);
  // two stacks
  for (let s = 0; s < 2; s++) {
    const sx = 10 + s * 12;
    for (let i = 0; i < 4; i++) drawCup(g, sx, 8 + i * 3);
  }
  // black tray
  g.box(36, 28, 12, 10, C.black);
  g.rect(38, 30, 8, 6, C.dark);
}

function drawCoffee(g) {
  drawCounter(g);
  // drip machine body
  g.box(16, 6, 24, 28, C.black);
  g.rect(18, 8, 20, 6, C.dark);
  g.rect(20, 10, 6, 3, C.gray);
  // pot
  g.box(22, 18, 12, 12, C.metalLight);
  g.rect(24, 22, 8, 6, C.coffee);
  g.rect(24, 20, 8, 2, C.brown);
  // spout / top
  g.rect(24, 4, 8, 3, C.dark);
  g.rect(26, 3, 4, 2, C.gray);
}

function drawTea(g) {
  drawCounter(g);
  // kettle
  g.oval(16, 22, 9, 10, C.metalLight);
  g.oval(16, 20, 7, 8, C.metal);
  g.box(12, 12, 6, 10, C.metal);
  g.rect(13, 11, 4, 2, C.metalLight);
  g.rect(22, 18, 4, 3, C.metalDark); // spout
  // tea box with colored bags
  g.box(28, 14, 18, 16, C.black);
  const bags = [C.green, C.yellow, C.red, C.orange];
  bags.forEach((c, i) => {
    g.rect(30 + i * 4, 16, 3, 12, c);
    g.rect(30 + i * 4, 16, 3, 2, C.cream);
  });
}

function drawWater(g) {
  drawCounter(g);
  // dispenser base
  g.box(16, 30, 24, 10, C.metal);
  g.rect(18, 32, 20, 3, C.metalLight);
  g.rect(26, 36, 4, 3, C.dark); // tap
  // blue jug
  g.oval(28, 18, 12, 14, C.lightBlue);
  g.oval(28, 16, 9, 11, C.blue);
  g.rect(24, 8, 8, 6, C.metalLight);
  g.rect(26, 6, 4, 3, C.metal);
  // highlight
  g.rect(22, 14, 3, 8, C.lightBlue);
}

function drawMilk(g) {
  drawCounter(g);
  // carton
  g.box(12, 8, 16, 28, C.white);
  g.rect(13, 9, 14, 8, C.blue);
  g.rect(14, 20, 12, 10, C.blue);
  g.rect(16, 22, 8, 6, C.white);
  g.rect(14, 8, 12, 2, C.cream); // fold top
  // small dispenser
  g.box(34, 22, 12, 16, C.black);
  g.rect(36, 24, 8, 4, C.metalLight);
  g.rect(38, 30, 4, 4, C.dark);
}

function drawSoda(g) {
  drawCounter(g);
  g.box(10, 8, 36, 28, C.black);
  g.rect(12, 10, 32, 6, C.dark);
  const taps = [C.red, C.green, C.orange];
  taps.forEach((c, i) => {
    const x = 14 + i * 10;
    g.box(x, 14, 8, 10, c);
    g.rect(x + 2, 24, 4, 8, C.dark);
    g.rect(x + 3, 30, 2, 3, C.gray);
  });
}

function drawJuice(g) {
  drawCounter(g);
  g.box(8, 8, 40, 28, C.black);
  g.rect(10, 10, 36, 4, C.dark);
  const tanks = [C.orange, C.yellow, C.pink];
  tanks.forEach((c, i) => {
    const x = 12 + i * 12;
    g.box(x, 14, 10, 16, C.lightBlue);
    g.rect(x + 1, 18, 8, 11, c);
    g.rect(x + 3, 30, 4, 4, C.dark);
  });
}

function drawChocolate(g) {
  drawCounter(g);
  g.box(12, 6, 22, 30, C.choc);
  g.rect(14, 8, 18, 8, C.chocLight);
  g.rect(16, 10, 14, 4, C.brown);
  g.rect(18, 18, 10, 10, C.coffee);
  g.rect(20, 6, 6, 3, C.dark);
  // cup under nozzle
  g.box(38, 26, 10, 12, C.white);
  g.hLine(39, 28, 8, C.cream);
  g.rect(20, 34, 6, 3, C.dark); // spout
}

function drawIce(g) {
  drawCounter(g, { metal: true, wide: true });
  // bin
  g.box(8, 12, 28, 22, C.metalDark);
  g.rect(10, 14, 24, 16, C.ice);
  // ice cubes
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      const x = 12 + col * 5;
      const y = 16 + row * 5;
      g.box(x, y, 4, 4, C.iceDark);
      g.px(x + 1, y + 1, C.white);
    }
  }
  // scoop
  g.oval(42, 28, 7, 5, C.metalLight);
  g.rect(46, 26, 6, 3, C.metal);
  g.rect(50, 24, 3, 8, C.metalDark);
}

function drawPrep(g) {
  drawCounter(g, { metal: true, wide: true });
  // cutting board
  g.box(6, 20, 20, 16, C.wood);
  g.hLine(7, 21, 18, C.woodLight);
  g.rect(8, 24, 16, 1, C.woodMid);
  g.rect(8, 28, 16, 1, C.woodMid);
  // knife
  g.rect(28, 14, 4, 22, C.black);
  g.rect(27, 12, 6, 4, C.dark);
  g.rect(29, 16, 2, 16, C.metalLight);
  // scale
  g.box(36, 22, 14, 14, C.metal);
  g.rect(38, 24, 10, 6, C.green);
  g.rect(39, 25, 8, 2, C.white);
  g.rect(40, 32, 6, 2, C.metalDark);
}

function drawMixer(g) {
  drawCounter(g);
  // bowl
  g.oval(22, 30, 12, 8, C.metal);
  g.oval(22, 28, 10, 6, C.metalLight);
  g.oval(22, 30, 7, 4, C.gray);
  // stand / head (red — hero color)
  g.box(30, 8, 12, 22, C.red);
  g.rect(18, 8, 20, 8, C.red);
  g.rect(16, 12, 8, 6, C.red);
  g.rect(18, 10, 16, 2, C.redHot);
  g.rect(32, 28, 4, 6, C.dark); // beater shaft
}

function drawBlender(g) {
  drawCounter(g);
  // base
  g.box(18, 32, 20, 10, C.black);
  g.rect(22, 34, 12, 3, C.gray);
  // jug
  g.box(20, 10, 16, 22, C.lightBlue);
  g.rect(22, 14, 12, 14, C.blue);
  g.rect(24, 16, 3, 10, C.ice); // highlight
  g.rect(22, 8, 12, 4, C.dark); // lid
  g.rect(26, 6, 4, 3, C.black);
}

function drawHeat(g) {
  drawCounter(g);
  g.box(12, 16, 32, 24, C.black);
  g.rect(14, 18, 28, 18, C.dark);
  // burner ring
  g.oval(28, 28, 12, 10, C.gray);
  g.oval(28, 28, 9, 7, C.red);
  g.oval(28, 28, 5, 4, C.redHot);
  g.oval(28, 28, 2, 2, C.orange);
}

function drawTopping(g) {
  drawCounter(g, { wide: true });
  // tray
  g.box(8, 22, 32, 16, C.metal);
  const fills = [C.choc, C.white, C.red];
  fills.forEach((c, i) => {
    const x = 10 + i * 10;
    g.box(x, 24, 8, 12, C.metalDark);
    g.rect(x + 1, 26, 6, 8, c);
  });
  // scoop
  g.oval(44, 30, 6, 4, C.metalLight);
  g.rect(48, 28, 5, 3, C.metal);
  g.rect(51, 26, 2, 8, C.metalDark);
}

function drawSealer(g) {
  drawCounter(g);
  g.box(12, 8, 32, 28, C.black);
  g.rect(14, 8, 28, 10, C.blue);
  g.rect(16, 10, 24, 4, C.lightBlue);
  // cup in slot
  g.box(22, 24, 12, 12, C.white);
  g.hLine(23, 26, 10, C.cream);
  g.rect(24, 22, 8, 3, C.cream); // lid area
  g.rect(26, 20, 4, 3, C.dark);
}

function drawServing(g) {
  drawCounter(g, { wide: true });
  // register
  g.box(8, 10, 22, 26, C.black);
  g.rect(10, 12, 18, 10, C.blue);
  g.rect(12, 14, 14, 6, C.lightBlue);
  g.rect(12, 24, 14, 8, C.dark);
  g.rect(14, 26, 4, 4, C.gray);
  g.rect(22, 26, 4, 4, C.gray);
  // cup ready to serve
  g.box(36, 24, 12, 14, C.white);
  g.hLine(37, 26, 10, C.cream);
  g.rect(38, 22, 8, 3, C.cream);
}

function drawTrash(g) {
  // freestanding cylinder
  g.oval(28, 46, 16, 6, C.metalDark);
  g.rect(12, 14, 32, 34, C.metal);
  g.rect(14, 16, 28, 30, C.metalMid);
  g.oval(28, 14, 16, 6, C.metalDark);
  g.oval(28, 12, 16, 5, C.metalLight);
  // lid rim
  g.rect(14, 14, 28, 3, C.metalDark);
  // trash icon
  g.box(22, 24, 12, 14, C.white);
  g.rect(24, 26, 8, 10, C.metalDark);
  g.rect(26, 22, 4, 3, C.white);
  g.rect(25, 28, 2, 6, C.metal);
  g.rect(29, 28, 2, 6, C.metal);
}

const drawers = [
  drawCupStacks,
  drawCoffee,
  drawTea,
  drawWater,
  drawMilk,
  drawSoda,
  drawJuice,
  drawChocolate,
  drawIce,
  drawPrep,
  drawMixer,
  drawBlender,
  drawHeat,
  drawTopping,
  drawSealer,
  drawServing,
  drawTrash,
];

function blit(png, buf, ox, oy) {
  for (let y = 0; y < CELL; y++) {
    for (let x = 0; x < CELL; x++) {
      const i = (y * CELL + x) * 4;
      if (buf[i + 3] === 0) continue;
      setPx(png, ox + x, oy + y, [buf[i], buf[i + 1], buf[i + 2], buf[i + 3]]);
    }
  }
}

const png = new PNG({ width: WIDTH, height: HEIGHT, colorType: 6 });
png.data.fill(0);

for (let row = 0; row < ROWS; row++) {
  const bottom = makeCell(drawers[row]);
  const oy = row * (CELL + GAP);

  if (row === ROWS - 1) {
    blit(png, bottom, 0, oy);
    continue;
  }

  const left = rotateCell(bottom, "cw");
  const right = rotateCell(bottom, "ccw");

  blit(png, left, 0, oy);
  blit(png, bottom, CELL + GAP, oy);
  blit(png, right, (CELL + GAP) * 2, oy);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });

await new Promise((resolve, reject) => {
  png
    .pack()
    .pipe(fs.createWriteStream(OUT))
    .on("finish", resolve)
    .on("error", reject);
});

console.log(`Wrote ${OUT}`);
console.log(`Size: ${WIDTH}x${HEIGHT} (cell ${CELL}px, gap ${GAP}px)`);
