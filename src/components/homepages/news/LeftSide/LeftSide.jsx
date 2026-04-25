import Link from "next/link";

const LeftSide = ({ categories,activeId }) => {
    return (
        <div>
            {/* lg device  */}
            <div className="hidden lg:flex lg:flex-col">
                <h1 className="font-bold text-xl">All Category </h1>
                <ul className="text-center p-2 space-y-5 my-3 text-gray-600">
                    {
                        categories.map(category => <li key={category.category_id}
                            className={`
                                ${activeId === category.category_id && 'bg-gray-300 ' }
                                 font-semibold p-2 rounded-md hover:bg-gray-300  shadow  cursor-pointer`}
                        >
                          <Link href={`/category/${category.category_id}`} className="block">  {category.category_name}</Link>
                        </li>)
                    }
                </ul>
            </div>

            {/* sm device  */}
            <div className=" lg:hidden">
                    <h1 className="font-semibold text-xl text-gray-700">All Category : </h1>
                <label className="select mt-2 ">

                    <select>
                        {/* <option>Personal</option>
                        <option>Business</option> */}
                        {
                             categories.map(category => <li key={category.category_id}>
                                 <Link href={`/category/${category.category_id}`} className="block">  {category.category_name}</Link></li>)
                        }
                    </select>
                </label>


            </div>

        </div>



    );
};

export default LeftSide;