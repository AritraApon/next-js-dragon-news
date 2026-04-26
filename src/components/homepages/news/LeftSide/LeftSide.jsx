import Link from "next/link";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const LeftSide = ({ categories, activeId }) => {
    return (
        <div>
            {/* lg device  */}
            <div className="hidden lg:flex lg:flex-col">
                <h1 className="font-bold text-xl">All Category </h1>
                <ul className="text-center p-2 space-y-5 my-3 text-gray-600">
                    {
                        categories.map(category => <li key={category.category_id}
                            className={`
                                ${activeId === category.category_id && 'btn btn-soft btn-success w-full '}
                                 font-semibold p-2 rounded-md hover:bg-gray-300  shadow  cursor-pointer`}
                        >
                            <Link href={`/category/${category.category_id}`} className="block">  {category.category_name}</Link>
                        </li>)
                    }
                </ul>
            </div>

            {/* sm device  */}
            <div className=" lg:hidden">
                <h1 className="font-semibold mb-3 text-xl text-gray-700">All Category : </h1>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn btn-primary flex items-center text-sm m-1">

                         {
                        categories.map(category =>
                             <div key={category.category_id}>
                             <BiSolidCategory/>Select {category.category_name} <IoIosArrowDropdownCircle />
                         </div>
                         ) }



                        </div>



                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {
                        categories.map(category => <li key={category.category_id}

                        >
                            <Link href={`/category/${category.category_id}`} className="block">  {category.category_name}</Link>
                        </li>)
                    }
                    </ul>
                </div>


            </div>

        </div>



    );
};

export default LeftSide;