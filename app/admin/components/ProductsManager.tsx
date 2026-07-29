"use client";

import { useState } from "react";
import { Product } from "@/app/types/product";
import ProductDrawer from "./ProductDrawer";
import ProductsTable from "./ProductsTable";

type Props = {
  products: Product[];
};

export default function ProductsManager({
  products,
}: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-pink-600">
            Products
          </h1>

          <p className="mt-1 text-gray-500">
            Manage all Cream Bite products
          </p>
        </div>

        <ProductDrawer
          open={drawerOpen}
          onOpen={() => setDrawerOpen(true)}
          onClose={() => setDrawerOpen(false)}
        />
      </div>

      <ProductsTable
        products={products}
      />
    </>
  );
}