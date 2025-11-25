import AboutCard from "./AboutCard";
import { Users, Rocket, Heart, Trophy } from "lucide-react";

export default function About() {
    return (
        <section>
            <div className="flex flex-col items-center justify-center px-3 lg:px-20 py-10 pt-28 lg:py-0 gap-8">
                <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
                    About   Our <span className="bg-text-gradient bg-clip-text text-transparent">Community</span>
                </h2>
                <p className="text-gray-600 font-medium max-w-4xl text-center">
                    At Codwiz, we believe in the power of technology to transform lives. Our mission is to empower children with the skills and confidence they need to thrive in a digital world. Through our engaging programs, we teach coding, robotics, and digital creativity in a fun and supportive environment. Join us on this exciting journey and help shape the future, one child at a time.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-20 py-10">
                <AboutCard
                    icon={Users}
                    title="Community Focused"
                    description="Building a supportive environment for kids to learn and grow together."
                />
                <AboutCard
                    icon={Rocket}
                    title="Innovative Learning"
                    description="Cutting-edge curriculum that makes learning technology fun and engaging."
                />
                <AboutCard
                    icon={Heart}
                    title="Passionate Instructors"
                    description="Dedicated educators who inspire and nurture young minds."
                />
                <AboutCard
                    icon={Trophy}
                    title="Proven Success"
                    description="Empowering thousands of children to achieve their tech dreams."
                />
            </div>
        </section>
    );
}