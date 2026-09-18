import clsx from "clsx";

import styles from "./Tile.module.css";

import { BASE_MAP, TILE_COLORS, TILE_TO_EQUIPMENT, Tiles } from "../../constants/ui/map";

import groundImage from "../../assets/ground.png";

interface TileProps {
  x: number;
  y: number;
  tile: Tiles;
}

const Tile = ({ x, y, tile }: TileProps) => {
  const facingTile = BASE_MAP[y]?.[x];
  const facingEquipment = TILE_TO_EQUIPMENT[facingTile];

  return (
    <div
      key={`${x}-${y}`}
      className={clsx(styles.tile)}
      style={
        {
          gridColumn: x + 1,
          gridRow: y + 1,
          fontFamily: "monospace",
          "--tile-color": `${TILE_COLORS[tile ?? -1]}`,
          "--background-image": tile === 0 ? `url(${groundImage})` : "none",
        } as React.CSSProperties
      }
    >
      {facingEquipment}
    </div>
  );
};

export default Tile;
