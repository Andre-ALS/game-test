import type { MenuItem } from "./MenuItem";

export interface Menu {
  restaurantId: string;
  recipes: MenuItem[];
}
