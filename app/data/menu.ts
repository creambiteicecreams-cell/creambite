export type PriceOption = {
  label: string;
  value: number;
};

export type Product = {
  id: number;
  category: string;
  name: string;
  description: string;
  image: string;
  bestseller: boolean;
  veg: boolean;
  prices: PriceOption[];
};

export const categories = [
    "Ice Cream",
  "Belgium Waffles",
  "Sundaes",
  "Chocolate Bowl Cake",
  "Thick Shakes",
  "Cream Buns",
  "Sugar Free",
];

export const products: Product[] = [

  // ===========================
  // ICE CREAM
  // ===========================

  {
    id: 1,
    category: "Ice Cream",
    name: "Vanilla",
    description: "Classic creamy vanilla ice cream.",
    image: "/images/menu/icecream/creambite-vanilla-ice-cream.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 65 },
      { label: "Double Scoop", value: 110 },
    ],
  },

  {
    id: 2,
    category: "Ice Cream",
    name: "Chocolate",
    description: "Rich chocolate delight.",
    image: "/images/menu/icecream/creambite-chocolate-ice-cream.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 65 },
      { label: "Double Scoop", value: 110 },
    ],
  },

  {
    id: 3,
    category: "Ice Cream",
    name: "Strawberry",
    description: "Fresh strawberry flavour.",
    image: "/images/menu/icecream/creambite-strawberry-ice-cream.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 65 },
      { label: "Double Scoop", value: 110 },
    ],
  },

  {
    id: 4,
    category: "Ice Cream",
    name: "Butterscotch",
    description: "Creamy butterscotch crunch.",
    image: "/images/menu/icecream/creambite-butterscotch-ice-cream.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 65 },
      { label: "Double Scoop", value: 110 },
    ],
  },

  {
    id: 5,
    category: "Ice Cream",
    name: "Mango",
    description: "Refreshing mango flavour.",
    image: "/images/menu/icecream/creambite-mango-ice-cream.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 65 },
      { label: "Double Scoop", value: 110 },
    ],
  },

  {
    id: 6,
    category: "Ice Cream",
    name: "Black Currant",
    description: "Tangy black currant delight.",
    image: "/images/menu/icecream/creambite-black-currant-ice-cream.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 65 },
      { label: "Double Scoop", value: 110 },
    ],
  },

  {
    id: 7,
    category: "Ice Cream",
    name: "Choco Chips",
    description: "Loaded with crunchy chocolate chips.",
    image: "/images/menu/icecream/creambite-choco-chips-ice-cream.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 75 },
      { label: "Double Scoop", value: 120 },
    ],
  },

  {
    id: 8,
    category: "Ice Cream",
    name: "Tender Coconut",
    description: "Refreshing tender coconut flavour.",
    image: "/images/menu/icecream/creambite-tender-coconut-ice-cream.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 75 },
      { label: "Double Scoop", value: 120 },
    ],
  },

  {
    id: 9,
    category: "Ice Cream",
    name: "Kesar Pista",
    description: "Premium kesar pista delight.",
    image: "/images/menu/icecream/creambite-kesar-pista-ice-cream.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 75 },
      { label: "Double Scoop", value: 120 },
    ],
  },

  {
    id: 10,
    category: "Ice Cream",
    name: "American Nuts",
    description: "Loaded with crunchy premium nuts.",
    image: "/images/menu/icecream/creambite-american-nuts-ice-cream.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 80 },
      { label: "Double Scoop", value: 135 },
    ],
  },

  {
    id: 11,
    category: "Ice Cream",
    name: "Roasted Almond",
    description: "Premium roasted almond flavour.",
    image: "/images/menu/icecream/creambite-roasted-almond-ice-cream.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 80 },
      { label: "Double Scoop", value: 135 },
    ],
  },

  {
    id: 12,
    category: "Ice Cream",
    name: "Afghan Dry Fruits",
    description: "Luxury dry fruit special.",
    image: "/images/menu/icecream/creambite-afghan-dry-fruits-ice-cream.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 80 },
      { label: "Double Scoop", value: 135 },
    ],
  },

  {
    id: 13,
    category: "Ice Cream",
    name: "Rajbhog",
    description: "Traditional royal Indian flavour.",
    image: "/images/menu/icecream/creambite-rajbhog-ice-cream.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 80 },
      { label: "Double Scoop", value: 135 },
    ],
  },
    // ===========================
  // Belgium Waffles
  // ===========================

  {
    id: 14,
    category: "Belgium Waffles",
    name: "Chocolate Overload",
    description: "Loaded with rich chocolate sauce and premium toppings.",
    image: "/images/menu/waffles/creambite-chocolate-overload-belgian-waffle.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 155 },
    ],
  },

  {
    id: 15,
    category: "Belgium Waffles",
    name: "KitKat Waffle",
    description: "Crispy Belgian waffle topped with KitKat and chocolate.",
    image: "/images/menu/waffles/creambite-kitkat-belgian-waffle.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 155 },
    ],
  },

  {
    id: 16,
    category: "Belgium Waffles",
    name: "Nutty Delight",
    description: "Loaded with crunchy roasted nuts and chocolate drizzle.",
    image: "/images/menu/waffles/creambite-nutty-delight-belgian-waffle.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 155 },
    ],
  },

  {
    id: 17,
    category: "Belgium Waffles",
    name: "Hazelnut Chocolate Waffle",
    description: "Belgian waffle with rich hazelnut chocolate topping.",
    image: "/images/menu/waffles/creambite-choco-Peanut-belgian-waffle.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 155 },
    ],
  },

  {
    id: 18,
    category: "Belgium Waffles",
    name: "Strawberry Dream",
    description: "Fresh strawberry topping with creamy Belgian waffle.",
    image: "/images/menu/waffles/creambite-strawberry-dream-belgian-waffle.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 145 },
    ],
  },

  {
    id: 19,
    category: "Belgium Waffles",
    name: "Oreo Crush",
    description: "Belgian waffle loaded with Oreo crumbs and chocolate.",
    image: "/images/menu/waffles/creambite-oreo-crush-belgian-waffle.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 145 },
    ],
  },

  {
    id: 20,
    category: "Belgium Waffles",
    name: "Choco Peanut",
    description: "Chocolate waffle topped with crunchy peanuts.",
    image: "/images/menu/waffles/creambite-choco-Peanut-belgian-waffle.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 145 },
    ],
  },

  {
    id: 21,
    category: "Belgium Waffles",
    name: "Triple Chocolate",
    description: "Three layers of rich chocolate indulgence.",
    image: "/images/menu/waffles/creambite-triple-chocolate-belgian-waffle.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 145 },
    ],
  },

  {
    id: 22,
    category: "Belgium Waffles",
    name: "Creamy Delight Waffle",
    description: "Creamy Belgian waffle with delicious sweet toppings.",
    image: "/images/menu/waffles/creambite-creamy-delight-belgian-waffle.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 145 },
    ],
  },

  {
    id: 56,
    category: "Belgium Waffles",
    name: "Creamy Caramel Waffle",
    description: "Creamy Belgian waffle with delicious sweet toppings.",
    image: "/images/menu/waffles/creambite-caramel-belgian-waffle.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 145 },
    ],
  },
    // ===========================
  // SUNDAES
  // ===========================

  {
    id: 23,
    category: "Sundaes",
    name: "Cream Bite Cloud Burst",
    description: "A signature sundae with premium ice cream, chocolate drizzle and crunchy toppings.",
    image: "/images/menu/sundaes/creambite-cloud-burst-sundae.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 229 },
    ],
  },

  {
    id: 24,
    category: "Sundaes",
    name: "Death By Chocolate",
    description: "Chocolate lover's dream loaded with chocolate ice cream and rich sauce.",
    image: "/images/menu/sundaes/creambite-death-by-chocolate-sundae.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 219 },
    ],
  },

  {
    id: 25,
    category: "Sundaes",
    name: "Chocolate Fudge",
    description: "Chocolate ice cream topped with warm chocolate fudge.",
    image: "/images/menu/sundaes/creambite-chocolate-fudge-sundae.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 209 },
    ],
  },

  {
    id: 26,
    category: "Sundaes",
    name: "Brownie Fudge",
    description: "Warm brownie served with premium ice cream and chocolate fudge.",
    image: "/images/menu/sundaes/creambite-brownie-fudge-sundae.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 209 },
    ],
  },

    {
    id: 28,
    category: "Sundaes",
    name: "Fruit Delight",
    description: "Fresh fruits served with creamy ice cream.",
    image: "/images/menu/sundaes/creambite-fruit-delight-sundae.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 219 },
    ],
  },

  {
    id: 29,
    category: "Sundaes",
    name: "Gulab Jamun Sundae",
    description: "Warm gulab jamun paired with vanilla ice cream and chocolate drizzle.",
    image: "/images/menu/sundaes/creambite-gulab-jamun-sundae.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 219 },
    ],
  },

  {
    id: 39,
    category: "Sundaes",
    name: "GudBud",
    description: "ice cream with fresh fruits and dryfruits loaded with rich sauce.",
    image: "/images/menu/sundaes/creambite-gudbud-sundae.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 219 },
    ],
  },
      // ===========================
  // CHOCOLATE BOWL CAKES
  // ===========================

  {
    id: 30,
    category: "Chocolate Bowl Cake",
    name: "Oreo Crush Chocolate Bowl",
    description: "Rich chocolate bowl filled with cake, Oreo crush, premium chocolate sauce and ice cream.",
    image: "/images/menu/chocolate-bowls/creambite-oreo-crush-chocolate-bowl.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 399 },
    ],
  },

  {
    id: 31,
    category: "Chocolate Bowl Cake",
    name: "Triple Chocolat Cake Bowl",
    description: "Chocolate bowl loaded with KitKat, cake, chocolate sauce and ice cream.",
    image: "/images/menu/chocolate-bowls/creambite-triple-chocolate-cake-bowl.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 399 },
    ],
  },

  {
    id: 32,
    category: "Chocolate Bowl Cake",
    name: "White Choco Bowl",
    description: "A chocolate lover's dream with cake, brownies, chocolate sauce and ice cream.",
    image: "/images/menu/chocolate-bowls/creambite-white-choco-cake-bowl.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 399 },
    ],
  },

  {
    id: 33,
    category: "Chocolate Bowl Cake",
    name: "Brownie Chocolate Bowl",
    description: "Warm brownie served inside a handmade chocolate bowl with premium ice cream.",
    image: "/images/menu/chocolate-bowls/creambite-brownie-chocolate-bowl.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 399 },
    ],
  },

  {
    id: 34,
    category: "Chocolate Bowl Cake",
    name: "Dry Fruits Chocolate Bowl",
    description: "Premium chocolate bowl topped with roasted dry fruits, cake and ice cream.",
    image: "/images/menu/chocolate-bowls/creambite-dry-fruits-chocolate-bowl.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 449 },
    ],
  },
    // ===========================
  // THICK SHAKES
  // ===========================

  {
    id: 35,
    category: "Thick Shakes",
    name: "Chocolate Thick Shake",
    description: "Creamy chocolate shake topped with rich chocolate sauce.",
    image: "/images/menu/shakes/creambite-chocolate-thick-shake.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 149 },
    ],
  },

  {
    id: 36,
    category: "Thick Shakes",
    name: "Oreo Thick Shake",
    description: "Creamy shake blended with Oreo cookies.",
    image: "/images/menu/shakes/creambite-oreo-thick-shake.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 159 },
    ],
  },

  {
    id: 37,
    category: "Thick Shakes",
    name: "Strawberry Thick Shake",
    description: "Delicious Strawberry ice cream blended into a rich thick shake.",
    image: "/images/menu/shakes/creambite-strawberry-thick-shake.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 149 },
    ],
  },

  {
    id: 38,
    category: "Thick Shakes",
    name: "Mango Thick Shake",
    description: "Smooth mango shake with whipped cream topping.",
    image: "/images/menu/shakes/creambite-mango-thick-shake.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 149 },
    ],
  },

   {
    id: 40,
    category: "Thick Shakes",
    name: "Apple Chocolate Thick Shake",
    description: "Refreshing apple chocolate thick shake.",
    image: "/images/menu/shakes/creambite-apple-chocolate-thick-shake.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 159 },
    ],
  },
    // ===========================
  // CREAM BUNS
  // ===========================

  {
    id: 41,
    category: "Cream Buns",
    name: "Banana Cream Bun",
    description: "Soft bun filled with delicious banana blended cream.",
    image: "/images/menu/cream-buns/creambite-banana-cream-bun.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 60 },
    ],
  },

  {
    id: 42,
    category: "Cream Buns",
    name: "Chocolate Cream Bun",
    description: "Soft bun filled with delicious chocolate blended cream.",
    image: "/images/menu/cream-buns/creambite-chocolate-cream-bun.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 60 },
    ],
  },

  {
    id: 43,
    category: "Cream Buns",
    name: "Mango Cream Bun",
    description: "Soft bun filled with delicious mango blended creamm.",
    image: "/images/menu/cream-buns/creambite-mango-cream-bun.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 60 },
    ],
  },

  {
    id: 44,
    category: "Cream Buns",
    name: "Blueberry Cream Bun",
    description: "Soft bun filled with delicious blueberry blended cream.",
    image: "/images/menu/cream-buns/creambite-blueberry-cream-bun.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 80 },
    ],
  },
    // ===========================
  // SUGAR FREE
  // ===========================

  {
    id: 45,
    category: "Sugar Free",
    name: "Sugar Free Vanilla Ice Cream",
    description: "No added sugar vanilla ice cream, suitable for diabetics.",
    image: "/images/menu/sugar-free/creambite-sugar-free-vanilla-ice-cream.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Single Scoop", value: 95 },
      { label: "Double Scoop", value: 180 },
    ],
  },

  {
    id: 46,
    category: "Sugar Free",
    name: "Sugar Free chocolate Waffle",
    description: "Crispy Belgian waffle with no added sugar chocolate.",
    image: "/images/menu/sugar-free/creambite-sugar-free-belgian-waffle.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 189 },
    ],
  },

  {
    id: 47,
    category: "Sugar Free",
    name: "Sugar Free Chocolate Bowl",
    description: "Handmade sugar free chocolate bowl with premium toppings.",
    image: "/images/menu/sugar-free/creambite-sugar-free-chocolate-bowl.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 449 },
    ],
  },
  {
  id: 48,
  category: "Sugar Free",
  name: "Sugar Free Death By Chocolate (DBC)",
  description:
    "A guilt-free chocolate indulgence with sugar-free chocolate sauce, premium sugar-free ice cream, and rich chocolate toppings.",
  image: "/images/menu/sugar-free/creambite-sugar-free-death-by-chocolate-sundae.png",
  bestseller: true,
  veg: true,
  prices: [
    { label: "Regular", value: 249 },
  ],
},
];  