import clsx from "clsx";

import styles from "./App.module.css";

import DirectionalButtons from "./components/DirectionalButtons/DirectionalButtons";
import Player from "./components/Player/Player";
import { BASE_MAP, TILE_COLORS } from "./constants/ui/map";

import groundImage from "./assets/ground.png";
import { TILE_SIZE } from "./constants/ui/tile";

const App = () => {
  return (
    <>
      <div
        className={styles.game}
        style={
          {
            "--tile-size": `${TILE_SIZE}px`,
            "--columns": Math.max(...BASE_MAP.map((row) => row.length)),
            "--rows": BASE_MAP.length,
          } as React.CSSProperties
        }
      >
        {BASE_MAP.map((row, y) =>
          row.map((tile, x) => (
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
          )),
        )}

        <Player
          map={BASE_MAP}
          tileSize={TILE_SIZE}
          onMoveCallback={(position, direction) => {
            // check where the player is moving/looking at
            console.log({
              position,
              direction,
            });
          }}
        />
      </div>

      <DirectionalButtons />
    </>
  );
};

export default App;
