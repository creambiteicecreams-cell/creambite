import { CustomerInfo } from "@/app/types/customer";

const CUSTOMER_KEY = "creambite_customer";

export function saveCustomer(info: CustomerInfo) {
  localStorage.setItem(CUSTOMER_KEY, JSON.stringify(info));
}

export function loadCustomer(): CustomerInfo | null {
  const data = localStorage.getItem(CUSTOMER_KEY);

  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}