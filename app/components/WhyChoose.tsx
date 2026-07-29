export default function WhyChoose() {
  const features = [
    {
      icon: "🍨",
      title: "Premium Ingredients",
      description:
        "Every dessert is prepared using carefully selected premium ingredients.",
    },
    {
      icon: "🌿",
      title: "Sugar-Free Options",
      description:
        "Enjoy delicious desserts with no added sugar options for health-conscious customers.",
    },
    {
      icon: "⭐",
      title: "Freshly Made",
      description:
        "Our waffles and desserts are freshly prepared when you order.",
    },
    {
      icon: "😊",
      title: "Family Friendly",
      description:
        "A perfect destination for families, kids and dessert lovers.",
    },
  ];

  return (
    <section className="py-24 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#4A2B24]">
            Why Choose Cream Bite?
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            More than desserts — we create memorable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <div className="text-6xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#4A2B24]">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}