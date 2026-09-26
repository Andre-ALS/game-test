import { WALL_COLORS, WALL_CORNER_RADIUS } from "../../constants/walls";
import { getWallEdgeBackground } from "../../helpers/wallStyle";
import type { WallAlign, WallDraw } from "../../helpers/wall";

interface WallViewProps {
  size: number;
  zIndex: number;
  wall: WallDraw;
}

function stripLayout(size: number, align: WallAlign): { left: number; width: number } {
  if (align === "full") {
    return { left: 0, width: size };
  }

  const width = size / 2;

  return {
    left: align === "right" ? width : 0,
    width,
  };
}

function drawCapRadius(wall: WallDraw): string {
  if (wall.align === "full") {
    return [
      wall.openNorth && wall.openWest ? WALL_CORNER_RADIUS : "0",
      wall.openNorth && wall.openEast ? WALL_CORNER_RADIUS : "0",
      "0",
      "0",
    ].join(" ");
  }

  if (!wall.openNorth) {
    return "0";
  }

  const roundLeft =
    wall.roundTop === "left" || (wall.roundTop === undefined && wall.align === "right");
  const roundRight =
    wall.roundTop === "right" || (wall.roundTop === undefined && wall.align === "left");

  return [
    roundLeft ? WALL_CORNER_RADIUS : "0",
    roundRight ? WALL_CORNER_RADIUS : "0",
    "0",
    "0",
  ].join(" ");
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
