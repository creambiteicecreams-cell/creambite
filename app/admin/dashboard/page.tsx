import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import OrderStatusButtons from "./OrderStatusButtons";
import NewOrderNotifier from "./NewOrderNotifier";
import OrderRealtimeListener from "./OrderRealtimeListener";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
          <NewOrderNotifier />
        <OrderRealtimeListener />
      <div className="mx-auto max-w-7xl">
      

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-pink-600">
              🍦 Cream Bite Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              Welcome, {user.email}
            </p>
          </div>

          <div className="rounded-xl bg-pink-600 px-6 py-4 text-white shadow">
            <p className="text-sm">Total Orders</p>
            <h2 className="text-3xl font-bold">
              {orders?.length ?? 0}
            </h2>
          </div>
        </div>

        {/* Error */}

        {error && (
          <div className="mb-6 rounded-xl bg-red-100 p-4 text-red-700">
            {error.message}
          </div>
        )}

        {/* Orders */}

        <div className="rounded-2xl bg-white shadow">

          <div className="border-b px-6 py-5">
            <h2 className="text-2xl font-bold">
              Recent Orders
            </h2>
          </div>

          {!orders || orders.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              No Orders Yet
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="min-w-full">

                <thead className="bg-pink-50">

                  <tr>

                    <th className="px-6 py-4 text-left">
                      Customer
                    </th>

                    <th className="px-6 py-4 text-left">
                      Phone
                    </th>

                    <th className="px-6 py-4 text-left">
                      Order Type
                    </th>

                    <th className="px-6 py-4 text-left">
                      Total
                    </th>

                    <th className="px-6 py-4 text-left">
                      Status
                    </th>

                    <th className="px-6 py-4 text-left">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left">
  Actions
</th>

                  </tr>

                </thead>

                <tbody>

                  {orders.map((order) => (

                    <tr
                      key={order.id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="px-6 py-4 font-medium">
                        {order.customer_name}
                      </td>

                      <td className="px-6 py-4">
                        {order.customer_phone}
                      </td>

                      <td className="px-6 py-4">
                        {order.order_type}
                      </td>

                      <td className="px-6 py-4 font-semibold text-pink-600">
                        ₹{order.total}
                      </td>

<td className="px-6 py-4">
  <div className="space-y-2">
    <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
      {order.status}
    </span>

    <OrderStatusButtons
      orderId={order.id}
      currentStatus={order.status}
    />
  </div>
</td>
                      <td className="px-6 py-4">
                        {new Date(order.created_at).toLocaleString("en-IN")}
                      </td>
                      <td className="px-6 py-4">
  <a
href={`/receipt/${order.id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
  >
    🖨️ Print Receipt
  </a>
</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>
    </main>
  );
}