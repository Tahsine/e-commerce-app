"use client";
import { SITE_NAME } from "@/lib/data";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Instagram,
  Facebook,
  SendHorizontal,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLHeadingElement>(null);

  // Uniquement tes liens réels
  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "#about" },
    { name: "Menu", href: "/menu", external: true }, // La seule page externe
    { name: "Offres Spéciales", href: "#special" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { name: "Instagram", icon: <Instagram size={20} />, href: "#" },
    { name: "Facebook", icon: <Facebook size={20} />, href: "#" },
    {
      name: "TikTok",
      icon: <span className="font-bold text-sm">TT</span>,
      href: "#",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du texte géant [BRAND]
      gsap.from(brandRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });

      // Animation des éléments du haut
      gsap.from(".footer-fade", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-[#FEFAE0] px-5 md:px-20 pt-24 pb-10 w-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* GAUCHE : Newsletter & Socials */}
          <div className="footer-fade space-y-10">
            <div className="space-y-6">
              <h2 className="font-anton text-4xl md:text-5xl uppercase leading-tight">
                INSCRIVEZ-VOUS POUR <br /> DES SURPRISES DÉLICIEUSES
              </h2>

              {/* INPUT NEWSLETTER */}
              <div className="relative max-w-md group">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full bg-transparent border-b border-[#FEFAE0]/30 py-4 pr-12 outline-none focus:border-red-400 transition-colors placeholder:text-[#FEFAE0]/30"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-red-400 transition-colors">
                  <SendHorizontal size={24} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-anton text-lg uppercase text-gray-500 tracking-widest">
                Suivez-nous sur
              </p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-3 border border-[#FEFAE0]/20 rounded-full hover:bg-red-400 hover:border-red-400 hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* DROITE : Liens de navigation (Simple list) */}
          <div className="footer-fade flex flex-col lg:items-end justify-center">
            <ul className="space-y-4 text-left lg:text-right">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-anton text-3xl md:text-5xl uppercase hover:text-red-400 transition-colors inline-flex items-center gap-4 group"
                  >
                    {link.name}
                    {link.external && (
                      <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NOM GÉANT */}
        <div className="pt-10 border-t border-[#FEFAE0]/10 overflow-hidden text-center">
          <h1
            ref={brandRef}
            className="font-anton text-[13vw] leading-none uppercase select-none pointer-events-none"
          >
            {SITE_NAME}
          </h1>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-10 border-t border-[#FEFAE0]/10 text-[10px] uppercase tracking-[0.2em] text-gray-500 gap-4">
          <p>© 2025 | {SITE_NAME} RESTAURANT GROUP</p>
          <p>Design & Created by KalineZephyr</p>
        </div>
      </div>
    </footer>
  );
}
