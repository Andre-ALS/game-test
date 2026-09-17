import type { Ingredient } from "./Ingredients";

export interface Purchase {
  ingredient: Ingredient;
  quantity: number;
  totalCost: number;
}
