import type { CustomerStatus, CustomerType } from "../constants/customers";

export interface CustomerProfile {
  patienceSoft: number;
  patienceHard: number;
  // 100% of the normal value is 1, 120% is 1.2 and so on
  tipMultiplier: number;
  // how probably is to find the customer at the store. eg.: 60%, 15%, etc. Represented by 0.6, 0.15, etc
  frequency: number;
}

export interface Customer extends Omit<CustomerProfile, "frequency" | "tipMultiplier"> {
  id: string;
  orderId: string;
  satisfaction: number;
  status: CustomerStatus;
  type: CustomerType;
}
