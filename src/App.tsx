import { useEffect, useState } from "react";

import type { Position } from "./helpers/player";
import { TILE_SIZE, TILE_TO_EQUIPMENT, Tiles } from "./constants/tile";
import { Directions } from "./constants/direction";
import { GAME_MAP } from "./constants/map";

import { usePreparation } from "./hooks/usePreparation";

import Tile from "./components/Tile/Tile";
import Player from "./components/Player/Player";
import GameMap from "./components/GameMap/GameMap";
import OrderPanel from "./components/OrderPanel/OrderPanel";

const INTERACT_KEY = " ";

const App = () => {
  const [facingTile, setFacingTile] = useState<Position>({ x: 0, y: 0 });
  const preparation = usePreparation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== INTERACT_KEY) {
        return;
      }

      event.preventDefault();

      const tile = GAME_MAP[facingTile.y]?.[facingTile.x];
      const equipment = TILE_TO_EQUIPMENT[tile];

      if (equipment) {
        preparation.interact(equipment);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [facingTile, preparation]);

  return (
    <>
      <OrderPanel preparation={preparation} />

      <GameMap>
        {GAME_MAP.map((row, y) =>
          row.map((tile, x) => <Tile key={`${x}-${y}`} x={x} y={y} tile={tile ?? Tiles.NONE} />),
        )}

        <Player
          map={GAME_MAP}
          tileSize={TILE_SIZE}
          onMoveCallback={(position, direction) => {
            switch (direction) {
              case Directions.UP:
                setFacingTile({ x: position.x, y: position.y - 1 });
                break;
              case Directions.DOWN:
                setFacingTile({ x: position.x, y: position.y + 1 });
                break;
              case Directions.LEFT:
                setFacingTile({ x: position.x - 1, y: position.y });
                break;
              case Directions.RIGHT:
                setFacingTile({ x: position.x + 1, y: position.y });
                break;
            }
          }}
        />
      </GameMap>
    </>
  );
};

export default App;
