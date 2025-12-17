"use client";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { SITE_NAME } from "@/lib/data";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const { toggleCart, totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: "ACCUEIL", href: "/" },
    { name: "À PROPOS", href: "/#about" },
    { name: "MENU", href: "/menu" },
    { name: "OFFRES", href: "/#special" },
    { name: "CONTACT", href: "/#contact" },
  ];

  useEffect(() => {
    const isHome = pathname === "/";

    const ctx = gsap.context(() => {
      if (isHome) {
        gsap.set(navRef.current, {
          backgroundColor: "transparent",
          color: "white",
          paddingTop: "40px",
          paddingBottom: "40px",
        });

        ScrollTrigger.create({
          trigger: "body",
          start: "50px top",
          onEnter: () => {
            gsap.to(navRef.current, {
              backgroundColor: "white",
              color: "black",
              paddingTop: "25px",
              paddingBottom: "25px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              duration: 0.4,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(navRef.current, {
              backgroundColor: "transparent",
              color: "white",
              paddingTop: "40px",
              paddingBottom: "40px",
              boxShadow: "none",
              duration: 0.4,
              ease: "power2.out",
            });
          },
        });
      } else {
        gsap.set(navRef.current, {
          backgroundColor: "#F5F1E8",
          color: "black",
          paddingTop: "25px",
          paddingBottom: "25px",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        });
      }
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-100 px-10 md:px-20 transition-all duration-300"
    >
      <div className="w-full flex items-center justify-between">
        {/* LOGO */}
        <a href="/" className="flex items-center text-inherit z-110">
          <span className="text-3xl md:text-5xl font-anton uppercase tracking-tighter leading-none">
            {SITE_NAME}
          </span>
        </a>

        {/* LIENS DESKTOP */}
        <ul className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-red-500 transition-colors text-sm font-bold tracking-[0.25em]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-8 z-110">
          {/* Bouton ORDER NOW : Visible UNIQUEMENT sur Desktop ici */}
          <button
             onClick={() => {
                if (totalItems === 0) {
                   // If empty, go to menu
                   // We need to use router if it's not a link, but here we can just do a check
                   // Actually, if we use a Link component, we can't easily prevent default.
                   // Better to use a button with router.push logic or conditional click
                   if (pathname !== '/menu') {
                      window.location.href = "/menu";
                   }
                } else {
                   toggleCart();
                }
             }}
            className="hidden lg:flex items-center gap-4 py-4 px-10 bg-red-500 text-white rounded-full text-xs font-black tracking-widest hover:scale-105 transition-all shadow-lg cursor-pointer"
          >
            COMMANDER {totalItems > 0 && `(${totalItems})`} <ArrowRight size={20} />
          </button>

          {/* Hamburger : Garde la couleur text-white quand le menu est ouvert */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isMenuOpen ? "text-white" : "text-inherit"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE PLEIN ÉCRAN */}
      <div
        className={`fixed inset-0 h-screen w-full bg-black text-white flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out z-105 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-4xl md:text-6xl font-anton uppercase hover:text-red-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/* BOUTON DE COMMANDE À L'INTÉRIEUR DU MENU MOBILE */}
        <button
           onClick={() => {
              setIsMenuOpen(false);
               if (totalItems === 0) {
                   if (pathname !== '/menu') {
                      window.location.href = "/menu";
                   }
                } else {
                   toggleCart();
                }
           }}
          className="mt-4 flex items-center gap-4 py-5 px-12 bg-red-500 text-white rounded-full text-lg font-anton tracking-widest uppercase"
        >
          COMMANDER {totalItems > 0 && `(${totalItems})`} <ArrowRight size={24} />
        </button>
      </div>
    </nav>
  );
}
