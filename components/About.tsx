import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-start md:items-center gap-6 px-5 py-12 md:px-12 lg:px-28 lg:py-20 max-w-7xl">
        <h2 className="font-anton text-start md:text-center text-4xl sm:text-5xl lg:text-6xl leading-tight ">
          DINEVO WAS BORN FROM A LOVE OF GREAT FOOD AND GENUINE HOSPITALITY. OUR
          CHEFS BLEND TRADITIONAL TECHNIQUES WITH MODERN CREATIVITY TO CRAFT
          DISHES THAT EXCITE THE SENSES AND WARM THE HEART. EVERY INGREDIENT IS
          CAREFULLY CHOSEN.
        </h2>
        <button>
          <a href="/" className="flex gap-2 py-3 px-6 bg-red-400 rounded-full">
            <span className="text-white font-medium">MORE ABOUT US</span>
            <ArrowRight color="white" />
          </a>
        </button>
      </div>
    </section>
  );
}
