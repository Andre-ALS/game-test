import type { PlacementOrientation } from "../../helpers/map";
import type { EquipmentImageProperties } from "../../interfaces/Equipment";

interface EquipmentProps {
  equipment: EquipmentImageProperties;
  placement: PlacementOrientation;
  yIndex: number;
}

const Equipment = ({ equipment, placement, yIndex: y }: EquipmentProps) => {
  const equipmentRotation = equipment.rotations[placement];

  const boxWidth = equipmentRotation ? equipmentRotation.width : 0;
  const boxHeight = equipmentRotation ? equipmentRotation.height : 0;

  if (!equipmentRotation) {
    return null;
  }

  return (
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
          src={equipment.src}
          alt={equipment.alt}
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
        {equipment.alt}
      </div>
    </div>
  );
};

export default Equipment;
