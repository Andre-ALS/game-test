import styles from "./SpriteImage.module.css";

interface SpriteProps {
  image: string;
  columns: number;
  rows: number;
  column: number;
  row: number;
  width: number;
  height: number;
}

const SpriteAnimation = ({ image, columns, rows, column, row, width, height }: SpriteProps) => {
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
          width: columns * width,
          height: rows * height,
          backgroundImage: `url(${image})`,
          backgroundSize: `${columns * width}px ${rows * height}px`,
          backgroundPosition: `-${column * width}px -${row * height}px`,
        }}
      />
    </div>
  );
};

export default SpriteAnimation;
