"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import HeroBadges from "./HeroBadges";

export default function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Badge */}
      <HeroBadges />

      {/* Heading */}
      <div className="space-y-5">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
          Delight in
          <br />
          <span className="bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Every Bite
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-8 text-gray-600">
          Premium ice creams, waffles, sundaes and our exclusive
          sugar-free desserts crafted for everyone to enjoy guilt-free.
        </p>
      </div>

      {/* Buttons */}
      <HeroButtons />

      {/* Stats */}
      <HeroStats />
    </motion.div>
  );
}