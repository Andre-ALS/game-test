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
