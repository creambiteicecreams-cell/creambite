"use client";

import { createProduct } from "@/app/admin/products/actions";
import { useActionState } from "react";

const initialState = {
  success: false,
  message: "",
};

export default function ProductForm() {
  const [state, formAction, pending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form action={formAction} className="space-y-5">

      <div>
        <label className="mb-2 block font-medium">
          Product Name
        </label>

        <input
          name="name"
          required
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Category
        </label>

        <select
          name="category"
          required
          className="w-full rounded-xl border px-4 py-3"
          defaultValue=""
        >
          <option value="" disabled>
            Select Category
          </option>

          <option>Ice Cream</option>
          <option>Waffles</option>
          <option>Chocolate Bowls</option>
          <option>Thick Shakes</option>
          <option>Cream Buns</option>
          <option>Sundaes</option>
          <option>Sugar Free</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Subcategory
        </label>

        <input
          name="subcategory"
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Price (₹)
        </label>

        <input
          type="number"
          step="0.01"
          name="price"
          required
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          name="description"
          rows={4}
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div className="space-y-3">

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="is_available"
            defaultChecked
          />

          Available
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="is_featured"
          />

          Featured Product
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="is_sugar_free"
          />

          Sugar Free
        </label>

      </div>

      {state.message && (
        <div
          className={`rounded-lg p-3 ${
            state.success
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700 disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save Product"}
      </button>

    </form>
  );
}