import React, { useEffect, useState } from 'react';
import Bg from '../assets/MainSecBg.png';
import leftDrink from '../assets/glass.png';
import rightDrink from '../assets/glass2.png';
import { GetMenuApi, GetMenuItemByIdApi } from '../services/allApi';

function MenuSection() {
    const [menus, setMenus] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
  
    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await GetMenuApi();
                setMenus(response.data);
                console.log(response.data);
                
                response.data.length > 0 && fetchMenuItems(response.data[0].id);
                
            } catch (error) {
                console.error("Error fetching menus:", error);
            }
        };

        fetchMenus();
    }, []);
    const fetchMenuItems = async (id) => {
        try {
            const response = await GetMenuItemByIdApi(id);
            console.log("Fetched items:", response.data);
            setMenuItems(response.data.items); 
        } catch (error) {
            console.error("Error fetching menu items:", error);
        }
    };
    

    return (
        <div>
            <div className="bg-black h-[100px] flex flex-row items-center justify-center gap-6 text-white text-center">
                {menus.map((menu) => (
                    <button
                        key={menu._id}
                        onClick={() => fetchMenuItems(menu.id)}
                        className="bg-black border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600 px-6 py-2 font-semibold"
                    >
                        {menu.menuName}
                    </button>
                ))}
            </div>

            <div className="relative w-full min-h-[700px] overflow-hidden pt-20">
                <img
                    src={Bg}
                    alt="bg"
                    className="absolute inset-0 w-full h-full object-cover"
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
                        MENU ITEMS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {menuItems.map((item) => (
    <div key={item._id}>  
        <div className="flex text-white justify-between items-center border-b border-gray-600 pb-2 mb-2">
            <h3 className="text-xl font-semibold">{item.itemName}</h3>
            <span className="text-xl font-bold">${item.price}</span>
        </div>
        <p className="text-gray-300 mb-6">
            {item.description || "Deliciously crafted with premium ingredients!"}
        </p>
    </div>
))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuSection;
