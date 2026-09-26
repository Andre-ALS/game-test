import { Equipments } from "../constants/equipments";
import { EQUIPMENT_CATALOG } from "../constants/equipmentCatalog";
import { INGREDIENT_OPERATIONS } from "../constants/ingredientOperations";
import { Ingredients } from "../constants/ingredients";
import { OrderStatus } from "../constants/orders";
import { RecipeStepsActions } from "../constants/recipeSteps";

import type { Order } from "../interfaces/Order";
import type { Recipe } from "../interfaces/Recipe";
import type { RecipeSteps } from "../interfaces/RecipeSteps";

import { findRecipeById } from "./recipe";

const ORDER_RECIPE_IDS = ["coffee_black", "iced_tea"];

export interface StepGroups {
  cupStep?: RecipeSteps;
  closeStep?: RecipeSteps;
  middleSteps: RecipeSteps[];
}

export interface ItemProgress {
  cupTaken: boolean;
  closeDone: boolean;
  remainingMiddleSteps: RecipeSteps[];
  wrongEquipments: Equipments[];
}

export function createInitialOrder(now = Date.now()): Order {
  return {
    id: "order-1",
    customerId: "customer-1",
    restaurantId: "restaurant-1",
    tip: 0,
    items: ORDER_RECIPE_IDS.map((recipeId) => ({
      recipeId,
      status: OrderStatus.WAITING,
    })),
    createdAt: now,
  };
}

export function isEquipmentValidForStep(equipmentId: Equipments, step: RecipeSteps): boolean {
  if (step.ingredient) {
    const allowedEquipments = INGREDIENT_OPERATIONS[step.ingredient]?.[step.action];

    if (allowedEquipments) {
      return allowedEquipments.includes(equipmentId);
    }
  }

  return EQUIPMENT_CATALOG[equipmentId].actions.includes(step.action);
}

export function getStepGroups(recipe: Recipe | undefined): StepGroups {
  if (!recipe) {
    return { middleSteps: [] };
  }

  const nonServeSteps = recipe.steps.filter((step) => step.action !== RecipeStepsActions.SERVE);
  const cupStepIndex = nonServeSteps.findIndex((step) => step.ingredient === Ingredients.CUP);
  const closeStepIndex = nonServeSteps.findIndex(
    (step) => step.action === RecipeStepsActions.CLOSE,
  );

  return {
    cupStep: cupStepIndex !== -1 ? nonServeSteps[cupStepIndex] : undefined,
    closeStep: closeStepIndex !== -1 ? nonServeSteps[closeStepIndex] : undefined,
    middleSteps: nonServeSteps.filter(
      (_, index) => index !== cupStepIndex && index !== closeStepIndex,
    ),
  };
}

export function createItemProgress(recipe: Recipe | undefined): ItemProgress {
  const { cupStep, closeStep, middleSteps } = getStepGroups(recipe);

  return {
    cupTaken: !cupStep,
    closeDone: !closeStep,
    remainingMiddleSteps: middleSteps,
    wrongEquipments: [],
  };
}

export function addWrongEquipment(current: ItemProgress, equipmentId: Equipments): ItemProgress {
  if (current.wrongEquipments.includes(equipmentId)) {
    return current;
  }

  return { ...current, wrongEquipments: [...current.wrongEquipments, equipmentId] };
}

export function resolveServeStatus(progress: ItemProgress): OrderStatus {
  const isFullyDone = progress.remainingMiddleSteps.length === 0 && progress.closeDone;

  if (progress.wrongEquipments.length > 0) {
    return OrderStatus.FAILED;
  }

  if (!isFullyDone) {
    return OrderStatus.INCOMPLETE;
  }

  return OrderStatus.COMPLETED;
}

export function applyEquipmentInteraction(
  progress: ItemProgress,
  equipmentId: Equipments,
  stepGroups: StepGroups,
  closeRequired: boolean,
): ItemProgress {
  if (!progress.cupTaken) {
    if (stepGroups.cupStep && isEquipmentValidForStep(equipmentId, stepGroups.cupStep)) {
      return { ...progress, cupTaken: true };
    }

    return progress;
  }

  const middleStepsPending = progress.remainingMiddleSteps.length > 0;

  if (
    closeRequired &&
    stepGroups.closeStep &&
    isEquipmentValidForStep(equipmentId, stepGroups.closeStep)
  ) {
    if (progress.closeDone) {
      return addWrongEquipment(progress, equipmentId);
    }

    if (middleStepsPending) {
      return progress;
    }

    return { ...progress, closeDone: true };
  }

  const matchIndex = progress.remainingMiddleSteps.findIndex((step) =>
    isEquipmentValidForStep(equipmentId, step),
  );

  if (matchIndex !== -1) {
    const nextRemaining = [...progress.remainingMiddleSteps];
    nextRemaining.splice(matchIndex, 1);
    return { ...progress, remainingMiddleSteps: nextRemaining };
  }

  return addWrongEquipment(progress, equipmentId);
}

export function markItemStatus(order: Order, itemIndex: number, status: OrderStatus): Order {
  return {
    ...order,
    items: order.items.map((item, index) => (index === itemIndex ? { ...item, status } : item)),
  };
}

export function getRecipeForItem(order: Order, itemIndex: number): Recipe | undefined {
  const recipeId = order.items[itemIndex]?.recipeId;
  return recipeId ? findRecipeById(recipeId) : undefined;
}
