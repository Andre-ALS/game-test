import clsx from "clsx";

import styles from "./OrderPanel.module.css";

import { OrderStatus } from "../../constants/orders";
import { RECIPE_STEPS_ACTION_NAMES } from "../../constants/recipeSteps";
import { INGREDIENTS_NAMES } from "../../constants/ingredients";
import { EQUIPMENT_NAMES } from "../../constants/equipments";
import { findRecipeById } from "../../constants/recipes";

import type { PreparationState } from "../../hooks/usePreparation";

interface OrderPanelProps {
  preparation: PreparationState;
}

const ITEM_STATUS_ICON: Record<OrderStatus, string> = {
  [OrderStatus.CREATED]: "⏳",
  [OrderStatus.WAITING]: "⏳",
  [OrderStatus.IN_PROGRESS]: "👉",
  [OrderStatus.READY]: "👉",
  [OrderStatus.COMPLETED]: "✅",
  [OrderStatus.INCOMPLETE]: "⚠️",
  [OrderStatus.FAILED]: "❌",
};

const FINISHED_STATUSES = [OrderStatus.COMPLETED, OrderStatus.INCOMPLETE, OrderStatus.FAILED];

const OrderPanel = ({ preparation }: OrderPanelProps) => {
  const {
    order,
    activeItemIndex,
    isOrderComplete,
    cupTaken,
    closeRequired,
    closeDone,
    middleSteps,
    remainingMiddleSteps,
    wrongEquipments,
  } = preparation;

  return (
    <div className={styles.panel}>
      <div className={styles.title}>Pedido #{order.id}</div>

      <div className={styles.items}>
        {order.items.map((item, index) => {
          const isFinished = FINISHED_STATUSES.includes(item.status);
          const isActive = !isFinished && index === activeItemIndex;
          const icon = isActive ? "👉" : ITEM_STATUS_ICON[item.status];
          const recipeName = findRecipeById(item.recipeId)?.name ?? item.recipeId;

          return (
            <div key={index} className={clsx(styles.item, isActive && styles.itemActive)}>
              <span>{recipeName}</span>
              <span>{icon}</span>
            </div>
          );
        })}
      </div>

      <div className={styles.step}>
        {isOrderComplete && <div>🎉 Pedido completo!</div>}

        {!isOrderComplete && (
          <>
            <div className={styles.checklist}>
              <div className={clsx(styles.checkItem, cupTaken && styles.checkItemDone)}>
                <span>{cupTaken ? "✅" : "⬜"}</span>
                <span>Copo</span>
              </div>

              {middleSteps.map((step, index) => {
                const done = !remainingMiddleSteps.includes(step);

                return (
                  <div key={index} className={clsx(styles.checkItem, done && styles.checkItemDone)}>
                    <span>{done ? "✅" : "⬜"}</span>
                    <span>
                      {RECIPE_STEPS_ACTION_NAMES[step.action]}
                      {step.ingredient ? ` (${INGREDIENTS_NAMES[step.ingredient]})` : ""}
                    </span>
                  </div>
                );
              })}

              {closeRequired && (
                <div className={clsx(styles.checkItem, closeDone && styles.checkItemDone)}>
                  <span>{closeDone ? "✅" : "⬜"}</span>
                  <span>Fechar tampa</span>
                </div>
              )}
            </div>

            {wrongEquipments.length > 0 && (
              <div className={styles.wrongSteps}>
                <div className={styles.wrongStepsTitle}>🚫 Passos errados:</div>
                <ul className={styles.wrongStepsList}>
                  {wrongEquipments.map((equipmentId) => (
                    <li key={equipmentId} style={{ marginTop: "4px" }}>
                      {EQUIPMENT_NAMES[equipmentId]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPanel;
