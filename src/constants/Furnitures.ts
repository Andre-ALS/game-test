export enum Furnitures {
  COUNTER = "counter",
  TABLE = "table",
  CHAIR = "chair",
  SHELF = "shelf",
  CABINET = "cabinet",
  TRASH_BIN = "trash_bin",
}

export const FURNITURES_NAMES: Record<Furnitures, string> = {
  [Furnitures.COUNTER]: "Balcão",
  [Furnitures.TABLE]: "Mesa",
  [Furnitures.CHAIR]: "Cadeira",
  [Furnitures.SHELF]: "Prateleira",
  [Furnitures.CABINET]: "Armário",
  [Furnitures.TRASH_BIN]: "Lixeira",
};
