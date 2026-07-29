"use client";

import { useState } from "react";
import Image from "next/image";

const menuData = {
  IceCreams: [
    {
      name: "Vanilla",
      image: "/images/hero.jpg",
      price: "₹65",
      desc: "Classic creamy vanilla.",
    },
    {
      name: "Chocolate",
      image: "/images/dbc-sundae.jpg",
      price: "₹65",
      desc: "Rich premium chocolate.",
    },
    {
      name: "Kesar Pista",
      image: "/images/kesar-pista.jpg",
      price: "₹65",
      desc: "Royal saffron & pistachio.",
    },
  ],

  Waffles: [
    {
      name: "Chocolate Overload",
      image: "/images/hero.jpg",
      price: "₹180",
      desc: "Loaded with rich chocolate.",
    },
  ],

  Sundaes: [
    {
      name: "Death By Chocolate",
      image: "/images/dbc-sundae.jpg",
      price: "₹180",
      desc: "Our signature bestseller.",
    },
  ],

  SugarFree: [
    {
      name: "Sugar-Free Waffle",
      image: "/images/hero.jpg",
      price: "₹220",
      desc: "No added sugar. Full of flavour.",
    },
  ],
};

export default function Menu() {
  const [active, setActive] =
    useState<keyof typeof menuData>("IceCreams");

  return (
    <section className="py-24 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-amber-600 font-semibold">
            Explore Menu
          </p>

          <h2 className="text-5xl font-bold text-[#4A2B24] mt-4">
            Our Signature Collection
          </h2>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mt-12">
          {Object.keys(menuData).map((item) => (
            <button
              key={item}
              onClick={() =>
                setActive(item as keyof typeof menuData)
              }
              className={`px-6 py-3 rounded-full transition font-semibold ${
                active === item
                  ? "bg-[#4A2B24] text-white"
                  : "bg-white shadow hover:bg-[#4A2B24] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {menuData[active].map((dessert) => (
            <div
              key={dessert.name}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <Image
                src={dessert.image}
                alt={dessert.name}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#4A2B24]">
                  {dessert.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {dessert.desc}
                </p>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    {dessert.price}
                  </span>

                  <span className="bg-[#4A2B24] text-white px-4 py-2 rounded-full">
                    Signature
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}