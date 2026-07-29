import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Product } from "@/app/types/product";
import ProductsManager from "@/app/admin/components/ProductsManager";

export default async function ProductsPage() {
  const supabase = await createClient();

  // Protect the page
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // Fetch products
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("display_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <h2 className="text-lg font-semibold text-red-700">
          Failed to load products
        </h2>

        <p className="mt-2 text-red-600">
          {error.message}
        </p>
      </div>
    );
  }

  const productList = (products ?? []) as Product[];

  return (
    <div className="space-y-6">
      <ProductsManager products={productList} />
    </div>
  );
}