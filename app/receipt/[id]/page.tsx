import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AutoPrint from "./AutoPrint";
import "./receipt.css";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

type OrderItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export default async function ReceiptPage({ params }: Props) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: order, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !order) {
    notFound();
  }

  const items: OrderItem[] = Array.isArray(order.items)
    ? (order.items as OrderItem[])
    : [];

  const formattedDate = new Date(order.created_at).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center p-8">
      <AutoPrint />

      <div className="receipt-print w-[58mm] bg-white p-3 text-[13px]">
        <h1 className="text-center text-2xl font-bold">
          CREAM BITE
        </h1>

        <p className="text-center">
          Delight in Every Bite
        </p>

        <hr className="my-3 border-dashed" />

        <p>
          <strong>Order ID:</strong>
          <br />
          {order.id}
        </p>

        <p className="mt-2">
          <strong>Date:</strong> {formattedDate}
        </p>

        <p>
          <strong>Customer:</strong> {order.customer_name}
        </p>

        <p>
          <strong>Phone:</strong> {order.phone || "-"}
        </p>

        <p>
          <strong>Order Type:</strong> {order.ordertype || "-"}
        </p>

        <hr className="my-3 border-dashed" />

        <h2 className="font-bold mb-2">
          Items
        </h2>

        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="mb-2"
            >
              <div className="font-medium">
                {item.name}
              </div>

              <div className="flex justify-between text-[13px]">
                <span>
                  {item.quantity} × ₹{item.price}
                </span>

                <span>
                  ₹{item.quantity * item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-3 border-dashed" />

        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{order.total_items}</span>
          </div>

          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>₹{order.sub_total}</span>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <span>₹{order.discount}</span>
          </div>

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{order.total}</span>
          </div>
        </div>

        <hr className="my-3 border-dashed" />

        <p>
          <strong>Coupon:</strong> {order.coupon_code || "-"}
        </p>

        <p>
          <strong>Notes:</strong> {order.notes || "-"}
        </p>

        <p>
          <strong>Status:</strong> {order.status}
        </p>

        <hr className="my-3 border-dashed" />

        <p className="text-center font-bold">
          ❤️ Thank You ❤️
        </p>

        <p className="text-center">
          Visit Again
        </p>

        <p className="mt-2 text-center text-xs">
          www.creambite.in
        </p>
      </div>
    </main>
  );
}