"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    return (
        <nav className="bg-white text-black shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <Image
                        src="/images/Logo.png"
                        alt="Japura JobHub Logo"
                        width={110}
                        height={110}
                        className="mr-2 ml-0"
                    />
                </div>

                {/* Hamburger Icon for Mobile */}
                <button
                    className="lg:hidden text-black focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                {/* Navigation Links */}
                <ul
                    className={`lg:flex lg:space-x-8 items-center ${
                        isMenuOpen ? "block" : "hidden"
                    } lg:block absolute lg:relative bg-white lg:bg-transparent w-full lg:w-auto left-0 top-16 lg:top-auto px-6 lg:px-0 py-4 lg:py-0`}
                >
                    <li>
                        <Link href="/" className="text-gray-800 hover:text-red-900 font-medium">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-800 hover:text-red-900 font-medium">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/jobs" className="text-gray-800 hover:text-red-900 font-medium">
                            Jobs
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-800 hover:text-red-900 font-medium">
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Sign Up / Login Buttons */}
                <div className="hidden lg:flex space-x-4 mr-2">
                    <Link
                        href="/candidate-employer"
                        className="bg-red-900 text-white py-2 px-5 rounded-md text-sm font-medium hover:bg-red-800  transition-transform transform hover:scale-105"
                    >
                        Sign Up
                    </Link>
                    <Link
                        href="/candidate-employer-login"
                        className="border border-red-900 text-red-900 py-2 px-5 rounded-md text-sm font-medium hover:bg-red-900 hover:text-white transition-transform transform hover:scale-105"
                    >
                        Log in
                    </Link>

                    
                </div> 
            </div>

            {/* Mobile Sign In / Login Buttons */}
            {isMenuOpen && (
                <div className="lg:hidden flex flex-col space-y-4 mt-4 px-6">
                    <Link
                        href="/auth/signup"
                        className="bg-red-900 text-white py-2 px-6 rounded-md text-sm font-medium hover:bg-red-800 transition duration-300"
                    >
                        Sign Up
                    </Link>
                    <Link
                        href="/auth/login"
                        className="border border-red-900 text-red-900 py-2 px-6 rounded-md text-sm font-medium hover:bg-red-900 hover:text-white transition duration-300"
                    >
                        Log in
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
