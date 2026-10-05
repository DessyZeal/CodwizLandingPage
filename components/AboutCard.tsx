import { LucideIcon } from "lucide-react";

interface AboutCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    chipClassName?: string; // background of the icon chip
    iconClassName?: string; // icon color
}

export default function AboutCard({
    icon: Icon,
    title,
    description,
    chipClassName = "bg-indigo-100",
    iconClassName = "text-indigo-600",
}: AboutCardProps) {
    return (
        <div className="bg-white p-5 rounded-xl shadow-sm text-start hover:shadow-lg transition-shadow duration-300">
            <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${chipClassName}`}
            >
                <Icon className={iconClassName} size={20} />
            </div>
            <h3 className="text-lg font-semibold leading-snug text-neutral-900 mb-2">
                {title}
            </h3>
            <p className="text-[13px] leading-relaxed text-gray-500">
                {description}
            </p>
        </div>
    );
}