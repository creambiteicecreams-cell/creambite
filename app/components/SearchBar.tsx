"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  search: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({
  search,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="mx-auto mb-8 max-w-3xl">
      <div className="relative">
        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-500"
          size={22}
        />

        <input
          type="text"
          placeholder="Search your favourite dessert..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-full border border-pink-200 bg-white py-4 pl-14 pr-6 text-lg shadow-lg outline-none transition-all duration-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
        />
      </div>
    </div>
  );
}