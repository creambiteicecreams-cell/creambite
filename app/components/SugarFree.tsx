"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
export default function SugarFree() {
  const router = useRouter();

  const handleExplore = () => {
    router.push("/?category=Sugar%20Free");

    setTimeout(() => {
      document.getElementById("menu")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };
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

            <button
  onClick={handleExplore}
  className="mt-10 rounded-full bg-green-700 px-8 py-4 text-white shadow-lg transition hover:bg-green-800"
>
  Explore Sugar-Free Menu
</button>
          </div>

          {/* Right */}
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src="/images/hero.png"
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