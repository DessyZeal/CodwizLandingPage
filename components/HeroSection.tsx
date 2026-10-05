"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

// Put these files in /public (swap names for your real ones)
const BG_IMAGES = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
  "/hero-4.jpg",
];

const SLIDE_INTERVAL = 6000; // ms between images
const FADE_DURATION = 1.5; // s
const ZOOM_DURATION = 9; // s (longer than interval so zoom never stalls mid-fade)

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % BG_IMAGES.length),
      SLIDE_INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen overflow-hidden flex items-center px-5 lg:px-20 pt-28 pb-10"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0 -z-10 bg-black">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: FADE_DURATION, ease: "easeInOut" },
              scale: { duration: ZOOM_DURATION, ease: "linear" },
            }}
          >
            <Image
              src={BG_IMAGES[index]}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Static content (does not change with the slides) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-start mb-8 text-white max-w-3xl">
          Empowering Kids Through{" "}
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Technology.
          </span>
        </h1>
        <p className="text-gray-200 font-medium mb-8 max-w-lg">
          Join our vibrant community where children learn coding, robotics, and
          digital creativity in a fun, supportive environment.
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <ScrollLink
            to="programs"
            smooth={true}
            duration={600}
            offset={-80}
            className="bg-gradient-purple-blue text-white font-semibold px-6 py-3 rounded-md cursor-pointer hover:bg-gradient-purple-blue/50 transition text-center"
          >
            Get Started Today
          </ScrollLink>
          <ScrollLink
            to="programs"
            smooth={true}
            duration={600}
            offset={-80}
            className="bg-transparent text-white font-semibold px-6 py-3 rounded-md cursor-pointer border border-white/60 hover:bg-white/10 transition text-center"
          >
            Learn More
          </ScrollLink>
        </div>
      </motion.div>
    </section>
  );
}