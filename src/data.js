import React from "react";
import { FaUserTie, FaShoppingBag, FaSearch } from "react-icons/fa";

export const sublinks = [
  {
    page: "clothing",
    links: [
      {
        label: "SUIT",
        icon: "icon",
        url: "/products",
        images: [
          require("./images/submenu-images/suits/devgn1.jpg"),
          require("./images/submenu-images/suits/nawaz1.jpg"),
          require("./images/submenu-images/suits/rajini1.png"),
          require("./images/submenu-images/suits/srk1.jpg"),
        ],
        tags: ["Casual", "2-piece", "3-piece", "Smart"],
      },
      {
        label: "BLAZER",
        icon: "icon",
        url: "/products",
        images: [
          require("./images/submenu-images/blazers/double-breast.jpg"),
          require("./images/submenu-images/blazers/single-breast.jpg"),
          // require("./images/submenu-images/suits/rajini1.png"),
          // require("./images/submenu-images/suits/srk1.jpg"),
        ],
        tags: ["double-breast", "single-breast"],
      },
      {
        label: "COAT",
        icon: "icon",
        url: "/products",
        images: [
          require("./images/submenu-images/coats/topcoat1.jpeg"),
          require("./images/submenu-images/coats/longcoat1.jpg"),
          require("./images/submenu-images/coats/pea1.jpg"),
          require("./images/submenu-images/coats/waistcoat1.jpg"),
        ],
        tags: ["top coat", "long coat", "peacoat", "waist coat"],
      },
    ],
  },
  {
    page: "accessories",
    links: [
      {
        label: "Tie",
        icon: "icon",
        url: "/products",
        images: [
          require("./images/submenu-images/ties/standardtie1.jpg"),
          require("./images/submenu-images/ties/skinnytie1.jpg"),
          require("./images/submenu-images/ties/bowtie.jpg"),
          // require("./images/submenu-images/suits/srk1.jpg"),
        ],
        tags: ["Standard", "Skinny", "Bow"],
      },
      {
        label: "Metal",
        icon: "icon",
        url: "/products",
        images: [
          require("./images/submenu-images/metal/tiebar.jpg"),
          require("./images/submenu-images/metal/cufflinks.jpg"),
          // require("./images/submenu-images/suits/rajini1.png"),
          // require("./images/submenu-images/suits/srk1.jpg"),
        ],
        tags: ["Tiebar", "cufflinks"],
      },
      {
        label: "Square",
        icon: "icon",
        url: "/products",
        images: [
          require("./images/submenu-images/coats/topcoat1.jpeg"),
          require("./images/submenu-images/coats/longcoat1.jpg"),
          require("./images/submenu-images/coats/pea1.jpg"),
          require("./images/submenu-images/coats/waistcoat1.jpg"),
        ],
        tags: ["top coat", "long coat", "peacoat", "waist coat"],
      },
    ],
  },
  {
    page: "guide",
    links: [
      {
        label: "Fabric",
        icon: "icon",
        url: "/products",
        images: [
          require("./images/submenu-images/suits/devgn1.jpg"),
          require("./images/submenu-images/suits/nawaz1.jpg"),
          require("./images/submenu-images/suits/rajini1.png"),
          require("./images/submenu-images/suits/srk1.jpg"),
        ],
        tags: ["Casual", "2-piece", "3-piece", "Smart"],
      },
      {
        label: "Measure",
        icon: "icon",
        url: "/products",
        images: [
          require("./images/submenu-images/blazers/double-breast.jpg"),
          require("./images/submenu-images/blazers/single-breast.jpg"),
          // require("./images/submenu-images/suits/rajini1.png"),
          // require("./images/submenu-images/suits/srk1.jpg"),
        ],
        tags: ["double-breast", "single-breast"],
      },
      {
        label: "Price",
        icon: "icon",
        url: "/products",
        images: [
          require("./images/submenu-images/coats/topcoat1.jpeg"),
          require("./images/submenu-images/coats/longcoat1.jpg"),
          require("./images/submenu-images/coats/pea1.jpg"),
          require("./images/submenu-images/coats/waistcoat1.jpg"),
        ],
        tags: ["top coat", "long coat", "peacoat", "waist coat"],
      },
    ],
  },
];

