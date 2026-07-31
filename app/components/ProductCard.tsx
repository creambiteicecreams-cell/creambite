"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

import { Product } from "../data/menu";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isWishlisted,
  } = useWishlist();

  return (
    <div className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl">

      {/* Image */}
<div className="relative h-52 overflow-hidden sm:h-60 lg:h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Wishlist Button */}
        <button
          onClick={() => {
            if (isWishlisted(product.id)) {
              removeFromWishlist(product.id);
            } else {
              addToWishlist({
                id: product.id,
                name: product.name,
                image: product.image,
              });
            }
          }}
          className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-lg transition hover:scale-110"
        >
          <Heart
            size={22}
            className={
              isWishlisted(product.id)
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }
          />
        </button>

        {/* Bestseller Badge */}
        {product.bestseller && (
          <span className="absolute left-4 top-4 rounded-full bg-orange-600 px-4 py-1 text-xs font-semibold text-white shadow">
🔥 Bestseller
          </span>
        )}
      </div>
      {/* Sugar Free Badge */}
{product.category === "Sugar Free" && (
  <span className="absolute bottom-4 left-4 rounded-full bg-green-600 px-4 py-1 text-xs font-semibold text-white shadow">
    🌿 Sugar Free
  </span>
)}

      {/* Details */}
<div className="p-4 sm:p-5 lg:p-6">
<h3 className="text-lg font-bold sm:text-xl lg:text-2xl">
            {product.name}
        </h3>

<p className="mt-2 text-sm text-gray-500 sm:text-base">
            {product.description}
        </p>

        <div className="mt-6 space-y-3">

          {product.prices.map((price) => (

            <div
              key={price.label}
              className="flex items-center justify-between rounded-xl bg-pink-50 px-4 py-3"
            >

              <div>
                <p className="font-semibold">
                  {price.label}
                </p>

                <p className="font-bold text-pink-600">
                  ₹{price.value}
                </p>
              </div>

              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: price.value,
                    image: product.image,
                  })
                }
                className="rounded-xl bg-pink-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-pink-700 sm:px-5"              >
                + Add
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}