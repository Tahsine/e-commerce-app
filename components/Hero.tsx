"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import { OPENING_HOURS } from "@/lib/data";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const day = now
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase();
      const hour = now.getHours();
      const todayHours = OPENING_HOURS[day as keyof typeof OPENING_HOURS];
      if (todayHours) {
        setIsOpen(hour >= todayHours.open && hour < todayHours.close);
      }
    };
    checkIfOpen();

    const ctx = gsap.context(() => {
      // Optimisation performance : Utiliser yPercent au lieu de y pour mobile
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.fromTo(
        [
          badgeRef.current,
          title1Ref.current,
          title2Ref.current,
          textRef.current,
          buttonRef.current,
        ],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, delay: 0.3 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex w-full min-h-svh items-center overflow-hidden bg-black"
    >
      {/* 1. Vidéo optimisée avec poster (image de secours) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/test-image.jpeg" // Indispensable pour éviter l'écran noir
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/test-video.mp4" type="video/mp4" />
      </video>

      {/* 2. Overlay ajusté */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1" />

      {/* 3. Content : Utilisation de svh (short viewport height) pour mobile */}
      <div className="relative z-10 flex flex-col justify-center items-start gap-4 md:gap-6 max-w-7xl px-6 md:px-16 pt-32 pb-20">
        {/* Badge Statut */}
        <div
          ref={badgeRef}
          className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-opacity duration-500 ${
            isOpen
              ? "bg-green-500/20 border border-green-500/50"
              : "bg-red-500/20 border border-red-500/50"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
            }`}
          />
          <span
            className={`text-xs md:text-sm font-bold uppercase tracking-widest ${
              isOpen ? "text-green-400" : "text-red-400"
            }`}
          >
            {isOpen ? "OUVERT" : "FERMÉ"}
          </span>
        </div>

        {/* Titres Responsive (vw pour mobile) */}
        <div className="flex flex-col">
          <h1
            ref={title1Ref}
            className="text-white text-[12vw] md:text-8xl lg:text-[9rem] font-anton leading-[0.9] uppercase"
          >
            L'ÉLÉGANCE DANS
          </h1>
          <h1
            ref={title2Ref}
            className="text-white text-[12vw] md:text-8xl lg:text-[9rem] font-anton leading-[0.9] uppercase"
          >
            CHAQUE SAVEUR
          </h1>
        </div>

        {/* Paragraphe plus court sur mobile */}
        <p
          ref={textRef}
          className="text-gray-200 text-base md:text-xl max-w-xl font-medium leading-relaxed"
        >
          Nous transformons chaque repas en une expérience inoubliable avec des
          produits frais.
        </p>

        {/* Bouton */}
        <div ref={buttonRef}>
          <a
            href="/menu"
            className="group flex items-center gap-3 py-4 px-10 bg-red-500 hover:bg-black text-white transition-all duration-300 rounded-full shadow-2xl"
          >
            <span className="text-sm font-black uppercase tracking-[0.2em]">
              DÉCOUVRIR LE MENU
            </span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
