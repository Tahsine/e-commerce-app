import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070')",
        }}
      >
        {/* Overlay*/}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-6xl md:text-8xl font-black tracking-wider leading-tight mb-8">
          PATISSERIE ET CUISINE
        </h1>
      </div>

      {/* Location & Number */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className=" text-white text-center space-y-2">
          <p className="text-xl font-bold tracking-widest">COTONOU, BÉNIN</p>
          <p className="text-xl font-bold tracking-wider">
            (+229) 01 XX XX XX XX
          </p>
        </div>
      </div>
    </div>
  );
}
