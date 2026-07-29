"use client";

import { useTransition } from "react";
import { updateOrderStatus } from "./actions";

interface Props {
  orderId: string;
  currentStatus: string;
}

export default function OrderStatusButtons({
  orderId,
  currentStatus,
}: Props) {
  const [isPending, startTransition] = useTransition();

  const statuses = [
    "Pending",
    "Accepted",
    "Preparing",
    "Ready",
    "Completed",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => (
        <button
          key={status}
          disabled={isPending || currentStatus === status}
          onClick={() =>
            startTransition(async () => {
              await updateOrderStatus(orderId, status);
            })
          }
          className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
            currentStatus === status
              ? "bg-pink-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}