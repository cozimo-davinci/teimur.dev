import React, { useState } from 'react';
import { navLinks } from "../constants/constants.js";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a
                        href={href}
                        className="nav-li_a"
                        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b-4 border-green-600">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    {/* Left side: icon and Teimur text */}
                    <div className="flex items-center gap-2">
                        <div className="social-icon">
                            <img
                                src="/assets/hacker.svg"
                                alt="hacker"
                                className="w-2/3 h-2/3"
                            />
                        </div>
                        <a
                            href="/"
                            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors hover:scale-105"
                        >
                            Teimur
                        </a>
                    </div>
                    {/* Mobile menu toggle button */}
                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 focus:outline-none hover:text-white sm:hidden"
                        aria-label="Toggle menu"
                    >
                        <img
                            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6"
                        />
                    </button>
                    {/* Desktop navigation */}
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            {/* Mobile menu sidebar */}
            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
