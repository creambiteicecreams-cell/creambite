"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const specials = [
  {
    title: "Death By Chocolate",
    image: "/images/dbc.png",
    description: "Rich chocolate dessert loaded with premium toppings.",
  },
  {
    title: "Kesar Pista Royal",
    image: "/images/CBC.png",
    description: "Royal saffron and pista ice cream with dry fruits.",
  },
  {
    title: "Belgian Waffle",
    image: "/images/bf.png",
    description: "Freshly baked waffle served with delicious toppings.",
  },
  {
    title: "Sugar-Free Chocolate Bowl",
    image: "/images/hero.png",
    description: "A guilt-free dessert for chocolate lovers.",
  },
];

export default function Specials() {
  return (
    <motion.section
  className="py-20 bg-white"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-[#4A2B24]">
          Signature Specials
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Discover our most loved desserts.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {specials.map((item) => (
            <div
              key={item.title}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 cursor-pointer"            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#4A2B24]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>

                <button className="mt-6 bg-[#4A2B24] text-white px-6 py-3 rounded-full hover:bg-[#603c34]">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}