"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current route

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <h2 className="text-2xl font-bold">MyApp</h2>
                        </Link>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Links for Desktop */}
                    <div className="hidden md:flex space-x-4">
                        {navLinks.map((link) => (
                            <Link key={link.path} href={link.path}>
                                <h2
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === link.path
                                        ? "bg-gray-900 text-white"
                                        : "hover:bg-gray-700"
                                        }`}
                                >
                                    {link.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-700">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link key={link.path} href={link.path}>
                                <h2
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.path
                                        ? "bg-gray-900 text-white"
                                        : "hover:bg-gray-600"
                                        }`}
                                >
                                    {link.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
