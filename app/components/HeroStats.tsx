"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "20+",
    label: "Ice Cream Flavours",
  },
  {
    number: "100%",
    label: "Sugar-Free Options",
  },
  {
    number: "4.9★",
    label: "Customer Rating",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="grid grid-cols-3 gap-6 pt-4"
    >
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-pink-600">
            {item.number}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}