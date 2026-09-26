import { Tiles } from "../constants/tile";

export type WallAlign = "left" | "right" | "full";

export interface WallDraw {
  kind: "cap" | "face";
  openNorth: boolean;
  openEast: boolean;
  openWest: boolean;
  align: WallAlign;
  darker?: boolean;
  /** Which top corner of the strip to round. Defaults from align (outer corners). */
  roundTop?: "left" | "right";
}

function isWallAt(map: Tiles[][], x: number, y: number): boolean {
  return map[y]?.[x] === Tiles.WALL;
}

function isFloorAt(map: Tiles[][], x: number, y: number): boolean {
  const tile = map[y]?.[x];
  return tile !== undefined && tile !== Tiles.NONE && tile !== Tiles.WALL;
}

function isVoidAt(map: Tiles[][], x: number, y: number): boolean {
  return !isWallAt(map, x, y) && !isFloorAt(map, x, y);
}

type WallCorner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function wallCorner(
  wallNorth: boolean,
  wallSouth: boolean,
  wallEast: boolean,
  wallWest: boolean,
): WallCorner | null {
  if (!wallNorth && wallSouth && wallEast && !wallWest) {
    return "top-left";
  }

  if (!wallNorth && wallSouth && !wallEast && wallWest) {
    return "top-right";
  }

  if (wallNorth && !wallSouth && wallEast && !wallWest) {
    return "bottom-left";
  }

  if (wallNorth && !wallSouth && !wallEast && wallWest) {
    return "bottom-right";
  }

  return null;
}

function hasWallCluster(map: Tiles[][], x: number, y: number, dx: number): boolean {
  return isWallAt(map, x + dx, y) || isWallAt(map, x + dx, y - 1) || isWallAt(map, x + dx, y + 1);
}

function preferredAlign(map: Tiles[][], x: number, y: number): WallAlign {
  const westCluster = hasWallCluster(map, x, y, -1);
  const eastCluster = hasWallCluster(map, x, y, 1);
  const floorWest = isFloorAt(map, x - 1, y);
  const floorEast = isFloorAt(map, x + 1, y);
  const wallWest = isWallAt(map, x - 1, y);
  const wallEast = isWallAt(map, x + 1, y);

  if (floorWest && floorEast) {
    return "full";
  }

  // Same-row wall on the other side: fill the tile. A void (hole) does not.
  if ((floorWest && wallEast) || (floorEast && wallWest)) {
    return "full";
  }

  if (floorWest) {
    return "left";
  }

  if (floorEast) {
    return "right";
  }

  if (westCluster && !eastCluster) {
    return "left";
  }

  if (eastCluster && !westCluster) {
    return "right";
  }

  const voidWest = isVoidAt(map, x - 1, y);
  const voidEast = isVoidAt(map, x + 1, y);

  if (voidWest && wallEast) {
    return "right";
  }

  if (voidEast && wallWest) {
    return "left";
  }

  return "full";
}

function cornerAlign(corner: WallCorner, map: Tiles[][], x: number, y: number): WallAlign {
  // Floor on the open side: full south face. Void/OOB: half like (0,3)/(9,3).
  if (corner === "top-left" || corner === "bottom-left") {
    return isFloorAt(map, x - 1, y) ? "full" : "right";
  }

  return isFloorAt(map, x + 1, y) ? "full" : "left";
}

function columnAlignFromBelow(map: Tiles[][], x: number, y: number): WallAlign | null {
  if (!isWallAt(map, x, y + 1)) {
    return null;
  }

  const below = getWallPieces(map, x, y + 1);
  const column = below?.find((piece) => piece.kind === "cap") ?? below?.[0];

  if (column?.align === "left" || column?.align === "right") {
    return column.align;
  }

  return null;
}

function topCornerPieces(
  corner: "top-left" | "top-right",
  openNorth: boolean,
  openEast: boolean,
  openWest: boolean,
  map: Tiles[][],
  x: number,
  y: number,
): WallDraw[] {
  const fromBelow = columnAlignFromBelow(map, x, y);
  const cornerAlignSide: WallAlign = fromBelow ?? (corner === "top-left" ? "right" : "left");
  const floorWest = isFloorAt(map, x - 1, y);
  const floorEast = isFloorAt(map, x + 1, y);
  const roundTop: WallDraw["roundTop"] =
    floorEast && !floorWest ? "right" : floorWest && !floorEast ? "left" : undefined;

  const cornerPiece: WallDraw = {
    kind: "cap",
    openNorth,
    openEast,
    openWest,
    align: cornerAlignSide,
    roundTop,
  };

  if (cornerAlignSide !== "left" && cornerAlignSide !== "right") {
    return [cornerPiece];
  }

  const otherAlign: WallAlign = cornerAlignSide === "left" ? "right" : "left";
  const otherDx = otherAlign === "left" ? -1 : 1;

  // Don't paint a face over exterior void (outer top corners stay a single half).
  if (isVoidAt(map, x + otherDx, y)) {
    return [cornerPiece];
  }

  const facePiece: WallDraw = {
    kind: "face",
    darker: true,
    openNorth,
    openWest,
    openEast,
    align: otherAlign,
  };

  return [facePiece, cornerPiece];
}

export function getWallPieces(map: Tiles[][], x: number, y: number): WallDraw[] | null {
  if (!isWallAt(map, x, y)) {
    return null;
  }

  const wallNorth = isWallAt(map, x, y - 1);
  const wallSouth = isWallAt(map, x, y + 1);
  const wallEast = isWallAt(map, x + 1, y);
  const wallWest = isWallAt(map, x - 1, y);
  const openNorth = !wallNorth;
  const openSouth = !wallSouth;
  const openEast = !wallEast;
  const openWest = !wallWest;
  const corner = wallCorner(wallNorth, wallSouth, wallEast, wallWest);

  if (corner === "top-left" || corner === "top-right") {
    return topCornerPieces(corner, openNorth, openEast, openWest, map, x, y);
  }

  if (corner === "bottom-left" || corner === "bottom-right") {
    return [
      {
        kind: "face",
        darker: isVoidAt(map, x, y + 1),
        openNorth,
        openWest,
        openEast,
        align: cornerAlign(corner, map, x, y),
      },
    ];
  }

  const align = preferredAlign(map, x, y);

  if (openSouth) {
    return [
      {
        kind: "face",
        darker: isVoidAt(map, x, y + 1),
        openNorth,
        openWest,
        openEast,
        align: openNorth ? "full" : align,
      },
    ];
  }

  return [
    {
      kind: "cap",
      openNorth,
      openEast,
      openWest,
      align,
    },
  ];
}
