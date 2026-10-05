import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import OurPrograms from "@/components/OurPrograms";
import Impacts from "@/components/Impacts";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import Outreaches from "@/components/Outreaches";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <Impacts />
      <Outreaches />
      <OurPrograms />
      <ImageCarousel />
      <GetStarted />
      <Footer />
    </main>
  );
}
