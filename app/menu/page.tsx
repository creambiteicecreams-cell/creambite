import { createClient } from "@/lib/supabase/server";

export default async function MenuPage() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_available", true)
    .order("category")
    .order("display_order")
    .order("name");

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-bold text-red-600">
          Failed to load menu
        </h1>

        <p className="mt-2 text-gray-600">
          {error.message}
        </p>
      </div>
    );
  }

  const categories = [
  "Ice Cream",
  "Belgium Waffles",
  "Sundaes",
  "Chocolate Bowl Cake",
  "Thick Shakes",
  "Cream Buns",
  "Sugar Free",
];

  return (
    <main className="bg-pink-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-pink-600">
            Our Menu
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Delight in Every Bite 🍨
          </p>
        </div>

        {categories.map((category) => {
          const items =
            products?.filter(
              (product) => product.category === category
            ) || [];

          if (items.length === 0) return null;

          return (
            <section
              key={category}
              className="mb-14"
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900 border-b-4 border-pink-500 inline-block pb-2">
                {category}
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">
                          {product.name}
                        </h3>

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

                    <div className="mt-4 flex gap-2 flex-wrap">

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