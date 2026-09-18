import { useEffect, useState } from "react";

import type { Position } from "./helpers/player";
import { TILE_SIZE } from "./constants/ui/tile";
import { Directions } from "./constants/ui/direction";
import { BASE_MAP, Tiles, TILE_TO_EQUIPMENT } from "./constants/ui/map";

import { usePreparation } from "./hooks/usePreparation";

import Tile from "./components/Tile/Tile";
import Player from "./components/Player/Player";
import GameMap from "./components/GameMap/GameMap";
import DirectionalButtons from "./components/DirectionalButtons/DirectionalButtons";
import OrderPanel from "./components/Kitchen/OrderPanel";

const INTERACT_KEY = " ";

const App = () => {
  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 0, y: 0 });
  const [playerViewDirection, setPlayerViewDirection] = useState<Position>({ x: 0, y: 0 });

  const preparation = usePreparation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== INTERACT_KEY) {
        return;
      }

      event.preventDefault();

      const facingTile = BASE_MAP[playerViewDirection.y]?.[playerViewDirection.x];
      const facingEquipment = TILE_TO_EQUIPMENT[facingTile];

      if (facingEquipment) {
        preparation.interact(facingEquipment);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerViewDirection, preparation]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
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

      <OrderPanel preparation={preparation} />

      <GameMap>
        {BASE_MAP.map((row, y) =>
          row.map((tile, x) => <Tile key={`${x}-${y}`} x={x} y={y} tile={tile ?? Tiles.NONE} />),
        )}

        <Player
          map={BASE_MAP}
          tileSize={TILE_SIZE}
          onMoveCallback={(position, direction) => {
            setPlayerPosition(position);

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
