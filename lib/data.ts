import { MenuItem } from "@/types";

export const SITE_NAME = "DECHINAN DELICE";
export const WHATSAPP_NUMBER = "2290168038671"; // Numéro du gérant

export const OPENING_HOURS = {
  monday: { open: 11, close: 22 },
  tuesday: { open: 11, close: 22 },
  wednesday: { open: 11, close: 22 },
  thursday: { open: 11, close: 22 },
  friday: { open: 11, close: 23 },
  saturday: { open: 10, close: 23 },
  sunday: { open: 10, close: 21 },
};

export const CONTACT_INFO = {
  address: "Abomey-Calavi, Atlantique, Bénin",
  addressLink: "https://maps.google.com/?q=Abomey-Calavi",
  phone: "229 97 67 22 27",
  email: "contact@dechinandelice.com",
  hours: [
    { day: "Lun - Jeu", hours: "11h - 22h" },
    { day: "Ven", hours: "11h - 23h" },
    { day: "Sam", hours: "10h - 23h" },
    { day: "Dim", hours: "10h - 21h" },
  ],
};

export const CATEGORIES: { id: string; label: string }[] = [
  { id: "all", label: "Tout le Menu" },
  { id: "featured", label: "Nos Stars" },
  { id: "breakfast", label: "Petit Déjeuner" },
  { id: "lunch", label: "Déjeuner" },
  { id: "dinner", label: "Dîner" },
  { id: "dessert", label: "Dessert" },
  { id: "drink", label: "Boissons" },
];

export const MENU_ITEMS: MenuItem[] = [
  // From OursMenu
  {
    id: "om-1",
    name: "MOCKTAIL SAKURA",
    description: "Infusion florale aux notes pétillantes",
    price: 3500,
    category: "drink",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    rating: 4.8,
    reviews: 40,
    isFeatured: true,
  },
  {
    id: "om-2",
    name: "SAUCE AIL BEURRE",
    description: "Sauce onctueuse relevée au citron vert",
    price: 8000,
    category: "lunch",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    rating: 4.8,
    reviews: 40,
    isFeatured: false,
  },
  {
    id: "om-3",
    name: "SAUMON TERIYAKI",
    description: "Saumon grillé nappé de sauce teriyaki",
    price: 12000,
    category: "dinner",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    rating: 4.8,
    reviews: 40,
    isFeatured: true,
  },
  {
    id: "om-4",
    name: "CÔTELETTES D’AGNEAU",
    description: "Agneau tendre mariné aux herbes",
    price: 9500,
    category: "dinner",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
    rating: 4.8,
    reviews: 40,
    isFeatured: false,
  },
  {
    id: "om-5",
    name: "TIRAMISU FUSION",
    description: "Dessert italien revisité avec modernité",
    price: 4500,
    category: "dessert",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    rating: 4.8,
    reviews: 40,
    isFeatured: false,
  },

  // From MenuPage
  {
    id: "mp-1",
    name: "DRAGON MAKI",
    description: "Rouleau de sushi au dragon",
    price: 6000,
    category: "dinner",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
    rating: 4.7,
    reviews: 90,
  },
  {
    id: "mp-2",
    name: "NIGIRI THON ÉPICÉ",
    description: "Nigiri au thon frais et épicé",
    price: 5000,
    category: "dinner",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=800&q=80",
    rating: 5,
    reviews: 100,
  },
  {
    id: "mp-3",
    name: "SUSHI ROLL SIGNATURE",
    description: "Notre création exclusive du chef",
    price: 7500,
    category: "dinner",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80",
    rating: 5,
    reviews: 35,
  },
  {
    id: "mp-4",
    name: "PLATEAU MÉDITERRANÉEN",
    description: "Assortiment de saveurs méditerranéennes",
    price: 15000,
    category: "lunch",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
    rating: 4.8,
    reviews: 75,
  },
  {
    id: "mp-5",
    name: "ASSIETTE D'AUTOMNE",
    description: "Produits de saison rôtis",
    price: 8500,
    category: "dinner",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    rating: 4.9,
    reviews: 62,
  },
  {
    id: "mp-6",
    name: "CHARCUTERIE RUSTIQUE",
    description: "Sélection de charcuteries fines",
    price: 18000,
    category: "lunch",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    rating: 4.6,
    reviews: 88,
  },
  {
    id: "mp-7",
    name: "PANCAKES DORÉS",
    description: "Pancakes moelleux au sirop d'érable",
    price: 3500,
    category: "breakfast",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=80",
    rating: 4.8,
    reviews: 120,
  },
  {
    id: "mp-8",
    name: "FONDANT AU CHOCOLAT",
    description: "Cœur coulant au chocolat noir",
    price: 3000,
    category: "dessert",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
    rating: 5,
    reviews: 95,
  },
  {
    id: "mp-9",
    name: "OEUFS BÉNÉDICTE",
    description: "Oeufs pochés sur muffin anglais",
    price: 4500,
    category: "breakfast",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80",
    rating: 4.7,
    reviews: 110,
  },

  // Special Menu Items
  {
    id: "sm-1",
    name: "RISOTTO À LA TRUFFE",
    description: "Riz Arborio crémeux à la truffe noire",
    price: 22000,
    category: "dinner",
    isFeatured: false,
    isSpecial: true,
    image:
      "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800&q=80",
    rating: 4.9,
    reviews: 45,
  },
  {
    id: "sm-2",
    name: "STEAK WAGYU",
    description: "Boeuf Wagyu A5 au beurre de romarin",
    price: 45000,
    category: "dinner",
    isFeatured: false,
    isSpecial: true,
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80",
    rating: 5.0,
    reviews: 30,
  },
  {
    id: "sm-3",
    name: "HOMARD THERMIDOR",
    description: "Homard frais sauce crème au brandy",
    price: 35000,
    category: "lunch",
    isFeatured: false,
    isSpecial: true,
    image:
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=800&q=80",
    rating: 4.8,
    reviews: 50,
  },
  {
    id: "sm-4",
    name: "SOUFFLÉ AU CHOCOLAT",
    description: "Chocolat belge chaud et glace vanille",
    price: 5000,
    category: "dessert",
    isFeatured: false,
    isSpecial: true,
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
    rating: 4.9,
    reviews: 120,
  },
];
