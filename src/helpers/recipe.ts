import { BASE_RECIPES } from "../constants/recipes";
import type { Recipe } from "../interfaces/Recipe";

export function findRecipeById(recipeId: string): Recipe | undefined {
  return Object.values(BASE_RECIPES)
    .flat()
    .find((recipe) => recipe.id === recipeId);
}
