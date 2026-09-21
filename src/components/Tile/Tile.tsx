import clsx from "clsx";

import styles from "./Tile.module.css";

import { EQUIPMENTS_ICONS } from "../../constants/equipments";
import { GAME_MAP, GAME_MAP_PLACEMENTS } from "../../constants/map";
import { getTilePlacement } from "../../helpers/map";
import { getWallVariant, wallShowsFloorBehind } from "../../helpers/wall";
import WallView from "../Wall/WallView";

import groundImage from "../../assets/ground-2.png";

import { TILE_COLORS, TILE_SIZE, TILE_TO_EQUIPMENT, Tiles } from "../../constants/tile";

interface TileProps {
  x: number;
  y: number;
  tile: Tiles;
}

const Tile = ({ x, y, tile }: TileProps) => {
  const facingTile = GAME_MAP[y]?.[x];
  const facingEquipment = TILE_TO_EQUIPMENT[facingTile];
  const placement = getTilePlacement(GAME_MAP_PLACEMENTS, x, y);
  const equipmentIcon =
    facingEquipment && placement.isAnchor ? EQUIPMENTS_ICONS[facingEquipment] : null;
  const equipmentRotation = equipmentIcon?.rotations[placement.orientation];
  const boxWidth = equipmentRotation ? equipmentRotation.width : 0;
  const boxHeight = equipmentRotation ? equipmentRotation.height : 0;
  const walls = tile === Tiles.WALL ? getWallVariant(GAME_MAP, x, y) : null;
  const showFloor =
    tile === Tiles.FLOOR ||
    Boolean(facingEquipment) ||
    (walls !== null && wallShowsFloorBehind(walls, GAME_MAP, x, y));

  return (
    <div
      key={`${x}-${y}`}
      className={clsx(styles.tile)}
      style={
        {
          gridColumn: x + 1,
          gridRow: y + 1,
          "--tile-color": `${TILE_COLORS[tile ?? -1]}`,
          "--background-image": showFloor ? `url(${groundImage})` : "none",
          position: "relative",
        } as React.CSSProperties
      }
    >
      {/* <div
        style={{
          fontFamily: "monospace",
          fontSize: "8px",
          backgroundColor: "white",
          width: "fit-content",
          zIndex: 99999,
          position: "absolute",
          top: 15,
          left: 15,
        }}
      >
        {JSON.stringify(x)},{JSON.stringify(y)}
      </div> */}

      {walls?.map((wall, index) => (
        <WallView key={index} size={TILE_SIZE} zIndex={y + 1} wall={wall} />
      ))}

      {equipmentIcon && equipmentRotation && (
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: equipmentRotation.top,
              left: equipmentRotation.left,
              width: boxWidth,
              height: boxHeight,
              zIndex: y + 1,
            }}
          >
            <img
              src={equipmentIcon.src}
              alt={equipmentIcon.alt}
              height={equipmentRotation.height}
              width={equipmentRotation.width}
              style={{
                position: "absolute",
                left: (equipmentRotation.width - boxWidth) / 2,
                top: (equipmentRotation.height - boxHeight) / 2,
                transformOrigin: "center center",
              }}
            />
          </div>
          {/* <div
            style={{
              position: "absolute",
              top: "20px",
              left: "1px",
              zIndex: y + 1,
              backgroundColor: "white",
              padding: "1px",
              borderRadius: "4px",
              fontFamily: "monospace",
              flexDirection: "column",
              fontSize: "8px",
              wordBreak: "break-word",
              border: "1px solid #000",
              width: "max-content",
            }}
          >
            {equipmentIcon.alt}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Tile;
