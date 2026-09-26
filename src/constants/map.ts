import { sanitizedMap } from "../helpers/map";
import type { Tiles } from "./tile";

export const BASE_MAP: Tiles[][] = [
  [1, 1, 1, 1, 1, 1, -1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 2, 3, 4, 6, 6, 0, 1],
  [1, 0, 5, 7, 8, 8, 9, 11, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 10, 10, 12, 13, 14, 15, 0, 1],
  [1, 0, 16, 17, 18, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [-1, 1, 0, 0, 0, 0, 0, 0, 1, -1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
];
export const mapSanitized = sanitizedMap(BASE_MAP);
export const GAME_MAP = mapSanitized.map;
export const GAME_MAP_PLACEMENTS = mapSanitized.placements;
