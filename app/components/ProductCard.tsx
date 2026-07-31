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

  const getAltText = () => {
    const categoryMap: Record<string, string> = {
      "Ice Cream": "Ice Cream",
      "Belgian Waffles": "Belgian Waffle",
      "Sundaades": "Sundae",
      "Sundaes": "Sundae",
      "Chocolate Bowls": "Chocolate Bowl",
      "Thick Shakes": "Thick Shake",
      "Cream Buns": "Cream Bun",
      "Sugar Free": "Sugar-Free Dessert",
    };

    const category =
      categoryMap[product.category] || product.category;

    return `${product.name} ${category} at Cream Bite, Bangalore`;
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-32 overflow-hidden sm:h-56 lg:h-64">
        <Image
          src={product.image}
          alt={getAltText()}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}
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
          className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow-lg transition hover:scale-110 sm:right-4 sm:top-4 sm:p-2"
        >
          <Heart
            size={18}
            className={
              isWishlisted(product.id)
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }
          />
        </button>

        {/* Bestseller */}
        {product.bestseller && (
          <span className="absolute left-2 top-2 rounded-full bg-orange-600 px-2 py-0.5 text-[10px] font-semibold text-white shadow sm:left-4 sm:top-4 sm:px-4 sm:py-1 sm:text-xs">
            🔥 Bestseller
          </span>
        )}
      </div>

      {/* Sugar Free */}
      {product.category === "Sugar Free" && (
        <span className="absolute bottom-2 left-2 rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-semibold text-white shadow sm:bottom-4 sm:left-4 sm:px-4 sm:py-1 sm:text-xs">
          🌿 Sugar Free
        </span>
      )}

      {/* Details */}
      <div className="p-2 sm:p-5 lg:p-6">

        <h3 className="line-clamp-2 text-sm font-bold leading-tight sm:text-xl lg:text-2xl">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-[11px] text-gray-500 sm:mt-2 sm:text-base">
          {product.description}
        </p>

        <div className="mt-3 space-y-2 sm:mt-6 sm:space-y-3">

          {product.prices.map((price) => (
            <div
              key={price.label}
              className="flex items-center justify-between rounded-lg bg-pink-50 px-2 py-2 sm:rounded-xl sm:px-4 sm:py-3"
            >

              <div>
                <p className="text-xs font-semibold sm:text-base">
                  {price.label}
                </p>

                <p className="text-sm font-bold text-pink-600 sm:text-lg">
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
                className="rounded-lg bg-pink-600 px-2 py-1 text-[11px] font-semibold text-white transition hover:bg-pink-700 sm:rounded-xl sm:px-5 sm:py-2 sm:text-sm"
              >
                + Add
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}