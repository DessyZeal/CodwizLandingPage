import { LucideIcon } from "lucide-react";

interface AboutCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function AboutCard({icon: Icon, title, description}: AboutCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-purple-blue p-4 w-16 h-16 rounded-md flex items-center justify-center mb-4">
                <Icon className=" text-white mb-4" size={32}/>
            </div>
            <h3 className="text-2xl font-bold text-black mb-3 text-start">{title}</h3>
            <p className="text-gray-500 text-start">{description}</p>
        </div>
    )
}