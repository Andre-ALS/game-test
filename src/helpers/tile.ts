import { EQUIPMENT_FOOTPRINT } from "../constants/equipments";
import { TILE_TO_EQUIPMENT, type Tiles } from "../constants/tile";

export function getTileFootprint(tile: Tiles): number | undefined {
  const equipment = TILE_TO_EQUIPMENT[tile];

  return equipment === undefined ? undefined : EQUIPMENT_FOOTPRINT[equipment];
}
