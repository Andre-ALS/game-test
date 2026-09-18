import clsx from "clsx";

import styles from "./Tile.module.css";

import { TILE_COLORS, Tiles } from "../../constants/ui/map";

import groundImage from "../../assets/ground.png";

interface TileProps {
  x: number;
  y: number;
  tile: Tiles;
}

const Tile = ({ x, y, tile }: TileProps) => {
  // players view direction

  return (
    <div
      key={`${x}-${y}`}
      className={clsx(styles.tile)}
      style={
        {
          gridColumn: x + 1,
          gridRow: y + 1,
          "--tile-color": `${TILE_COLORS[tile ?? -1]}`,
          "--background-image": tile === 0 ? `url(${groundImage})` : "none",
        } as React.CSSProperties
      }
    />
  );
};

export default Tile;
