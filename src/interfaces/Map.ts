export interface MapCell {
  x: number;
  y: number;
}

export type MapGrid<T extends number> = T[][];

export type PlacementOrientation = "horizontal" | "vertical" | "single";

export interface TilePlacement {
  isAnchor: boolean;
  orientation: PlacementOrientation;
}

export type PlacementGrid = (TilePlacement | null)[][];

export interface SanitizedMap<T extends number> {
  map: MapGrid<T>;
  placements: PlacementGrid;
}
