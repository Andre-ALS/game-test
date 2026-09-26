import { useEffect, useRef, useState } from "react";

import SpriteAnimation from "../SpriteAnimation/SpriteAnimation";
import styles from "./Player.module.css";

import { getFirstFreePosition } from "../../helpers/player";

import type { Position } from "../../interfaces/Position";

import spriteSheet from "../../assets/sprites/player.png";
import { Directions } from "../../constants/direction";
import { FRAME_INTERVAL } from "../../constants/frame";
import { PLAYER_SIZE } from "../../constants/player";
import { OBJ_TILE_BOTTOM_OFFSET } from "../../constants/layout";

interface PlayerProps {
  map: (number | null)[][];
  tileSize: number;
  onMoveCallback: (position: Position, direction: Directions) => void;
}

const PLAYER_SHAPE: Position[] = [{ x: 0, y: 0 }];

const MOVEMENT_DURATION = 250;

const DIRECTION_ROWS: Record<Directions, number> = {
  [Directions.DOWN]: 0,
  [Directions.LEFT]: 1,
  [Directions.RIGHT]: 3,
  [Directions.UP]: 2,
} as const;

const DELTAS: Record<Directions, Position> = {
  [Directions.UP]: { x: 0, y: -1 },
  [Directions.DOWN]: { x: 0, y: 1 },
  [Directions.LEFT]: { x: -1, y: 0 },
  [Directions.RIGHT]: { x: 1, y: 0 },
};

const Player = ({ map, tileSize, onMoveCallback }: PlayerProps) => {
  const startPosition = getFirstFreePosition(PLAYER_SHAPE, map)[0] ?? { x: 0, y: 0 };

  const playerRef = useRef<HTMLDivElement>(null);
  const isMovingRef = useRef(false);
  const animationRef = useRef<number | null>(null);
  const keysPressedRef = useRef<Directions[]>([]);

  const positionRef = useRef<Position[]>([{ ...startPosition }]);
  const directionRef = useRef<Directions>(Directions.DOWN);

  const [direction, setDirection] = useState<Directions>(Directions.DOWN);

  const [isMoving, setIsMoving] = useState(false);

  const setVisualPosition = (x: number, y: number) => {
    const element = playerRef.current;

    if (!element) {
      return;
    }

    element.style.setProperty("--player-x", String(x));
    element.style.setProperty("--player-y", String(y));
  };

  useEffect(() => {
    onMoveCallback(positionRef.current[0], directionRef.current);

    const getNextDirection = (): Directions | null => {
      const keys = keysPressedRef.current;

      return keys.length > 0 ? keys[keys.length - 1] : null;
    };

    const move = (moveDirection: Directions): boolean => {
      if (isMovingRef.current) {
        return false;
      }

      const { x: dx, y: dy } = DELTAS[moveDirection];
      const current = positionRef.current;

      const validMove = current.every(({ x, y }) => {
        return map[y + dy]?.[x + dx] === 0;
      });

      if (!validMove) {
        return false;
      }

      const nextPosition = current.map(({ x, y }) => ({
        x: x + dx,
        y: y + dy,
      }));

      positionRef.current = nextPosition;
      isMovingRef.current = true;
      setIsMoving(true);

      onMoveCallback(nextPosition[0], moveDirection);

      const start = current[0];
      const end = nextPosition[0];
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / MOVEMENT_DURATION, 1);

        setVisualPosition(
          start.x + (end.x - start.x) * progress,
          start.y + (end.y - start.y) * progress,
        );

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
          return;
        }

        setVisualPosition(end.x, end.y);

        isMovingRef.current = false;
        animationRef.current = null;

        const nextDirection = getNextDirection();

        if (nextDirection && move(nextDirection)) {
          return;
        }

        setIsMoving(false);
      };

      animationRef.current = requestAnimationFrame(animate);

      return true;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!(event.key in DIRECTION_ROWS)) {
        return;
      }

      event.preventDefault();

      const moveDirection = event.key as Directions;
      const keys = keysPressedRef.current;
      const existingIndex = keys.indexOf(moveDirection);

      if (existingIndex !== -1) {
        keys.splice(existingIndex, 1);
      }

      keys.push(moveDirection);

      const previousDirection = directionRef.current;
      directionRef.current = moveDirection;
      setDirection(moveDirection);

      const moved = !isMovingRef.current && move(moveDirection);

      if (!moved && previousDirection !== moveDirection) {
        onMoveCallback(positionRef.current[0], moveDirection);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (!(event.key in DIRECTION_ROWS)) {
        return;
      }

      keysPressedRef.current = keysPressedRef.current.filter((key) => key !== event.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      isMovingRef.current = false;
      setIsMoving(false);
    };
  }, [map]);

  return (
    <div
      ref={playerRef}
      className={styles.player}
      style={
        {
          zIndex: positionRef.current[0].y + 1,
          "--tile-size": `${tileSize}px`,
          "--player-x": startPosition.x,
          "--player-y": startPosition.y,
          "--obj-tile-bottom-offset": `${OBJ_TILE_BOTTOM_OFFSET}px`,
        } as React.CSSProperties
      }
    >
      <SpriteAnimation
        image={spriteSheet}
        columns={5}
        rows={12}
        row={DIRECTION_ROWS[direction]}
        frameCount={5}
        width={PLAYER_SIZE - 2}
        height={PLAYER_SIZE}
        frameInterval={FRAME_INTERVAL}
        action="hold"
        playing={isMoving}
      />
    </div>
  );
};

export default Player;
