"use client";

import { useState } from "react";
import { products } from "../data/menu";
import MenuGrid from "./MenuGrid";
import CategoryTabs from "./CategoryTabs";
import SearchBar from "./SearchBar";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section
      id="menu"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
<div className="mb-12 text-center">
  <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
    Our Signature Desserts
  </span>

  <h2 className="mt-4 text-5xl font-extrabold text-[#4E342E]">
    Explore Our Menu
  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
    Freshly prepared waffles, handcrafted sundaes, premium ice creams,
    chocolate bowls, thick shakes, cream buns, and our exclusive sugar-free range.
  </p>
</div>
      <SearchBar
        search={search}
        onSearch={setSearch}
      />

      <CategoryTabs
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <MenuGrid products={filteredProducts} />
    </section>
  );
}