import styles from "./Tile.module.css";

import { EQUIPMENT_ICONS } from "../../constants/equipments";
import { GAME_MAP, GAME_MAP_PLACEMENTS } from "../../constants/map";
import { TILE_COLORS, TILE_SIZE, TILE_TO_EQUIPMENT, Tiles } from "../../constants/tile";

import { getTilePlacement } from "../../helpers/map";
import { getWallPieces } from "../../helpers/wall";

import groundImage from "../../assets/ground.png";

import WallView from "../WallView/WallView";
import EquipmentView from "../EquipmentView/EquipmentView";

interface TileProps {
  x: number;
  y: number;
  tile: Tiles;
}

const Tile = ({ x, y, tile }: TileProps) => {
  const equipment = TILE_TO_EQUIPMENT[tile];
  const placement = getTilePlacement(GAME_MAP_PLACEMENTS, x, y);
  const equipmentIcon = equipment && placement.isAnchor ? EQUIPMENT_ICONS[equipment] : null;
  const walls = tile === Tiles.WALL ? getWallPieces(GAME_MAP, x, y) : null;
  const showFloor = tile === Tiles.FLOOR || Boolean(equipment);

  return (
    <div
      className={styles.tile}
      style={
        {
          gridColumn: x + 1,
          gridRow: y + 1,
          "--tile-color": `${TILE_COLORS[tile ?? -1]}`,
          "--background-image": showFloor ? `url(${groundImage})` : "none",
          position: "relative",
        } as React.CSSProperties
      }
    >
      {walls?.map((wall, index) => (
        <WallView key={index} size={TILE_SIZE} zIndex={y + 1} wall={wall} />
      ))}

      {equipmentIcon && (
        <EquipmentView equipment={equipmentIcon} orientation={placement.orientation} yIndex={y} />
      )}
    </div>
  );
};

export default Tile;
