import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import OurPrograms from "@/components/OurPrograms";
import Impacts from "@/components/Impacts";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <OurPrograms />
      <Impacts />
      <ImageCarousel />
      <GetStarted />
      <Footer />
    </main>
  );
}
