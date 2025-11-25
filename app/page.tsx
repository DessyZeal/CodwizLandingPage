import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import OurPrograms from "@/components/OurPrograms";
import Impacts from "@/components/Impacts";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <OurPrograms />
      <Impacts />
      <GetStarted />
    </main>
  );
}
