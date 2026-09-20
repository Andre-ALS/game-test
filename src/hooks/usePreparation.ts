import { useState } from "react";

import { findRecipeById } from "../constants/Recipe";
import { OrderStatus } from "../constants/Order";
import { Equipments } from "../constants/Equipments";
import { EQUIPMENT_CATALOG } from "../constants/EquipmentCatalog";
import { INGREDIENT_OPERATIONS } from "../constants/IngredientOperations";
import { Ingredients } from "../constants/Ingredients";
import { RecipeStepsActions } from "../constants/RecipeSteps";

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

function isEquipmentValidForStep(equipmentId: Equipments, step: RecipeSteps): boolean {
  if (step.ingredient) {
    const allowedEquipments = INGREDIENT_OPERATIONS[step.ingredient]?.[step.action];

    if (allowedEquipments) {
      return allowedEquipments.includes(equipmentId);
    }
  }

  return EQUIPMENT_CATALOG[equipmentId].actions.includes(step.action);
}

interface StepGroups {
  cupStep?: RecipeSteps;
  closeStep?: RecipeSteps;
  middleSteps: RecipeSteps[];
}

function getStepGroups(recipe: Recipe | undefined): StepGroups {
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

interface ItemProgress {
  cupTaken: boolean;
  closeDone: boolean;
  remainingMiddleSteps: RecipeSteps[];
  wrongEquipments: Equipments[];
}

function createItemProgress(recipe: Recipe | undefined): ItemProgress {
  const { cupStep, closeStep, middleSteps } = getStepGroups(recipe);

  return {
    cupTaken: !cupStep,
    closeDone: !closeStep,
    remainingMiddleSteps: middleSteps,
    wrongEquipments: [],
  };
}

function addWrongEquipment(current: ItemProgress, equipmentId: Equipments): ItemProgress {
  if (current.wrongEquipments.includes(equipmentId)) {
    return current;
  }

  return { ...current, wrongEquipments: [...current.wrongEquipments, equipmentId] };
}

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
  const activeRecipe = activeItem ? findRecipeById(activeItem.recipeId) : undefined;

  const [progress, setProgress] = useState<ItemProgress>(() => createItemProgress(activeRecipe));

  const isOrderComplete = activeItemIndex >= order.items.length;
  const stepGroups = getStepGroups(activeRecipe);
  const closeRequired = Boolean(stepGroups.closeStep);

  const advanceToNextItem = (status: OrderStatus) => {
    const nextIndex = activeItemIndex + 1;
    const nextRecipe = findRecipeById(order.items[nextIndex]?.recipeId ?? "");

    setOrder((current) => ({
      ...current,
      items: current.items.map((item, index) =>
        index === activeItemIndex ? { ...item, status } : item,
      ),
    }));

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

      const isFullyDone = progress.remainingMiddleSteps.length === 0 && progress.closeDone;

      let status = OrderStatus.COMPLETED;

      if (progress.wrongEquipments.length > 0) {
        status = OrderStatus.FAILED;
      } else if (!isFullyDone) {
        status = OrderStatus.INCOMPLETE;
      }

      advanceToNextItem(status);
      return;
    }

    setProgress((current) => {
      if (!current.cupTaken) {
        if (stepGroups.cupStep && isEquipmentValidForStep(equipmentId, stepGroups.cupStep)) {
          return { ...current, cupTaken: true };
        }

        return current;
      }

      const middleStepsPending = current.remainingMiddleSteps.length > 0;

      if (
        closeRequired &&
        stepGroups.closeStep &&
        isEquipmentValidForStep(equipmentId, stepGroups.closeStep)
      ) {
        if (current.closeDone) {
          return addWrongEquipment(current, equipmentId);
        }

        if (middleStepsPending) {
          return current;
        }

        return { ...current, closeDone: true };
      }

      const matchIndex = current.remainingMiddleSteps.findIndex((step) =>
        isEquipmentValidForStep(equipmentId, step),
      );

      if (matchIndex !== -1) {
        const nextRemaining = [...current.remainingMiddleSteps];
        nextRemaining.splice(matchIndex, 1);
        return { ...current, remainingMiddleSteps: nextRemaining };
      }

      return addWrongEquipment(current, equipmentId);
    });
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
