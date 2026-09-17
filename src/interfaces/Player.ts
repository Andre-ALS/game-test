import type { Equipments } from "../constants/Equipments";
import type { Furnitures } from "../constants/Furnitures";
import type { Ingredients } from "../constants/Ingredients";

export interface PlayerProgress {
  money: number;
  level: number;
  experience: number;
  unlockedIngredients: Ingredients[];
  unlockedEquipments: Equipments[];
  unlockedFurnitures: Furnitures[];
}
