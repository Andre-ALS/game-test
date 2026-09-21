import { WALL_BAND_STOPS } from "../constants/walls";

const STRIPE_COLOR = "rgba(0, 0, 0, 0.16)";
// Divides both TILE_SIZE (40) and the corner's 90deg quadrant evenly, so
// every tile/corner can reuse the exact same pattern with zero offset and
// still line up seamlessly with its neighbors.
const STRIPE_WIDTH = 3;
const STRIPE_GAP = 7;
const STRIPE_PERIOD = STRIPE_WIDTH + STRIPE_GAP;

export const BOTTOM_WALL_SHADE = 0.82;

function darkenHex(hex: string, amount: number): string {
  const value = parseInt(hex.slice(1), 16);
  const r = Math.round(((value >> 16) & 255) * amount);
  const g = Math.round(((value >> 8) & 255) * amount);
  const b = Math.round((value & 255) * amount);

  return `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
}

export function getWallBandStops(darker = false) {
  if (!darker) {
    return WALL_BAND_STOPS;
  }

  return WALL_BAND_STOPS.map((band) => ({
    ...band,
    color: darkenHex(band.color, BOTTOM_WALL_SHADE),
  }));
}

export function getWallGradient(direction: string, darker = false): string {
  const stops = getWallBandStops(darker).flatMap(({ color, start, end }) => [
    `${color} ${start}%`,
    `${color} ${end}%`,
  ]);

  return `linear-gradient(${direction}, ${stops.join(", ")})`;
}

function getStripe(direction: string): string {
  return `repeating-linear-gradient(${direction}, ${STRIPE_COLOR} 0px, ${STRIPE_COLOR} ${STRIPE_WIDTH}px, transparent ${STRIPE_WIDTH}px, transparent ${STRIPE_PERIOD}px)`;
}

function getStripeDirection(direction: string): string {
  return direction === "to bottom" || direction === "to top" ? "to right" : "to bottom";
}

export function getWallEdgeBackground(
  direction: string,
  darker = false,
): { background: string } {
  const bands = getWallBandStops(darker);
  const capBand = bands[0];
  const baseBand = bands[bands.length - 1];
  const stripe = getStripe(getStripeDirection(direction));
  const capMask = `linear-gradient(${direction}, ${capBand.color} ${capBand.start}%, ${capBand.color} ${capBand.end}%, transparent ${capBand.end}%, transparent 100%)`;
  const baseMask = `linear-gradient(${direction}, transparent 0%, transparent ${baseBand.start}%, ${baseBand.color} ${baseBand.start}%, ${baseBand.color} ${baseBand.end}%)`;

  return {
    background: `${capMask}, ${baseMask}, ${stripe}, ${getWallGradient(direction, darker)}`,
  };
}

