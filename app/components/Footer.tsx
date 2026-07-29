"use client";

export default function Footer() {
  return (
    <footer className="bg-[#2F1B16] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            🍦 Cream Bite
          </h2>

          <p className="mt-5 text-gray-300 leading-7">
            Handcrafted premium ice creams, Belgian waffles,
            chocolate bowls and India's finest sugar-free desserts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <a href="#home" className="hover:text-amber-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#menu" className="hover:text-amber-400 transition">
                Menu
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-amber-400 transition">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-amber-400 transition">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-3 text-gray-300">

            <p>
              📍 Cream Bite
            </p>

            <p>
              Sai Sumukh Sterling
            </p>

            <p>
              Viswamanava Kuvempu Main Road
            </p>

            <p>
              Dasarahalli, Bengaluru - 560024
            </p>

            <p>
              📞 +91 7975124421
            </p>

            <p>
              ✉️ creambiteicecreams@gmail.com
            </p>

          </div>
        </div>

        {/* Opening Hours */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Opening Hours
          </h3>

          <div className="space-y-3 text-gray-300">

            <p>Monday - Sunday</p>

            <p className="text-amber-400 font-semibold">
              11:00 AM – 11:00 PM
            </p>

            <a
              href="#contact"
              className="inline-block mt-5 bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-full font-semibold transition"
            >
              Visit Today
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-[#5A3A30] py-6">

        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Cream Bite. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}