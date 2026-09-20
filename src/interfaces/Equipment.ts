import type { Equipments } from "../constants/equipments";
import type { RecipeStepsActions } from "../constants/recipeSteps";

export interface Equipment {
  id: Equipments;
  actions: RecipeStepsActions[];
  purchasePrice: number;
  requiredLevel: number;
  duration: number;
}
