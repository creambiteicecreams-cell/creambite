"use client";

import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function FloatingCart() {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2">
      <Link href="/cart">
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-pink-600 to-rose-500 px-6 py-4 text-white shadow-2xl transition duration-300 hover:scale-[1.02] hover:shadow-pink-300">

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/20 p-3">
              <ShoppingBag size={24} />
            </div>

            <div>
              <p className="text-sm opacity-90">
                {totalItems} Item{totalItems > 1 ? "s" : ""}
              </p>

              <h3 className="text-xl font-bold">
                ₹{totalPrice}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 font-semibold">
            View Cart
            <ArrowRight size={20} />
          </div>

        </div>
      </Link>
    </div>
  );
}