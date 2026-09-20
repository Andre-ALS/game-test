import type { OrderStatus } from "../constants/orders";

export interface OrderItem {
  recipeId: string;
  status: OrderStatus;
}

export interface Order {
  id: string;
  customerId: string;
  restaurantId: string;
  quality?: number;
  reward?: number;
  tip: number;
  items: OrderItem[];
  createdAt: number;
  completedAt?: number;
}
