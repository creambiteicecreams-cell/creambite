import Image from "next/image";

const galleryImages = [
  "/images/hero.png",
   "/images/Shop.png",
  "/images/bf.png",
  "/images/dbc.png",
  "/images/gj.png",
  "/images/CBC.png",
  "/images/fd.png",
  
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-amber-600 font-semibold uppercase tracking-widest">
            Gallery
          </p>

          <h2 className="text-5xl font-bold text-[#4A2B24] mt-4">
            A Feast For Your Eyes
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Every dessert is handcrafted with love and served fresh for an unforgettable experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={600}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}