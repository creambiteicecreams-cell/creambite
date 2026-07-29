import Image from "next/image";

export default function SugarFree() {
  return (
    <section className="py-24 bg-[#EAF8ED]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🌿 Sugar-Free Collection
            </span>

            <h2 className="mt-6 text-5xl font-bold text-[#2E4D32]">
              Guilt-Free Indulgence
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-8">
              Enjoy delicious desserts crafted with no added sugar options.
              Perfect for people looking to reduce sugar while still enjoying
              rich flavours.
            </p>

            <div className="mt-8 space-y-4">

              <div>✅ Sugar-Free Belgian Waffles</div>
              <div>✅ Sugar-Free Chocolate Bowl</div>
              <div>✅ Sugar-Free White Chocolate Spread</div>
              <div>✅ Vegan Friendly Options</div>

            </div>

            <button className="mt-10 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full shadow-lg transition">
              Explore Sugar-Free Menu
            </button>

          </div>

          {/* Right */}
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Sugar-Free Desserts"
              width={900}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}