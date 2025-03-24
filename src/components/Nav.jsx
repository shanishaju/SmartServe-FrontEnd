import React, { useState } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="px-16 py-8" style={{ backgroundColor: '#121618' }}>
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold text-white">THAIKITCHEN</h1>

                <div className="hidden lg:flex gap-6 text-gray-300 font-bold text-sm">
                    <a href="/" className="hover:text-blue-400">HOME</a>
                    <a href="/" className="hover:text-blue-400">MENU</a>
                    <a href="/" className="hover:text-blue-400">MAKE A RESERVATION</a>
                    <a href="/" className="hover:text-blue-400">ADD MENU</a>
                    <a href="/contact" className="hover:text-blue-400">CONTACT-US</a>
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-blue-400 text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden flex flex-col gap-4 mt-3 px-6 text-gray-300 text-sm">
                    <a href="/" className="hover:text-blue-400">HOME</a>
                    <a href="/" className="hover:text-blue-400">MENU</a>
                    <a href="/" className="hover:text-blue-400">MAKE A RESERVATION</a>
                    <a href="/" className="hover:text-blue-400">ADD MENU</a>
                    <a href="/contact" className="hover:text-blue-400">CONTACT-US</a>
                </div>
            )}
        </nav>
    );
}

export default Nav;
