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

  let nextStatus = "";
  let buttonText = "";

  switch (currentStatus.toLowerCase()) {
    case "pending":
      nextStatus = "Accepted";
      buttonText = "Accept Order";
      break;

    case "accepted":
      nextStatus = "Preparing";
      buttonText = "Start Preparing";
      break;

    case "preparing":
      nextStatus = "Ready";
      buttonText = "Mark Ready";
      break;

    case "ready":
      nextStatus = "Completed";
      buttonText = "Complete Order";
      break;

    case "completed":
      return (
        <span className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white">
          ✅ Order Completed
        </span>
      );

    default:
      return null;
  }

  return (
    <button
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          try {
            const result = await updateOrderStatus(orderId, nextStatus);
            console.log(result);

            if (result?.success) {
              window.location.reload();
            } else {
              alert(result?.message ?? "Update failed");
            }
          } catch (err) {
            console.error(err);
            alert("Error updating order");
          }
        })
      }
      className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-700 disabled:opacity-50"
    >
      {isPending ? "Updating..." : buttonText}
    </button>
  );
}