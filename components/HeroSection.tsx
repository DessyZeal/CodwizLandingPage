"use client"
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section id="hero-section" className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-5  lg:px-20 py-10 pt-28 lg:py-0 gap-8 lg:gap-0">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-start mb-8 text-black max-w-3xl">
                    Empowering Kids Through <span className="bg-text-gradient bg-clip-text text-transparent">Technology.</span>
                </h1>
                <p className="text-gray-500 font-medium mb-8 max-w-lg">
                    Join our vibrant community where children learn coding, robotics, and digital creativity in a fun, supportive environment.
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
                        className="bg-transparent text-black font-semibold px-6 py-3 rounded-md cursor-pointer shadow-md hover:bg-gradient-purple-blue border border-gray-400 transition duration-1000 text-center"
                    >
                        Learn More
                    </ScrollLink>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-auto"
            >
                <Image 
                    src={"/hero-image.jpg"}
                    alt="Hero Image"
                    width={600}
                    height={400}
                    className="rounded-xl w-full h-auto"
                />
            </motion.div>
        </section>
    )
}