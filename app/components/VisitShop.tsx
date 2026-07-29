import Image from "next/image";

export default function VisitShop() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF8F2] to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Shop Image */}
          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/Shop.jpg"
              alt="Cream Bite Ice Cream Parlour"
              width={900}
              height={700}
              priority
              className="w-full h-auto object-cover hover:scale-110 transition-all duration-700"
            />
          </div>

          {/* Shop Details */}
          <div>

            <span className="inline-block bg-pink-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg">
              📍 Visit Cream Bite
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-[#4A2B24] leading-tight">
              Your Sweet Destination in Bengaluru
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-8">
              Discover handcrafted ice creams, premium Belgian waffles,
              signature chocolate bowls, thick shakes, cream buns and our
              exclusive sugar-free desserts. Whether you're visiting with
              family or friends, Cream Bite is the perfect place to satisfy
              every craving.
            </p>

            {/* Feature Cards */}

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
                🍦
                <h4 className="font-bold mt-3 text-[#4A2B24]">
                  Premium Ice Creams
                </h4>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
                🧇
                <h4 className="font-bold mt-3 text-[#4A2B24]">
                  Belgian Waffles
                </h4>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
                🍫
                <h4 className="font-bold mt-3 text-[#4A2B24]">
                  Chocolate Bowls
                </h4>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
                🌿
                <h4 className="font-bold mt-3 text-[#4A2B24]">
                  Sugar-Free Desserts
                </h4>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
                🥤
                <h4 className="font-bold mt-3 text-[#4A2B24]">
                  Thick Shakes
                </h4>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
                👨‍👩‍👧
                <h4 className="font-bold mt-3 text-[#4A2B24]">
                  Family Friendly
                </h4>
              </div>

            </div>

            {/* Store Info */}

            <div className="mt-10 bg-[#FFF4EB] border border-orange-100 rounded-3xl p-6 shadow-lg">

              <h3 className="text-2xl font-bold text-[#4A2B24]">
                🍦 Cream Bite
              </h3>

              <div className="mt-5 space-y-3 text-gray-700">

                <p>
                  📍 Sai Sumukha Sterling,
                  <br />
                  Vishvamanava Kuvempu Main Road,
                  <br />
                  Dasarahalli,
                  <br />
                  Bengaluru – 560024
                </p>

                <p>
                  🕒 Open Every Day
                  <br />
                  <span className="font-semibold text-pink-600">
                    11:00 AM – 11:00 PM
                  </span>
                </p>

                <p>📞 +91 79751 24421</p>

                <p>📞 +91 96325 63132</p>

                <p>📧 creambiteicecreams@gmail.com</p>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://maps.app.goo.gl/foY2Db6JF4iSUuSH8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold transition shadow-lg"
              >
                📍 Get Directions
              </a>

              <a
                href="https://wa.me/917975124421?text=Hi%20Cream%20Bite!%20I'd%20like%20to%20visit%20your%20shop."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition shadow-lg"
              >
                💬 WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}