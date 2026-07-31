"use client";

import ProductCard from "./ProductCard";
import { Product } from "../data/menu";

interface MenuGridProps {
  products: Product[];
}

export default function MenuGrid({ products }: MenuGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-600">
          No products found
        </h2>
        <p className="text-gray-500 mt-2">
          Try another category or search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {products.map((product) => (
        <div key={product.id} className="h-full">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}