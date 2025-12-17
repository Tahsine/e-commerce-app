"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  // Ref pour cibler les éléments internes sans créer 10 refs différentes
  const contentRef = useRef<HTMLDivElement>(null);

  const contactInfo = {
    address: "Abomey-Calavi, Atlantique, Benin",
    addressLink: "https://maps.google.com",
    phone: "(223) 01 XX XX XX XX",
    email: "test.help@gmail.com",
  };

  const openingHours = [
    { day: "Mon", hours: "CLOSED" },
    { day: "Tue to Fri", hours: "11 AM – 10 PM" },
    { day: "Sat to Sun", hours: "12 PM – 7 PM" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      // 1. La carte monte
      tl.from(cardRef.current, {
        y: 150,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // 2. Les éléments à l'intérieur descendent (Stagger)
      // On cible les enfants directs du div de contenu
      if (contentRef.current) {
        tl.from(
          contentRef.current.children,
          {
            y: -40, // Vient du haut
            opacity: 0,
            duration: 0.8,
            stagger: 0.15, // Délai entre chaque élément
            ease: "power3.out",
          },
          "-=0.8" // Commence légèrement avant la fin de l'animation de la carte
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-start px-5 md:px-20 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-2xl bg-[#FEFAE0] rounded-[40px] p-8 md:p-16 shadow-2xl"
      >
        {/* Wrapper pour l'animation du contenu interne */}
        <div ref={contentRef} className="flex flex-col">
          <span className="text-red-400 font-medium tracking-widest uppercase text-sm mb-6 block">
            {"{Get In Touch}"}
          </span>

          <h2 className="font-anton text-4xl md:text-6xl uppercase leading-none mb-6 text-black">
            FLAVORS THAT BRING <br /> JOY TO EVERY BITE
          </h2>

          <p className="text-gray-600 mb-12 max-w-md">
            Our dishes are made with only fresh and local ingredients.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="font-anton text-2xl uppercase border-b border-black/10 pb-2">
                Find Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group">
                  <MapPin size={18} className="text-red-400" />
                  <a
                    href={contactInfo.addressLink}
                    target="_blank"
                    className="hover:underline transition-all"
                  >
                    {contactInfo.address}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-red-400" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-red-400" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-anton text-2xl uppercase border-b border-black/10 pb-2">
                Opening Hours
              </h4>
              <ul className="space-y-3">
                {openingHours.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between text-sm md:text-base"
                  >
                    <span className="font-medium">{item.day}:</span>
                    <span className="text-gray-600">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
