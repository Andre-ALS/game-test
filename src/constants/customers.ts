import type { CustomerProfile } from "../interfaces/Customer";

export enum CustomerStatus {
  ARRIVING_TO_STORE,
  WAITING_TO_ORDER,
  ORDERING,
  WAITING_TO_SERVE,
  SERVED,
  LEAVING,
  LOST,
}

export enum CustomerType {
  NORMAL,
  NERVOUS,
  RELAXED,
  VIP,
}

export const CUSTOMER_PROFILES: Record<CustomerType, CustomerProfile> = {
  [CustomerType.NORMAL]: {
    patienceSoft: 100,
    patienceHard: 120,
    tipMultiplier: 1,
    frequency: 0.7,
  },
  [CustomerType.NERVOUS]: {
    patienceSoft: 60,
    patienceHard: 80,
    tipMultiplier: 1.5,
    frequency: 0.1,
  },
  [CustomerType.RELAXED]: {
    patienceSoft: 120,
    patienceHard: 140,
    tipMultiplier: 0.7,
    frequency: 0.15,
  },
  [CustomerType.VIP]: {
    patienceSoft: 90,
    patienceHard: 110,
    tipMultiplier: 2,
    frequency: 0.05,
  },
};
