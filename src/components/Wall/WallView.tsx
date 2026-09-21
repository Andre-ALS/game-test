import { WALL_COLORS, WALL_CORNER_RADIUS } from "../../constants/walls";
import { getWallEdgeBackground } from "../../helpers/wallStyle";
import type { WallDraw } from "../../helpers/wall";

interface WallViewProps {
  size: number;
  zIndex: number;
  wall: WallDraw;
}

const WallView = ({ size, zIndex, wall }: WallViewProps) => {
  if (wall.kind === "face") {
    const radius = [
      wall.openNorth && wall.openWest ? WALL_CORNER_RADIUS : "0",
      wall.openNorth && wall.openEast ? WALL_CORNER_RADIUS : "0",
      "0",
      "0",
    ].join(" ");

    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex,
          width: size,
          height: size,
          borderRadius: radius,
          overflow: "hidden",
          ...getWallEdgeBackground("to bottom", wall.darker),
        }}
      />
    );
  }

  const radius = [
    wall.openNorth && wall.openWest ? WALL_CORNER_RADIUS : "0",
    wall.openNorth && wall.openEast ? WALL_CORNER_RADIUS : "0",
    "0",
    "0",
  ].join(" ");

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex,
        width: size,
        height: size,
        backgroundColor: WALL_COLORS.cap,
        borderRadius: radius,
      }}
    />
  );
};

export default WallView;
