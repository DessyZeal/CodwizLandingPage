import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import OurPrograms from "@/components/OurPrograms";
import Impacts from "@/components/Impacts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <OurPrograms />
      <Impacts />
    </main>
  );
}
