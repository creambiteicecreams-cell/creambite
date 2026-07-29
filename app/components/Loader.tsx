"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF8F2] via-[#FFF4EB] to-[#FBE7D8]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="text-7xl"
          >
            🍦
          </motion.div>

          <motion.h1
            className="mt-6 text-5xl font-extrabold text-[#4A2B24]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Cream Bite
          </motion.h1>

          <motion.p
            className="mt-3 text-gray-600 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Delight in Every Bite
          </motion.p>

          <motion.div
            className="mt-10 h-2 w-64 overflow-hidden rounded-full bg-gray-200"
          >
            <motion.div
              className="h-full bg-[#4A2B24]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}