import { createClient } from "@/lib/supabase/server";

export default async function MenuPage() {
  const supabase = await createClient();

 const { data: products, error } = await supabase
  .from("products")
  .select("*");

console.log("Products:", products?.length);
console.log("Error:", error);

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-bold text-red-600">
          Failed to load menu
        </h1>

        <p className="mt-2 text-gray-600">{error.message}</p>
      </div>
    );
  }

  const categories = [...new Set(products?.map((p) => p.category) || [])];

  return (
    <main className="min-h-screen bg-pink-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-pink-600">Our Menu</h1>

          <p className="mt-4 text-lg text-gray-600">
            Delight in Every Bite 🍨
          </p>
        </div>

        {categories.map((category) => {
          const items =
            products?.filter((product) => product.category === category) ?? [];

          return (
            <section key={category} className="mb-14">
              <h2 className="mb-6 inline-block border-b-4 border-pink-500 pb-2 text-3xl font-bold text-gray-900">
                {category}
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{product.name}</h3>

                        {product.description && (
                          <p className="mt-2 text-sm text-gray-500">
                            {product.description}
                          </p>
                        )}
                      </div>

                      <span className="text-2xl font-bold text-pink-600">
                        ₹{product.price}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.is_sugar_free && (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                          Sugar Free
                        </span>
                      )}

                      {product.is_featured && (
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                          Bestseller
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}