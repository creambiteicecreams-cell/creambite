export interface CustomerInfo {
  name: string;
  phone: string;
  orderType: "Pickup" | "Delivery";
  address: string;
}
