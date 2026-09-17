import clsx from "clsx";

import styles from "./App.module.css";

import DirectionalButtons from "./components/DirectionalButtons/DirectionalButtons";
import Player from "./components/Player/Player";

const BASE_MAP: (number | null)[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const EXPANDED_MAP = BASE_MAP;

const TILE_SIZE = 40;

const App = () => {
  return (
    <>
      <div
        className={styles.game}
        style={
          {
            "--tile-size": `${TILE_SIZE}px`,
            "--columns": Math.max(...EXPANDED_MAP.map((row) => row.length)),
            "--rows": EXPANDED_MAP.length,
          } as React.CSSProperties
        }
      >
        {EXPANDED_MAP.map((row, y) =>
          row.map((tile, x) => (
            <div
              key={`${x}-${y}`}
              className={clsx(styles.tile, tile === 1 && styles.wall)}
              style={{
                gridColumn: x + 1,
                gridRow: y + 1,
              }}
            >
              {tile === 0 && (
                <div
                  className={styles.floor}
                  style={{
                    backgroundPosition: `-${x * TILE_SIZE}px -${y * TILE_SIZE}px`,
                  }}
                />
              )}
            </div>
          )),
        )}

        <Player map={EXPANDED_MAP} tileSize={TILE_SIZE} />
      </div>

      <DirectionalButtons />
    </>
  );
};

export default App;
