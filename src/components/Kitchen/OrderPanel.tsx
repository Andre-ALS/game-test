import clsx from "clsx";

import styles from "./OrderPanel.module.css";

import { OrderStatus } from "../../constants/Order";
import { RECIPE_STEPS_ACTION_NAMES } from "../../constants/RecipeSteps";
import { INGREDIENTS_NAMES } from "../../constants/Ingredients";

import type { PreparationState } from "../../hooks/usePreparation";

interface OrderPanelProps {
  preparation: PreparationState;
}

const OrderPanel = ({ preparation }: OrderPanelProps) => {
  const { order, activeItemIndex, stepIndex, activeRecipe, isOrderComplete } = preparation;

  const currentStep = activeRecipe?.steps[stepIndex];

  return (
    <div className={styles.panel}>
      <div className={styles.title}>Order {order.id}</div>

      <div className={styles.items}>
        {order.items.map((item, index) => {
          const isCompleted = item.status === OrderStatus.COMPLETED;
          const isActive = !isCompleted && index === activeItemIndex;

          return (
            <div key={index} className={clsx(styles.item, isActive && styles.itemActive)}>
              <span>{item.recipeId}</span>
              <span>{isCompleted ? "✅" : isActive ? "👉" : "⏳"}</span>
            </div>
          );
        })}
      </div>

      <div className={styles.step}>
        {isOrderComplete && <div>🎉 Order complete!</div>}

        {!isOrderComplete && activeRecipe && (
          <div>
            Step {stepIndex + 1} of {activeRecipe.steps.length}:{" "}
            {currentStep ? RECIPE_STEPS_ACTION_NAMES[currentStep.action] : ""}
            {currentStep?.ingredient ? ` (${INGREDIENTS_NAMES[currentStep.ingredient]})` : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPanel;
