"use client";
import { useState } from "react";

export default function SpecialMenu() {
  const [activeMenu, setActiveMenu] = useState(0);

  const menuItems = [
    {
      name: "TRUFFLE RISOTTO",
      image:
        "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800&q=80",
      description: "Creamy Arborio rice with black truffle",
    },
    {
      name: "WAGYU STEAK",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80",
      description: "Premium A5 Wagyu with rosemary butter",
    },
    {
      name: "LOBSTER THERMIDOR",
      image:
        "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800&q=80",
      description: "Fresh lobster in brandy cream sauce",
    },
    {
      name: "CHOCOLATE SOUFFLÉ",
      image:
        "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
      description: "Warm Belgian chocolate with vanilla ice cream",
    },
  ];

  const stackStyles = [
    { rotate: "-6deg", x: "-20px", y: "-10px", zIndex: 1 },
    { rotate: "8deg", x: "20px", y: "5px", zIndex: 2 },
    { rotate: "-4deg", x: "10px", y: "-15px", zIndex: 3 },
    { rotate: "5deg", x: "-5px", y: "15px", zIndex: 4 },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen px-5 py-20 md:px-12 lg:px-28">
      <div className="w-full max-w-7xl">
        <h1 className="font-anton text-5xl md:text-6xl lg:text-7xl mt-2 mb-12 text-center">
          MENU SPECIAL
        </h1>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex items-center justify-between min-h-150">
          {/* Noms à gauche */}
          <div className="w-1/2 space-y-12 pl-10">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveMenu(index)}
                className="cursor-pointer group flex items-baseline gap-6"
              >
                <span
                  className={`font-anton text-6xl transition-colors duration-300 ${
                    activeMenu === index ? "text-red-400" : "text-black"
                  }`}
                >
                  {index + 1}.
                </span>
                <h3
                  className={`font-anton text-6xl uppercase  transition-colors duration-300 ${
                    activeMenu === index ? "text-red-400" : "text-black"
                  }`}
                >
                  {item.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Image à droite */}
          <div className="w-1/2 relative h-150 flex items-center justify-center">
            {menuItems.map((item, index) => {
              const isActive = activeMenu === index;
              // On calcule la transformation finale
              // Si actif : scale 1.1, rotation 0 ou légère, z-index haut
              // Si inactif : rotation et translation définies dans stackStyles

              return (
                <div
                  key={index}
                  style={{
                    transform: isActive
                      ? `rotate(0deg) scale(1.1)`
                      : `rotate(${stackStyles[index].rotate}) translate(${stackStyles[index].x}, ${stackStyles[index].y}) scale(1)`,
                    zIndex: isActive ? 50 : stackStyles[index].zIndex,
                  }}
                  className={`
                    absolute 
                    w-95 h-125 
                    overflow-hidden 
                    rounded-sm shadow-2xl 
                    border-[6px] border-white 
                    transition-all duration-500 ease-in-out
                    ${
                      isActive
                        ? "brightness-110 shadow-black/40"
                        : "brightness-90 opacity-90"
                    }
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay subtil pour foncer les images inactives si désiré */}
                  <div
                    className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${
                      isActive ? "opacity-0" : "opacity-20"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablette Layout - Grille 2x2 */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer h-80"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-anton text-3xl mb-2">{item.name}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - 1 colonne */}
        <div className="md:hidden space-y-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-xl h-96"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-anton text-3xl mb-2">{item.name}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
