import type { Position } from "../interfaces/Position";

export type { Position };

export function getFirstFreePosition(
  playerShape: Position[],
  gameMap: (number | null)[][],
): Position[] {
  for (let y = 0; y < gameMap.length; y++) {
    for (let x = 0; x < gameMap[y].length; x++) {
      const fits = playerShape.every(({ x: shapeX, y: shapeY }) => {
        return gameMap[y + shapeY]?.[x + shapeX] === 0;
      });

      if (fits) {
        return playerShape.map(({ x: shapeX, y: shapeY }) => ({
          x: x + shapeX,
          y: y + shapeY,
        }));
      }
    }
  }

  return [];
}
