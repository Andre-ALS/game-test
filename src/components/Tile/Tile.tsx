import clsx from "clsx";

import styles from "./Tile.module.css";

import { EQUIPMENTS_ICONS } from "../../constants/equipments";
import { GAME_MAP, GAME_MAP_PLACEMENTS } from "../../constants/map";
import { TILE_COLORS, TILE_SIZE, TILE_TO_EQUIPMENT, Tiles } from "../../constants/tile";

import { getTilePlacement } from "../../helpers/map";
import { getWallVariant } from "../../helpers/wall";

import groundImage from "../../assets/ground.png";

import WallView from "../Wall/WallView";
import TilePosition from "./components/TilePosition";
import Equipment from "../Equipment/Equipment";

interface TileProps {
  x: number;
  y: number;
  tile: Tiles;
}

const SHOW_TILE_POSITION = false;

const Tile = ({ x, y, tile }: TileProps) => {
  const facingTile = GAME_MAP[y]?.[x];
  const facingEquipment = TILE_TO_EQUIPMENT[facingTile];
  const placement = getTilePlacement(GAME_MAP_PLACEMENTS, x, y);
  const equipmentIcon =
    facingEquipment && placement.isAnchor ? EQUIPMENTS_ICONS[facingEquipment] : null;
  const walls = tile === Tiles.WALL ? getWallVariant(GAME_MAP, x, y) : null;
  const showFloor = tile === Tiles.FLOOR || Boolean(facingEquipment);

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
      {SHOW_TILE_POSITION && <TilePosition x={x} y={y} />}

      {walls?.map((wall, index) => (
        <WallView key={index} size={TILE_SIZE} zIndex={y + 1} wall={wall} />
      ))}

      {/* {equipmentIcon && equipmentRotation && (
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: equipmentRotation.bottom,
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
          <div
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
          </div>
        </div>
      )} */}

      {equipmentIcon && (
        <Equipment equipment={equipmentIcon} placement={placement.orientation} yIndex={y} />
      )}
    </div>
  );
};

export default Tile;
