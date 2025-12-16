"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  // Refs pour l'animation
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const openingHours = {
    monday: { open: 11, close: 22 },
    tuesday: { open: 11, close: 22 },
    wednesday: { open: 11, close: 22 },
    thursday: { open: 11, close: 22 },
    friday: { open: 11, close: 23 },
    saturday: { open: 10, close: 23 },
    sunday: { open: 10, close: 21 },
  };

  useEffect(() => {
    // 1. Logique d'ouverture
    const checkIfOpen = () => {
      const now = new Date();
      const day = now
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase();
      const hour = now.getHours();
      const todayHours = openingHours[day as keyof typeof openingHours];
      if (todayHours) {
        setIsOpen(hour >= todayHours.open && hour < todayHours.close);
      }
    };
    checkIfOpen();

    // 2. Animation GSAP
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      tl.fromTo(
        [
          badgeRef.current,
          title1Ref.current,
          title2Ref.current,
          textRef.current,
          buttonRef.current,
        ],
        {
          y: -50, // Part du haut
          opacity: 0, // Invisible
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2, // Délai entre chaque élément
          delay: 0.5, // Attendre un peu que le site charge
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex w-full min-h-screen items-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/test-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-start gap-6 max-w-7xl px-8 md:px-16 py-20">
        {/* Badge Statut */}
        <div
          ref={badgeRef}
          className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm opacity-0 ${
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
            className={`text-sm font-medium ${
              isOpen ? "text-green-100" : "text-red-100"
            }`}
          >
            {isOpen ? "OUVERT" : "FERMÉ"}
          </span>
        </div>

        {/* Titres */}
        <div className="overflow-hidden">
          <h1
            ref={title1Ref}
            className="text-white text-5xl md:text-8xl lg:text-9xl font-anton leading-none opacity-0"
          >
            L'ÉLÉGANCE DANS
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            ref={title2Ref}
            className="text-white text-5xl md:text-8xl lg:text-9xl font-anton leading-none opacity-0"
          >
            CHAQUE SAVEUR
          </h1>
        </div>

        {/* Paragraphe */}
        <p
          ref={textRef}
          className="text-white text-lg md:text-xl max-w-2xl opacity-0"
        >
          Nous transformons chaque repas en une expérience inoubliable. <br />
          Des plats savoureux, préparés avec soin.
        </p>

        {/* Bouton wrapper pour l'animation */}
        <div ref={buttonRef} className="opacity-0">
          <a
            href="/"
            className="group flex items-center gap-2 py-4 px-8 bg-red-400 hover:bg-red-500 transition-all duration-300 rounded-full w-fit"
          >
            <span className="text-white font-bold uppercase tracking-wider">
              Explore Menu
            </span>
            <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
