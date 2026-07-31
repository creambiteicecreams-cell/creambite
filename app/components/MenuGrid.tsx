"use client";

import { useRef } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../data/menu";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MenuGridProps {
  products: Product[];
}

export default function MenuGrid({ products }: MenuGridProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          No products found
        </h2>

        <p className="mt-2 text-gray-500">
          Try another category or search.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">

      {/* Desktop Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/95 p-3 shadow-xl transition hover:scale-110 hover:bg-pink-600 hover:text-white lg:flex"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Desktop Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/95 p-3 shadow-xl transition hover:scale-110 hover:bg-pink-600 hover:text-white lg:flex"
      >
        <ChevronRight size={24} />
      </button>

      {/* Product Slider */}
      <div
        ref={sliderRef}
        className="
          flex
          gap-5
          overflow-x-auto
          snap-x
          snap-mandatory
          scroll-smooth
          pb-4
          px-2
          scrollbar-hide
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="
              snap-start
              shrink-0
              w-[190px]
              lg:w-[260px]
            "
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}