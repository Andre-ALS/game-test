import type { Equipments } from "../constants/Equipments";
import type { RecipeStepsActions } from "../constants/RecipeSteps";

export interface Equipment {
  id: Equipments;
  actions: RecipeStepsActions[];
  purchasePrice: number;
  requiredLevel: number;
  duration: number;
}
