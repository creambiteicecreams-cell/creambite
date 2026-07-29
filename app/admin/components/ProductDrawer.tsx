"use client";

import { X } from "lucide-react";
import ProductForm from "./ProductForm";

type ProductDrawerProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function ProductDrawer({
  open,
  onOpen,
  onClose,
}: ProductDrawerProps) {
  return (
    <>
      <button
        onClick={onOpen}
        className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700"
      >
        + Add Product
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          <div className="flex h-full w-full max-w-lg flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b p-6">
              <h2 className="text-2xl font-bold">
                Add Product
              </h2>

              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <ProductForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}