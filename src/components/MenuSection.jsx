import React from 'react';
import Bg from '../assets/MainSecBg.png';
import leftDrink from '../assets/glass.png';
import rightDrink from '../assets/glass2.png';

function MenuSection() {
    return (
        <div>
            <div className="bg-black h-[100px] flex flex-row items-center justify-center gap-6 text-white text-center">
                <button className="bg-black border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600 px-6 py-2 font-semibold ">
                    FOOD
                </button>
                <button className="bg-black border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600 px-6 py-2 font-semibold ">
                    DRINKS
                </button>
                <button className="bg-black border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600 px-6 py-2 font-semibold ">
                    BRUNCH
                </button>
            </div>

            <div className="relative w-full min-h-[700px] overflow-hidden pt-20">
                <img
                    src={Bg}
                    alt="bg"
                    className="absolute inset-0 w-full h-full object-cover "
                />


                <div className="relative z-20 max-w-5xl mx-auto border-4 border-gray-500 p-4 sm:p-6 md:p-8 flex flex-col justify-center h-full mx-4">
                    <img
                        src={leftDrink}
                        alt="left drink"
                        className="absolute -top-20 left-0 w-30 z-30"
                    />

                    <img
                        src={rightDrink}
                        alt="right drink"
                        className="absolute -bottom-10 right-0 w-28 z-30"
                    />

                    <h2 className="text-center sm:text-xl md:text-4xl font-bold text-white mb-8 tracking-wide">
                        BRUNCH COCKTAILS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex text-white justify-between items-center border-b border-gray-600 pb-2 mb-2">
                                <h3 className="text-xl font-semibold">CINNAMON TOAST CRUNCH</h3>
                                <span className="text-xl font-bold">$16</span>
                            </div>
                            <p className="text-gray-300 mb-6">
                                Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys,
                                egg white, cinnamon
                            </p>
                            <div className="flex text-white justify-between items-center border-b border-gray-600 pb-2 mb-2">
                                <h3 className="text-xl font-semibold">BAR 42 MARY</h3>
                                <span className="text-xl font-bold">$14</span>
                            </div>
                            <p className="text-gray-300">
                                Titos, tomato juice, worcestershire, celery salt, black pepper,
                                tabasco, fully loaded
                            </p>
                        </div>

                        <div>
                            <div className="flex text-white justify-between items-center border-b border-gray-600 pb-2 mb-2">
                                <h3 className="text-xl font-semibold">MOET SPRITZ</h3>
                                <span className="text-xl font-bold">$20</span>
                            </div>
                            <p className="text-gray-300">
                                Aperol, St Germain, botanical liquor, fresh lime juice, mini brut
                                Moet topper
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuSection;
