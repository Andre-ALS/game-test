import type { Equipment } from "./Equipment";
import type { InventoryItem } from "./Inventory";
import type { Menu } from "./Menu";
import type { RestaurantLayout } from "./RestaurantLayout";

// TODO: Add other restaurant types in the future
// export type RestaurantType = "BUBBLE_TEA" | "SUSHI" | "PIZZERIA" | "BAKERY";

export interface Restaurant {
  id: string;
  name: string;
  type: "BUBBLE_TEA";
  reputation: number;
  inventory: InventoryItem[];
  equipment: Equipment[];
  layout: RestaurantLayout;
  isOpen: boolean;
  menu: Menu;
  // open
  // employees;
}
