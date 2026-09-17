import type { Ingredients } from "../constants/Ingredients";
import type { RecipeStepsActions } from "../constants/RecipeSteps";

export interface RecipeSteps {
  action: RecipeStepsActions;
  ingredient?: Ingredients;
}
