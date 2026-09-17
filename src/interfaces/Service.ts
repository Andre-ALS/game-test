export interface Service {
  id: string;
  day: number;
  startedAt: number;
  endedAt: number;
  revenue: number;
  expenses: number;
  tips: number;
  customersServed: number;
  customersLost: number;
  rating: number;
}
