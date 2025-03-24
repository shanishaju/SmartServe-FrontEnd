import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';


function Footer() {
    return (
        <>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black text-white text-center  p-8">
                    <div className='border-2 border-gray-600 p-3 hover:border-blue-800'>
                        <h1 className="text-2xl font-bold mb-2">CONTSCT WITH US</h1>
                        <p className="text-sm">
                            We are a Thai restaurant located in the heart of the city. We offer a variety of Thai
                            dishes and drinks. We are open 7 days a week and offer dine-in, takeout, and delivery
                            services.
                        </p>
                    </div>

                    <div className='border-2 border-gray-600 p-3 hover:border-blue-800'>
                        <h1 className="text-2xl font-bold mb-4">
                            <span className="text-blue-500">DEEP</span>{' '}
                            <span className="text-white">NET</span>{' '}
                            <span className="text-gray-400">SOFT</span>
                        </h1>

                        <div className="flex gap-4 mt-4 justify-center">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <FaFacebookF className="text-white text-2xl hover:text-blue-500 cursor-pointer" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <FaInstagram className="text-white text-2xl hover:text-pink-500 cursor-pointer" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                                <FaYoutube className="text-white text-2xl hover:text-red-600 cursor-pointer" />
                            </a>
                        </div>
                    </div>

                    <div className='border-2 border-gray-600 p-3 hover:border-blue-800'>
                        <h1 className="text-2xl font-bold mb-2">FIND US</h1>
                        <p>First floor,</p>
                        <p> Geo infopark, </p>
                        <p>EXPY, Kakkanad</p>
                    </div>
                </div>

                <div className="bg-gray-700 text-gray-400 text-center p-4 text-sm">
                    © 2024 shani. All rights reserved.
                </div>
            </div>
        </>
    );
}

export default Footer;
