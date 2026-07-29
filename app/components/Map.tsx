"use client";

import { motion } from "framer-motion";

export default function Map() {
  return (
    <section
      id="location"
      className="py-24 bg-gradient-to-b from-[#FFF8F2] via-white to-[#FFF4EB]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-pink-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg">
            📍 Find Us
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-[#4A2B24]">
            Visit Cream Bite Today
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Serving happiness one scoop at a time! Visit Cream Bite for
            handcrafted ice creams, Belgian waffles, signature chocolate bowls,
            thick shakes and delicious sugar-free desserts.
          </p>

          <p className="mt-3 text-pink-600 font-semibold">
            🍦 Delight in Every Bite
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Google Map */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[30px] shadow-2xl border border-pink-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.681873808096!2d77.60826537444527!3d13.055910287267215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17722e148ad5%3A0x940c86c22ec6cfb4!2sCream%20Bite!5e0!3m2!1sen!2sin!4v1785000414710!5m2!1sen!2sin"
              width="100%"
              height="550"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </motion.div>

          {/* Details */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-[30px] shadow-2xl p-10">

              <h3 className="text-4xl font-bold text-[#4A2B24]">
                🍦 Cream Bite
              </h3>

              <p className="mt-2 text-pink-600 font-semibold">
                Delight in Every Bite
              </p>

              <div className="mt-8 space-y-5 text-gray-700">

                <p>
                  <span className="font-semibold">📍 Address</span>
                  <br />
                  Sai Sumukha Sterling
                  <br />
                  Vishvamanava Kuvempu Main Road
                  <br />
                  Dasarahalli
                  <br />
                  Bengaluru – 560024
                </p>

                <p>
                  <span className="font-semibold">🕒 Opening Hours</span>
                  <br />
                  Monday – Sunday
                  <br />
                  <span className="text-pink-600 font-bold">
                    11:00 AM – 11:00 PM
                  </span>
                </p>

                <p>
                  <span className="font-semibold">📞 Call Us</span>
                  <br />
                  +91 79751 24421
                  <br />
                  +91 96325 63132
                </p>

                <p>
                  <span className="font-semibold">📧 Email</span>
                  <br />
                  creambiteicecreams@gmail.com
                </p>

                <p>
                  <span className="font-semibold">📷 Instagram</span>
                  <br />
                  @creambite_cream
                </p>

              </div>

              {/* Highlights */}

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="bg-[#FFF4EB] rounded-xl p-4 text-center font-semibold">
                  🍦 Ice Creams
                </div>

                <div className="bg-[#FFF4EB] rounded-xl p-4 text-center font-semibold">
                  🧇 Waffles
                </div>

                <div className="bg-[#FFF4EB] rounded-xl p-4 text-center font-semibold">
                  🍫 Chocolate Bowls
                </div>

                <div className="bg-[#FFF4EB] rounded-xl p-4 text-center font-semibold">
                  🌿 Sugar-Free
                </div>

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                <a
                  href="https://maps.app.goo.gl/foY2Db6JF4iSUuSH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold transition shadow-lg"
                >
                  📍 Get Directions
                </a>

                <a
                  href="https://wa.me/917975124421?text=Hi%20Cream%20Bite!%20I'd%20like%20to%20know%20more%20about%20your%20desserts."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition shadow-lg"
                >
                  💬 WhatsApp
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}