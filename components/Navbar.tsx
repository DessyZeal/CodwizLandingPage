"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const LINKS = [
  { label: "Home", to: "hero-section" },
  { label: "About Us", to: "about" },
  { label: "Programs", to: "programs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // set correct state on load
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-24 flex items-center justify-between px-5 lg:px-20 z-50 transition-colors duration-300 border-b ${
        scrolled
          ? "bg-[#f6f1ec] border-gray-300 shadow-sm text-black"
          : "bg-transparent border-transparent text-white"
      }`}
    >
      {/* White chip keeps the logo readable over dark images */}
      <div
        className={`rounded-md p-1 transition-colors duration-300 ${
          scrolled ? "bg-transparent" : "bg-white/90"
        }`}
      >
        <Image
          src="/CodwizLogo.png"
          alt="Codwiz Logo"
          width={80}
          height={80}
        />
      </div>

      <ul className="hidden md:flex items-center space-x-8">
        {LINKS.map(({ label, to }) => (
          <li
            key={to}
            className="font-semibold cursor-pointer hover:text-[#7443ee] transition duration-300"
          >
            <ScrollLink to={to} smooth={true} duration={600} offset={-80}>
              {label}
            </ScrollLink>
          </li>
        ))}
        <li>
          <ScrollLink
            to="join-now"
            smooth={true}
            duration={600}
            offset={-80}
            className="bg-gradient-purple-blue text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-gradient-purple-blue/50 transition"
          >
            Join Now
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}