"use client";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "MENU", href: "#menu" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-6 fixed w-full z-50 backdrop-blur-md bg-white/80">
      <div className=" ">
        <a href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
          >
            <path
              d="M 24 40.025 L 7.557 40.025 C 6.302 40.025 5.342 39.065 5.292 37.809 C 5.268 36.48 6.154 35.446 7.458 35.446 C 12.283 35.422 17.132 35.397 21.957 35.397 C 28.111 35.397 34.24 35.422 40.394 35.397 C 41.452 35.397 42.535 36.332 42.683 37.194 C 42.905 38.449 42.265 39.606 41.132 39.975 C 41.009 40.025 40.861 40.025 40.739 40.025 Z M 40.246 29.341 C 39.36 22.326 34.019 16.64 27.077 15.311 C 26.979 15.286 26.855 15.261 26.757 15.237 C 26.535 15.188 26.388 14.991 26.388 14.769 L 26.388 12.677 C 26.609 12.628 26.806 12.579 27.003 12.529 C 28.062 12.234 28.8 11.151 28.677 10.068 C 28.579 9.034 27.643 8 26.708 7.975 C 24.985 7.951 23.262 7.951 21.539 7.975 C 20.406 8 19.495 8.886 19.372 9.994 C 19.249 11.151 19.939 12.185 21.022 12.505 C 21.219 12.554 21.415 12.603 21.662 12.652 C 21.662 13.415 21.686 14.129 21.637 14.868 C 21.637 14.991 21.415 15.163 21.268 15.188 C 15.852 16.221 11.865 19.175 9.329 24.049 C 8.123 26.363 7.582 28.874 7.631 31.508 C 7.655 32.64 8.64 33.674 9.674 33.674 L 38.154 33.674 C 39.286 33.674 40.295 32.714 40.32 31.581 C 40.369 30.868 40.345 30.105 40.246 29.341 Z M 34.265 30.326 L 34.166 30.326 C 33.748 30.326 33.378 30.006 33.305 29.563 C 32.615 23.951 27.988 21.711 27.791 21.612 C 27.372 21.415 27.175 20.899 27.372 20.48 C 27.569 20.062 28.086 19.865 28.505 20.062 C 28.726 20.16 34.191 22.769 35.003 29.342 C 35.077 29.834 34.732 30.252 34.265 30.326 Z"
              fill="rgb(0, 0, 0)"
            ></path>
          </svg>
          <span className="text-3xl">LOGO</span>
        </a>
      </div>
      <ul className="hidden md:flex items-center justify-center gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="font-">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="hidden md:block">
        <a href="/" className="flex gap-2 py-3 px-6 bg-red-400 rounded-full">
          <span className="text-white">ORDER NOW</span>
          <ArrowRight color="white" />
        </a>
      </button>

      {/* Mobile */}
      <button
        className="md:hidden z-50"
        aria-label="Toggle menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X size={32} className="text-black" />
        ) : (
          <Menu size={32} className="text-black" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-full bg-white/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl hover:text-red-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button onClick={() => setIsMenuOpen(false)}>
            <a
              className="flex items-center gap-2 py-2 px-8 bg-red-400 rounded-full text-lg"
              href="/"
            >
              <span className="text-white">ORDER NOW</span>
              <ArrowRight color="white" />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