export const menuLinks = [
  {
    id: 1,
    url: "/",
    text: "clothing",
  },
  {
    id: 2,
    url: "/about",
    text: "guide",
  },
  {
    id: 3,
    url: "/accessories",
    text: "accessories",
  },
];

export const social = [
  {
    id: 1,
    url: "",
    icon: <FaSearch />,
  },
  {
    id: 2,
    url: "",
    icon: <FaUserTie />,
  },
  {
    id: 3,
    url: "",
    icon: <FaShoppingBag />,
  },
];

export const models = [
  {
    name: "two-piece",
    images: ["img1", "img2", "img3"],
    image: require("./images/bond1.jpg"),
  },
  {
    name: "three-piece",
    images: ["img1", "img2", "img3"],
    image: require("./images/wick1.jpg"),
  },
  {
    name: "tuxedo",
    images: ["img1", "img2", "img3"],
    image: require("./images/hooda1.jpg"),
  },
];

export const coverModels = [
  {
    id: 1,
    image: require("./images/cover-models/1.webp"),
  },
  {
    id: 2,
    image: require("./images/cover-models/2.webp"),
  },
  {
    id: 3,
    image: require("./images/cover-models/3.webp"),
  },
];

export const reviews = [
  {
    id: 1,
    image: require("./images/reviewers/akshay.jpg"),
    name: "Akshay Chauhan",
    title: "Customer",
    quote:
      "Man the buttonhole on the lapel of the suit I got is so slick. This guy breaks down the inner workings of their suit in much greater detail",
  },
  {
    id: 2,
    image: require("./images/reviewers/shubham.jpg"),
    name: "Shubham Padhy",
    title: "Customer",
    quote:
      "I don't really like the styling of readymade suits, so I decided to get one tailored. The material I gave them wasn't the highest quality but the outstanding tailoring made all the difference. It looks and feels amazing. Anyone who is into suits should at least try this out",
  },
  {
    id: 3,
    image: require("./images/reviewers/mayuri.jpg"),
    name: "Mayuri Bhuyan",
    title: "Customer",
    quote:
      "I'm such a poor judge of quality. If I were to view these pictures without knowing the designer, I wouldn't really be all that impressed. Perhaps it's just the casual posing so the suits aren't draped perfectly, perhaps it's just the classic, roomier styling unlike the modern slim stuff I've been mostly viewing through here, or perhaps it's the fact that you can't see quality as much as feel it when you're wearing the suit. The only thing I like about Sneh's is that you get to pick the fabric as they show up at your door with fabric samples so that's a HUGE bonus",
  },
  {
    id: 4,
    image: require("./images/reviewers/vismay.JPG"),
    name: "Vismay Raj",
    title: "Customer",
    quote:
      "In this day and age of biz casual hardly anyone has to suit up Monday through Friday anymore! They're definitely the best bet in business professional tailoring right now. And I'm surprised we are getting this in India.",
  },
  {
    id: 5,
    image: require("./images/reviewers/jasleen.jpg"),
    name: "Jasleen Kaur",
    title: "Customer",
    quote: "Owner's my boyfriend.",
  },
];

