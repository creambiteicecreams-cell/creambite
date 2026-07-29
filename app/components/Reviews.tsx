export default function Reviews() {
  const reviews = [
    {
      name: "Priya S.",
      review:
        "Absolutely loved the Death By Chocolate! The ambience is beautiful and the service was excellent.",
    },
    {
      name: "Rahul M.",
      review:
        "The sugar-free waffle was amazing. It's great to finally have delicious dessert options without added sugar.",
    },
    {
      name: "Ananya K.",
      review:
        "Cream Bite has become my favourite dessert place. Everything tasted fresh and premium.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold tracking-widest uppercase">
            Customer Love
          </span>

          <h2 className="text-5xl font-bold text-[#4A2B24] mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Every smile, every compliment and every visit inspires us to serve
            even better desserts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#FFF8F2] rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-amber-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-700 leading-7 italic">
                "{review.review}"
              </p>

              <h3 className="mt-6 font-bold text-[#4A2B24]">
                — {review.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}