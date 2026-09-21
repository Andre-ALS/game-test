import { Tiles } from "../constants/tile";

export interface WallFaceDraw {
  kind: "face";
  darker: boolean;
  openNorth: boolean;
  openWest: boolean;
  openEast: boolean;
}

export interface WallCapDraw {
  kind: "cap";
  openNorth: boolean;
  openEast: boolean;
  openWest: boolean;
}

export type WallDraw = WallFaceDraw | WallCapDraw;

export function isWallAt(map: Tiles[][], x: number, y: number): boolean {
  return map[y]?.[x] === Tiles.WALL;
}

export function isFloorAt(map: Tiles[][], x: number, y: number): boolean {
  const tile = map[y]?.[x];
  return tile !== undefined && tile !== Tiles.NONE && tile !== Tiles.WALL;
}

export function wallShowsFloorBehind(
  wall: WallDraw,
  map: Tiles[][],
  x: number,
  y: number,
): boolean {
  const roundsTopLeft = wall.openNorth && wall.openWest;
  const roundsTopRight = wall.openNorth && wall.openEast;

  if (roundsTopLeft && (isFloorAt(map, x - 1, y) || isFloorAt(map, x, y - 1))) {
    return true;
  }

  if (roundsTopRight && (isFloorAt(map, x + 1, y) || isFloorAt(map, x, y - 1))) {
    return true;
  }

  return false;
}

export function getWallVariant(map: Tiles[][], x: number, y: number): WallDraw | null {
  if (!isWallAt(map, x, y)) {
    return null;
  }

  const openNorth = !isWallAt(map, x, y - 1);
  const openSouth = !isWallAt(map, x, y + 1);
  const openEast = !isWallAt(map, x + 1, y);
  const openWest = !isWallAt(map, x - 1, y);

  // South-facing camera: a wall with open space to the south shows its front
  // face. Otherwise we only draw the top (cap) of the wall.
  if (openSouth) {
    return {
      kind: "face",
      darker: map[y + 1]?.[x] === undefined,
      openNorth,
      openWest,
      openEast,
    };
  }

  return {
    kind: "cap",
    openNorth,
    openEast,
    openWest,
  };
}
