"use client"

import Image from "next/image"
import { Link as ScrollLink } from "react-scroll";
import { Mail, Phone, Navigation } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-gray-300">
            <section className="grid  md:grid-cols-4 md:justify-between md:items-start items-center bg-white p-3 md:p-9 gap-10">
                <div className="">
                    <Image
                        src="/CodwizLogo.png"
                        alt="Codwiz Logo"
                        width={100}
                        height={100}
                    />
                    <p className="text-gray-500 text-sm text-start ">Empowering the next generation of innovators.</p>
                </div>
                <div className="text-start">
                    <h2 className="text-sm font-medium text-black mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <ScrollLink 
                                to="home"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="text-gray-600 text-sm font-normal hover:text-white cursor-pointer transition"
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink 
                                to="about"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="text-gray-600 text-sm font-normal hover:text-white cursor-pointer transition"
                            >
                                About Us
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink 
                                to="programs"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="text-gray-600 text-sm font-normal hover:text-white cursor-pointer transition"
                            >
                                Programs
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink 
                                to="join-now"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="text-gray-600 text-sm font-normal hover:text-white cursor-pointer transition"
                            >
                                Join
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
                <div className="text-start">
                    <h2 className="text-sm font-medium text-black mb-4">Programs</h2>
                    <ul className="space-y-2">
                        <li>
                            <ScrollLink 
                                to="home"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="text-gray-600 text-sm font-normal hover:text-white cursor-pointer transition"
                            >
                                Coding Classes
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink 
                                to="about"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="text-gray-600 text-sm font-normal hover:text-white cursor-pointer transition"
                            >
                                Robotics
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink 
                                to="programs"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="text-gray-600 text-sm font-normal hover:text-white cursor-pointer transition"
                            >
                                Digital Art
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink 
                                to="join-now"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="text-gray-600 text-sm font-normal hover:text-white cursor-pointer transition"
                            >
                                Game Development
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
                <div className="text-start">
                    <h2 className="text-sm font-medium text-black mb-4">Contacts</h2>
                    <ul className="space-y-2">
                        <li className="text-gray-600 flex flex-row item-center justify-start space-x-2 mb-4">
                            <Mail className=""/>
                            <p className="text-sm">codwiz@info.com</p>
                        </li>
                        <li className="text-gray-600 flex flex-row item-center justify-start space-x-2 mb-4">
                            <Phone className=""/>
                            <p className="text-sm">555 555 555</p>
                        </li>
                        <li className="text-gray-600 flex flex-row item-center justify-start space-x-2 mb-4">
                            <Navigation className=""/>
                            <p className="text-sm">Umuahia, Abia State.</p>
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
                
            </section>
            <section className="border-t border-gray-300 p-8 bg-white">
                <p className="text-gray-600 text-center">&copy; {year} Codwiz Tech Community. All Rights Reserved.</p>
            </section>
        </footer>
    )
}