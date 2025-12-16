import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SpecialMenu from "@/components/SpecialMenu";
import OursMenu from "@/components/OursMenu";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <SpecialMenu />
      <OursMenu />
    </main>
  );
}
