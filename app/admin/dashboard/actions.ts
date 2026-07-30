"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function updateOrderStatus(
  orderId: string,
  status: string
) {
  console.log("Updating:", orderId, status);

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", orderId)
    .select();

  console.log("Updated Data:", data);
  console.log("Supabase Error:", error);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/admin/dashboard", "page");

  return {
    success: true,
    message: "Updated successfully",
  };
}