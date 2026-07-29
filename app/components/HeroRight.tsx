"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-100 blur-3xl opacity-70" />

      {/* Dessert Image */}
      <div className="relative z-10">
        <Image
          src="/images/hero.jpg"
          alt="Cream Bite Dessert"
          width={470}
          height={470}
          priority
          className="rounded-[30px] shadow-2xl object-cover"
        />

        {/* Rating */}
        <div className="absolute -left-8 top-10 rounded-2xl bg-white px-5 py-4 shadow-xl">
          <div className="text-2xl font-bold text-yellow-500">⭐ 4.9</div>
          <p className="text-sm text-gray-500">Customer Rating</p>
        </div>

        {/* Sugar Free */}
        <div className="absolute -right-6 bottom-10 rounded-2xl bg-green-600 px-5 py-4 font-semibold text-white shadow-xl">
          🌿 Sugar-Free
        </div>
      </div>
    </motion.div>
  );
}