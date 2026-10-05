"use client";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ---------------------------------------------------------------
   Edit everything here. Values are placeholders from the design.
   Put the photos in /public (impact-1.jpg, impact-2.jpg).
---------------------------------------------------------------- */
const IMPACT = {
    eyebrow: "Impact that matters",
    heading: "Bridging the Tech Divide for Every Curious Mind.",
    paragraph:
        "At Codwiz, we believe that geography or economic status should never define a child's digital future. What began as grassroots weekend sessions in Umuahia has blossomed into regional outreach tours, outfitting classrooms with hands-on coding equipment, robotic toolkits, and mentor networks.",
    bars: [
        {
            label: "Students with Hands-on Coding Confidence",
            value: 88,
            barClass: "bg-gradient-to-r from-blue-700 to-blue-500",
        },
        {
            label: "Partner Schools with Ongoing STEM Clubs",
            value: 75,
            barClass: "bg-gradient-to-r from-cyan-700 to-sky-400",
        },
    ],
    testimonial: {
        image: "/impact-1.jpg",
        quote:
            "Before Codwiz visited our school, I had never touched a computer. Now I built my first Scratch game!",
        name: "Chiamaka O.",
        role: "Grade 6 Scholar",
    },
    spotlight: {
        image: "/impact-2.jpg",
        barLabel: "Digital Literacy Reached",
        barValue: 92,
        statLabel: "Robotics Kits Deployed:",
        statValue: "140+ Units",
    },
    cta: { label: "Discover Our Story, Values & Mentors", to: "about" },
};

export default function Impacts() {
    const { testimonial, spotlight } = IMPACT;

    return (
        <section
            id="impacts"
            className="px-5 lg:px-20 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16"
        >
            {/* Left: photo cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start max-w-xl mx-auto w-full">
                {/* Testimonial card */}
                <div className="bg-white rounded-2xl shadow-lg p-3">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                            src={testimonial.image}
                            alt="Codwiz student at work"
                            fill
                            sizes="(min-width: 1024px) 20vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                    <p className="mt-4 text-sm italic text-gray-600 leading-snug">
                        &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-3 mb-1 flex items-center justify-between text-xs">
                        <span className="font-semibold text-blue-700">
                            {testimonial.name}
                        </span>
                        <span className="text-gray-500">{testimonial.role}</span>
                    </div>
                </div>

                {/* Spotlight card (offset down for the overlap look) */}
                <div className="bg-white rounded-2xl shadow-lg p-3 sm:mt-12">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                        <Image
                            src={spotlight.image}
                            alt="Student with a robotics kit"
                            fill
                            sizes="(min-width: 1024px) 20vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="mt-4 mb-1">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-gray-900 mb-1.5">
                            <span>{spotlight.barLabel}</span>
                            <span className="text-blue-700">{spotlight.barValue}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-blue-700"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${spotlight.barValue}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                        <p className="mt-2 text-[11px] text-gray-500">
                            {spotlight.statLabel}{" "}
                            <span className="font-semibold text-gray-900">
                                {spotlight.statValue}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right: text + progress bars */}
            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
                    {IMPACT.eyebrow}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-neutral-900 mb-5">
                    {IMPACT.heading}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
                    {IMPACT.paragraph}
                </p>

                <div className="space-y-5 max-w-xl mb-8">
                    {IMPACT.bars.map((bar) => (
                        <div key={bar.label}>
                            <div className="flex items-center justify-between text-sm font-semibold text-gray-900 mb-1.5">
                                <span>{bar.label}</span>
                                <span className="text-blue-700 text-xs">{bar.value}%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                                <motion.div
                                    className={`h-full rounded-full ${bar.barClass}`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${bar.value}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <ScrollLink
                    to={IMPACT.cta.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 underline underline-offset-4 cursor-pointer hover:text-blue-900 transition"
                >
                    {IMPACT.cta.label}
                    <ArrowRight size={16} />
                </ScrollLink>
            </div>
        </section>
    );
}