export const WALL_COLORS = {
  cap: "#f7e3d3",
  face: "#a01925",
  base: "#764636",
  outline: "#2a0705",
};

// Band widths as % of the gradient's length, outward → inward.
export const WALL_BAND_STOPS = [
  { color: WALL_COLORS.cap, start: 0, end: 24 },
  { color: WALL_COLORS.outline, start: 24, end: 27 },
  { color: WALL_COLORS.face, start: 27, end: 82 },
  { color: WALL_COLORS.outline, start: 82, end: 85 },
  { color: WALL_COLORS.base, start: 85, end: 100 },
];

export const WALL_CORNER_RADIUS = "10px";
