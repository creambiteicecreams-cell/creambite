"use client";

import { Product } from "@/app/types/product";
type ProductsTableProps = {
  products: Product[];
};

export default function ProductsTable({
  products,
}: ProductsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Price</th>
            <th className="px-6 py-4 text-left">Available</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="py-16 text-center text-gray-500"
              >
                No products added yet.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr
                key={product.id}
                onClick={() => console.log(product)}
                className="cursor-pointer border-t hover:bg-pink-50 transition-colors"
              >
                <td className="px-6 py-4 font-medium">
                  {product.name}
                </td>

                <td className="px-6 py-4">
                  {product.category}
                </td>

                <td className="px-6 py-4">
                  ₹{product.price}
                </td>

                <td className="px-6 py-4">
                  {product.is_available ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                      Available
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                      Unavailable
                    </span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}