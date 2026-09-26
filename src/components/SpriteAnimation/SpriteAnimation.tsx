import { useEffect, useState } from "react";

import styles from "./SpriteAnimation.module.css";

interface SpriteProps {
  image: string;
  columns: number;
  rows: number;
  row: number;
  frameCount: number;
  width: number;
  height: number;
  frameInterval: number;
  action: "hold" | "click";
  triggerKey?: string;
  playing?: boolean;
}

const SpriteAnimation = ({
  image,
  columns,
  rows,
  row,
  frameCount,
  width,
  height,
  frameInterval,
  action,
  triggerKey,
  playing,
}: SpriteProps) => {
  const [internalPlaying, setInternalPlaying] = useState(false);
  const [frame, setFrame] = useState(0);

  const isPlaying = playing !== undefined ? playing : internalPlaying;
  const displayFrame = isPlaying ? frame : 0;

  useEffect(() => {
    if (playing !== undefined || !triggerKey) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== triggerKey) {
        return;
      }

      if (action === "hold") {
        setInternalPlaying(true);
      }

      if (action === "click" && !event.repeat) {
        setInternalPlaying(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (action === "hold" && event.key === triggerKey) {
        setInternalPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [action, triggerKey, playing]);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    setFrame(0);

    let currentFrame = 0;
    let lastTime = performance.now();
    let elapsed = 0;
    let frameId = 0;

    const tick = (now: number) => {
      elapsed += now - lastTime;
      lastTime = now;

      while (elapsed >= frameInterval) {
        elapsed -= frameInterval;

        if (action === "click") {
          if (currentFrame >= frameCount - 1) {
            setInternalPlaying(false);
            return;
          }

          currentFrame += 1;
        } else {
          currentFrame = (currentFrame + 1) % frameCount;
        }

        setFrame(currentFrame);
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [action, frameCount, frameInterval, isPlaying]);

  return (
    <div
      className={styles.sprite}
      style={{
        width,
        height,
      }}
    >
      <div
        className={styles.sheet}
        style={{
          width: width,
          height: height,
          backgroundImage: `url(${image})`,
          backgroundSize: `${columns * width}px ${rows * height}px`,
          backgroundPosition: `-${displayFrame * width}px -${row * height}px`,
        }}
      />
    </div>
  );
};

export default SpriteAnimation;
