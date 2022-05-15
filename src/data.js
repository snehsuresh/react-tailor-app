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
    image: require("./images/3-models/bond1-min.jpg"),
  },
  {
    name: "three-piece",
    images: ["img1", "img2", "img3"],
    image: require("./images/3-models/wick1-min.jpg"),
  },
  {
    name: "tuxedo",
    images: ["img1", "img2", "img3"],
    image: require("./images/3-models/hooda1-min.jpg"),
  },
];

export const coverModels = [
  {
    id: 1,
    image: require("./images/cover-models/1-min.png"),
  },
  {
    id: 2,
    image: require("./images/cover-models/2-min.png"),
  },
  {
    id: 3,
    image: require("./images/cover-models/3-min.png"),
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
    quote: "Nice suits",
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
    name: "default",
    image: require("./images/customised/default.png"),
  },
  {
    name: "blue",
    image: require("./images/customised/darkgrey.png"),
  },
  {
    name: "black",
    image: require("./images/customised/black.png"),
  },
  {
    name: "grey",
    image: require("./images/customised/grey.png"),
  },
  {
    name: "white",
    image: require("./images/customised/white.png"),
  },
];

export const shirtFabric = [
  {
    type: "Oxford",
    about:
      "This material is coarse, yet comfortable, woven in a basket-weave type texture. Oxfords are commonly found in button-down styles, originally designed to be worn without a tie.",
    image: require("./images/shirt-fabric/oxford.webp"),
    price: "1199.00",
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
    about:
      "The soft feel and comfortable wear of poplin makes it a great choice for leisurewear or casual apparel. Poplin has a smooth texture and is a lightweight textile.",
    image: require("./images/shirt-fabric/poplin.webp"),
    price: "999.00",
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
    about:
      "Twill is woven diagonally, creating a shiny or textured surface and thicker weave, which drapes well and is crease resistant. Herringbone twill has a distinctive pattern that is ideal for a shirt or suit.",
    image: require("./images/shirt-fabric/twill.webp"),
    price: "1499.00",
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
  {
    type: "Broadcloth",
    about:
      "The weave is tight, creating a crisp look that is soft on the skin. The dense fibers hold up to regular wear, and threads are woven in an over-under pattern that often presents as a solid color to the eye.",
    image: require("./images/shirt-fabric/broadcloth.jpg"),
    price: "2599.00",
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

export const collars = [
  //https://propercloth.com/reference/dress-shirt-collar-styles/
  {
    name: "Straight",
    image: require("./images/collars/straight.jpg"),
  },
  {
    name: "band",
    image: require("./images/collars/band.jpg"),
  },
  {
    name: "Button Down",
    image: require("./images/collars/buttondown.jpg"),
  },
  {
    name: "Club",
    image: require("./images/collars/club.jpg"),
  },
  {
    name: "Cutaway",
    image: require("./images/collars/cutaway.jpg"),
  },
  // {
  //   name: "English",
  //   image: require("./images/collars/english.webp"),
  // },
  {
    name: "Hidden Button",
    image: require("./images/collars/hiddenbutton.jpg"),
  },
  {
    name: "Spread",
    image: require("./images/collars/spread.jpg"),
  },
  {
    name: "Tab",
    image: require("./images/collars/tab.jpg"),
  },
  {
    name: "Wingtip",
    image: require("./images/collars/wingtip.jpg"),
  },
];

export const cuffs = [
  //https://propercloth.com/reference/dress-shirt-cuff-styles/
  {
    name: "One Button Barrel",
    image: require("./images/cuffs/onebuttonbarrel.jpg"),
  },
  {
    name: "Long One Button Barrel",
    image: require("./images/cuffs/longonebuttonbarrel.jpg"),
  },
  {
    name: "One Button Mitered",
    image: require("./images/cuffs/onebuttonmitered.jpg"),
  },
  {
    name: "Two Button Rounded",
    image: require("./images/cuffs/twobuttonrounded.jpg"),
  },
  {
    name: "Two Button Mitered",
    image: require("./images/cuffs/twobuttonmitered.jpg"),
  },
  {
    name: "French",
    image: require("./images/cuffs/french.jpg"),
  },
  {
    name: "Rounded French",
    image: require("./images/cuffs/roundedfrench.jpg"),
  },
  {
    name: "Convertible French",
    image: require("./images/cuffs/convertiblefrench.jpg"),
  },
  {
    name: "Soft One Button",
    image: require("./images/cuffs/softonebutton.jpg"),
  },
  {
    name: "Soft Long One Button",
    image: require("./images/cuffs/softlongonebutton.jpg"),
  },
  {
    name: "Soft Two Button Sq.",
    image: require("./images/cuffs/softtwobuttonsquare.jpg"),
  },
  {
    name: "Soft French",
    image: require("./images/cuffs/softfrench.jpg"),
  },
];

export const buttons = [
  {
    name: "Flat Button",
    image: require("./images/buttons/flatbutton.webp"),
  },
  {
    name: "Lapel Button",
    image: require("./images/buttons/lapelbutton.webp"),
  },
  {
    name: "Snap Button",
    image: require("./images/buttons/snapbutton.jpg"),
  },
  {
    name: "Tuxedo Stud",
    image: require("./images/buttons/tuxedostud.jpg"),
  },
];

export const folds = [
  {
    name: "Flat Front/None",
    image: require("./images/suit-trouser/slim-suit.jpg"),
  },
  {
    name: "Single Pleat",
    image: require("./images/suit-trouser/singlepleat-suit.jpg"),
  },
  {
    name: "Double Pleat",
    image: require("./images/suit-trouser/doublepleat-suit.jpg"),
  },
];

export const rise = [
  {
    name: "High Rise",
    image: require("./images/suit-trouser/high-waisted.png"),
  },
  {
    name: "Mid Rise",
    image: require("./images/suit-trouser/midrise.jpg"),
  },
  {
    name: "Low Rise",
    image: require("./images/suit-trouser/lowrise.jpg"),
  },
];

export const trousercuff = [
  {
    name: "Yes",
    image: require("./images/suit-trouser/cuffed-suit.jpg"),
  },
  {
    name: "No",
    image: require("./images/suit-trouser/nocuff-suit.jpg"),
  },
];

export const sideadjuster = [
  {
    name: "Yes",
    image: require("./images/suit-trouser/side-adjuster.jpg"),
  },
  {
    name: "No",
    image: require("./images/suit-trouser/slim-suit.jpg"),
  },
];

export const jacketStyle = [
  {
    name: "Single-Breasted",
    image: require("./images/jacket/single-breast-jacket.png"),
  },
  {
    name: "Double-Breasted",
    image: require("./images/jacket/double-breast-jacket.png"),
  },
  {
    name: "Mandarin",
    image: require("./images/jacket/mandarin-jacket.png"),
  },
  {
    name: "Contemporary Tuxedo",
    image: require("./images/jacket/tuxedo-jacket.png"),
  },
];

export const lapels = [
  {
    name: "Notch",
    image: require("./images/jacket/single-breast-jacket.png"),
  },
  {
    name: "Peak",
    image: require("./images/jacket/single-breast-jacket.png"),
  },
];

export const vests = [
  {
    name: "2-piece",
    image: require("./images/jacket/single-breast-jacket.png"),
  },
  {
    name: "3-piece",
    image: require("./images/jacket/3-piece-jacket.png"),
  },
];

export const wasitcoats = [
  {
    name: "Single breasted",
    image: require("./images/jacket/wasitcoat-single.png"),
  },
  {
    name: "Double breasted",
    image: require("./images/jacket/waistcoat-double.png"),
  },
];

export const jacketBack = [
  {
    name: "Centre Vent",
    image: require("./images/jacket/single-breast-jacket.png"),
  },
  {
    name: "Side Vent",
    image: require("./images/jacket/single-breast-jacket.png"),
  },
];

export const linings = [
  {
    name: "default",
    image: require("./images/lining/default.png"),
    price: "0",
  },
  {
    name: "blue",
    image: require("./images/lining/blue.jpg"),
    price: "1499.00",
  },
  {
    name: "red",
    image: require("./images/lining/red.jpg"),
    price: "1799.00",
  },
  {
    name: "purple",
    image: require("./images/lining/purple.jpg"),
    price: "1299.00",
  },
  {
    name: "violet",
    image: require("./images/lining/violet.jpg"),
    price: "1899.00",
  },
  {
    name: "black",
    image: require("./images/lining/black.jpg"),
    price: "1199.00",
  },
];
