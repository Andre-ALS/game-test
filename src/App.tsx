import { useState } from "react";

import type { Position } from "./helpers/player";
import { TILE_SIZE } from "./constants/ui/tile";
import { Directions } from "./constants/ui/direction";
import { BASE_MAP, Tiles } from "./constants/ui/map";

import Tile from "./components/Tile/Tile";
import Player from "./components/Player/Player";
import GameMap from "./components/GameMap/GameMap";
import DirectionalButtons from "./components/DirectionalButtons/DirectionalButtons";

const App = () => {
  // players view direction
  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 0, y: 0 });
  const [playerViewDirection, setPlayerViewDirection] = useState<Position>({ x: 0, y: 0 });

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "5px",
          fontFamily: "monospace",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {[`📍 ${JSON.stringify(playerPosition)}`, `👁️ ${JSON.stringify(playerViewDirection)}`].map(
          (text, index) => (
            <div key={index}>{text}</div>
          ),
        )}
      </div>

      <GameMap>
        {BASE_MAP.map((row, y) =>
          row.map((tile, x) => <Tile key={`${x}-${y}`} x={x} y={y} tile={tile ?? Tiles.NONE} />),
        )}

        <Player
          map={BASE_MAP}
          tileSize={TILE_SIZE}
          onMoveCallback={(position, direction) => {
            setPlayerPosition(position);
            // x and y in front of the player
            switch (direction) {
              case Directions.UP:
                setPlayerViewDirection({ x: position.x, y: position.y - 1 });
                break;
              case Directions.DOWN:
                setPlayerViewDirection({ x: position.x, y: position.y + 1 });
                break;
              case Directions.LEFT:
                setPlayerViewDirection({ x: position.x - 1, y: position.y });
                break;
              case Directions.RIGHT:
                setPlayerViewDirection({ x: position.x + 1, y: position.y });
                break;
            }
          }}
        />
      </GameMap>

      <DirectionalButtons />
    </>
  );
};

export default App;
