"use client";
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLOptionElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const textContent =
    "[BRAND] est né d’un amour pour la bonne cuisine et le sens de l’accueil. Nos chefs allient traditions culinaires et créativité moderne pour proposer des plats qui éveillent les sens et réchauffent le cœur. Chaque ingrédient est soigneusement sélectionné.";

  const words = textContent.split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;

      const targets = gsap.utils.toArray(textRef.current.children);

      gsap.fromTo(
        targets,
        { opacity: 0.2 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex min-h-screen items-center justify-center bg-[#FEFAE0]"
    >
      <div className="flex flex-col items-start md:items-center gap-8 px-5 py-12 md:px-12 lg:px-28 lg:py-20 max-w-7xl">
        <h2
          ref={textRef}
          className="font-anton uppercase text-start md:text-center text-4xl sm:text-5xl lg:text-6xl leading-tight flex flex-wrap md:justify-center gap-x-3 gap-y-1"
        >
          {words.map((word, i) => (
            <span key={i} className="opacity-20">
              {word}
            </span>
          ))}
        </h2>

        <button className="mt-4">
          <a
            href="/"
            className="flex gap-2 py-3 px-6 bg-red-400 rounded-full hover:bg-red-500 transition-colors duration-300"
          >
            <span className="text-white font-medium">DECOUVRIR</span>
            <ArrowRight color="white" />
          </a>
        </button>
      </div>
    </section>
  );
}
