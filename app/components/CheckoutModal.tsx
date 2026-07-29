"use client";

import { useEffect, useState } from "react";
import { CustomerInfo } from "@/app/types/customer";
import { loadCustomer, saveCustomer } from "@/lib/storage";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (customer: CustomerInfo) => void;
}

export default function CheckoutModal({
  open,
  onClose,
  onConfirm,
}: CheckoutModalProps) {
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: "",
    phone: "",
    orderType: "Pickup",
    address: "",
  });

  useEffect(() => {
    const saved = loadCustomer();

    if (saved) {
      setCustomer(saved);
    }
  }, []);

  if (!open) return null;

  const handleContinue = () => {
    if (!customer.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(customer.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (
      customer.orderType === "Delivery" &&
      !customer.address.trim()
    ) {
      alert("Please enter your delivery address.");
      return;
    }

    saveCustomer(customer);
    onConfirm(customer);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

        <h2 className="mb-6 text-3xl font-bold text-center">
          🍨 Complete Your Order
        </h2>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <input
              value={customer.name}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  name: e.target.value,
                })
              }
              className="w-full rounded-xl border p-3 outline-none focus:border-pink-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Mobile Number
            </label>

            <input
              value={customer.phone}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  phone: e.target.value,
                })
              }
              className="w-full rounded-xl border p-3 outline-none focus:border-pink-500"
              placeholder="9876543210"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Order Type
            </label>

            <select
              value={customer.orderType}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  orderType: e.target.value as "Pickup" | "Delivery",
                })
              }
              className="w-full rounded-xl border p-3"
            >
              <option>Pickup</option>
              <option>Delivery</option>
            </select>
          </div>

          {customer.orderType === "Delivery" && (
            <div>
              <label className="mb-2 block font-medium">
                Delivery Address
              </label>

              <textarea
                rows={3}
                value={customer.address}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    address: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-3 outline-none focus:border-pink-500"
                placeholder="Enter your complete address"
              />
            </div>
          )}

        </div>

        <div className="mt-8 flex gap-3">

          <button
            onClick={onClose}
            className="flex-1 rounded-xl border py-3 font-semibold"
          >
            Cancel
          </button>

          <button
            onClick={handleContinue}
            className="flex-1 rounded-xl bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Continue →
          </button>

        </div>

      </div>
    </div>
  );
}