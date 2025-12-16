"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  // Heures d'ouverture (24h format)
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
    const checkIfOpen = () => {
      const now = new Date();
      const day = now
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLocaleLowerCase();
      const hour = now.getHours();

      const todayHours = openingHours[day as keyof typeof openingHours];
      setIsOpen(hour >= todayHours.open && hour < todayHours.close);
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex w-full min-h-screen items-center overflow-hidden">
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
      <div className="relative z-10 flex flex-col justify-center items-start gap-6 max-w-7xl px-16 py-20">
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm ${
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
            {isOpen ? "OPEN" : "CLOSED"}
          </span>
        </div>
        <h1
          className={`text-white text-6xl lg:text-9xl md:text-8xl font-anton`}
        >
          WHERE ELEGANCE
        </h1>
        <h1 className="text-white text-6xl lg:text-9xl md:text-8xl font-anton">
          MEETS FLAVOR
        </h1>

        <p className="text-white">
          We turn every meal into a memorable experience. <br />
          From Mouth-watering dishes crafted every time.
        </p>

        <button>
          <a href="/" className="flex gap-2 py-3 px-6 bg-red-400 rounded-full">
            <span className="text-white">EXPLORE MENU</span>
            <ArrowRight color="white" />
          </a>
        </button>
      </div>
    </section>
  );
}
