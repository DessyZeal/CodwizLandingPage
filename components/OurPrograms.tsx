import AboutCard from "./AboutCard";
import { Code, Gamepad, WebcamIcon, Lightbulb, RadarIcon, Paintbrush } from "lucide-react";

export default function OurPrograms() {
    return (
        <section id="programs" className="pb-20">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
                    Our <span className="bg-text-gradient bg-clip-text text-transparent">Programs</span>
                </h2>
                <p className="text-gray-500 font-medium max-w-4xl text-center mx-auto mt-4">
                    Explore our diverse range of programs designed to ignite creativity and foster technological skills in children of all ages.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20 py-10">
                {/* Program cards would go here */}
                <AboutCard
                    icon={Code}
                    title="Coding classes"
                    description="Interactive coding lessons that teach kids the fundamentals of programming through fun projects."
                />
                <AboutCard
                    icon={Gamepad}
                    title="Game Development"
                    description="Hands-on workshops where kids create their own video games using popular game development tools."
                />
                <AboutCard
                    icon={WebcamIcon}
                    title="Robotics"
                    description="Engaging robotics courses that introduce children to building and programming robots."
                />
                <AboutCard
                    icon={Lightbulb}
                    title="Creative Tech"
                    description="Encouraging innovation through projects that combine art and technology."
                />
                <AboutCard
                    icon={RadarIcon}
                    title="AI for Kids"
                    description="Simplified AI concepts taught through interactive activities and real-world applications."
                />
                <AboutCard
                    icon={Paintbrush}
                    title="Digital Art"
                    description="Courses that explore digital creativity using graphic design and animation software."
                />
            </div>
        </section>
    )
}