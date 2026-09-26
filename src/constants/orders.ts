export enum OrderStatus {
  CREATED,
  WAITING,
  IN_PROGRESS,
  READY,
  COMPLETED,
  INCOMPLETE,
  FAILED,
}

export const ORDER_STATUS_ICON: Record<OrderStatus, string> = {
  [OrderStatus.CREATED]: "⏳",
  [OrderStatus.WAITING]: "⏳",
  [OrderStatus.IN_PROGRESS]: "👉",
  [OrderStatus.READY]: "👉",
  [OrderStatus.COMPLETED]: "✅",
  [OrderStatus.INCOMPLETE]: "⚠️",
  [OrderStatus.FAILED]: "❌",
};

export const ORDER_FINISHED_STATUSES = [
  OrderStatus.COMPLETED,
  OrderStatus.INCOMPLETE,
  OrderStatus.FAILED,
];
