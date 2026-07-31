"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { applyCoupon } from "../../lib/coupon";
import { supabase } from "@/lib/supabase/client";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";

import CheckoutModal from "../components/CheckoutModal";
import { CustomerInfo } from "../types/customer";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const router = useRouter();

const goToMenu = () => {
  router.push("/");

  setTimeout(() => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 200);
};

  const handleApplyCoupon = () => {
    const result = applyCoupon(couponCode, totalPrice);

    if (result.valid) {
      setDiscount(result.discount);
    } else {
      setDiscount(0);
    }

    setCouponMessage(result.message);
  };

const handleWhatsAppCheckout = async (customer: CustomerInfo) => {    const phone = "917975124421";

    const items = cart
      .map(
        (item) =>
          `🍨 ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`
      )
      .join("\n");

    const finalTotal = totalPrice - discount;
    const { error } = await supabase.from("orders").insert({
  customer_name: customer.name,
  customer_phone: customer.phone,
  order_type: customer.orderType,
  address:
    customer.orderType === "Delivery" ? customer.address : null,

  items: cart,

  total_items: totalItems,
  subtotal: totalPrice,
  discount,
  total: finalTotal,

  coupon_code: couponCode || null,

  status: "Pending",

  notes: null,
});

if (error) {
console.log("Supabase Error:", error);
alert(error?.message || JSON.stringify(error));  alert("Unable to place your order. Please try again.");
  return;
}

    const message = `🍦 *Cream Bite Order*

👤 Customer: ${customer.name}
📱 Phone: ${customer.phone}
🚚 Order Type: ${customer.orderType}

${
  customer.orderType === "Delivery"
    ? `📍 Address:
${customer.address}

`
    : ""
}
-----------------------

${items}

-----------------------

🛒 Total Items: ${totalItems}
🎁 Discount: ₹${discount}
💰 Total Amount: ₹${finalTotal}

Thank you for choosing Cream Bite ❤️`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setCheckoutOpen(false);
  };
  if (cart.length === 0) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
      <ShoppingBag className="mb-6 h-20 w-20 text-pink-400" />

      <h1 className="mb-4 text-4xl font-bold">
        Your Cart is Empty
      </h1>

      <p className="mb-8 text-gray-600">
        Looks like you haven't added any delicious treats yet.
      </p>

      <button
  onClick={goToMenu}
  className="rounded-xl bg-pink-600 px-8 py-3 font-semibold text-white hover:bg-pink-700"
>
  Browse Menu
</button>
    </div>
  );
}

return (
  <div className="mx-auto max-w-6xl px-6 py-16">

    <div className="mb-10 flex items-center gap-3">

      <button
  onClick={goToMenu}
  className="rounded-lg border p-2 hover:bg-gray-100"
>
  <ArrowLeft className="h-5 w-5" />
</button>
      <h1 className="text-4xl font-bold">
        Shopping Cart
      </h1>

    </div>

    <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

      {/* Cart Items */}

      <div className="space-y-6">

        {cart.map((item) => (

          <div
            key={item.id}
            className="flex items-center gap-4 rounded-2xl border bg-white p-4 shadow-sm"
          >

            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="rounded-xl object-cover"
            />

            <div className="flex-1">

              <h2 className="text-xl font-bold">
                {item.name}
              </h2>

              <p className="text-pink-600 font-semibold">
                ₹{item.price}
              </p>

              <div className="mt-4 flex items-center gap-3">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="rounded-lg border p-2 hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="rounded-lg border p-2 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>

              </div>

            </div>

            <div className="flex flex-col items-end gap-4">

              <p className="text-xl font-bold">
                ₹{item.price * item.quantity}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
              >
                <Trash2 className="h-5 w-5" />
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Order Summary */}

      <div className="sticky top-24 h-fit rounded-2xl border bg-pink-50 p-6 shadow-sm">

        <h2 className="mb-6 text-2xl font-bold">
          Order Summary
        </h2>

        <div className="mb-3 flex justify-between">
          <span>Total Items</span>
          <strong>{totalItems}</strong>
        </div>

        <div className="mb-6 flex justify-between">
          <span>Subtotal</span>
          <strong>₹{totalPrice}</strong>
        </div>

        {discount > 0 && (
          <div className="mb-6 flex justify-between text-green-600">
            <span>Discount</span>
            <strong>-₹{discount}</strong>
          </div>
        )}

        <div className="mb-8 flex justify-between border-t pt-4 text-2xl font-bold">
          <span>Total</span>
          <span>₹{totalPrice - discount}</span>
        </div>

        {/* Coupon */}

        <div className="mb-6">

          <label className="mb-2 block font-semibold">
            Coupon Code
          </label>

          <div className="flex gap-2">

            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter Coupon"
              className="flex-1 rounded-lg border px-3 py-2"
            />

            <button
              onClick={handleApplyCoupon}
              className="rounded-lg bg-pink-600 px-4 py-2 text-white hover:bg-pink-700"
            >
              Apply
            </button>

          </div>

          {couponMessage && (
            <p
              className={`mt-2 text-sm ${
                discount > 0
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {couponMessage}
            </p>
          )}

        </div>

        {/* Offers */}

        <div className="mb-6 rounded-xl border border-pink-200 bg-white p-4">

          <h3 className="mb-3 font-bold text-pink-700">
            🎁 Available Offers
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <strong>WELCOME10</strong> – 10% OFF above ₹200
            </li>

            <li>
              <strong>CREAM50</strong> – ₹50 OFF above ₹500
            </li>

            <li>
              <strong>ICE20</strong> – 20% OFF above ₹1000
            </li>

          </ul>

        </div>

        <button
          onClick={() => setCheckoutOpen(true)}
          className="w-full rounded-xl bg-green-600 py-4 text-lg font-semibold text-white hover:bg-green-700"
        >
          Proceed to WhatsApp
        </button>

      </div>

    </div>

    <CheckoutModal
      open={checkoutOpen}
      onClose={() => setCheckoutOpen(false)}
      onConfirm={handleWhatsAppCheckout}
    />

  </div>
);
}