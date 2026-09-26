import type { Equipments } from "../constants/equipments";
import type { RecipeStepsActions } from "../constants/recipeSteps";

export interface Equipment {
  id: Equipments;
  actions: RecipeStepsActions[];
  purchasePrice: number;
  requiredLevel: number;
  duration: number;
}

export interface EquipmentLayout {
  width: number;
  height: number;
  bottom: number;
  left: number;
}

export interface EquipmentImageProperties {
  src: string;
  alt: string;
  orientations: {
    horizontal?: EquipmentLayout;
    vertical?: EquipmentLayout;
    single?: EquipmentLayout;
  };
}
