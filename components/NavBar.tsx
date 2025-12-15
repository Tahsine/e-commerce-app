"use client";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const navLinks = [
    { name: "MENU", href: "#menu" },
    { name: "ABOUT", href: "#about" },
    { name: "SHOP", href: "#shop" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="text-white text-2xl font-black tracking-wider">
            BRAND NAME
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-sm font-bold tracking-wider hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Panier */}
            <button className="relative text-white hover:text-gray-300 transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white text-lg font-bold tracking-wider hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="flex items-center gap-2 text-white text-lg font-bold tracking-wider">
                <ShoppingCart size={24} />
                Panier {cartCount > 0 && `(${cartCount})`}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
