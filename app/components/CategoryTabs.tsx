"use client";

import { categories } from "../data/menu";

interface CategoryTabsProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryTabs({
  selected,
  onSelect,
}: CategoryTabsProps) {
  return (
    <div className="sticky top-20 z-20 bg-white py-4 mb-8">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">

        <button
          onClick={() => onSelect("All")}
          className={`px-5 py-2 rounded-full whitespace-nowrap transition
          ${
            selected === "All"
              ? "bg-pink-600 text-white"
              : "bg-gray-100 hover:bg-pink-100"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-5 py-2 rounded-full whitespace-nowrap transition
            ${
              selected === category
                ? "bg-pink-600 text-white"
                : "bg-gray-100 hover:bg-pink-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}