export enum Furnitures {
  TABLE = "table",
  CHAIR = "chair",
  SHELF = "shelf",
  CABINET = "cabinet",
}

export const FURNITURES_NAMES: Record<Furnitures, string> = {
  [Furnitures.TABLE]: "Mesa",
  [Furnitures.CHAIR]: "Cadeira",
  [Furnitures.SHELF]: "Prateleira",
  [Furnitures.CABINET]: "Armário",
};
