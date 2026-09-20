import type { Equipments } from "../constants/equipments";
import type { Furnitures } from "../constants/furnitures";
import type { Ingredients } from "../constants/ingredients";

export interface PlayerProgress {
  money: number;
  level: number;
  experience: number;
  unlockedIngredients: Ingredients[];
  unlockedEquipments: Equipments[];
  unlockedFurnitures: Furnitures[];
}
