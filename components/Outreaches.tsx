import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flag, MapPin, Search } from "lucide-react";

/* ---------------------------------------------------------------
   Edit everything here. Values are placeholders from the design.
   Put the photos in /public (outreach-1.jpg, outreach-2.jpg).
---------------------------------------------------------------- */
const OUTREACHES = {
    eyebrow: "Recent field tours",
    heading: "Our Recent STEM Outreaches",
    description:
        "See where our mobile tech caravans, hardware toolkits, and volunteer mentors have recently sparked creative problem solving.",
    allButton: { label: "See All STEM Outreaches & Community Tours (12+)", href: "#" },
    items: [
        {
            image: "/outreach-1.jpg",
            location: "Umuahia, Abia",
            topic: "Robotics & Scratch",
            locationClass: "bg-blue-700 text-white",
            topicClass: "bg-white/90 text-blue-700",
            title: "Umuahia Public School STEM Day Tour",
            description:
                "Conducted a 2-day intensive digital immersion workshop across 3 community schools, introducing 240 primary school kids to visual coding, logic puzzle games, and electronics.",
            stats: [
                { value: "240", label: "Kids Reached" },
                { value: "45", label: "Projects Built" },
                { value: "100%", label: "Free Access" },
            ],
            href: "#",
        },
        {
            image: "/outreach-2.jpg",
            location: "Bende Community Hub",
            topic: "Girls in Tech & AI",
            locationClass: "bg-teal-700 text-white",
            topicClass: "bg-white/90 text-teal-700",
            title: "Rural Innovators Girls in Tech Bootcamp",
            description:
                "Empowering young girls from rural agrarian communities with beginner AI concepts, graphic storytelling, and algorithmic thinking to solve environmental challenges.",
            stats: [
                { value: "180", label: "Girls Mentored" },
                { value: "15", label: "Kits Donated" },
                { value: "6", label: "STEM Clubs" },
            ],
            href: "#",
        },
    ],
};

export default function Outreaches() {
    return (
        <section id="outreaches" className="px-4 lg:px-20 pt-20 pb-20">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#2b2d2c] px-5 md:px-10 lg:px-12 py-12 lg:py-14">
                {/* Soft blue glow, top right */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl"
                />

                {/* Header */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:items-start mb-10">
                    <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-200 mb-4">
                            <Flag size={11} />
                            {OUTREACHES.eyebrow}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
                            {OUTREACHES.heading}
                        </h2>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed md:max-w-sm md:ml-auto md:pt-2">
                        {OUTREACHES.description}
                    </p>
                </div>

                {/* Cards */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                    {OUTREACHES.items.map((item) => (
                        <article
                            key={item.title}
                            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                        >
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(min-width: 768px) 45vw, 100vw"
                                    className="object-cover"
                                />
                                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                    <span
                                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${item.locationClass}`}
                                    >
                                        <MapPin size={11} />
                                        {item.location}
                                    </span>
                                    <span
                                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold ${item.topicClass}`}
                                    >
                                        {item.topic}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-5 lg:p-6">
                                <h3 className="text-xl font-semibold leading-snug text-neutral-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] leading-relaxed text-gray-500 mb-4">
                                    {item.description}
                                </p>

                                <div className="grid grid-cols-3 rounded-lg bg-neutral-100 py-3 text-center mb-6">
                                    {item.stats.map((s) => (
                                        <div key={s.label}>
                                            <p className="text-lg font-bold text-blue-700 leading-none">
                                                {s.value}
                                            </p>
                                            <p className="mt-1 text-[11px] text-gray-500">{s.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={item.href}
                                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 transition"
                                >
                                    Read Full Outreach Recap
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* All outreaches button */}
                <div className="relative mt-10 flex justify-center">
                    <Link
                        href={OUTREACHES.allButton.href}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-md hover:bg-gray-100 transition text-center"
                    >
                        {OUTREACHES.allButton.label}
                        <Search size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
}