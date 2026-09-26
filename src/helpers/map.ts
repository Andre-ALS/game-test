import { BASE_MAP } from "../constants/map";
import { Tiles } from "../constants/tile";
import type {
  MapCell,
  MapGrid,
  PlacementGrid,
  PlacementOrientation,
  SanitizedMap,
  TilePlacement,
} from "../interfaces/Map";
import { getTileFootprint } from "./tile";

export type { MapCell, MapGrid, PlacementGrid, PlacementOrientation, SanitizedMap, TilePlacement };

interface SanitizeMapOptions<T extends number> {
  floor: T;
  getFootprint: (tile: T) => number | undefined;
}

function cloneMap<T extends number>(map: MapGrid<T>): MapGrid<T> {
  return map.map((row) => [...row]);
}

function emptyPlacements(map: MapGrid<number>): PlacementGrid {
  return map.map((row) => row.map(() => null));
}

function isClaimed(claimed: boolean[][], x: number, y: number): boolean {
  return Boolean(claimed[y]?.[x]);
}

function stripCells(x: number, y: number, dx: number, dy: number, length: number): MapCell[] {
  return Array.from({ length }, (_, index) => ({
    x: x + dx * index,
    y: y + dy * index,
  }));
}

function canClaimStrip<T extends number>(
  map: MapGrid<T>,
  claimed: boolean[][],
  tile: T,
  cells: MapCell[],
): boolean {
  return cells.every((cell) => {
    return map[cell.y]?.[cell.x] === tile && !isClaimed(claimed, cell.x, cell.y);
  });
}

function assignStrip(
  claimed: boolean[][],
  placements: PlacementGrid,
  cells: MapCell[],
  orientation: PlacementOrientation,
): void {
  cells.forEach((cell, index) => {
    claimed[cell.y][cell.x] = true;
    placements[cell.y][cell.x] = {
      isAnchor: index === 0,
      orientation,
    };
  });
}

export function sanitizeMap<T extends number>(
  raw: MapGrid<T>,
  { floor, getFootprint }: SanitizeMapOptions<T>,
): SanitizedMap<T> {
  const map = cloneMap(raw);
  const placements = emptyPlacements(map);
  const claimed = map.map((row) => row.map(() => false));

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (claimed[y][x]) {
        continue;
      }

      const tile = map[y][x];
      const footprint = getFootprint(tile);

      if (footprint === undefined) {
        continue;
      }

      if (footprint <= 1) {
        assignStrip(claimed, placements, [{ x, y }], "single");
        continue;
      }

      const horizontal = stripCells(x, y, 1, 0, footprint);
      if (canClaimStrip(map, claimed, tile, horizontal)) {
        assignStrip(claimed, placements, horizontal, "horizontal");
        continue;
      }

      const vertical = stripCells(x, y, 0, 1, footprint);
      if (canClaimStrip(map, claimed, tile, vertical)) {
        assignStrip(claimed, placements, vertical, "vertical");
        continue;
      }

      if (import.meta.env.DEV) {
        console.warn(
          `[GAME_MAP] tile ${tile} at (${x},${y}) does not match footprint ${footprint}; replaced with floor`,
        );
      }

      map[y][x] = floor;
    }
  }

  return { map, placements };
}

export function getTilePlacement(placements: PlacementGrid, x: number, y: number): TilePlacement {
  return (
    placements[y]?.[x] ?? {
      isAnchor: false,
      orientation: "single",
    }
  );
}

export const sanitizedMap = (baseMap: Tiles[][] = BASE_MAP) =>
  sanitizeMap(baseMap, {
    floor: Tiles.FLOOR,
    getFootprint: getTileFootprint,
  });