export const fabrics = [
  {
    name: "Cotton",
    image: require("./images/fabrics/cotton.jpg"),
    range: "basics",
    pattern: "solid",
    color: "blue",
    season: "all-year",
    type: "regular",
    about:
      "Though it is the fabric of our lives, cotton suiting is a little tougher to find than wool suits. Generally less expensive than wool and linen, high-end cotton suits can be pulled off in office environments and also for more celebratory events such as weddings.",
    price: "2000.00",
  },
  {
    name: "Wool",
    image: require("./images/fabrics/wool.jpg"),
    range: "luxury",
    pattern: "striped",
    color: "grey",
    season: "winter",
    type: "vegan",
    about:
      "Wool is the most popular fabric choice for men due to its versatility and refined aesthetic. Wool is a natural material, which means it breathes well, and can be worn both in the heat of the day or the cool of the night.",
    price: "3000.00",
  },
  {
    name: "Cashmere",
    image: require("./images/fabrics/cashmere.jpg"),
    range: "luxury",
    pattern: "striped",
    color: "black",
    season: "all-year",
    type: "shiny",
    about:
      "Cashmere, on its own or as a blend, is rather luxurious but can give an unwanted shine to a suit. Depending on whether you want something fancily European or not, cashmere may not be suitable for work. But for pleasure? Always.",
    price: "10000.00",
  },
  {
    name: "Linen",
    image: require("./images/fabrics/linen.jpg"),
    range: "basics",
    pattern: "herringbone",
    color: "white",
    season: "summer",
    type: "stretch",
    about:
      "Linen suits are super lightweight and maintain their coolness in soaring temperatures. However, linen wrinkles easily and stains even easier, meaning it requires regular dry cleaning to maintain a fresh, crisp look.",
    price: "2000.00",
  },
  {
    name: "Cotton",
    image: require("./images/fabrics/cotton.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "blue",
    season: "all-year",
    type: "regular",
    about:
      "Though it is the fabric of our lives, cotton suiting is a little tougher to find than wool suits. Generally less expensive than wool and linen, high-end cotton suits can be pulled off in office environments and also for more celebratory events such as weddings.",
    price: "2000.00",
    key: "asdabdbadjba",
  },
  {
    name: "Wool",
    image: require("./images/fabrics/wool.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "grey",
    season: "all-year",
    type: "regular",
    about:
      "Wool is the most popular fabric choice for men due to its versatility and refined aesthetic. Wool is a natural material, which means it breathes well, and can be worn both in the heat of the day or the cool of the night.",
    price: "2000.00",
  },
  {
    name: "Cashmere",
    image: require("./images/fabrics/cashmere.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "blue",
    season: "all-year",
    type: "regular",
    about:
      "Cashmere, on its own or as a blend, is rather luxurious but can give an unwanted shine to a suit. Depending on whether you want something fancily European or not, cashmere may not be suitable for work. But for pleasure? Always.",
    price: "2000.00",
  },
  {
    name: "Linen",
    image: require("./images/fabrics/linen.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "white",
    season: "all-year",
    type: "regular",
    about:
      "Linen suits are super lightweight and maintain their coolness in soaring temperatures. However, linen wrinkles easily and stains even easier, meaning it requires regular dry cleaning to maintain a fresh, crisp look.",
    price: "2000.00",
  },
  {
    name: "Polyester",
    image: require("./images/fabrics/cotton.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "blue",
    season: "all-year",
    type: "regular",
    about:
      "Polyester produces more fabric shine compared to wool and cotton, making the suit look cheap. Polyester should only be worn in spring and autumn to avoid extreme temperatures.",
    price: "2000.00",
  },
  {
    name: "Silk",
    image: require("./images/fabrics/wool.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "grey",
    season: "all-year",
    type: "regular",
    about:
      "Silk offers superior comfort and is much more expensive than polyester to produce. It is a breathable fabric and a natural temperature regulator, helping the body retain heat in cold weather while excess heat is expelled in warm weather.",
    price: "2000.00",
  },
  {
    name: "Velvet",
    image: require("./images/fabrics/cashmere.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "blue",
    season: "all-year",
    type: "regular",
    about:
      "Velvet is great for a dinner party jacket to be worn all year.  Keep it away far, far away from the office.",
    price: "2000.00",
  },
  {
    name: "Worsted",
    image: require("./images/fabrics/linen.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "white",
    season: "all-year",
    type: "regular",
    about:
      "Worsted wool is a compact textile that is smooth and boasts a high durability.",
    price: "2000.00",
  },
  {
    name: "Tweed",
    image: require("./images/fabrics/cotton.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "blue",
    season: "all-year",
    type: "regular",
    about:
      "If you live in a part of the world that experiences harsh weather to the tune of rain and cold, it is a great idea to have a tweed suit, particularly if you have some thick rubber-soled brogues with which to pair it.",
    price: "2000.00",
  },
  {
    name: "Wool",
    image: require("./images/fabrics/wool.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "grey",
    season: "all-year",
    type: "regular",
    about:
      "Wool is the most popular fabric choice for men due to its versatility and refined aesthetic. Wool is a natural material, which means it breathes well, and can be worn both in the heat of the day or the cool of the night.",
    price: "2000.00",
  },
  {
    name: "Cashmere",
    image: require("./images/fabrics/cashmere.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "blue",
    season: "all-year",
    type: "regular",
    about:
      "Cashmere, on its own or as a blend, is rather luxurious but can give an unwanted shine to a suit. Depending on whether you want something fancily European or not, cashmere may not be suitable for work. But for pleasure? Always.",
    price: "2000.00",
  },
  {
    name: "Linen",
    image: require("./images/fabrics/linen.jpg"),
    range: "luxury",
    pattern: "solid",
    color: "white",
    season: "all-year",
    type: "regular",
    about:
      "Linen suits are super lightweight and maintain their coolness in soaring temperatures. However, linen wrinkles easily and stains even easier, meaning it requires regular dry cleaning to maintain a fresh, crisp look.",
    price: "2000.00",
  },
];

export const subFilters = [
  {
    filter: "Range",
    options: ["Luxury", "Standard", "Economic", "Basics"],
  },
  {
    filter: "Pattern",
    options: ["Solid", "Striped", "Herringbone", "Paisley", "Checked"],
  },
  {
    filter: "Color",
    options: ["Black", "Blue", "White", "Grey", "Multi-colored"],
  },
  {
    filter: "Season",
    options: ["Summer", "Winter", "All year"],
  },
  {
    filter: "Type",
    options: ["Shiny", "Vegan", "Stretch", "Regular"],
  },
];

export const customisedSuits = [
  {
    color: "default",
    image: require("./images/customised/default.png"),
  },
  {
    color: "blue",
    image: require("./images/customised/darkgrey.png"),
  },
  {
    color: "black",
    image: require("./images/customised/black.png"),
  },
  {
    color: "grey",
    image: require("./images/customised/grey.png"),
  },
  {
    color: "white",
    image: require("./images/customised/white.png"),
  },
];

export const shirtFabric = [
  {
    type: "Oxford",
    image: require("./images/shirt-fabric/oxford.webp"),
    price: "500.00",
    color: [
      {
        name: "black",
        colorImg: require("./images/shirt-fabric/oxford/black.webp"),
      },
      {
        name: "blue",
        colorImg: require("./images/shirt-fabric/oxford/dotted-blue.webp"),
      },
      {
        name: "grey",
        colorImg: require("./images/shirt-fabric/oxford/grey.webp"),
      },
      {
        name: "black",
        colorImg: require("./images/shirt-fabric/oxford/white.webp"),
      },
    ],
  },
  {
    type: "Poplin",
    image: require("./images/shirt-fabric/poplin.webp"),
    price: "450.00",
    color: [
      {
        name: "black",
        colorImg: require("./images/shirt-fabric/poplin/blue.webp"),
      },
      {
        name: "peach",
        colorImg: require("./images/shirt-fabric/poplin/peach.webp"),
      },
      {
        name: "pink",
        colorImg: require("./images/shirt-fabric/poplin/pink.webp"),
      },
      {
        name: "yellow",
        colorImg: require("./images/shirt-fabric/poplin/yellow.webp"),
      },
    ],
  },
  {
    type: "Twill",
    image: require("./images/shirt-fabric/twill.webp"),
    price: "650.00",
    color: [
      {
        name: "black",
        colorImg: require("./images/shirt-fabric/twill/black.webp"),
      },
      {
        name: "blue",
        colorImg: require("./images/shirt-fabric/twill/blue.webp"),
      },
      {
        name: "navy",
        colorImg: require("./images/shirt-fabric/twill/navy.webp"),
      },
      {
        name: "turqoise",
        colorImg: require("./images/shirt-fabric/twill/turqoise.webp"),
      },
      {
        name: "vintage",
        colorImg: require("./images/shirt-fabric/twill/vintage.webp"),
      },
      {
        name: "white",
        colorImg: require("./images/shirt-fabric/twill/white.webp"),
      },
    ],
  },
];
