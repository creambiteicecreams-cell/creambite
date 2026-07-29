"use client";

import { ShoppingCart, MessageCircle, MapPin } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">

      {/* Explore Menu */}
      <a
        href="#menu"
        className="flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-pink-700"
      >
        <ShoppingCart size={18} />
        Explore Menu
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917975124421"
        target="_blank"
        className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>

      {/* Visit Shop */}
      <a
        href="#visit"
        className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-amber-600"
      >
        <MapPin size={18} />
        Visit Shop
      </a>

    </div>
  );
}