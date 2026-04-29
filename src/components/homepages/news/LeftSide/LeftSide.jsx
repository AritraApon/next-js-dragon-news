'use client'

import Link from "next/link";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const LeftSide = ({ categories, activeId }) => {
    return (
        <div>
            {/* lg device  */}
            <div className="hidden lg:flex lg:flex-col ">
                <h1 className="font-bold text-xl">All <span className="text-orange-400">Category</span> </h1>
                <ul className="text-center p-2 space-y-5 my-3 text-gray-600">
                    {
                        categories.map(category => <li key={category.category_id}
                            className={`
                                ${activeId === category.category_id && 'btn btn-soft bg-orange-400 w-full '}
                                 font-semibold p-2 rounded-md hover:bg-gray-300  shadow  cursor-pointer`}
                        >
                            <Link href={`/category/${category.category_id}`} className="block">  {category.category_name}</Link>
                        </li>)
                    }
                </ul>
            </div>

    {/* sm device */}
{/* Mobile/SM Device - Grid Layout */}
<div className="lg:hidden mb-8 px-2">
    <h1 className="font-bold mb-4 text-gray-800 text-lg">All <span className="text-orange-400">Category</span></h1>

    <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
            <Link
                key={category.category_id}
                href={`/category/${category.category_id}`}
                className={`   
                    flex items-center justify-center text-center p-3 bg-stone-50 border border-stone-200 rounded-xl shadow-sm hover:border-orange-400 transition-all active:scale-95`}
            >
                    <span className={`
                         ${activeId === category.category_id ? ' text-orange-400' : 'text-stone-700 '}
                        text-sm font-semibold `}>
                    {category.category_name}
                </span>
            </Link>
        ))}
    </div>
</div>






            </div>





    );
};

export default LeftSide;