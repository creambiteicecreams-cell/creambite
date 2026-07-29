export interface Coupon {
  code: string;
  type: "percentage" | "fixed";
  value: number;
  minOrder?: number;
}

export const coupons: Coupon[] = [
  {
    code: "WELCOME10",
    type: "percentage",
    value: 10,
    minOrder: 200,
  },
  {
    code: "CREAM50",
    type: "fixed",
    value: 50,
    minOrder: 500,
  },
  {
    code: "ICE20",
    type: "percentage",
    value: 20,
    minOrder: 1000,
  },
];