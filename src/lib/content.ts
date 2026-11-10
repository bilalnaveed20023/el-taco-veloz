// Everything on the site comes from here. See PLACEHOLDERS.md for what is verified and what is assumed.

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${base}${p}`;

export const site = { name: "El Taco Veloz", tz: "America/Detroit" };

export type Place = {
  id: string;
  name: string;
  where: string;
  street: string;
  city: string;
  zip: string;
  phone: string;
  tel: string;
  rating: number;
  reviews: number;
  lat: number;
  lng: number;
  hours: { days: string; time: string }[];
  byDay: { open: number; close: number }[]; // Sunday first
  note: string;
};

export const marcus: Place = {
  id: "marcus",
  name: "At Marcus Market",
  where: "Midtown · 2nd Ave",
  street: "4614 2nd Ave",
  city: "Detroit, MI",
  zip: "48201",
  phone: "(313) 315-3193",
  tel: "+13133153193",
  rating: 4.4,
  reviews: 633,
  lat: 42.3527105,
  lng: -83.0667586,
  hours: [
    { days: "Monday – Saturday", time: "10 AM – 8:30 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  byDay: [
    { open: -1, close: -1 },
    ...Array.from({ length: 6 }, () => ({ open: 10, close: 20.5 })),
  ],
  note: "The counter is in the back of Marcus Market.",
};

export const toledo: Place = {
  id: "toledo",
  name: "Toledo St",
  where: "Southwest Detroit",
  street: "6172 Toledo St",
  city: "Detroit, MI",
  zip: "48209",
  phone: "(313) 663-0982",
  tel: "+13136630982",
  rating: 4.6,
  reviews: 1369,
  lat: 42.3189497,
  lng: -83.1102214,
  hours: [{ days: "Every day", time: "7 AM – 10 PM" }],
  byDay: Array.from({ length: 7 }, () => ({ open: 7, close: 22 })),
  note: "Open 7 AM to 10 PM, every day.",
};

export const places = [marcus, toledo];

const q = (l: Place) => encodeURIComponent(`${l.street}, ${l.city} ${l.zip}`);
export const links = {
  tel: (l: Place) => `tel:${l.tel}`,
  directions: (l: Place) => `https://www.google.com/maps/dir/?api=1&destination=${q(l)}`,
  embed: (l: Place) => `https://www.google.com/maps?q=${q(l)}&output=embed`,
  place: "https://www.google.com/maps/place/El+Taco+Veloz/@42.3527105,-83.0667586,17z",
};

// ---- the menu board at Marcus Market (photographed in the Google gallery) ----
export type Row = { n: string; d?: string; p: string; dinner?: string };
export const board: { id: string; title: string; note?: string; rows: Row[] }[] = [
  {
    id: "mains",
    title: "Tacos, burritos, quesadillas, tortas",
    note: "Your choice of protein on everything below.",
    rows: [
      { n: "Tacos", d: "Your choice of meat with onions + cilantro.", p: "$3", dinner: "Dinner $9.50 · 2 tacos with rice + beans" },
      { n: "Shrimp tacos", p: "$3.50", dinner: "Dinner $10.50 · 2 tacos with rice + beans" },
      { n: "Single burrito", d: "Meat with lettuce, cheese and sour cream.", p: "$6.99" },
      { n: "Burrito dinner", d: "The burrito, served with rice + beans.", p: "$9.50" },
      { n: "Quesadilla", d: "Meat with cheese, served with lettuce, tomato and sour cream on the side.", p: "$4", dinner: "Dinner $9.95 · rice + beans" },
      { n: "Torta", d: "Meat with lettuce, cheese, tomatoes, onion and sour cream.", p: "$7" },
      { n: "Chicken salad", d: "Chicken, lettuce, tomato, cheese, avocado, sour cream. Swap in any meat or vegetarian option.", p: "$8" },
    ],
  },
  {
    id: "breakfast",
    title: "El Desayuno · breakfast",
    note: "Served every day, 10 AM – 1 PM. Any meat, vegan or seafood option, with eggs, beans + cheese.",
    rows: [
      { n: "Breakfast burrito", p: "$5.99" },
      { n: "Breakfast taco", p: "$2 each" },
    ],
  },
  {
    id: "sides",
    title: "Sides, sweets, drinks",
    rows: [
      { n: "Chips + salsa", p: "$3" },
      { n: "Rice + beans", p: "$3.50" },
      { n: "Whole avocado", p: "$3.50" },
      { n: "Half avocado", p: "$2" },
      { n: "Sour cream", p: "$1" },
      { n: "Pico de gallo", p: "$1" },
      { n: "Tres leches", d: "Milk or cappuccino flavored cake.", p: "$5" },
      { n: "Horchata, jamaica, limón, tamarindo", d: "Rice water, hibiscus, lime, tamarind.", p: "$2 small · $3 large" },
    ],
  },
];

