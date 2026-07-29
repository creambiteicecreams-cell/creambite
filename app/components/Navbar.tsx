"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Sugar Free", href: "#sugarfree" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <nav className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-white/60 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 py-5">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">

            <div className="text-5xl leading-none">
              🍦
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-[#3D1F16] leading-none">
                Cream Bite
              </h1>

              <p className="text-pink-500 font-medium mt-1">
                Delight in every bite
              </p>
            </div>

          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">

            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold text-lg transition ${
                  index === 0
                    ? "text-pink-500"
                    : "text-[#3D1F16] hover:text-pink-500"
                }`}
              >
                {link.name}
              </a>
            ))}

          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-8">

            <a
              href="#contact"
              className="flex items-center gap-3 rounded-full bg-[#4A2113] px-8 py-4 text-white font-semibold text-lg hover:scale-105 transition"
            >
              🛒 Order Now
            </a>

            <button className="text-4xl text-[#4A2113] hover:scale-110 transition">
              ☰
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-4xl text-[#4A2113]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-5 text-lg hover:bg-pink-50"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-5 bg-[#4A2113] text-white font-semibold"
            >
              Order Now
            </a>

          </div>
        )}

      </nav>
    </header>
  );
}