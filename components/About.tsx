import AboutCard from "./AboutCard";
import { Users, Code, HandHeart, Award, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="px-4 lg:px-20 pt-20 pb-20">
            <div className="rounded-[2rem] bg-neutral-100 border border-neutral-200/60 px-5 md:px-10 lg:px-12 py-12 lg:py-14">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-5 mb-12">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                        About our community &amp; mission
                    </span>

                    <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-neutral-900">
                        Sparking Curiosity,{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Igniting Dreams
                        </span>{" "}
                        in Every Classroom
                    </h2>

                    <p className="max-w-3xl text-sm md:text-base text-gray-500 leading-relaxed">
                        At Codwiz, we believe every child, regardless of geography or economic status deserves hands-on access to the tools of tomorrow. From humble weekend workshops in Umuahia to regional school tours, our mission is to empower the next generation of African tech innovators, makers, and problem solvers through playful STEM education.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    <AboutCard
                        icon={Users}
                        title="Community Focused"
                        description="Building a supportive, collaborative environment for kids to explore and build together."
                        chipClassName="bg-indigo-100"
                        iconClassName="text-indigo-600"
                    />
                    <AboutCard
                        icon={Code}
                        title="Innovative Hands-on Learning"
                        description="Practical, cutting-edge curriculum spanning Scratch, Python, micro:bits, and robotics."
                        chipClassName="bg-sky-100"
                        iconClassName="text-sky-600"
                    />
                    <AboutCard
                        icon={HandHeart}
                        title="Passionate Instructors"
                        description="Dedicated volunteer engineers and educators who inspire and guide young minds."
                        chipClassName="bg-indigo-100"
                        iconClassName="text-indigo-600"
                    />
                    <AboutCard
                        icon={Award}
                        title="Proven Lasting Impact"
                        description="Over 500+ students empowered with ongoing school tech clubs and lifelong confidence."
                        chipClassName="bg-blue-600"
                        iconClassName="text-white"
                    />
                </div>
            </div>
        </section>
    );
}