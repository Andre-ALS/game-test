import { useEffect, useState } from "react";

import Sprite from "../Sprite/Sprite";

import { getFirstFreePosition, type Position } from "../../helpers/player";

import playerSprite from "../../assets/sprites/player.png";

import styles from "./Player.module.css";

interface PlayerProps {
  map: (number | null)[][];
  shape: Position[];
  tileSize: number;
}

type Direction = "up" | "down" | "left" | "right";

const Player = ({ map, shape, tileSize }: PlayerProps) => {
  const [position, setPosition] = useState<Position[]>(getFirstFreePosition(shape, map));

  const [direction, setDirection] = useState<Direction>("down");

  const movePlayer = (dx: number, dy: number, direction: Direction) => {
    setDirection(direction);

    setPosition((current) => {
      const validMove = current.every(({ x, y }) => {
        return map[y + dy]?.[x + dx] === 0;
      });

      if (!validMove) {
        return current;
      }

      return current.map(({ x, y }) => ({
        x: x + dx,
        y: y + dy,
      }));
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          movePlayer(0, -1, "up");
          break;

        case "ArrowDown":
          movePlayer(0, 1, "down");
          break;

        case "ArrowLeft":
          movePlayer(-1, 0, "left");
          break;

        case "ArrowRight":
          movePlayer(1, 0, "right");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const rows: Record<Direction, number> = {
    down: 0,
    left: 1,
    right: 3,
    up: 2,
  };

  return (
    <div
      className={styles.player}
      style={
        {
          "--player-x": position[0].x,
          "--player-y": position[0].y,
          "--tile-size": `${tileSize}px`,
        } as React.CSSProperties
      }
    >
      <Sprite
        image={playerSprite}
        columns={5}
        rows={12}
        row={rows[direction]}
        frameCount={7}
        width={tileSize}
        height={tileSize}
        duration={300}
        action="hold"
        triggerKey={`Arrow${direction.charAt(0).toUpperCase() + direction.slice(1)}`}
      />
    </div>
  );
};

export default Player;
