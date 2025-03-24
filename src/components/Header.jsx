import React from 'react'
import bannerimg from '../assets/BannerImg.jpg'

function Header() {
    return (
        <>
            <div className="w-full  relative">
                <img
                    src={bannerimg}
                    alt="Banner"
                    className="w-full h-[80vh] "
                />
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-44 text-white text-center px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">MENU</h1>
                    <p className="max-w-xl text-base sm:text-lg md:text-xl mb-4">
                        Please take a look at our menu featuring food, drinks, and brunch.
                        If you'd like to place an order, use the "Order Online" button located below the menu.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Header
