export default function Contact() {
  return (
    <section className="py-24 bg-[#4A2B24] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-amber-300 font-semibold">
            Visit Cream Bite
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Visit Cream Bite Today
          </h2>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Enjoy handcrafted ice creams, premium Belgian waffles,
signature chocolate bowls, thick shakes, cream buns and
our exclusive sugar-free desserts made with love.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="bg-[#5A352C] rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
              📍 Address
            </h3>

            <p className="font-semibold text-lg">Cream Bite</p>

<p className="mt-3">
Sai Sumukha Sterling
</p>

<p>
Vishvamanava Kuvempu Main Road
</p>

<p>
Dasarahalli
</p>

<p>
Bengaluru - 560024
</p>

<a
  href="https://maps.google.com/?q=Cream+Bite+Sai+Sumukha+Sterling+Dasarahalli+Bangalore"
  target="_blank"
  className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 px-5 py-3 rounded-full font-semibold transition"
>
📍 Get Directions
</a>

          </div>

          <div className="bg-[#5A352C] rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
              🕒 Opening Hours
            </h3>

            <p>Monday - Sunday</p>

            <p className="text-lg font-semibold">
Monday – Sunday
</p>

<p className="mt-3 text-amber-300 text-2xl font-bold">
11:00 AM – 11:00 PM
</p>

<p className="mt-5 text-gray-300">
Fresh ice creams, Belgian waffles, chocolate bowls,
thick shakes and sugar-free desserts served daily.
</p>
          </div>

          <div className="bg-[#5A352C] rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
              📞 Contact
            </h3>

            <a
href="tel:+917975124421"
className="block text-xl font-bold text-amber-300 hover:text-pink-400"
>
📞 +91 79751 24421
</a>

<a
href="tel:+919632563132"
className="block mt-3 text-xl font-bold text-amber-300 hover:text-pink-400"
>
📞 +91 96325 63132
</a>

<a
href="mailto:creambiteicecreams@gmail.com"
className="block mt-6 hover:text-pink-400"
>
📧 creambiteicecreams@gmail.com
</a>

<a
href="https://instagram.com/creambite_cream"
target="_blank"
className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-3 rounded-full font-semibold"
>
📷 Follow us on Instagram
</a>

<a
href="https://wa.me/917975124421?text=Hi%20Cream%20Bite!%20I'd%20like%20to%20know%20more%20about%20your%20menu."
target="_blank"
className="block mt-6 bg-green-500 hover:bg-green-600 text-center py-3 rounded-full font-bold"
>
💬 Chat on WhatsApp
</a>

          </div>

        </div>

      </div>
    </section>
  );
}