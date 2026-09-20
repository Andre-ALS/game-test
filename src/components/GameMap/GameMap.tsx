import styles from "./GameMap.module.css";

import { GAME_MAP } from "../../constants/ui/map";
import { TILE_SIZE } from "../../constants/ui/tile";

interface GameMapProps {
  children: React.ReactNode;
}

const GameMap = ({ children }: GameMapProps) => {
  return (
    <div
      className={styles.gameMap}
      style={
        {
          "--tile-size": `${TILE_SIZE}px`,
          "--columns": Math.max(...GAME_MAP.map((row) => row.length)),
          "--rows": GAME_MAP.length,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default GameMap;
