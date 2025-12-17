"use client";
import { useState, useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import gsap from "gsap";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const headerRef = useRef(null);

  const categories = [
    { id: "all", label: "All Menu" },
    { id: "featured", label: "Featured Recipes" },
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
    { id: "dessert", label: "Dessert" },
  ];

  const menuItems = [
    {
      id: 1,
      name: "DRAGON MAKI",
      price: 16.75,
      category: "dinner",
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
      rating: 4.7,
      reviews: 90,
    },
    {
      id: 2,
      name: "SPICY TUNA NIGIRI",
      price: 12.5,
      category: "dinner",
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=800&q=80",
      rating: 5,
      reviews: 100,
    },
    {
      id: 3,
      name: "SIGNATURE SUSHI ROLL",
      price: 18.99,
      category: "dinner",
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80",
      rating: 5,
      reviews: 35,
    },
    {
      id: 4,
      name: "MEDITERRANEAN PLATTER",
      price: 22.0,
      category: "lunch",
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
      rating: 4.8,
      reviews: 75,
    },
    {
      id: 5,
      name: "AUTUMN HARVEST PLATE",
      price: 19.5,
      category: "dinner",
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
      rating: 4.9,
      reviews: 62,
    },
    {
      id: 6,
      name: "RUSTIC CHARCUTERIE",
      price: 24.99,
      category: "lunch",
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
      rating: 4.6,
      reviews: 88,
    },
    {
      id: 7,
      name: "GOLDEN PANCAKES",
      price: 11.5,
      category: "breakfast",
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=80",
      rating: 4.8,
      reviews: 120,
    },
    {
      id: 8,
      name: "CHOCOLATE LAVA CAKE",
      price: 8.99,
      category: "dessert",
      isFeatured: false,
      image:
        "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
      rating: 5,
      reviews: 95,
    },
    {
      id: 9,
      name: "EGGS BENEDICT",
      price: 14.5,
      category: "breakfast",
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80",
      rating: 4.7,
      reviews: 110,
    },
  ];

  const filteredItems = menuItems.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return item.isFeatured;
    return item.category === activeCategory;
  });

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-[#F5F1E8]">
      <Navbar />
      {/* Padding-top augmenté (pt-64) pour que la Navbar ne cache rien */}
      <section className="min-h-screen bg-[#F5F1E8] px-5 pt-64 pb-20 md:px-12 lg:px-28">
        <div className="max-w-7xl mx-auto">
          {/* Header XXL comme sur l'image */}
          <div className="text-center mb-16">
            <h1 className="font-anton text-8xl md:text-[12rem] lg:text-[15rem] leading-[0.8] mb-12 uppercase">
              OUR MENU
            </h1>
            <div className="w-full h-px bg-black/10"></div>
          </div>

          {/* Filtres de catégories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium uppercase text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white text-black border-2 border-black hover:bg-black hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grille de plats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {item.isFeatured && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Contenu */}
                <div className="p-6">
                  {/* Nom et bouton BUY sur la même ligne */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-anton text-xl">{item.name}</h3>
                    <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors text-sm font-medium">
                      <ShoppingCart size={16} />
                      BUY
                    </button>
                  </div>

                  {/* Prix */}
                  <p className="text-2xl font-bold mb-3">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Ligne de séparation */}
                  <div className="w-full h-px bg-gray-200 mb-3"></div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating)
                              ? "fill-red-500"
                              : "fill-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {item.rating} Stars ({item.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message si aucun résultat */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
