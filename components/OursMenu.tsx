"use client";
import { ArrowRight } from "lucide-react";
import { MENU_ITEMS } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export default function OursMenu() {
  const { addItem } = useCart();
  // Select specific items for the home page or just take the first 5
  // The original component used specific items, which we mapped to om-1...om-5
  const menuItems = MENU_ITEMS.filter((item) => item.id.startsWith("om"));

  return (
    <section className="min-h-screen px-5 py-20 md:px-12 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-end justify-between">
            <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl leading-tight">
              PLAISIR DE LA
              <br />
              HAUTE SAVEUR
            </h2>
            <button className="hidden lg:block mb-2">
              <a
                href="/menu"
                className="flex items-center gap-2 py-3 px-8 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
              >
                <span className="text-white font-medium">VOIR LE MENU</span>
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
                    <button
                      onClick={() => addItem(item)}
                      className="py-3 px-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-medium"
                    >
                      COMMANDER
                    </button>
                  </div>
                </div>

                {/* Info en dessous */}
                <div className="mt-6">
                  <h3 className="font-anton text-2xl mb-2">{item.name}</h3>
                  <p className="text-xl mb-3">
                    {item.price.toLocaleString()} FCFA
                  </p>
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
                    <button
                      onClick={() => addItem(item)}
                      className="py-3 px-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-medium"
                    >
                      COMMENDER
                    </button>
                  </div>
                </div>

                {/* Info en dessous */}
                <div className="mt-6">
                  <h3 className="font-anton text-2xl mb-2">{item.name}</h3>
                  <p className="text-xl mb-3">
                    {item.price.toLocaleString()} FCFA
                  </p>
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
                  <button
                    onClick={() => addItem(item)}
                    className="py-3 px-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-medium"
                  >
                    COMMENDER
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-anton text-2xl mb-2">{item.name}</h3>
                <p className="text-xl mb-3">
                  {item.price.toLocaleString()} FCFA
                </p>
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
              <span className="text-white font-medium">VOIR LE MENU</span>
              <ArrowRight color="white" size={20} />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
