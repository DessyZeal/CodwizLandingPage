"use client"

import Image from "next/image"
import { Link as ScrollLink } from "react-scroll";
import { Mail, Phone, Navigation } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-gray-300">
            <section className="flex flex-col bg-white p-3">
                <div className="mb-6">
                    <Image
                        src="/CodwizLogo.png"
                        alt="Codwiz Logo"
                        width={100}
                        height={100}
                    />
                    <p className="text-gray-500 text-lg text-start">Empowering the next generation of innovators.</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-normal text-black mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <ScrollLink 
                                to="home"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="text-gray-600 font-normal hover:text-white cursor-pointer transition"
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
                                className="text-gray-600 font-normal hover:text-white cursor-pointer transition"
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
                                className="text-gray-600 font-normal hover:text-white cursor-pointer transition"
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
                                className="text-gray-600 font-normal hover:text-white cursor-pointer transition"
                            >
                                Join
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-normal text-black mb-4">Programs</h2>
                    <ul className="space-y-2">
                        <li>
                            <ScrollLink 
                                to="home"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="text-gray-600 font-normal hover:text-white cursor-pointer transition"
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
                                className="text-gray-600 font-normal hover:text-white cursor-pointer transition"
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
                                className="text-gray-600 font-normal hover:text-white cursor-pointer transition"
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
                                className="text-gray-600 font-normal hover:text-white cursor-pointer transition"
                            >
                                Game Development
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-normal text-black mb-4">Contacts</h2>
                    <ul className="space-y-2">
                        <li className="text-gray-600 flex flex-row item-center justify-start space-x-2 mb-4">
                            <Mail className="text-gray-600"/>
                            <p>codwiz@info.com</p>
                        </li>
                        <li className="text-gray-600 flex flex-row item-center justify-start space-x-2 mb-4">
                            <Phone className="text-gray-600"/>
                            <p>555 555 555</p>
                        </li>
                        <li className="text-gray-600 flex flex-row item-center justify-start space-x-2 mb-4">
                            <Navigation className="text-gray-600"/>
                            <p>Umuahia, Abia State.</p>
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