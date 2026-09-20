import type { Ingredients } from "../constants/ingredients";
import type { RecipeStepsActions } from "../constants/recipeSteps";

export interface RecipeSteps {
  action: RecipeStepsActions;
  ingredient?: Ingredients;
}
