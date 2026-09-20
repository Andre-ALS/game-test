import type { RecipeLevel } from "../constants/recipes";
import type { RecipeSteps } from "./RecipeSteps";

export interface Recipe {
  id: string;
  name: string;
  price: number;
  steps: RecipeSteps[];
  level: RecipeLevel;
}