export type Protein = { n: string; en: string; kind: "meat" | "vegan" | "sea"; note?: string };
export const proteins: Protein[] = [
  { n: "Asada", en: "Grilled steak", kind: "meat" },
  { n: "Pollo", en: "Grilled chicken", kind: "meat" },
  { n: "Chorizo", en: "Mexican sausage", kind: "meat" },
  { n: "Pastor", en: "Spicy pork", kind: "meat" },
  { n: "Jamón", en: "Ham", kind: "meat", note: "Tortas and breakfast only" },
  { n: "Veggie sausage", en: "Mexican veggie sausage", kind: "vegan" },
  { n: "Mushrooms", en: "With fried veggies", kind: "vegan" },
  { n: "Beans", en: "Frijoles", kind: "vegan" },
  { n: "Camarón", en: "Shrimp", kind: "sea", note: "Extra charge" },
  { n: "Tilapia", en: "With fried veggies", kind: "sea" },
];
export const addOns = ["Grilled onions + peppers", "Cilantro + onions", "Salsa verde", "Salsa roja"];

export type Shot = { src: string; alt: string; cls?: string };
export const gallery: Shot[] = [
  { src: "/img/asada-tacos.webp", alt: "Asada tacos on corn tortillas with cilantro, onion and a lime", cls: "tall" },
  { src: "/img/burrito.webp", alt: "A burrito cut open next to a roasted jalapeño", cls: "wide" },
  { src: "/img/menudo.webp", alt: "A bowl of red menudo with a spoon", cls: "tall" },
  { src: "/img/torta.webp", alt: "A toasted torta with grilled onions and a lime", cls: "wide" },
  { src: "/img/tacos-3.webp", alt: "Tacos with red salsa and a lime on a stone counter", cls: "tall" },
  { src: "/img/tostada.webp", alt: "A ceviche tostada topped with avocado", cls: "wide" },
  { src: "/img/salsa.webp", alt: "A cup of green salsa beside tortilla chips", cls: "tall" },
  { src: "/img/plate.webp", alt: "A taco dinner with rice and beans in a clamshell", cls: "wide" },
];

// ---- reviews: Google (Marcus Market listing), public. First name + initial, trimmed (…) ----
export const stars = [445, 85, 32, 24, 47]; // 5 → 1
export const reviews = [
  { who: "Terrance S.", when: "6 years ago", text: "The place is clean on walk-up. The clerk is helpful and will assist with menu items. I ordered the burrito and it was very good. The product is hot and filling. They usually take 5 minutes to make if you have a window for lunch or dinner." },
  { who: "Amy", when: "3 years ago", text: "Amazing hidden taco place in the back of the liquor store. I had the mushroom tacos and my friend had the steak ones. Mine were amazing and she loved hers as well. Rice and bean sides were also delicious." },
  { who: "Ellen C.", when: "7 years ago", text: "Their taco Tuesday special is an actual deal. The staff is friendly and the service was super fast. Most importantly, the food is amazing and authentic." },
  { who: "Ritika J.", when: "a year ago", text: "Hit the spot. Love how fast the service was. We got one steak taco, one chicken taco and one vegan sausage taco. Pretty clean in here too." },
  { who: "Hawk 411", when: "3 years ago", text: "The world needs more honest places like these. Good food that is affordable and very filling. The meats are cooked very well, flavors are punchy, and they are very efficient." },
  { who: "Vanessa", when: "5 years ago", text: "I have been coming here and smashing the mushroom veggie tacos for a year at least. Side of avocado is awesome, and I love the sautéed jalapeño and onions that come with." },
  { who: "Duodecimus A.", when: "3 years ago", text: "Fantastic food. I absolutely loved their tacos al pastor. Their horchata and jamaica were both delicious. I’ll definitely be coming back." },
  { who: "Leah S.", when: "a year ago", text: "Not much for an atmosphere but they do have seats, the food is excellent however. Nice hidden gem inside Marcus Market. Gluten free and vegan options." },
];
