import { coupons } from "../app/data/coupons";

export function applyCoupon(code: string, subtotal: number) {
  const coupon = coupons.find(
    (c) => c.code.toUpperCase() === code.toUpperCase()
  );

  if (!coupon) {
    return {
      valid: false,
      message: "Invalid coupon code.",
      discount: 0,
    };
  }

  if (coupon.minOrder && subtotal < coupon.minOrder) {
    return {
      valid: false,
      message: `Minimum order should be ₹${coupon.minOrder}.`,
      discount: 0,
    };
  }

  let discount = 0;

  if (coupon.type === "percentage") {
    discount = (subtotal * coupon.value) / 100;
  } else {
    discount = coupon.value;
  }

  if (discount > subtotal) {
    discount = subtotal;
  }

  return {
    valid: true,
    message: "Coupon applied successfully!",
    discount,
    coupon,
  };
}