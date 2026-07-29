"use client";

import { motion } from "framer-motion";

export default function HeroBadges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
className="inline-flex items-center gap-3 rounded-full border border-amber-200 bg-gradient-to-r from-yellow-50 to-amber-100 px-5 py-3 shadow-lg"    >
<span className="text-xl text-amber-500">✨</span>
      <span className="font-semibold text-gray-700">
        Premium Ice Cream • Sugar-Free • Freshly Made
      </span>
    </motion.div>
  );
}