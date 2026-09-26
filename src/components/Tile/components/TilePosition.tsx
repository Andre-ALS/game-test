interface TileProps {
  x: number;
  y: number;
}

const Tile = ({ x, y }: TileProps) => {
  return (
    <div
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
    </div>
  );
};

export default Tile;
