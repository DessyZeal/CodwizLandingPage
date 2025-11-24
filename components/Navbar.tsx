"use client";
import Image from "next/image";

import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 md:px-20 border-b border-gray-300 bg-custom-lavender-80 text-black z-50">
        <Image
            src="/CodwizLogo.png"
            alt="Codwiz Logo"
            width={100}
            height={100}
        />

      <ul className="hidden md:flex space-x-8">
        <li className="text-black font-semibold cursor-pointer hover:text-[#7443ee] transition">
          <ScrollLink
            to="howitworks"
            smooth={true}
            duration={600}
            offset={-80} // offset for navbar height
          >
            Home
          </ScrollLink>
        </li>
        <li className="text-black font-semibold cursor-pointer hover:text-[#7443ee] transition">
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={600}
            offset={-80}
          >
            About Us
          </ScrollLink>
        </li>
        <li className="text-black font-semibold cursor-pointer hover:text-[#7443ee] transition">
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={600}
            offset={-80}
          >
            Programs
          </ScrollLink>
        </li>
        <li>
            <ScrollLink
                to="pricing"
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
