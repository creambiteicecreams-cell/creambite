"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createProduct(
  prevState: { success: boolean; message: string },
  formData: FormData
) {  const supabase = await createClient();

  const name = String(formData.get("name") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const subcategory = String(formData.get("subcategory") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  const price = Number(formData.get("price") ?? 0);

  const is_available = formData.get("is_available") === "on";
  const is_featured = formData.get("is_featured") === "on";
  const is_sugar_free = formData.get("is_sugar_free") === "on";

  if (!name) {
    return {
      success: false,
      message: "Product name is required.",
    };
  }

  if (!category) {
    return {
      success: false,
      message: "Category is required.",
    };
  }

  if (price <= 0) {
    return {
      success: false,
      message: "Price must be greater than zero.",
    };
  }

  const { error } = await supabase.from("products").insert({
    name,
    category,
    subcategory: subcategory || null,
    description: description || null,
    price,
    is_available,
    is_featured,
    is_sugar_free,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/admin/products");

  return {
    success: true,
    message: "Product added successfully.",
  };
}