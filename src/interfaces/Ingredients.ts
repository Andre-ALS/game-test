import type { Ingredients } from "../constants/Ingredients";

export interface Ingredient {
  id: Ingredients;
  category: string;
  purchasePrice: number;
  sellingValue: number;
  maxStack: number;
  expirationTime?: number;
}
