import { WALL_COLORS } from "../../constants/walls";

import { getWallEdgeBackground } from "../../helpers/wallStyle";
import { drawCapRadius, stripLayout } from "../../helpers/wall";

import type { WallDraw } from "../../interfaces/Wall";

interface WallViewProps {
  size: number;
  zIndex: number;
  wall: WallDraw;
}

const WallView = ({ size, zIndex, wall }: WallViewProps) => {
  const { left, width } = stripLayout(size, wall.align);
  const height = size + 10;

  if (wall.kind === "face") {
    return (
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left,
          zIndex,
          width,
          height,
          overflow: "hidden",
          ...getWallEdgeBackground("to bottom", wall.darker),
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left,
        zIndex,
        width,
        height,
        backgroundColor: WALL_COLORS.cap,
        borderRadius: drawCapRadius(wall),
      }}
    />
  );
};

export default WallView;
