import { useEffect, useState } from "react";

import styles from "./Sprite.module.css";

interface SpriteProps {
  image: string;
  columns: number;
  rows: number;
  row: number;
  frameCount: number;
  width: number;
  height: number;
  duration: number;
  action: "hold" | "click";
  triggerKey: string;
}

const Sprite = ({
  image,
  columns,
  rows,
  row,
  frameCount,
  width,
  height,
  duration,
  action,
  triggerKey,
}: SpriteProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const normalizedKey = triggerKey.toLowerCase();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== normalizedKey) {
        return;
      }

      if (action === "hold") {
        setIsAnimating(true);
      }

      if (action === "click" && !event.repeat) {
        setIsAnimating(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (action === "hold" && event.key.toLowerCase() === normalizedKey) {
        setIsAnimating(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [action, triggerKey]);

  useEffect(() => {
    if (action !== "click" || !isAnimating) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsAnimating(false);
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [action, duration, isAnimating]);

  return (
    <div
      className={styles.sprite}
      style={{
        width,
        height,
      }}
    >
      <div
        className={`${styles.sheet} ${isAnimating ? styles.animating : ""}`}
        style={
          {
            width: columns * width,
            height: rows * height,
            backgroundImage: `url(${image})`,
            backgroundSize: `${columns * width}px ${rows * height}px`,
            backgroundPosition: `0 -${row * height}px`,
            "--animation-width": `${(frameCount - 1) * width}px`,
            "--frame-count": frameCount,
            "--duration": `${duration}ms`,
          } as React.CSSProperties
        }
      />
    </div>
  );
};

export default Sprite;
