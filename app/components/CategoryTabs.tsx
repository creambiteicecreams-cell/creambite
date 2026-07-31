"use client";

import { categories } from "../data/menu";
import { useEffect, useRef } from "react";

interface CategoryTabsProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryTabs({
  selected,
  onSelect,
}: CategoryTabsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeChip = chipRefs.current[selected];

    if (!container || !activeChip) return;

    const containerWidth = container.offsetWidth;
    const chipLeft = activeChip.offsetLeft;
    const chipWidth = activeChip.offsetWidth;

    container.scrollTo({
      left: chipLeft - containerWidth / 2 + chipWidth / 2,
      behavior: "smooth",
    });
  }, [selected]);

  return (
    <div className="sticky top-20 z-20 mb-8 bg-white/95 backdrop-blur-md py-3">

      <div
        ref={scrollContainerRef}
        className="
          flex
          gap-3
          overflow-x-auto
          whitespace-nowrap
          px-1
          pb-2
          snap-x
          snap-mandatory
          scroll-smooth
          scrollbar-hide
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <button
          ref={(el) => {
            chipRefs.current["All"] = el;
          }}
          onClick={() => onSelect("All")}
          className={`
            snap-start
            shrink-0
            rounded-full
            px-5
            py-2.5
            text-sm
            font-semibold
            transition-all
            duration-300
            ${
              selected === "All"
                ? "bg-pink-600 text-white shadow-lg shadow-pink-300 scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
            }
          `}
        >
          🍽️ All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            ref={(el) => {
              chipRefs.current[category] = el;
            }}
            onClick={() => onSelect(category)}
            className={`
              snap-start
              shrink-0
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300
              ${
                selected === category
                  ? "bg-pink-600 text-white shadow-lg shadow-pink-300 scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

    </div>
  );
}