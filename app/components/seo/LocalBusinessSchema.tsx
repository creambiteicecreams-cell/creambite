export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",

    "@id": "https://creambite.in/#business",

    name: "Cream Bite",

    image: [
      "https://creambite.in/logo.png",
      "https://creambite.in/images/hero.jpg",
    ],

    logo: "https://creambite.in/logo.png",

    url: "https://creambite.in",

    telephone: "+91-7975124421",

    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Alternate Phone",
        value: "+91-9632563132",
      },
    ],

    priceRange: "₹₹",

    description:
      "Cream Bite is a premium ice cream parlour in Bangalore serving handcrafted ice creams, Belgian waffles, signature sundaes, chocolate bowls, thick shakes and sugar-free desserts.",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Sai Sumukha Sterling, Viswamanava Kuvempu Main Road, Dasarahalli",

      addressLocality: "Bengaluru",

      addressRegion: "Karnataka",

      postalCode: "560024",

      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: 13.055910287267267,

      longitude: 77.60826537484292,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],

        opens: "11:00",

        closes: "23:00",
      },
    ],

    servesCuisine: [
      "Ice Cream",
      "Belgian Waffles",
      "Desserts",
      "Chocolate Bowls",
      "Thick Shakes",
      "Sugar-Free Desserts",
    ],

    sameAs: [
      "https://www.instagram.com/creambite_cream",
    ],

    hasMap:
      "https://www.google.com/maps/place/Cream+Bite/",

    menu: "https://creambite.in/#menu",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}