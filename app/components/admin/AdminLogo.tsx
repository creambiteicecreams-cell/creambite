"use client";

import Link from "next/link";
import { IceCream2 } from "lucide-react";

export default function AdminLogo() {
  return (
    <Link
      href="/"
      className="flex flex-col items-center gap-3 select-none"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-emerald-500 shadow-xl">
        <IceCream2 className="h-10 w-10 text-white" />
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-wide text-pink-600">
          Cream Bite
        </h1>

        <p className="text-sm text-gray-500">
          Delight in Every Bite
        </p>

        <span className="mt-2 inline-block rounded-full bg-pink-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-pink-700">
          Admin Portal
        </span>
      </div>
    </Link>
  );
}