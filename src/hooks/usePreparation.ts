import { useState } from "react";

import { Equipments } from "../constants/equipments";
import { OrderStatus } from "../constants/orders";

import type { Order, OrderItem } from "../interfaces/Order";
import type { Recipe } from "../interfaces/Recipe";
import type { RecipeSteps } from "../interfaces/RecipeSteps";

import {
  applyEquipmentInteraction,
  createInitialOrder,
  createItemProgress,
  getRecipeForItem,
  getStepGroups,
  markItemStatus,
  resolveServeStatus,
  type ItemProgress,
} from "../helpers/preparation";

export interface PreparationState {
  order: Order;
  activeItemIndex: number;
  activeItem: OrderItem | undefined;
  activeRecipe: Recipe | undefined;
  isOrderComplete: boolean;
  cupTaken: boolean;
  closeRequired: boolean;
  closeDone: boolean;
  middleSteps: RecipeSteps[];
  remainingMiddleSteps: RecipeSteps[];
  wrongEquipments: Equipments[];
  interact: (equipmentId: Equipments) => void;
}

export function usePreparation(): PreparationState {
  const [order, setOrder] = useState<Order>(createInitialOrder);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const activeItem = order.items[activeItemIndex];
  const activeRecipe = getRecipeForItem(order, activeItemIndex);

  const [progress, setProgress] = useState<ItemProgress>(() => createItemProgress(activeRecipe));

  const isOrderComplete = activeItemIndex >= order.items.length;
  const stepGroups = getStepGroups(activeRecipe);
  const closeRequired = Boolean(stepGroups.closeStep);

  const advanceToNextItem = (status: OrderStatus) => {
    const nextIndex = activeItemIndex + 1;
    const nextRecipe = getRecipeForItem(order, nextIndex);

    setOrder((current) => markItemStatus(current, activeItemIndex, status));
    setActiveItemIndex(nextIndex);
    setProgress(createItemProgress(nextRecipe));
  };

  const interact = (equipmentId: Equipments) => {
    if (isOrderComplete || !activeRecipe || !activeItem) {
      return;
    }

    if (equipmentId === Equipments.TRASH_BIN) {
      setProgress(createItemProgress(activeRecipe));
      return;
    }

    if (equipmentId === Equipments.SERVING_COUNTER) {
      if (!progress.cupTaken) {
        return;
      }

      advanceToNextItem(resolveServeStatus(progress));
      return;
    }

    setProgress((current) =>
      applyEquipmentInteraction(current, equipmentId, stepGroups, closeRequired),
    );
  };

  return {
    order,
    activeItemIndex,
    activeItem,
    activeRecipe,
    isOrderComplete,
    cupTaken: progress.cupTaken,
    closeRequired,
    closeDone: progress.closeDone,
    middleSteps: stepGroups.middleSteps,
    remainingMiddleSteps: progress.remainingMiddleSteps,
    wrongEquipments: progress.wrongEquipments,
    interact,
  };
}
