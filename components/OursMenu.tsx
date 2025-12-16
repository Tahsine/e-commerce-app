"use client";
import { ArrowRight } from "lucide-react";

export default function OursMenu() {
  const menuItems = [
    {
      name: "SAKURA MOCKTAIL",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
      description: "Cherry blossom infused with sparkling water",
      rating: 4.8,
      reviews: 40,
    },
    {
      name: "GARLIC BUTTER",
      price: 16.0,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      description: "Creamy mixed with lime dressing",
      rating: 4.8,
      reviews: 40,
    },
    {
      name: "TERIYAKI SALMON",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
      description: "Grilled salmon glazed with teriyaki sauce",
      rating: 4.8,
      reviews: 40,
    },
    {
      name: "GRILLED LAMB CHOPS",
      price: 13.0,
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
      description: "Tender lamb chops with herb marinade",
      rating: 4.8,
      reviews: 40,
    },
    {
      name: "TIRAMISU FUSION",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      description: "Classic Italian dessert with a modern twist",
      rating: 4.8,
      reviews: 40,
    },
  ];

  return (
    <section className="min-h-screen px-5 py-20 md:px-12 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-red-500 text-sm mb-4">{"{Our Menu}"}</p>
          <div className="flex items-end justify-between">
            <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl leading-tight">
              DISCOVER THE ART
              <br />
              OF TASTE
            </h2>
            <button className="hidden lg:block mb-2">
              <a
                href="/menu"
                className="flex items-center gap-2 py-3 px-8 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
              >
                <span className="text-white font-medium">VIEW ALL MENU</span>
                <ArrowRight color="white" size={20} />
              </a>
            </button>
          </div>
          <div className="w-full h-px bg-gray-200 mt-8"></div>
        </div>

        {/* Menu Grid - Desktop */}
        <div className="hidden lg:block">
          {/* Première ligne - 3 colonnes */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {menuItems.slice(0, 3).map((item, index) => (
              <div key={index}>
                {/* Image */}
                <div className="group relative overflow-hidden rounded-2xl aspect-4/3 cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="py-3 px-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-medium">
                      ORDER NOW
                    </button>
                  </div>
                </div>

                {/* Info en dessous */}
                <div className="mt-6">
                  <h3 className="font-anton text-2xl mb-2">{item.name}</h3>
                  <p className="text-xl mb-3">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-red-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {item.rating} Stars
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Deuxième ligne - 2 colonnes étendues */}
          <div className="grid grid-cols-2 gap-8">
            {menuItems.slice(3, 5).map((item, index) => (
              <div key={index + 3}>
                {/* Image */}
                <div className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="py-3 px-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-medium">
                      ORDER NOW
                    </button>
                  </div>
                </div>

                {/* Info en dessous */}
                <div className="mt-6">
                  <h3 className="font-anton text-2xl mb-2">{item.name}</h3>
                  <p className="text-xl mb-3">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-red-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {item.rating} Stars
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablette & Mobile - Grid simple */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`${index === 4 ? "md:col-span-2" : ""}`}
            >
              <div className="group relative overflow-hidden rounded-2xl aspect-4/3 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {/* Hover Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="py-3 px-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-medium">
                    ORDER NOW
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-anton text-2xl mb-2">{item.name}</h3>
                <p className="text-xl mb-3">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-red-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {item.rating} Stars
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden mt-12 flex justify-center">
          <button>
            <a
              href="/menu"
              className="flex items-center gap-2 py-3 px-8 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
            >
              <span className="text-white font-medium">VIEW ALL MENU</span>
              <ArrowRight color="white" size={20} />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
