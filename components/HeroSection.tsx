"use client"
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="h-screen flex flex-row items-center justify-between px-20">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-7xl font-bold text-start mb-8 text-black max-w-2xl">
                    Empowering Kids Through <span className="bg-text-gradient bg-clip-text text-transparent">Technology.</span>
                </h1>
                <p className="text-gray-500 font-medium mb-8 max-w-lg">
                    Join our vibrant community where children learn coding, robotics, and digital creativity in a fun, supportive environment.
                </p>
                <div className="flex space-x-4">
                    <ScrollLink
                        to="programs"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="bg-gradient-purple-blue text-white font-semibold px-6 py-3 rounded-md cursor-pointer hover:bg-gradient-purple-blue/50 transition"
                    >
                        Get Started Today
                    </ScrollLink>
                    <ScrollLink
                        to="programs"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="bg-transparent text-black font-semibold px-6 py-3 rounded-md cursor-pointer hover:bg-orange-400 border border-gray-400 transition"
                    >
                        Learn More
                    </ScrollLink>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image 
                    src={"/hero-image.jpg"}
                    alt="Hero Image"
                    width={600}
                    height={400}
                    className="rounded-xl"
                />
            </motion.div>
        </section>
    )
}