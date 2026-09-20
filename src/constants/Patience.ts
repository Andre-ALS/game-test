import { CustomerType } from "./customers";

// patience decay will be the following values per second for each customer type
export const PATIENCE_DECAY: Record<CustomerType, number> = {
  [CustomerType.NORMAL]: 1,
  [CustomerType.NERVOUS]: 1.5,
  [CustomerType.RELAXED]: 0.7,
  [CustomerType.VIP]: 1,
};
