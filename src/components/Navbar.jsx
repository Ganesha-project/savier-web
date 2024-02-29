"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 750);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className="flex justify-center">
                <div className={` ${isScrolled ? 'bg-[#ffffff78] text-gray-800' : 'bg-[#ffffff78] text-gray-800'} flex backdrop-blur-lg lg:my-1 lg:rounded-box mx-2 w-full lg:w-fit items-center lg:justify-center justify-between fixed z-50`}>
                    <div className="flex items-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a
                                        href="#about-us"
                                        className="">
                                        About Us</a>
                                </li>
                                <li>
                                    <a
                                        href="#vision-mission"
                                        className="">
                                        Vision & Mission</a>
                                </li>
                                <li>
                                    <a
                                        href="#products"
                                        className="">
                                        Products</a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="">
                                        Contact</a>
                                </li>
                                <li>
                                    <a
                                        href="#location"
                                        className="">
                                        Location</a>
                                </li>
                            </ul>
                        </div>
                        <a className="lg:px-2 lg:py-2 px-1 py-1 rounded-md lg:rounded-xl ml-1 hover:bg-[#ffffff43] duration-500 text-xl">Holidays!</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <a
                                    href="#about-us"
                                    className="">
                                    About Us</a>
                            </li>
                            <li>
                                <a
                                    href="#vision-mission"
                                    className="">
                                    Vision & Mission</a>
                            </li>
                            <li>
                                <a
                                    href="#products"
                                    className="">
                                    Products</a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="">
                                    Contact</a>
                            </li>
                            <li>
                                <a
                                    href="#location"
                                    className="">
                                    Location</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <a className="lg:px-3 lg:py-3 px-2 py-2 bg-[#ffffff43] rounded-md lg:rounded-xl backdrop-blur-lg mr-1 hover:bg-white duration-500 hover:text-black">Chat Us!</a>
                    </div>
                </div>
            </nav>

        </>
    )
}