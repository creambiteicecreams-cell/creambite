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
  "All",
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
    image: "/images/menu/icecream/afghan-dry-fruits.png",
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
];