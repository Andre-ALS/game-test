import { useState } from "react";

import { BASE_RECIPES } from "../constants/Recipe";
import { OrderStatus } from "../constants/Order";
import { Equipments } from "../constants/Equipments";
import { EQUIPMENT_CATALOG } from "../constants/EquipmentCatalog";
import { INGREDIENT_OPERATIONS } from "../constants/IngredientOperations";

import type { Order, OrderItem } from "../interfaces/Order";
import type { Recipe } from "../interfaces/Recipe";
import type { RecipeSteps } from "../interfaces/RecipeSteps";

const ORDER_RECIPE_IDS = ["coffee_black", "iced_tea"];

function createInitialOrder(): Order {
  return {
    id: "order-1",
    customerId: "customer-1",
    restaurantId: "restaurant-1",
    tip: 0,
    items: ORDER_RECIPE_IDS.map((recipeId) => ({
      recipeId,
      status: OrderStatus.WAITING,
    })),
    createdAt: Date.now(),
  };
}

function findRecipe(recipeId: string): Recipe | undefined {
  return Object.values(BASE_RECIPES)
    .flat()
    .find((recipe) => recipe.id === recipeId);
}

function isEquipmentValidForStep(equipmentId: Equipments, step: RecipeSteps): boolean {
  if (step.ingredient) {
    const allowedEquipments = INGREDIENT_OPERATIONS[step.ingredient]?.[step.action];

    if (allowedEquipments) {
      return allowedEquipments.includes(equipmentId);
    }
  }

  return EQUIPMENT_CATALOG[equipmentId].actions.includes(step.action);
}

export interface PreparationState {
  order: Order;
  activeItemIndex: number;
  stepIndex: number;
  activeItem: OrderItem | undefined;
  activeRecipe: Recipe | undefined;
  isOrderComplete: boolean;
  interact: (equipmentId: Equipments) => void;
}

export function usePreparation(): PreparationState {
  const [order, setOrder] = useState<Order>(createInitialOrder);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const activeItem = order.items[activeItemIndex];
  const activeRecipe = activeItem ? findRecipe(activeItem.recipeId) : undefined;
  const isOrderComplete = activeItemIndex >= order.items.length;

  const interact = (equipmentId: Equipments) => {
    if (isOrderComplete || !activeRecipe || !activeItem) {
      return;
    }

    if (equipmentId === Equipments.TRASH_BIN) {
      setStepIndex(0);
      return;
    }

    const currentStep = activeRecipe.steps[stepIndex];

    if (!currentStep) {
      return;
    }

    if (!isEquipmentValidForStep(equipmentId, currentStep)) {
      return;
    }

    const nextStepIndex = stepIndex + 1;

    if (nextStepIndex >= activeRecipe.steps.length) {
      setOrder((current) => ({
        ...current,
        items: current.items.map((item, index) =>
          index === activeItemIndex ? { ...item, status: OrderStatus.COMPLETED } : item,
        ),
      }));

      setActiveItemIndex((current) => current + 1);
      setStepIndex(0);
      return;
    }

    setStepIndex(nextStepIndex);
  };

  return {
    order,
    activeItemIndex,
    stepIndex,
    activeItem,
    activeRecipe,
    isOrderComplete,
    interact,
  };
}
