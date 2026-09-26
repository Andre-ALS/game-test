import type { PlacementOrientation } from "../../interfaces/Map";
import type { EquipmentImageProperties } from "../../interfaces/Equipment";

interface EquipmentViewProps {
  equipment: EquipmentImageProperties;
  orientation: PlacementOrientation;
  yIndex: number;
}

const EquipmentView = ({ equipment, orientation, yIndex }: EquipmentViewProps) => {
  const layout = equipment.orientations[orientation];

  if (!layout) {
    return null;
  }

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <img
        src={equipment.src}
        alt={equipment.alt}
        height={layout.height}
        width={layout.width}
        style={{
          position: "absolute",
          bottom: layout.bottom,
          left: layout.left,
          zIndex: yIndex + 1,
        }}
      />
    </div>
  );
};

export default EquipmentView;
