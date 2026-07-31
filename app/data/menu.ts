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
    image: "/images/menu/icecream/vanilla.png",
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
    image: "/images/menu/icecream/chocolate.png",
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
    image: "/images/menu/icecream/strawberry.png",
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
    image: "/images/menu/icecream/butterscotch.png",
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
    image: "/images/menu/icecream/mango.png",
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
    image: "/images/menu/icecream/black-currant.png",
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
    image: "/images/menu/icecream/choco-chips.png",
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
    image: "/images/menu/icecream/tender-coconut.png",
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
    image: "/images/menu/icecream/kesar-pista.png",
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
    image: "/images/menu/icecream/american-nuts.png",
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
    image: "/images/menu/icecream/roasted-almond.png",
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
    image: "/images/menu/icecream/abc.png",
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
    image: "/images/menu/icecream/rajbhog.png",
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
    image: "/images/menu/waffles/chocolate-overload.png",
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
    image: "/images/menu/waffles/kitkat.png",
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
    image: "/images/menu/waffles/nutty-delight.png",
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
    image: "/images/menu/waffles/hazelnut-chocolate.png",
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
    image: "/images/menu/waffles/strawberry-waffle.png",
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
    image: "/images/menu/waffles/oreo-crush.png",
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
    image: "/images/menu/waffles/caramel.png",
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
    image: "/images/menu/waffles/triple-chocolate.png",
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
    image: "/images/menu/waffles/creamy-delight.png",
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
    image: "/images/menu/sundaes/CBC.png",
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
    image: "/images/menu/sundaes/DBC.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 249 },
    ],
  },

  {
    id: 25,
    category: "Sundaes",
    name: "Chocolate Fudge",
    description: "Chocolate ice cream topped with warm chocolate fudge.",
    image: "/images/menu/sundaes/chocolate-fudge.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 219 },
    ],
  },

  {
    id: 26,
    category: "Sundaes",
    name: "Brownie Fudge",
    description: "Warm brownie served with premium ice cream and chocolate fudge.",
    image: "/images/menu/sundaes/brownie-fudge.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 239 },
    ],
  },

    {
    id: 28,
    category: "Sundaes",
    name: "Fruit Delight",
    description: "Fresh fruits served with creamy ice cream.",
    image: "/images/menu/sundaes/fruit-delight.png",
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
    image: "/images/menu/sundaes/gulab-jamun.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 239 },
    ],
  },

  {
    id: 24,
    category: "Sundaes",
    name: "GudBud",
    description: "ice cream with fresh fruits and dryfruits loaded with rich sauce.",
    image: "/images/menu/sundaes/gud.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 249 },
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
    image: "/images/menu/chocolate-bowls/oreo.png",
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
    image: "/images/menu/chocolate-bowls/tcb.png",
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
    image: "/images/menu/chocolate-bowls/wcb.png",
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
    image: "/images/menu/chocolate-bowls/br.png",
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
    image: "/images/menu/chocolate-bowls/dryfruits.png",
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
    image: "/images/menu/shakes/cs.png",
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
    image: "/images/menu/shakes/oreo.png",
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
    image: "/images/menu/shakes/ss.png",
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
    image: "/images/menu/shakes/mango.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 149 },
    ],
  },

  {
    id: 39,
    category: "Thick Shakes",
    name: "Strawberry Thick Shake",
    description: "Fresh strawberry thick shake with creamy texture.",
    image: "/images/menu/shakes/ss.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 169 },
    ],
  },

  {
    id: 40,
    category: "Thick Shakes",
    name: "Apple Chocolate Thick Shake",
    description: "Refreshing apple chocolate thick shake.",
    image: "/images/menu/shakes/ac.png",
    bestseller: false,
    veg: true,
    prices: [
      { label: "Regular", value: 169 },
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
    image: "/images/menu/cream-buns/ban.png",
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
    image: "/images/menu/cream-buns/choco.png",
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
    image: "/images/menu/cream-buns/mango.png",
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
    image: "/images/menu/cream-buns/blu.png",
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
    image: "/images/menu/sugar-free/vani.png",
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
    name: "Sugar Free Belgium Waffle",
    description: "Crispy Belgian waffle with no added sugar chocolate.",
    image: "/images/menu/sugar-free/sw.png",
    bestseller: true,
    veg: true,
    prices: [
      { label: "Regular", value: 249 },
    ],
  },

  {
    id: 47,
    category: "Sugar Free",
    name: "Sugar Free Chocolate Bowl",
    description: "Handmade sugar free chocolate bowl with premium toppings.",
    image: "/images/menu/sugar-free/scb.png",
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
  image: "/images/menu/sugar-free/sdbc.png",
  bestseller: true,
  veg: true,
  prices: [
    { label: "Regular", value: 249 },
  ],
},
];  